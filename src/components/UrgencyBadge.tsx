import { AlertCircle, TrendingDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface UrgencyBadgeProps {
  remainingSpots?: number;
  variant?: "spots" | "discount";
}

const UrgencyBadge = ({ remainingSpots = 7, variant = "spots" }: UrgencyBadgeProps) => {
  if (variant === "discount") {
    return (
      <Badge 
        variant="destructive" 
        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold animate-pulse"
      >
        <TrendingDown className="w-4 h-4" />
        Desconto expira em breve!
      </Badge>
    );
  }

  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-destructive/10 border border-destructive/30 rounded-lg">
      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-destructive">
          Apenas {remainingSpots} vagas restantes
        </span>
        <span className="text-xs text-muted-foreground">
          Garanta o seu kit com desconto agora
        </span>
      </div>
    </div>
  );
};

export default UrgencyBadge;
