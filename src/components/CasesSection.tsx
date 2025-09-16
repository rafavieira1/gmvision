import { useEffect, useState } from "react";
import { Dumbbell, Heart, Building, Users } from "lucide-react";
import gymImage from "@/assets/led-panel-gym.jpg";
import clinicImage from "@/assets/led-panel-clinic.jpg";
import elevatorImage from "@/assets/led-panel-elevator.jpg";
import heroImage from "@/assets/hero-led-business.jpg";

// Adicionar estilos CSS customizados para animações
const customStyles = `
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
  
  .image-smooth-transition {
    animation: imageTransition 2000ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }
`;

const CasesSection = () => {
  const [activeSection, setActiveSection] = useState(0);

  // Injetar estilos CSS customizados
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = customStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const establishments = [
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
      id: "condominios",
      number: "03", 
      category: "RESIDENCIAL & COMERCIAL",
      title: "Condomínios e Edifícios",
      description: "Publicidade local direcionada para moradores em elevadores, lobbies e áreas comuns. Gere receita adicional para o condomínio com campanhas relevantes.",
      features: [
        "Publicidade local e serviços da região",
        "Comunicados importantes do condomínio",
        "Geração de receita passiva",
        "Segmentação por perfil dos moradores"
      ],
      image: elevatorImage,
      icon: Building,
      metrics: "300+ moradores"
    },
    {
      id: "empresas",
      number: "04",
      category: "CORPORATIVO & B2B", 
      title: "Empresas e Escritórios",
      description: "Comunicação estratégica para colaboradores em recepções, refeitórios e salas de reunião. Ideal para campanhas B2B e comunicação corporativa eficiente.",
      features: [
        "Comunicação interna estratégica",
        "Campanhas de RH e benefícios",
        "Publicidade B2B direcionada",
        "Alto alcance entre colaboradores"
      ],
      image: heroImage,
      icon: Users,
      metrics: "1000+ funcionários"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionElement = document.getElementById('cases');
      
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        const relativeScroll = scrolled - sectionTop + windowHeight / 2;
        const sectionProgress = relativeScroll / sectionHeight;
        
        if (sectionProgress >= 0 && sectionProgress <= 1) {
          const newActiveSection = Math.min(
            Math.floor(sectionProgress * establishments.length), 
            establishments.length - 1
          );
          if (newActiveSection !== activeSection) {
            setActiveSection(newActiveSection);
          }
        }
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [activeSection]);

  const currentEstablishment = establishments[activeSection];

  return (
    <section id="cases" className="min-h-[400vh] relative">
      {/* Seção fixa com conteúdo que muda */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden" style={{backgroundColor: '#f7f7f7'}}>
        {/* Conteúdo principal */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Lado esquerdo - Conteúdo */}
              <div className="text-gmv-blue space-y-8 transform transition-all duration-1000 ease-out">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 transform transition-all duration-1200 ease-out delay-100">
                    <span 
                      key={`number-${currentEstablishment.number}`}
                      className="text-6xl font-bold text-gmv-blue opacity-60 transition-all duration-1000 ease-out transform"
                      style={{
                        animation: 'fadeInUp 1000ms cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    >
                      {currentEstablishment.number}
                    </span>
                    <span 
                      key={`category-${currentEstablishment.category}`}
                      className="text-sm font-medium text-gmv-lime uppercase tracking-wider transition-all duration-1000 ease-out delay-200 transform"
                      style={{
                        animation: 'fadeInRight 1000ms cubic-bezier(0.4, 0, 0.2, 1) 200ms both'
                      }}
                    >
                      {currentEstablishment.category}
                    </span>
                  </div>
                  
                  <h2 
                    key={`title-${currentEstablishment.id}`}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gmv-blue transition-all duration-1200 ease-out delay-300 transform"
                    style={{
                      animation: 'fadeInUp 1200ms cubic-bezier(0.4, 0, 0.2, 1) 300ms both'
                    }}
                  >
                    {currentEstablishment.title}
                  </h2>
                </div>

                <p 
                  key={`description-${currentEstablishment.id}`}
                  className="text-xl text-gmv-gray leading-relaxed max-w-2xl transition-all duration-1000 ease-out delay-500 transform"
                  style={{
                    animation: 'fadeInUp 1000ms cubic-bezier(0.4, 0, 0.2, 1) 500ms both'
                  }}
                >
                  {currentEstablishment.description}
                </p>

                {/* Features */}
                <div 
                  key={`features-${currentEstablishment.id}`}
                  className="space-y-3 transition-all duration-1000 ease-out delay-700"
                  style={{
                    animation: 'fadeInUp 1000ms cubic-bezier(0.4, 0, 0.2, 1) 700ms both'
                  }}
                >
                  {currentEstablishment.features.map((feature, index) => (
                    <div 
                      key={`${currentEstablishment.id}-feature-${index}`}
                      className="flex items-start space-x-3 transform transition-all duration-700 ease-out"
                      style={{
                        animation: `fadeInLeft 700ms cubic-bezier(0.4, 0, 0.2, 1) ${800 + index * 100}ms both`
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gmv-lime mt-2 flex-shrink-0 transform transition-all duration-500 hover:scale-150"></div>
                      <span className="text-gmv-gray">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lado direito - Visual/Imagem destacada */}
              <div className="relative transform transition-all duration-1000 ease-out delay-300">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="relative w-full overflow-hidden" style={{ aspectRatio: '9/16', height: '500px' }}>
                    <img 
                      key={`main-image-${currentEstablishment.id}`}
                      src={currentEstablishment.image}
                      alt={currentEstablishment.title}
                      className="absolute inset-0 w-full h-full object-cover image-smooth-transition"
                    />
                    {/* Overlay sutil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent transition-all duration-2000 ease-out"></div>
                  </div>
                </div>

                {/* Indicador de progresso */}
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                  <div className="space-y-4">
                    {establishments.map((_, index) => (
                      <div 
                        key={index}
                        className={`w-1 rounded-full transition-all duration-700 ease-out transform ${
                          index === activeSection 
                            ? 'bg-gmv-lime shadow-lg shadow-gmv-lime/50 h-20 scale-110' 
                            : 'bg-gmv-gray/30 h-16 hover:bg-gmv-gray/50'
                        }`}
                        style={{
                          transitionDelay: `${index * 100}ms`,
                          transition: 'all 700ms cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
