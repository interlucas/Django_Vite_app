import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Star } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Carlos Silva",
      role: "Cirurgião-Dentista - CRO-SP 12345",
      specialty: "Implantodontia e Prótese",
      experience: "15 anos de experiência",
      education: "USP - Faculdade de Odontologia",
      description: "Especialista em implantes dentários e reabilitação oral com mais de 1000 implantes realizados.",
    },
    {
      id: 2,
      name: "Dra. Ana Paula Santos",
      role: "Cirurgiã-Dentista - CRO-SP 67890",
      specialty: "Ortodontia e Harmonização Facial",
      experience: "12 anos de experiência",
      education: "UNESP - Especialização em Ortodontia",
      description: "Especialista em ortodontia invisível e harmonização orofacial, transformando sorrisos.",
    },
    {
      id: 3,
      name: "Dr. Rafael Costa",
      role: "Cirurgião-Dentista - CRO-SP 11111",
      specialty: "Endodontia e Clínica Geral",
      experience: "10 anos de experiência",
      education: "PUC-SP - Mestrado em Endodontia",
      description: "Especialista em tratamentos endodônticos sem dor, utilizando tecnologia de ponta.",
    },
  ];

  return (
    <section id="equipe" className="py-20 bg-medical-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Nossa Equipe
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-medical-dark mb-6">
            Profissionais{" "}
            <span className="text-primary">Especializados e Qualificados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nossa equipe é formada por profissionais altamente qualificados,
            com especialização e anos de experiência em suas respectivas áreas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="group hover:shadow-2xl transition-all duration-300 border-none"
            >
              <CardContent className="p-6">
                {/* Profile Image Placeholder */}
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold text-medical-dark group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground font-medium">
                    {member.role}
                  </p>
                  
                  <div className="flex justify-center">
                    <Badge variant="outline" className="text-primary border-primary">
                      {member.specialty}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>

                  {/* Credentials */}
                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <span>{member.education}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Award className="h-4 w-4 text-primary" />
                      <span>{member.experience}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
          <div className="flex justify-center mb-4">
            <Star className="h-12 w-12 text-gold" />
          </div>
          <h3 className="text-2xl font-bold text-medical-dark mb-4">
            Escolha o Profissional Ideal para Você
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nossa equipe está pronta para oferecer o melhor tratamento
            personalizado para suas necessidades. Agende uma consulta e
            conheça nossos especialistas.
          </p>
          <a
            href="#contato"
            className="inline-block bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;