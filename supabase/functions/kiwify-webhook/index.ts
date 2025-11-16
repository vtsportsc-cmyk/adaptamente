import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface KiwifyWebhookPayload {
  order_id: string;
  order_ref?: string;
  product_name: string;
  Customer?: {
    email: string;
    full_name?: string;
    mobile?: string;
  };
  order_status: string;
  amount?: number;
  approved_date?: string;
  payment_method?: string;
  [key: string]: any;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Kiwify webhook received');
    
    const payload: KiwifyWebhookPayload = await req.json();
    console.log('Webhook payload:', JSON.stringify(payload, null, 2));

    // Validate required fields
    if (!payload.order_id || !payload.product_name) {
      console.error('Missing required fields:', payload);
      return new Response(
        JSON.stringify({ error: 'Missing required fields: order_id or product_name' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Only process approved orders
    if (payload.order_status !== 'paid' && payload.order_status !== 'approved') {
      console.log('Order not approved yet, status:', payload.order_status);
      return new Response(
        JSON.stringify({ message: 'Order status not approved', status: payload.order_status }),
        { 
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Prepare order data
    const orderData = {
      order_id: payload.order_id || payload.order_ref || '',
      product_name: payload.product_name,
      customer_email: payload.Customer?.email || 'no-email@example.com',
      customer_name: payload.Customer?.full_name || 'Cliente Kiwify',
      customer_phone: payload.Customer?.mobile || null,
      amount: payload.amount || 0,
      status: 'approved',
      payment_method: payload.payment_method || null,
      kiwify_data: payload,
    };

    console.log('Inserting order:', orderData);

    // Insert or update order in database
    const { data, error } = await supabase
      .from('orders')
      .upsert(orderData, { 
        onConflict: 'order_id',
        ignoreDuplicates: false 
      })
      .select();

    if (error) {
      console.error('Database error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to save order', details: error.message }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    console.log('Order saved successfully:', data);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Order processed successfully',
        order: data 
      }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Error processing webhook:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error', 
        details: errorMessage 
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});