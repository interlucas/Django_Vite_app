import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smile,
  Shield,
  Sparkles,
  Zap,
  Eye,
  Baby,
  User,
  Crown,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Odontologia Preventiva",
      description: "Limpeza, fluorização e orientações para manter sua saúde bucal em dia.",
      color: "from-primary/10 to-primary/5",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-accent" />,
      title: "Clareamento Dental",
      description: "Técnicas modernas para um sorriso mais branco e radiante.",
      color: "from-accent/10 to-accent/5",
    },
    {
      icon: <Crown className="h-8 w-8 text-gold" />,
      title: "Próteses e Implantes",
      description: "Reabilitação oral com implantes e próteses de alta qualidade.",
      color: "from-gold/10 to-gold/5",
    },
    {
      icon: <Smile className="h-8 w-8 text-success" />,
      title: "Ortodontia",
      description: "Aparelhos ortodônticos para alinhamento e correção dental.",
      color: "from-success/10 to-success/5",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Endodontia",
      description: "Tratamento de canal com tecnologia de ponta e menos dor.",
      color: "from-primary/10 to-primary/5",
    },
    {
      icon: <Eye className="h-8 w-8 text-accent" />,
      title: "Odontologia Estética",
      description: "Harmonização do sorriso com lentes de contato dental e facetas.",
      color: "from-accent/10 to-accent/5",
    },
    {
      icon: <Baby className="h-8 w-8 text-gold" />,
      title: "Odontopediatria",
      description: "Cuidados especializados para a saúde bucal infantil.",
      color: "from-gold/10 to-gold/5",
    },
    {
      icon: <User className="h-8 w-8 text-success" />,
      title: "Periodontia",
      description: "Tratamento de doenças da gengiva e estruturas de suporte dos dentes.",
      color: "from-success/10 to-success/5",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Nossos Serviços
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-medical-dark mb-6">
            Tratamentos Completos para{" "}
            <span className="text-primary">Toda a Família</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma ampla gama de serviços odontológicos com tecnologia
            avançada e profissionais especializados para cuidar do seu sorriso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-none"
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-medical-dark group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-medical-dark mb-4">
            Não encontrou o que procurava?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Temos outros tratamentos disponíveis. Entre em contato conosco para
            uma consulta personalizada e descobra a melhor solução para o seu caso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contato"
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Agendar Consulta
            </a>
            <a
              href="tel:+5511999999999"
              className="bg-accent hover:bg-accent-hover text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Ligar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;