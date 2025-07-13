import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  MessageCircle,
} from "lucide-react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Endereço",
      content: "Rua Exemplo, 123 - Vila Mariana",
      subcontent: "São Paulo, SP - CEP: 04000-000",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Telefones",
      content: "(11) 99999-9999",
      subcontent: "(11) 3333-4444",
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "E-mail",
      content: "contato@dentclean.com.br",
      subcontent: "agendamento@dentclean.com.br",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Horário de Funcionamento",
      content: "Segunda a Sexta: 8h às 18h",
      subcontent: "Sábado: 8h às 14h",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-medical-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Entre em Contato
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-medical-dark mb-6">
            Agende Sua Consulta{" "}
            <span className="text-primary">Hoje Mesmo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para cuidar do seu sorriso. Entre em contato conosco
            e agende sua consulta com nossos especialistas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-medical-dark mb-2">
                          {info.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {info.content}
                        </p>
                        {info.subcontent && (
                          <p className="text-muted-foreground text-sm">
                            {info.subcontent}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="border-none shadow-md bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="text-xl text-medical-dark">
                  Atendimento Rápido
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-success hover:bg-success/90">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
                <Button variant="outline" className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Ligar Agora
                </Button>
                <Button variant="outline" className="w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  Agendamento Online
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="w-full max-w-2xl">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="border-none shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 text-center">
                <h3 className="text-2xl font-bold text-medical-dark mb-4">
                  Nossa Localização
                </h3>
                <p className="text-muted-foreground mb-6">
                  Venha conhecer nossa clínica! Estamos localizados em uma região
                  de fácil acesso, com estacionamento disponível.
                </p>
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <p className="text-lg font-semibold">
                      Rua Exemplo, 123 - Vila Mariana
                    </p>
                    <p>São Paulo, SP</p>
                    <Button className="mt-4 bg-primary hover:bg-primary-hover">
                      Ver no Google Maps
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;