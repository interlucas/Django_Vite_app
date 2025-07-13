import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Clock, Heart } from "lucide-react";
import dentalOfficeModern from "@/assets/dental-office-modern.jpg";

const AboutSection = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      number: "5000+",
      label: "Pacientes Atendidos",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      number: "15+",
      label: "Anos de Experiência",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      number: "98%",
      label: "Satisfação dos Clientes",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      number: "100%",
      label: "Dedicação ao Cuidado",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-medical-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <img
              src={dentalOfficeModern}
              alt="Consultório DentClean - Interior moderno"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Anos de</div>
                <div className="text-sm font-semibold">Experiência</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4">
                Sobre o DentClean
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-medical-dark mb-6">
                Cuidando do Seu Sorriso com{" "}
                <span className="text-primary">Excelência e Dedicação</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              O DentClean é um consultório odontológico moderno e equipado com tecnologia
              de ponta, focado em proporcionar o melhor atendimento em saúde bucal.
              Nossa missão é cuidar do seu sorriso com excelência, humanização e
              responsabilidade.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Com uma equipe altamente qualificada e especializada, oferecemos
              tratamentos completos em odontologia, desde procedimentos preventivos
              até os mais complexos, sempre priorizando o conforto e a segurança
              dos nossos pacientes.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-4 text-center">
                    <div className="flex justify-center mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-medical-dark">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-semibold text-medical-dark mb-3">
                Nossa Missão
              </h3>
              <p className="text-muted-foreground">
                Proporcionar cuidados odontológicos de excelência, combinando
                tecnologia avançada, conhecimento especializado e atendimento
                humanizado para garantir a saúde bucal e o bem-estar dos nossos
                pacientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;