import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FaqSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems = [
    {
      id: 1,
      question: "Como funciona a instalação dos painéis LED?",
      answer: "Nossa equipe técnica realiza toda a instalação sem custo para o estabelecimento. O processo inclui análise do local, instalação profissional e configuração completa do sistema. Todo o processo leva de 2 a 4 horas."
    },
    {
      id: 2,
      question: "A GMvision é compatível com dispositivos móveis?",
      answer: "Sim! Nossa plataforma é 100% responsiva e otimizada para dispositivos móveis. Você pode gerenciar suas campanhas, visualizar relatórios e fazer ajustes diretamente do seu smartphone ou tablet."
    },
    {
      id: 3,
      question: "Posso integrar outras ferramentas e sistemas com a GMvision?",
      answer: "Absolutely! Oferecemos APIs robustas e integrações com principais plataformas de marketing, CRM e analytics. Também suportamos webhooks para sincronização em tempo real com seus sistemas existentes."
    },
    {
      id: 4,
      question: "Que tipo de suporte está disponível se eu tiver problemas?",
      answer: "Oferecemos suporte técnico completo 24/7 através de chat, email e telefone. Nossa equipe inclui especialistas em hardware, software e estratégia de marketing digital para garantir o sucesso das suas campanhas."
    }
  ];

  const partners = [
    "FITLIFE", "SAÚDE+", "PREMIUM", "URBANO", "FITNESS", "CLINIC+",
    "WELLNESS", "SPORT+", "HEALTH", "ACTIVE", "VITAL", "STRONG"
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 lg:py-32 xl:py-40 2xl:py-48 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* FAQ Title */}
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-gmv-blue leading-none">
                FAQ
              </h2>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4 lg:space-y-6">
              {faqItems.map((item) => (
                <div key={item.id} className="border-b border-gray-200 pb-4 lg:pb-6">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-start justify-between text-left group"
                  >
                    <span className="text-base lg:text-lg font-medium text-gmv-blue pr-4 group-hover:text-gmv-lime transition-colors duration-200">
                      {item.question}
                    </span>
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                      {openItem === item.id ? (
                        <Minus className="w-4 lg:w-5 h-4 lg:h-5 text-gmv-gray" />
                      ) : (
                        <Plus className="w-4 lg:w-5 h-4 lg:h-5 text-gmv-gray" />
                      )}
                    </div>
                  </button>
                  
                  {openItem === item.id && (
                    <div className="mt-3 lg:mt-4 pr-8 lg:pr-10">
                      <p className="text-sm lg:text-base text-gmv-gray leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Partners/Clients - Animated Horizontal Scroll */}
          <div className="mt-12 lg:mt-20 pt-8 lg:pt-12 border-t border-gray-200">
            <div className="overflow-hidden relative">
              <div className="flex animate-scroll-left whitespace-nowrap">
                {/* First set of partners */}
                {partners.map((partner, index) => (
                  <div 
                    key={`first-${index}`} 
                    className="text-gmv-gray/60 font-medium text-base lg:text-lg tracking-wider mx-4 lg:mx-8 flex-shrink-0"
                  >
                    {partner}
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {partners.map((partner, index) => (
                  <div 
                    key={`second-${index}`} 
                    className="text-gmv-gray/60 font-medium text-base lg:text-lg tracking-wider mx-4 lg:mx-8 flex-shrink-0"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
