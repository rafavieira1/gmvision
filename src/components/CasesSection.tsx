import { useEffect, useState, useCallback, useRef } from "react";
import { Dumbbell, Heart, Building, Users, LucideIcon } from "lucide-react";
import gymImage from "/academia.avif";
import clinicImage from "/clinica.avif";
import elevatorImage from "/salao.avif";
import heroImage from "/bar.avif";

// Constants
const SCROLL_THROTTLE_DELAY = 16; // ~60fps
const ANIMATION_DURATION = {
  fade: 1000,
  fadeDelayed: 1200,
  image: 2000,
  feature: 700,
  transition: 700
};

const ANIMATION_DELAYS = {
  category: 200,
  title: 300,
  description: 500,
  features: 700,
  featureItem: 100,
  image: 300
};

// Types
interface EstablishmentType {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: LucideIcon;
  metrics: string;
}

interface AnimationStyle {
  animation: string;
}

// CSS Styles organized by animation type
const CSS_ANIMATIONS = {
  fadeInUp: `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translate3d(0, 30px, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  `,
  fadeInRight: `
    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translate3d(30px, 0, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  `,
  fadeInLeft: `
    @keyframes fadeInLeft {
      from {
        opacity: 0;
        transform: translate3d(-30px, 0, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  `,
  imageTransition: `
    @keyframes imageTransition {
      0% {
        opacity: 0;
        transform: scale(1.1) rotate(0.5deg);
        filter: blur(4px) brightness(0.8);
      }
      50% {
        opacity: 0.5;
        transform: scale(1.05) rotate(0deg);
        filter: blur(2px) brightness(0.9);
      }
      100% {
        opacity: 1;
        transform: scale(1.02) rotate(0deg);
        filter: blur(0px) brightness(1.1);
      }
    }
  `
};

const CUSTOM_STYLES = `
  ${Object.values(CSS_ANIMATIONS).join('\n')}
  
  .image-smooth-transition {
    animation: imageTransition ${ANIMATION_DURATION.image}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    will-change: transform, opacity, filter;
  }
  
  /* Optimize animations for better performance */
  .animated-element {
    will-change: transform, opacity;
  }
  
  .animated-element.animation-complete {
    will-change: auto;
  }
`;

// Animation helper functions
const createAnimationStyle = (
  animationType: keyof typeof CSS_ANIMATIONS,
  duration: number = ANIMATION_DURATION.fade,
  delay: number = 0
): AnimationStyle => ({
  animation: `${animationType} ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms both`
});

// Establishments data
const ESTABLISHMENTS_DATA: EstablishmentType[] = [
  {
    id: "academias",
    number: "01",
    category: "FITNESS & WELLNESS",
    title: "Academias e Centros de Treinamento",
    description: "Alcance o público fitness com campanhas direcionadas de suplementos, equipamentos e motivação durante os treinos. Alto tempo de exposição com audiência engajada.",
    features: [
      "Campanhas de suplementos e nutrição esportiva",
      "Promoções de equipamentos fitness",
      "Conteúdo motivacional personalizado",
      "Horários de pico com alta audiência"
    ],
    image: gymImage,
    icon: Dumbbell,
    metrics: "500+ pessoas/dia"
  },
  {
    id: "clinicas", 
    number: "02",
    category: "SAÚDE & BEM-ESTAR",
    title: "Clínicas e Consultórios Médicos",
    description: "Comunique campanhas de prevenção e produtos de saúde para um público receptivo em salas de espera. Ambiente ideal para conscientização e educação em saúde.",
    features: [
      "Campanhas de prevenção e conscientização",
      "Promoção de produtos farmacêuticos",
      "Informações sobre tratamentos e exames",
      "Público altamente receptivo"
    ],
    image: clinicImage,
    icon: Heart,
    metrics: "200+ pacientes/dia"
  },
  {
    id: "bares-restaurantes",
    number: "03",
    category: "GASTRONOMIA & LAZER",
    title: "Bares, Restaurantes e Cafeterias",
    description: "Alcance clientes durante momentos de descontração e alimentação. Ambiente ideal para promoções gastronômicas, delivery e entretenimento com alto tempo de permanência.",
    features: [
      "Promoções de delivery e aplicativos",
      "Cardápios e ofertas especiais",
      "Eventos e entretenimento local",
      "Alto tempo de permanência dos clientes"
    ],
    image: heroImage,
    icon: Building,
    metrics: "300+ clientes/dia"
  },
  {
    id: "barbearias-saloes",
    number: "04",
    category: "BELEZA & ESTÉTICA",
    title: "Barbearias e Salões de Beleza",
    description: "Comunique com clientes durante tratamentos de beleza e cuidados pessoais. Público engajado com tempo de permanência ideal para campanhas de produtos de beleza e bem-estar.",
    features: [
      "Produtos de beleza e cuidados pessoais",
      "Promoções de tratamentos estéticos",
      "Conteúdo sobre tendências e moda",
      "Público focado em autocuidado"
    ],
    image: elevatorImage,
    icon: Users,
    metrics: "150+ clientes/dia"
  }
];

const CasesSection = () => {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [sectionProgress, setSectionProgress] = useState<number>(0); // 0-100% progress within current section
  const scrollThrottleRef = useRef<boolean>(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const dimensionsRef = useRef<{ sectionTop: number; sectionHeight: number } | null>(null);

  // Cache dimensions to avoid repeated layout calculations
  const cacheDimensions = useCallback(() => {
    const sectionElement = sectionRef.current || document.getElementById('cases');
    if (sectionElement && !dimensionsRef.current) {
      dimensionsRef.current = {
        sectionTop: sectionElement.offsetTop,
        sectionHeight: sectionElement.offsetHeight
      };
    }
  }, []);

  // Inject CSS styles - optimized to run only once
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = CUSTOM_STYLES;
    styleElement.setAttribute('data-component', 'CasesSection');
    document.head.appendChild(styleElement);
    
    return () => {
      const existingStyle = document.querySelector('style[data-component="CasesSection"]');
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    };
  }, []);

  // Cache dimensions on mount and resize
  useEffect(() => {
    cacheDimensions();
    
    const handleResize = () => {
      dimensionsRef.current = null; // Reset cache on resize
      cacheDimensions();
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [cacheDimensions]);

  // Optimized scroll handler with cached dimensions
  const handleScroll = useCallback(() => {
    if (scrollThrottleRef.current) return;
    
    scrollThrottleRef.current = true;
    requestAnimationFrame(() => {
      // Use cached scroll values to avoid multiple reads
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Use cached dimensions or fallback to calculation
      if (!dimensionsRef.current) {
        cacheDimensions();
      }
      
      if (dimensionsRef.current) {
        const { sectionTop, sectionHeight } = dimensionsRef.current;
        const relativeScroll = scrolled - sectionTop + windowHeight / 2;
        const sectionProgress = relativeScroll / sectionHeight;
        
        if (sectionProgress >= 0 && sectionProgress <= 1) {
          // Calculate which section we're in and progress within that section
          const totalSections = ESTABLISHMENTS_DATA.length;
          const progressPerSection = 1 / totalSections;
          
          // Find current section based on overall progress
          let currentSectionIndex = Math.floor(sectionProgress / progressPerSection);
          
          // Ensure we don't exceed the last section
          currentSectionIndex = Math.min(currentSectionIndex, totalSections - 1);
          
          // Calculate progress within the current section (0-1)
          const sectionStart = currentSectionIndex * progressPerSection;
          const sectionEnd = (currentSectionIndex + 1) * progressPerSection;
          const progressInCurrentSection = (sectionProgress - sectionStart) / (sectionEnd - sectionStart);
          
          // Convert to percentage (0-100) and clamp values
          const progressPercentage = Math.min(Math.max(progressInCurrentSection * 100, 0), 100);
          
          // Update states only when necessary to avoid unnecessary re-renders
          setActiveSection(prev => {
            if (prev !== currentSectionIndex) {
              setSectionProgress(0); // Reset progress when changing sections
              return currentSectionIndex;
            }
            return prev;
          });
          
          // Update progress for current section
          setSectionProgress(progressPercentage);
        }
      }
      
      scrollThrottleRef.current = false;
    });
  }, [cacheDimensions]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const currentEstablishment = ESTABLISHMENTS_DATA[activeSection];

  return (
    <section 
      id="cases" 
      ref={sectionRef} 
      className="min-h-[400vh] lg:min-h-[400vh] relative"
      aria-label="Casos de uso de painéis LED"
    >
      {/* Desktop: Seção fixa com conteúdo que muda */}
      <div 
        className="hidden lg:flex sticky top-0 h-screen items-start lg:items-center justify-center overflow-hidden pt-8 lg:pt-0" 
        style={{backgroundColor: '#f7f7f7'}}
        role="main"
      >
        {/* Conteúdo principal - Desktop */}
        <div className="relative z-10 container mx-auto px-4 lg:px-4 mt-16 lg:mt-0">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Lado esquerdo - Conteúdo */}
              <div className="text-gmv-blue space-y-6 lg:space-y-8 transform transition-all duration-1000 ease-out order-1 lg:order-1">
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex items-center space-x-3 lg:space-x-4 transform transition-all duration-1200 ease-out delay-100">
                    <span 
                      key={`number-${currentEstablishment.number}`}
                      className="text-4xl lg:text-6xl font-bold text-gmv-blue opacity-60 transition-all duration-1000 ease-out transform"
                      style={createAnimationStyle('fadeInUp', ANIMATION_DURATION.fade)}
                      aria-label={`Caso número ${currentEstablishment.number}`}
                    >
                      {currentEstablishment.number}
                    </span>
                    <span 
                      key={`category-${currentEstablishment.category}`}
                      className="text-xs lg:text-sm font-bold italic text-gmv-gray uppercase tracking-wider transition-all duration-1000 ease-out delay-200 transform"
                      style={createAnimationStyle('fadeInRight', ANIMATION_DURATION.fade, ANIMATION_DELAYS.category)}
                    >
                      {currentEstablishment.category}
                    </span>
                  </div>
                  
                  <h2 
                    key={`title-${currentEstablishment.id}`}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gmv-blue transition-all duration-1200 ease-out delay-300 transform"
                    style={createAnimationStyle('fadeInUp', ANIMATION_DURATION.fadeDelayed, ANIMATION_DELAYS.title)}
                  >
                    {currentEstablishment.title}
                  </h2>
                </div>

                <p 
                  key={`description-${currentEstablishment.id}`}
                  className="text-base lg:text-xl text-gmv-gray leading-relaxed max-w-2xl transition-all duration-1000 ease-out delay-500 transform"
                  style={createAnimationStyle('fadeInUp', ANIMATION_DURATION.fade, ANIMATION_DELAYS.description)}
                >
                  {currentEstablishment.description}
                </p>

                {/* Features */}
                <div 
                  key={`features-${currentEstablishment.id}`}
                  className="space-y-3 lg:space-y-3 transition-all duration-1000 ease-out delay-700"
                  style={createAnimationStyle('fadeInUp', ANIMATION_DURATION.fade, ANIMATION_DELAYS.features)}
                  role="list"
                  aria-label="Características do estabelecimento"
                >
                  {currentEstablishment.features.map((feature, index) => (
                    <div 
                      key={`${currentEstablishment.id}-feature-${index}`}
                      className="flex items-start space-x-3 transform transition-all duration-700 ease-out"
                      style={createAnimationStyle('fadeInLeft', ANIMATION_DURATION.feature, ANIMATION_DELAYS.features + ANIMATION_DELAYS.featureItem + (index * ANIMATION_DELAYS.featureItem))}
                      role="listitem"
                    >
                      <div 
                        className="w-2 h-2 rounded-full bg-gmv-lime mt-2 flex-shrink-0 transform transition-all duration-500 hover:scale-150" 
                        aria-hidden="true"
                      />
                      <span className="text-sm lg:text-base text-gmv-gray">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lado direito - Visual/Imagem destacada */}
              <div className="relative transform transition-all duration-1000 ease-out delay-300 order-2 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="relative w-full overflow-hidden h-[280px] lg:h-[500px]" style={{ aspectRatio: '9/16' }}>
                    <img 
                      key={`main-image-${currentEstablishment.id}`}
                      src={currentEstablishment.image}
                      alt={`Exemplo de painel LED em ${currentEstablishment.title.toLowerCase()}`}
                      className="absolute inset-0 w-full h-full object-cover image-smooth-transition"
                    />
                    {/* Overlay sutil */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent transition-all duration-2000 ease-out" 
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Indicador de progresso - Desktop */}
                <div 
                  className="absolute -left-2 lg:-left-4 top-1/2 transform -translate-y-1/2"
                  role="tablist"
                  aria-label="Indicadores de progresso dos casos"
                >
                  <div className="space-y-3 lg:space-y-4">
                    {ESTABLISHMENTS_DATA.map((establishment, index) => {
                      const isActive = index === activeSection;
                      const progressPercentage = isActive ? sectionProgress : 0;
                      
                      return (
                        <div 
                          key={`progress-${establishment.id}`}
                          className={`w-1 rounded-full transition-all duration-700 ease-out transform cursor-pointer relative overflow-hidden ${
                            isActive 
                              ? 'shadow-lg shadow-gmv-gray/50 h-12 lg:h-20 scale-110' 
                              : 'h-10 lg:h-16 hover:bg-gmv-gray/50'
                          }`}
                          style={{
                            transitionDelay: `${index * 100}ms`,
                            transition: `all ${ANIMATION_DURATION.transition}ms cubic-bezier(0.4, 0, 0.2, 1)`,
                            backgroundColor: !isActive ? 'rgba(156, 163, 175, 0.3)' : 'transparent' // cinza para barras inativas
                          }}
                          role="tab"
                          tabIndex={0}
                          aria-selected={isActive}
                          aria-label={`Caso ${establishment.number}: ${establishment.category}`}
                          onClick={() => setActiveSection(index)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setActiveSection(index);
                            }
                          }}
                        >
                          {isActive && (
                            <>
                              {/* Fundo cinza */}
                              <div 
                                className="absolute inset-0 bg-gmv-gray/30 rounded-full"
                                aria-hidden="true"
                              />
                              {/* Preenchimento verde progressivo */}
                              <div 
                                className="absolute top-0 left-0 right-0 bg-gmv-lime rounded-full transition-all duration-300 ease-out"
                                style={{
                                  height: `${progressPercentage}%`,
                                  transformOrigin: 'top'
                                }}
                                aria-hidden="true"
                              />
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Seções estáticas uma embaixo da outra */}
      <div className="lg:hidden" style={{backgroundColor: '#f7f7f7'}}>
        {ESTABLISHMENTS_DATA.map((establishment, index) => (
          <div 
            key={`mobile-${establishment.id}`}
            className="py-12 px-4"
          >
            <div className="container mx-auto max-w-4xl">
              <div className="space-y-8">
                
                {/* Cabeçalho */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl font-bold text-gmv-blue opacity-60">
                      {establishment.number}
                    </span>
                    <span className="text-xs font-bold italic text-gmv-gray uppercase tracking-wider">
                      {establishment.category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-gmv-blue">
                    {establishment.title}
                  </h2>
                </div>

                {/* Imagem */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="relative w-full h-[280px]">
                    <img 
                      src={establishment.image}
                      alt={`Exemplo de painel LED em ${establishment.title.toLowerCase()}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Descrição */}
                <p className="text-base text-gmv-gray leading-relaxed">
                  {establishment.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {establishment.features.map((feature, featureIndex) => (
                    <div 
                      key={`${establishment.id}-mobile-feature-${featureIndex}`}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-gmv-lime mt-2 flex-shrink-0" />
                      <span className="text-sm text-gmv-gray">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Divisor (exceto no último item) */}
                {index < ESTABLISHMENTS_DATA.length - 1 && (
                  <div className="border-b border-gmv-gray/20 pt-8" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CasesSection;
