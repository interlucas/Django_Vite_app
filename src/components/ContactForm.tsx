import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Phone, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Formulário enviado!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-xl text-medical-dark">
          Agende sua Consulta Online
        </CardTitle>
        <p className="text-muted-foreground text-sm">
          Preencha o formulário abaixo para uma avaliação do seu caso odontológico
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              name="name"
              placeholder="Nome Completo"
              value={formData.name}
              onChange={handleInputChange}
              className="pl-10"
              required
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              name="phone"
              placeholder="(11) 99999-9999"
              value={formData.phone}
              onChange={handleInputChange}
              className="pl-10"
              required
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              name="email"
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleInputChange}
              className="pl-10"
              required
            />
          </div>

          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Textarea
              name="message"
              placeholder="Descreva brevemente seu caso ou dúvida..."
              value={formData.message}
              onChange={handleInputChange}
              className="pl-10 min-h-[100px] resize-none"
              required
            />
          </div>

          <div className="text-xs text-muted-foreground">
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" required />
              <span>
                Eu li e estou ciente das condições de tratamento de meus dados
                pessoais e dou meu consentimento quando aplicável conforme a{" "}
                <span className="text-primary font-medium">
                  Política de Privacidade
                </span>{" "}
                do consultório <strong>DentClean</strong>.
              </span>
            </label>
          </div>

          <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-gold-foreground font-semibold">
            ENVIAR
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;