import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="relative z-50">
      {/* Top contact bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Rua Exemplo, 123 - São Paulo, SP</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Seg-Sex: 8h às 18h | Sáb: 8h às 14h</span>
              </div>
            </div>
            <Button variant="secondary" size="sm">
              Agende sua Consulta
            </Button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-background shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-primary">
                Dent<span className="text-accent">Clean</span>
              </div>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#inicio"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                INÍCIO
              </a>
              <a
                href="#sobre"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                SOBRE
              </a>
              <a
                href="#servicos"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                SERVIÇOS
              </a>
              <a
                href="#equipe"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                EQUIPE
              </a>
              <a
                href="#contato"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                CONTATO
              </a>
              <Button className="bg-accent hover:bg-accent-hover">
                ÁREA DO CLIENTE
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a
                href="#inicio"
                className="block text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                INÍCIO
              </a>
              <a
                href="#sobre"
                className="block text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                SOBRE
              </a>
              <a
                href="#servicos"
                className="block text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                SERVIÇOS
              </a>
              <a
                href="#equipe"
                className="block text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                EQUIPE
              </a>
              <a
                href="#contato"
                className="block text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                CONTATO
              </a>
              <Button className="w-full bg-accent hover:bg-accent-hover">
                ÁREA DO CLIENTE
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;