import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Constants
const CTA_DATA = {
  backgroundImage: '/chat.avif',
  title: 'O Futuro da sua marca mais iluminado',
  description: 'Conecte sua marca a estabelecimentos estratégicos através da nossa rede de displays LED inteligentes',
  buttonText: 'Comece Agora',
  buttonLink: '/anunciantes'
} as const;

const STYLES = {
  overlay: 'bg-black/50',
  padding: 'py-16 md:py-24 lg:py-32 xl:py-48',
  backgroundStyle: {
    backgroundImage: `url('${CTA_DATA.backgroundImage}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
} as const;

const CtaSection = () => {
  return (
    <section 
      className={`relative ${STYLES.padding} overflow-hidden`}
      aria-labelledby="cta-heading"
    >
      {/* Background image */}
      <div 
        className="absolute inset-0"
        style={STYLES.backgroundStyle}
        aria-hidden="true"
      />
      
      {/* Dark overlay */}
      <div className={`absolute inset-0 ${STYLES.overlay}`} aria-hidden="true" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 flex items-center justify-center">
        <div className="max-w-6xl mx-auto">
          <div className="text-center px-4 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 
                id="cta-heading"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-halenoir text-gmv-white leading-tight mb-4 lg:mb-6 drop-shadow-lg"
              >
                {CTA_DATA.title}
              </h2>
              
              <p className="text-base lg:text-lg text-gmv-white/90 mb-6 lg:mb-8 leading-relaxed max-w-xl mx-auto drop-shadow-md">
                {CTA_DATA.description}
              </p>
              
              <Link 
                to={CTA_DATA.buttonLink}
                aria-label="Ir para página de anunciantes para começar agora"
              >
                <button 
                  className="inline-flex items-center px-4 lg:px-6 py-2 lg:py-3 border border-gmv-lime text-gmv-blue !bg-gmv-lime rounded-full hover:bg-gmv-lime/90 transition-all duration-300 hover:scale-105 font-medium focus:outline-none focus:ring-2 focus:ring-gmv-lime focus:ring-opacity-50"
                  type="button"
                >
                  <span className="text-xs lg:text-sm font-medium">{CTA_DATA.buttonText}</span>
                  <ArrowRight className="w-3 lg:w-4 h-3 lg:h-4 ml-2" aria-hidden="true" />
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
