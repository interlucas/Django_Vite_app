import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-medical-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-3xl font-bold">
              Dent<span className="text-gold">Clean</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Consultório odontológico especializado em saúde bucal completa,
              oferecendo tratamentos modernos com tecnologia de ponta e
              atendimento humanizado.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-success transition-colors cursor-pointer">
                <MessageCircle className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gold">Nossos Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-gold transition-colors cursor-pointer">
                Odontologia Preventiva
              </li>
              <li className="hover:text-gold transition-colors cursor-pointer">
                Implantes Dentários
              </li>
              <li className="hover:text-gold transition-colors cursor-pointer">
                Ortodontia
              </li>
              <li className="hover:text-gold transition-colors cursor-pointer">
                Clareamento Dental
              </li>
              <li className="hover:text-gold transition-colors cursor-pointer">
                Próteses Dentárias
              </li>
              <li className="hover:text-gold transition-colors cursor-pointer">
                Odontopediatria
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gold">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-gold transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="hover:text-gold transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:text-gold transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#equipe"
                  className="hover:text-gold transition-colors"
                >
                  Equipe
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="hover:text-gold transition-colors"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gold transition-colors"
                >
                  Área do Cliente
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gold">Contato</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p>Rua Exemplo, 123</p>
                  <p>Vila Mariana - São Paulo, SP</p>
                  <p>CEP: 04000-000</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold" />
                <div>
                  <p>(11) 99999-9999</p>
                  <p>(11) 3333-4444</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold" />
                <p>contato@dentclean.com.br</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p>Seg-Sex: 8h às 18h</p>
                  <p>Sábado: 8h às 14h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row gap-4">
            <p>&copy; 2024 DentClean. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gold transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p>Desenvolvido com ❤️ para sua saúde bucal</p>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="w-14 h-14 bg-success rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer group">
          <MessageCircle className="h-7 w-7 text-white group-hover:animate-pulse" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;