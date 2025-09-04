import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
      {/* Imagem de fundo da seção */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/src/assets/hero-led-business.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Conteúdo */}
      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center text-center px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gmv-white leading-tight mb-6 drop-shadow-lg">
                Pronto para revolucionar sua publicidade com tecnologia LED?
              </h2>
              
              <p className="text-lg text-gmv-white/90 mb-8 leading-relaxed max-w-xl mx-auto drop-shadow-md">
                Alcance resultados extraordinários com nossa plataforma de mídia digital inteligente
              </p>
              
              <Link to="/anunciantes">
                <button className="inline-flex items-center px-6 py-3 border border-gmv-lime text-gmv-blue bg-gmv-lime rounded-full hover:bg-gmv-lime/90 transition-colors duration-200">
                  <span className="text-sm font-medium">Comece Agora</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
