import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-led-business.jpg";

const HorizonSection = () => {
  return (
    <section className="py-32 bg-gmv-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Texto GMvision com imagens em uma linha */}
          <div className="relative mb-16 text-center">
            <h2 className="text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[14rem] font-black leading-none select-none tracking-tight" style={{ fontFamily: 'Pavelt, sans-serif' }}>
              <span 
                className="inline-block bg-clip-text text-transparent bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: `url(${heroImage})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                GMvision
              </span>
            </h2>
          </div>

          {/* Botão estilo da imagem - com seta para a direita e imagem cobrindo todo o botão */}
          <div className="flex justify-start">
            <div 
              className="relative flex items-center justify-end w-40 h-12 rounded-full bg-cover bg-center shadow-lg border border-gray-200 group cursor-pointer transition-all duration-300 hover:scale-105 overflow-hidden pr-4"
              style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Overlay escuro para destacar a seta */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
              
              {/* Seta para a direita alinhada à direita */}
              <ArrowRight className="w-6 h-6 text-white relative z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizonSection;
