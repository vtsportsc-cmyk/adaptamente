import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Shield, Download, Zap } from "lucide-react";
import ebookSensorial from "@/assets/ebook-sensorial.png";
import ebookHiperfoco from "@/assets/ebook-hiperfoco.png";
import ebookTempo from "@/assets/ebook-tempo.png";
import ebookLifestyle from "@/assets/ebook-lifestyle.png";
import CountdownTimer from "@/components/CountdownTimer";
import UrgencyBadge from "@/components/UrgencyBadge";

const Index = () => {
  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/F5Uzn6j', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Você se sente sobrecarregado pelo mundo e paralisado pela sua mente?
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
            O Kit de Ferramentas Neurodivergente: 3 guias práticos para gerenciar a sobrecarga sensorial, 
            dominar seu hiperfoco e organizar o tempo do seu jeito.
          </h2>
          
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary">
            Liberte-se do caos e encontre o seu ritmo.
          </h3>
          
          <div className="pt-6 space-y-4">
            <UrgencyBadge variant="discount" />
            
            <div className="space-y-3">
              <Button 
                variant="hero" 
                size="xl"
                onClick={handleCTAClick}
                className="w-full sm:w-auto"
              >
                QUERO O KIT ADAPTAMENTE POR R$ 10,00
              </Button>
              
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Download className="w-4 h-4" />
                <span className="font-medium">Acesso Imediato • Formato Digital</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Compra 100% segura. Acesso imediato ao material completo.
            </p>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground">
            A vida parece uma luta constante contra o seu próprio cérebro?
          </h2>
          
          <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto">
            Se você se identifica com Transtorno do Déficit de Atenção com Hiperatividade (TDAH) ou Autismo, 
            você sabe que o mundo nem sempre foi feito para você.
          </p>

          {/* Lifestyle Image */}
          <div className="max-w-4xl mx-auto">
            <img 
              src={ebookLifestyle} 
              alt="Kit Adaptamente: três ebooks para TDAH e Autismo exibidos em diferentes dispositivos - Manual de Sobrevivência Sensorial, Hiperfoco Produtivo e Gestão de Tempo Não-Linear" 
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          <div className="space-y-6 pt-8">
            <h3 className="text-xl font-semibold text-center text-foreground mb-8">
              Você já sentiu que...
            </h3>
            
            <Card className="p-6 space-y-4 bg-card shadow-sm hover:shadow-md transition-shadow">
              <p className="text-lg leading-relaxed text-foreground">
                💡 Luzes fluorescentes, sons ambientes ou texturas de roupas são um ataque constante aos seus sentidos, 
                drenando sua energia e te deixando exausto no fim do dia?
              </p>
            </Card>

            <Card className="p-6 space-y-4 bg-card shadow-sm hover:shadow-md transition-shadow">
              <p className="text-lg leading-relaxed text-foreground">
                📝 Tarefas se acumulam, você tenta se organizar com agendas e apps, mas a "cegueira temporal" e a 
                paralisia te impedem de começar (ou terminar) o que precisa ser feito?
              </p>
            </Card>

            <Card className="p-6 space-y-4 bg-card shadow-sm hover:shadow-md transition-shadow">
              <p className="text-lg leading-relaxed text-foreground">
                🧠 Quando você finalmente consegue focar, é como um raio: intenso, mas muitas vezes no que não importa, 
                "perdendo" horas em distrações e ignorando o que é urgente?
              </p>
            </Card>
          </div>

          <div className="text-center space-y-4 pt-8">
            <p className="text-lg text-muted-foreground">
              E talvez, o mais doloroso: você já ouviu que precisa ser "mais normal", "ter mais força de vontade" 
              ou que é apenas "preguiçoso"?
            </p>
            
            <div className="pt-6 space-y-2">
              <p className="text-xl font-semibold text-foreground">
                A verdade é que você não está exagerando, e não há nada de errado com você.
              </p>
              <p className="text-xl font-semibold text-primary">
                Seu cérebro simplesmente funciona de forma diferente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Chega de lutar. Comece a prosperar com o Kit Adaptamente.
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Imagine ter em mãos um guia prático e validado que não tenta "consertar" você, mas sim te oferece 
              as ferramentas para navegar o mundo do seu jeito.
            </p>
            
            <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
              O Kit de Ferramentas Adaptamente é um combo de 3 ebooks diretos ao ponto, sem enrolação e cheios de 
              estratégias acionáveis, criados especificamente para a mente neurodivergente.
            </p>
          </div>

          <div className="pt-8">
            <h3 className="text-2xl font-semibold text-center text-foreground mb-12">
              O que você recebe no seu Kit:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <Card className="p-4 sm:p-6 text-center bg-card shadow-sm hover:shadow-lg transition-all">
                <img 
                  src={ebookSensorial} 
                  alt="Capa do ebook Manual de Sobrevivência Sensorial - guia prático para gerenciar sobrecarga sensorial em pessoas com TDAH e Autismo" 
                  className="w-full h-auto rounded-lg mb-6"
                />
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  O Manual de Sobrevivência Sensorial
                </h4>
              </Card>

              <Card className="p-4 sm:p-6 text-center bg-card shadow-sm hover:shadow-lg transition-all">
                <img 
                  src={ebookHiperfoco} 
                  alt="Capa do ebook Hiperfoco Produtivo - estratégias para direcionar e usar o hiperfoco em pessoas com TDAH e Autismo" 
                  className="w-full h-auto rounded-lg mb-6"
                />
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Hiperfoco Produtivo
                </h4>
              </Card>

              <Card className="p-4 sm:p-6 text-center bg-card shadow-sm hover:shadow-lg transition-all">
                <img 
                  src={ebookTempo} 
                  alt="Capa do ebook Gestão de Tempo Não-Linear - método de organização e produtividade para TDAH e Autismo" 
                  className="w-full h-auto rounded-lg mb-6"
                />
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Gestão de Tempo Não-Linear
                </h4>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Ebook 1 */}
            <Card className="p-6 sm:p-8 space-y-6 bg-card shadow-md">
              <img 
                src={ebookSensorial} 
                alt="Manual de Sobrevivência Sensorial - técnicas e ferramentas para reduzir sobrecarga sensorial no TDAH e Autismo" 
                className="w-full h-auto rounded-lg"
              />
              <h3 className="text-2xl font-bold text-foreground">
                O Manual de Sobrevivência Sensorial
              </h3>
              <p className="text-muted-foreground">
                Pare de ser bombardeado pelos seus sentidos. Este guia te ensina a:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Criar seu "Kit de Primeiros Socorros" sensorial para emergências.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Reduzir a sobrecarga visual e auditiva no dia a dia.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Adaptar roupas e ambientes para evitar desconforto.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Comunicar suas necessidades sensoriais de forma clara e sem culpa.</span>
                </li>
              </ul>
              <p className="font-semibold text-foreground pt-4">
                O resultado: Mais calma, menos crises e uma bateria social que dura mais tempo.
              </p>
            </Card>

            {/* Ebook 2 */}
            <Card className="p-6 sm:p-8 space-y-6 bg-card shadow-md">
              <img 
                src={ebookHiperfoco} 
                alt="Hiperfoco Produtivo - como transformar o hiperfoco em superpoder para pessoas com TDAH e Autismo" 
                className="w-full h-auto rounded-lg"
              />
              <h3 className="text-2xl font-bold text-foreground">
                Hiperfoco Produtivo
              </h3>
              <p className="text-muted-foreground">
                Transforme sua "distração" em seu maior superpoder. Você vai aprender a:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Direcionar seu hiperfoco para tarefas que realmente importam.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">"Enganar" seu cérebro para começar tarefas chatas e complexas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Usar seus Interesses Especiais para alavancar sua carreira.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Sair do hiperfoco de forma saudável, sem a exaustão da "ressaca".</span>
                </li>
              </ul>
              <p className="font-semibold text-foreground pt-4">
                O resultado: Foco intencional, produtividade real e menos tempo "perdido".
              </p>
            </Card>

            {/* Ebook 3 */}
            <Card className="p-6 sm:p-8 space-y-6 bg-card shadow-md">
              <img 
                src={ebookTempo} 
                alt="Gestão de Tempo Não-Linear - sistema de organização adaptado para cérebros neurodivergentes com TDAH e Autismo" 
                className="w-full h-auto rounded-lg"
              />
              <h3 className="text-2xl font-bold text-foreground">
                Gestão de Tempo Não-Linear
              </h3>
              <p className="text-muted-foreground">
                Abandone agendas rígidas e encontre o SEU ritmo. Descubra como:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Superar a "cegueira temporal" com ferramentas visuais e intuitivas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Usar o método dos "Blocos de Energia" para planejar seu dia.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Vencer a paralisia da tarefa com "Sprints de Pânico Controlado" e gamificação.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Criar um sistema de organização que realmente funciona para sua mente.</span>
                </li>
              </ul>
              <p className="font-semibold text-foreground pt-4">
                O resultado: Menos procrastinação, mais entregas e o fim da culpa.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground">
            O que dizem quem já está usando o Kit Adaptamente
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Card className="p-6 sm:p-8 space-y-4 bg-card shadow-md">
              <div className="text-4xl text-primary">"</div>
              <p className="text-lg text-foreground leading-relaxed">
                Finalmente encontrei estratégias que funcionam para o meu cérebro! O guia de gestão de tempo 
                me ajudou a sair da paralisia e começar a entregar projetos sem aquela culpa constante.
              </p>
              <div className="pt-4">
                <p className="font-semibold text-foreground">Marina Silva</p>
                <p className="text-sm text-muted-foreground">Designer com TDAH, 28 anos</p>
              </div>
            </Card>

            <Card className="p-6 sm:p-8 space-y-4 bg-card shadow-md">
              <div className="text-4xl text-primary">"</div>
              <p className="text-lg text-foreground leading-relaxed">
                O Manual de Sobrevivência Sensorial mudou minha vida. Agora eu sei como criar meu 'kit de emergência' 
                e não me sinto mais exausto só de sair de casa. É libertador!
              </p>
              <div className="pt-4">
                <p className="font-semibold text-foreground">Rafael Costa</p>
                <p className="text-sm text-muted-foreground">Desenvolvedor autista, 32 anos</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground">
            Este Kit de Ferramentas Adaptamente é para você se...
          </h2>
          
          <div className="space-y-6">
            <Card className="p-6 bg-card shadow-sm">
              <p className="text-lg text-foreground leading-relaxed">
                ✓ Você se identifica com o TDAH e/ou Autismo, diagnosticado ou não.
              </p>
            </Card>
            
            <Card className="p-6 bg-card shadow-sm">
              <p className="text-lg text-foreground leading-relaxed">
                ✓ Você se sente sobrecarregado e exausto pela quantidade de estímulos do dia a dia.
              </p>
            </Card>
            
            <Card className="p-6 bg-card shadow-sm">
              <p className="text-lg text-foreground leading-relaxed">
                ✓ Você está cansado de tentar métodos de produtividade que nunca funcionam para você.
              </p>
            </Card>
            
            <Card className="p-6 bg-card shadow-sm">
              <p className="text-lg text-foreground leading-relaxed">
                ✓ Você quer transformar o que antes era visto como "dificuldade" em suas maiores forças.
              </p>
            </Card>
            
            <Card className="p-6 bg-card shadow-sm">
              <p className="text-lg text-foreground leading-relaxed">
                ✓ Você deseja ter ferramentas práticas e validadas para viver com mais calma, foco e controle.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Tenha o controle de volta. Por uma oferta imperdível.
          </h2>
          
          <CountdownTimer targetHours={24} />
          
          <div className="space-y-4 text-lg">
            <p className="text-muted-foreground">
              Cada ebook foi cuidadosamente criado para ser um guia completo em sua área. 
              Adquiridos separadamente, o investimento seria:
            </p>
            
            <div className="space-y-2 py-4">
              <p className="text-foreground">Manual de Sobrevivência Sensorial: R$ 29,90</p>
              <p className="text-foreground">Hiperfoco Produtivo: R$ 29,90</p>
              <p className="text-foreground">Gestão de Tempo Não-Linear: R$ 29,90</p>
            </div>
            
            <p className="text-2xl text-muted-foreground">
              Valor total dos 3 guias: <span className="line-through">R$ 89,70</span>
            </p>
          </div>
          
          <Card className="p-6 sm:p-8 md:p-12 bg-primary/5 border-2 border-primary shadow-xl">
            <div className="space-y-6">
              <UrgencyBadge remainingSpots={7} />
              
              <p className="text-sm uppercase tracking-wider text-primary font-semibold">
                Oferta Especial de Lançamento
              </p>
              <div className="bg-primary text-primary-foreground py-6 px-8 rounded-lg">
                <p className="text-6xl sm:text-7xl font-black">
                  R$ 10,00
                </p>
              </div>
              <p className="text-lg text-muted-foreground">
                Acesso vitalício aos 3 ebooks completos
              </p>
              <Button 
                variant="hero" 
                size="xl"
                onClick={handleCTAClick}
                className="w-full sm:w-auto mt-6"
              >
                QUERO O KIT ADAPTAMENTE POR R$ 10,00
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground">
            Seu investimento é 100% seguro.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <Card className="p-6 sm:p-8 text-center space-y-4 bg-card shadow-sm">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Garantia Incondicional de 7 Dias
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Se em até 7 dias você sentir que o Kit Adaptamente não é para você, basta nos enviar um e-mail 
                e devolveremos 100% do seu dinheiro. Sem perguntas, sem complicação.
              </p>
            </Card>
            
              <Card className="p-6 sm:p-8 text-center space-y-4 bg-card shadow-sm">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Compra 100% Segura
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Suas informações são protegidas por criptografia de ponta. Compre com tranquilidade e segurança.
              </p>
            </Card>
            
            <Card className="p-6 sm:p-8 text-center space-y-4 bg-card shadow-sm">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Acesso Imediato
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Após a confirmação do pagamento, você recebe acesso instantâneo aos 3 ebooks em formato digital 
                para começar a usar as ferramentas hoje mesmo.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Pare de lutar contra o seu cérebro. Comece a construir a vida que você merece.
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Clique no botão abaixo e transforme sua rotina com o Kit Adaptamente.
          </p>
          
          <Button 
            variant="hero" 
            size="xl"
            onClick={handleCTAClick}
            className="w-full sm:w-auto"
          >
            QUERO O KIT ADAPTAMENTE POR R$ 47,90
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
