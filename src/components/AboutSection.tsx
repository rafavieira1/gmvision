import { ArrowRight } from "lucide-react";
import { useState } from "react";
import clinicImage from "@/assets/led-panel-clinic.jpg";
import gymImage from "@/assets/led-panel-gym.jpg";
import elevatorImage from "@/assets/led-panel-elevator.jpg";
import heroImage from "@/assets/hero-led-business.jpg";

interface AccordionItemType {
  id: number;
  imageUrl: string;
}

interface AccordionItemProps {
  item: AccordionItemType;
  isActive: boolean;
  onMouseEnter: () => void;
}

// --- Accordion Item Component ---
const AccordionItem = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  return (
    <div
      className={`
        relative h-[550px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[400px]' : 'w-[80px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={`Painel LED ${item.id}`}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => { 
          const target = e.target as HTMLImageElement;
          target.onerror = null; 
          target.src = 'https://placehold.co/300x450/2d3748/ffffff?text=Imagem+Erro'; 
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  );
};

const AboutSection = () => {
  const [showHistory, setShowHistory] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(0);

  // Data for the accordion
  const accordionItems = [
    {
      id: 1,
      imageUrl: clinicImage,
    },
    {
      id: 2,
      imageUrl: gymImage,
    },
    {
      id: 3,
      imageUrl: elevatorImage,
    },
    {
      id: 4,
      imageUrl: heroImage,
    },
  ];

  const handleAccordionItemHover = (index) => {
    setActiveAccordionIndex(index);
  };

  const content = {
    about: {
      label: "QUEM SOMOS",
      title: (
        <>
          O futuro da
          <br />
          <span className="font-normal font-garamond"> publicidade</span>
          <br />
          <span className="font-normal"></span>
        </>
      ),
      description: "A GMvision oferece uma experiência de publicidade digital perfeita que acelera o crescimento dos negócios. Ideal para lançar campanhas, showcases de produtos ou estabelecer presença corporativa, nossa plataforma permite ajustes diretos em layouts e funcionalidades, sem exigir conhecimento técnico.",
      buttonText: "Ver nossa história"
    },
    history: {
      label: "NOSSA HISTÓRIA",
      title: (
        <>
          Construindo um novo
          <span className="font-normal"> futuro</span>
        </>
      ),
      description: "Fundada em 2020, a GMvision nasceu da visão de revolucionar a publicidade digital no Brasil. Começamos com um pequeno time apaixonado por tecnologia e hoje somos líderes em soluções LED inteligentes, presente em mais de 22 estados e impactando milhões de pessoas todos os dias com nossa inovação.",
      buttonText: "Ver sobre nós"
    }
  };

  const toggleContent = () => {
    setIsTransitioning(true);
    
    // Após 150ms (metade da transição), troca o conteúdo
    setTimeout(() => {
      setShowHistory(!showHistory);
      
      // Após mais 150ms, termina a transição
      setTimeout(() => {
        setIsTransitioning(false);
      }, 150);
    }, 150);
  };

  const currentContent = showHistory ? content.history : content.about;

  return (
  <section id="sobre" className="py-32" style={{backgroundColor: '#f7f7f7'}}>
      <div className="container mx-auto px-2">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Accordion à esquerda */}
            <div className="relative">
              <div className="flex items-center justify-center gap-2 overflow-x-auto p-4">
                {accordionItems.map((item, index) => (
                  <AccordionItem
                    key={item.id}
                    item={item}
                    isActive={index === activeAccordionIndex}
                    onMouseEnter={() => handleAccordionItemHover(index)}
                  />
                ))}
              </div>
            </div>

            {/* Conteúdo à direita */}
            <div className="">
              <div className={`transition-all duration-300 ${
                isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}>
                <div className="text-base font-apparel text-gmv-lime uppercase tracking-wider mb-4">
                  {currentContent.label}
                </div>
                
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-light font-halenoir text-gmv-blue leading-tight mb-10">
                  {currentContent.title}
                </h2>
                
                <p className="text-gmv-gray leading-relaxed text-lg mb-10 max-w-2xl text-justify">
                  {currentContent.description}
                </p>
                
                <div className="inline-block">
                  <button 
                    onClick={toggleContent}
                    disabled={isTransitioning}
                    className="inline-flex items-center px-6 py-3 border border-gmv-blue text-gmv-blue rounded-full hover:bg-gmv-blue hover:text-white transition-colors duration-200 disabled:opacity-50"
                  >
                    <span className="text-sm font-medium">{currentContent.buttonText}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
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
