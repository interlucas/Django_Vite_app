import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import happyPatientSmile from "@/assets/happy-patient-smile.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      age: 34,
      treatment: "Implante Dentário",
      rating: 5,
      text: "Excelente atendimento! O Dr. Carlos foi muito atencioso e o resultado do meu implante superou minhas expectativas. Clínica moderna e equipe muito profissional.",
      date: "Dezembro 2023",
    },
    {
      id: 2,
      name: "João Santos",
      age: 28,
      treatment: "Ortodontia Invisível",
      rating: 5,
      text: "Fiz ortodontia com a Dra. Ana Paula e o resultado foi incrível! Atendimento humanizado e tecnologia de ponta. Recomendo muito o DentClean.",
      date: "Janeiro 2024",
    },
    {
      id: 3,
      name: "Carmen Rodriguez",
      age: 45,
      treatment: "Clareamento Dental",
      rating: 5,
      text: "Meu sorriso ficou perfeito após o clareamento! Procedimento rápido, sem dor e resultado duradouro. Equipe muito competente e acolhedora.",
      date: "Novembro 2023",
    },
    {
      id: 4,
      name: "Pedro Oliveira",
      age: 52,
      treatment: "Prótese Fixa",
      rating: 5,
      text: "Depois de anos com problemas dentários, finalmente encontrei a solução no DentClean. Prótese perfeita e atendimento excepcional.",
      date: "Outubro 2023",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-gold fill-gold" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Depoimentos
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-medical-dark mb-6">
            O que Nossos{" "}
            <span className="text-primary">Pacientes Dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A satisfação dos nossos pacientes é nossa maior conquista.
            Veja alguns depoimentos de quem confia no DentClean.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="group hover:shadow-xl transition-all duration-300 border-none relative"
            >
              <CardContent className="p-6">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="h-4 w-4 text-primary-foreground" />
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">{renderStars(testimonial.rating)}</div>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.treatment}
                  </Badge>
                </div>

                <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-medical-dark">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.age} anos • {testimonial.date}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Happy Patient Image Section */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={happyPatientSmile}
              alt="Paciente satisfeita com sorriso perfeito"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-medical-dark">
              Seu Sorriso é Nossa{" "}
              <span className="text-primary">Maior Recompensa</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cada sorriso transformado é uma história de sucesso que nos motiva
              a continuar oferecendo o melhor em odontologia. Nossa dedicação
              em proporcionar tratamentos de excelência se reflete na satisfação
              e confiança dos nossos pacientes.
            </p>
            <div className="bg-gradient-to-r from-success/10 to-primary/10 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-3">
                <div className="text-3xl font-bold text-success">98%</div>
                <div>
                  <div className="font-semibold text-medical-dark">
                    Taxa de Satisfação
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Baseado em mais de 1000 avaliações
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;