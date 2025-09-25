import { ArrowRight } from "lucide-react";
import { useState, useCallback } from "react";
import clinicImage from "/clinica.avif";
import gymImage from "/academia.avif";
import elevatorImage from "/salao.avif";
import heroImage from "/bar.avif";

// Constants
const TRANSITION_DURATION = 300;
const TRANSITION_HALF_DURATION = 150;
const ACCORDION_HEIGHT = {
  mobile: 'h-[250px]',
  tablet: 'md:h-[300px]',
  desktop: 'lg:h-[550px]'
};
const ACCORDION_WIDTH = {
  active: {
    mobile: 'w-[140px]',
    tablet: 'md:w-[180px]',
    desktop: 'lg:w-[400px]'
  },
  inactive: {
    mobile: 'w-[35px]',
    tablet: 'md:w-[45px]',
    desktop: 'lg:w-[80px]'
  }
};

// Types
interface AccordionItemType {
  id: number;
  imageUrl: string;
  altText: string;
}

interface AccordionItemProps {
  item: AccordionItemType;
  isActive: boolean;
  onMouseEnter: () => void;
}

interface ContentSection {
  label: JSX.Element;
  title: JSX.Element;
  description: string;
  buttonText: string;
}

interface ContentData {
  about: ContentSection;
  history: ContentSection;
}

// --- Accordion Item Component ---
const AccordionItem = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = 'https://placehold.co/300x450/2d3748/ffffff?text=Imagem+Erro';
  }, []);

  return (
    <div
      className={`
        relative rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${ACCORDION_HEIGHT.mobile} ${ACCORDION_HEIGHT.tablet} ${ACCORDION_HEIGHT.desktop}
        ${isActive 
          ? `${ACCORDION_WIDTH.active.mobile} ${ACCORDION_WIDTH.active.tablet} ${ACCORDION_WIDTH.active.desktop}` 
          : `${ACCORDION_WIDTH.inactive.mobile} ${ACCORDION_WIDTH.inactive.tablet} ${ACCORDION_WIDTH.inactive.desktop}`
        }
      `}
      onMouseEnter={onMouseEnter}
      role="tab"
      tabIndex={0}
      aria-selected={isActive}
      aria-label={`Ver detalhes do ${item.altText}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onMouseEnter();
        }
      }}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.altText}
        className="absolute inset-0 w-full h-full object-cover"
        onError={handleImageError}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30" aria-hidden="true"></div>
    </div>
  );
};

// Content data
const CONTENT_DATA: ContentData = {
  about: {
    label: <span style={{ color: '#384145', fontWeight: 'normal' }}>QUEM SOMOS</span>,
    title: (
      <>
        Conecte marcas e estabelecimentos
        <br />
      </>
    ),
    description: "A GMvision revoluciona o marketing DOOH criando uma rede de networking que conecta anunciantes e estabelecimentos através de displays inteligentes. Oferecemos renda extra para parceiros, modernização de ambientes e publicidade segmentada para anunciantes, construindo um ecossistema de prosperidade compartilhada.",
    buttonText: "Ver nossa história"
  },
  history: {
    label: <span style={{ color: '#000', fontWeight: 'normal', fontStyle: 'italic' }}>NOSSA HISTÓRIA</span>,
    title: (
      <>
        Iluminando o futuro dos negócios
      </>
    ),
    description: "Nascemos da vontade de revolucionar o marketing através das mídias DOOH. Nossa visão é criar uma nova forma de fazer publicidade que seja inteligente, estratégica e conecte empresas, pessoas e histórias. Construímos uma rede onde cada display instalado gera renda extra para estabelecimentos e oferece publicidade segmentada para anunciantes.",
    buttonText: "Ver sobre nós"
  }
};

// Accordion items data
const ACCORDION_ITEMS: AccordionItemType[] = [
  {
    id: 1,
    imageUrl: clinicImage,
    altText: "Display digital instalado em clínica médica"
  },
  {
    id: 2,
    imageUrl: gymImage,
    altText: "Painel LED instalado em academia"
  },
  {
    id: 3,
    imageUrl: elevatorImage,
    altText: "Display digital instalado em barbearia"
  },
  {
    id: 4,
    imageUrl: heroImage,
    altText: "Painel LED para empresas"
  }
];

const AboutSection = () => {
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [activeAccordionIndex, setActiveAccordionIndex] = useState<number>(0);

  const handleAccordionItemHover = useCallback((index: number) => {
    setActiveAccordionIndex(index);
  }, []);

  const toggleContent = useCallback(() => {
    setIsTransitioning(true);
    
    // Após metade da transição, troca o conteúdo
    setTimeout(() => {
      setShowHistory(prev => !prev);
      
      // Após a outra metade, termina a transição
      setTimeout(() => {
        setIsTransitioning(false);
      }, TRANSITION_HALF_DURATION);
    }, TRANSITION_HALF_DURATION);
  }, []);

  const currentContent = showHistory ? CONTENT_DATA.history : CONTENT_DATA.about;

  return (
    <section id="sobre" className="py-32" style={{backgroundColor: '#f7f7f7'}}>
      <div className="container mx-auto px-4 lg:px-2">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Accordion à esquerda no desktop, embaixo no mobile */}
            <div className="relative order-2 lg:order-1">
              <div 
                className="flex items-center justify-center gap-1 md:gap-2 overflow-x-auto px-4 lg:p-4"
                role="tablist"
                aria-label="Galeria de imagens de painéis LED"
              >
                {ACCORDION_ITEMS.map((item, index) => (
                  <AccordionItem
                    key={item.id}
                    item={item}
                    isActive={index === activeAccordionIndex}
                    onMouseEnter={() => handleAccordionItemHover(index)}
                  />
                ))}
              </div>
            </div>

            {/* Conteúdo à direita no desktop, em cima no mobile */}
            <div className="order-1 lg:order-2">
              <div className={`transition-all duration-${TRANSITION_DURATION} ${
                isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}>
                <div className="text-sm md:text-base mb-4 font-halenoir italic" style={{ color: '#000', textTransform: 'uppercase', WebkitTextStroke: '0' }}>
                  {currentContent.label}
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light font-halenoir text-gmv-blue leading-tight mb-10">
                  {currentContent.title}
                </h2>
                
                <p className="text-gmv-gray leading-relaxed text-base md:text-lg mb-10 max-w-2xl text-justify">
                  {currentContent.description}
                </p>
                
                <div className="inline-block">
                  <button 
                    onClick={toggleContent}
                    disabled={isTransitioning}
                    className="inline-flex items-center px-6 py-3 border border-gmv-blue text-gmv-blue rounded-full hover:bg-gmv-blue hover:text-white transition-all duration-300 hover:scale-105 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-gmv-blue focus:ring-opacity-50"
                    aria-label={`Alternar para ${showHistory ? 'informações sobre a empresa' : 'história da empresa'}`}
                  >
                    <span className="text-sm font-medium">{currentContent.buttonText}</span>
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
