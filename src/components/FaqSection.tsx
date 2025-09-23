import { useState, useCallback } from "react";
import { Plus, Minus } from "lucide-react";

// Types
interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: 'estabelecimentos' | 'anunciantes';
}

// Constants
const FAQ_DATA: FaqItem[] = [
  {
    id: 1,
    question: "O que meu estabelecimento ganha com essa parceria?",
    answer: "Você ganha uma renda extra comissionada sobre os anúncios exibidos em sua tela e ainda moderniza o ambiente com displays de alta qualidade.",
    category: "estabelecimentos"
  },
  {
    id: 2,
    question: "Terei que pagar pela instalação ou manutenção dos displays?",
    answer: "Não. A parceria não exige nenhum investimento inicial de sua parte. Nós somos os responsáveis pela instalação, manutenção e gerenciamento de todo o equipamento.",
    category: "estabelecimentos"
  },
  {
    id: 3,
    question: "Posso vetar algum anúncio?",
    answer: "Sim, você terá a possibilidade de aprovar os anunciantes, garantindo que o conteúdo esteja alinhado com a sua marca e público.",
    category: "estabelecimentos"
  },
  {
    id: 4,
    question: "A tela pode ser usada para exibir conteúdo do meu próprio negócio?",
    answer: "Sim, nossa plataforma permite que você também exiba seu conteúdo próprio, como promoções e informações sobre seus serviços.",
    category: "estabelecimentos"
  },
  {
    id: 5,
    question: "Por que anunciar com vocês e não em mídias sociais?",
    answer: "Enquanto as mídias sociais dependem de cliques, nós oferecemos visibilidade garantida para um público-alvo já segmentado. Seu anúncio é exibido em um local físico, exatamente onde seu cliente ideal já está.",
    category: "anunciantes"
  },
  {
    id: 6,
    question: "O custo para anunciar é alto? É acessível para pequenos negócios?",
    answer: "Nosso modelo de precificação foi pensado para oferecer um excelente custo-benefício, especialmente para negócios locais.",
    category: "anunciantes"
  },
  {
    id: 7,
    question: "Como sei que meu anúncio está gerando resultados?",
    answer: "Fornecemos relatórios de desempenho detalhados que mostram a frequência de exibição do seu anúncio, em alguns casos, até o perfil demográfico do público.",
    category: "anunciantes"
  },
  {
    id: 8,
    question: "Vocês podem me ajudar a criar o anúncio?",
    answer: "Sim! Embora o gerenciamento da plataforma seja simples, oferecemos um serviço opcional de criação de conteúdo para que seu anúncio seja visualmente atraente e impactante de acordo com a estratégia certa para o seu público-alvo.",
    category: "anunciantes"
  }
];

const PARTNERS_DATA = [
  "FITLIFE", "SAÚDE+", "PREMIUM", "URBANO", "FITNESS", "CLINIC+",
  "WELLNESS", "SPORT+", "HEALTH", "ACTIVE", "VITAL", "STRONG"
] as const;

const SECTION_STYLES = {
  container: "py-16 md:py-24 lg:py-32 xl:py-40 2xl:py-48 bg-gray-50",
  question: "text-base lg:text-lg font-medium text-gmv-blue pr-4 group-hover:text-gmv-lime transition-colors duration-200",
  answer: "text-sm lg:text-base text-gmv-gray leading-relaxed",
  partner: "text-gmv-gray-accessible font-medium text-base lg:text-lg tracking-wider mx-4 lg:mx-8 flex-shrink-0"
} as const;

// Components
const FaqItem = ({ 
  item, 
  isOpen, 
  onToggle 
}: { 
  item: FaqItem; 
  isOpen: boolean; 
  onToggle: () => void; 
}) => (
  <div className="border-b border-gray-200 pb-4 lg:pb-6">
    <button
      onClick={onToggle}
      className="w-full flex items-start justify-between text-left group"
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${item.id}`}
      type="button"
    >
      <span className={SECTION_STYLES.question}>
        {item.question}
      </span>
      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center" aria-hidden="true">
        {isOpen ? (
          <Minus className="w-4 lg:w-5 h-4 lg:h-5 text-gmv-gray" />
        ) : (
          <Plus className="w-4 lg:w-5 h-4 lg:h-5 text-gmv-gray" />
        )}
      </div>
    </button>
    
    {isOpen && (
      <div 
        id={`faq-answer-${item.id}`}
        className="mt-3 lg:mt-4 pr-8 lg:pr-10"
        role="region"
        aria-labelledby={`faq-question-${item.id}`}
      >
        <p className={SECTION_STYLES.answer}>
          {item.answer}
        </p>
      </div>
    )}
  </div>
);

const PartnersScroll = () => (
  <div className="mt-12 lg:mt-20 pt-8 lg:pt-12 border-t border-gray-200">
    <div className="overflow-hidden relative">
      <div className="flex animate-scroll-left whitespace-nowrap">
        {/* First set of partners */}
        {PARTNERS_DATA.map((partner, index) => (
          <div 
            key={`first-${index}`} 
            className={SECTION_STYLES.partner}
            aria-hidden="true"
          >
            {partner}
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {PARTNERS_DATA.map((partner, index) => (
          <div 
            key={`second-${index}`} 
            className={SECTION_STYLES.partner}
            aria-hidden="true"
          >
            {partner}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const FaqSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = useCallback((id: number) => {
    setOpenItem(prevOpenItem => prevOpenItem === id ? null : id);
  }, []);

  // Separate questions by category
  const estabelecimentosQuestions = FAQ_DATA.filter(item => item.category === 'estabelecimentos');
  const anunciantesQuestions = FAQ_DATA.filter(item => item.category === 'anunciantes');

  return (
    <section 
      id="faq" 
      className={SECTION_STYLES.container}
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 
              id="faq-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light font-halenoir text-gmv-blue leading-none mb-4"
            >
              FAQ
            </h2>
            <p className="text-xl text-gmv-gray">
              Perguntas Frequentes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Para Estabelecimentos Parceiros */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-medium text-gmv-blue mb-6 lg:mb-8">
                Para Estabelecimentos Parceiros
              </h3>
              <div 
                className="space-y-4 lg:space-y-6"
                role="list"
                aria-label="Perguntas para estabelecimentos parceiros"
              >
                {estabelecimentosQuestions.map((item) => (
                  <div key={item.id} role="listitem">
                    <FaqItem 
                      item={item} 
                      isOpen={openItem === item.id}
                      onToggle={() => toggleItem(item.id)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Para Anunciantes */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-medium text-gmv-blue mb-6 lg:mb-8">
                Para Anunciantes
              </h3>
              <div 
                className="space-y-4 lg:space-y-6"
                role="list"
                aria-label="Perguntas para anunciantes"
              >
                {anunciantesQuestions.map((item) => (
                  <div key={item.id} role="listitem">
                    <FaqItem 
                      item={item} 
                      isOpen={openItem === item.id}
                      onToggle={() => toggleItem(item.id)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Partners/Clients - Animated Horizontal Scroll */}
          <PartnersScroll />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
