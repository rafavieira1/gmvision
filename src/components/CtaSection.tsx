import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      {/* Imagem de fundo da seção */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/chat.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Conteúdo */}
      <div className="relative container mx-auto px-4 flex items-center justify-center">
        <div className="max-w-6xl mx-auto">
          <div className="text-center px-4 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-halenoir text-gmv-white leading-tight mb-4 lg:mb-6 drop-shadow-lg">
                O Futuro da sua marca mais iluminado
              </h2>
              
              <p className="text-base lg:text-lg text-gmv-white/90 mb-6 lg:mb-8 leading-relaxed max-w-xl mx-auto drop-shadow-md">
                Conecte sua marca a estabelecimentos estratégicos através da nossa rede de displays LED inteligentes
              </p>
              
              <Link to="/anunciantes">
                <button className="inline-flex items-center px-4 lg:px-6 py-2 lg:py-3 border border-gmv-lime text-gmv-blue !bg-gmv-lime rounded-full hover:bg-gmv-lime/90 transition-all duration-300 hover:scale-105 font-medium">
                  <span className="text-xs lg:text-sm font-medium">Comece Agora</span>
                  <ArrowRight className="w-3 lg:w-4 h-3 lg:h-4 ml-2" />
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
