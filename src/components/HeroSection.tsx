import ContactForm from "./ContactForm";
import heroDentalTeam from "@/assets/hero-dental-team.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroDentalTeam})`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-white space-y-6">
            {/* Logo */}
            <div className="mb-8">
              <div className="text-4xl lg:text-6xl font-bold mb-2">
                DENT<span className="text-gold">CLEAN</span>
              </div>
              <div className="text-lg text-gold font-light tracking-wider">
                CONSULTÓRIO ODONTOLÓGICO
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
              ESPECIALIZADO EM{" "}
              <span className="text-gold">SAÚDE BUCAL COMPLETA</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
              Cuidamos do seu sorriso com tecnologia avançada e tratamento humanizado
            </p>

            {/* Features List */}
            <div className="space-y-3 text-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>Equipamentos de última geração</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>Profissionais especializados e qualificados</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>Ambiente confortável e seguro</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>Atendimento personalizado</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-white font-bold">f</span>
              </div>
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-white font-bold">ig</span>
              </div>
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-white font-bold">wa</span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex justify-center lg:justify-end">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;