import { Dumbbell, Heart, Building, Users } from "lucide-react";
import gymImage from "@/assets/led-panel-gym.jpg";
import clinicImage from "@/assets/led-panel-clinic.jpg";
import elevatorImage from "@/assets/led-panel-gym.jpg";
import heroImage from "@/assets/hero-led-business.jpg";
import StickyTabs from "@/components/ui/sticky-section-tabs";

const CasesSection = () => {
  const cases = [
    {
      id: "academias",
      icon: Dumbbell,
      title: "Academias",
      description: "Aumente o engajamento com campanhas de suplementos e equipamentos fitness em tempo real.",
      stats: "12 painéis • +40% engajamento",
      image: gymImage,
      details: [
        "Campanhas direcionadas para horários de pico",
        "Promoções de suplementos e equipamentos",
        "Conteúdo motivacional personalizado",
        "ROI comprovado de 40% de aumento no engajamento"
      ]
    },
    {
      id: "clinicas",
      icon: Heart,
      title: "Clínicas",
      description: "Campanhas de prevenção e produtos de saúde com alto recall da marca e conversão.",
      stats: "8 painéis • 85% recall",
      image: clinicImage,
      details: [
        "Campanhas de prevenção e conscientização",
        "Promoção de produtos farmacêuticos",
        "Lembretes de consultas e exames",
        "85% de recall da marca comprovado"
      ]
    },
    {
      id: "condominios",
      icon: Building,
      title: "Condomínios",
      description: "Gere receita adicional com publicidade local direcionada para moradores.",
      stats: "6 painéis • R$ 2.5k/mês",
      image: elevatorImage,
      details: [
        "Publicidade local e serviços da região",
        "Comunicados importantes do condomínio",
        "Geração de receita passiva para síndicos",
        "Média de R$ 2.500 por mês em receita adicional"
      ]
    },
    {
      id: "empresas",
      icon: Users,
      title: "Empresas",
      description: "Comunicação corporativa eficaz e publicidade estratégica para colaboradores.",
      stats: "15 painéis • 95% alcance",
      image: heroImage,
      details: [
        "Comunicação interna eficiente",
        "Campanhas de RH e benefícios",
        "Publicidade B2B estratégica",
        "95% de alcance entre colaboradores"
      ]
    }
  ];

  return (
    <section id="cases">
      {/* Header da seção */}
      <div className="bg-gmv-white py-0 pb-0 relative z-30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-base font-apparel text-gmv-lime uppercase tracking-wider mb-4">
              CASOS DE SUCESSO
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light font-halenoir text-gmv-blue leading-tight mb-10">
              Resultados que
              <br />
              <span className="font-normal font-garamond">impressionam</span>
            </h2>
          </div>
        </div>
      </div>

      {/* StickyTabs com os casos */}
      <div className="-mt-16">
        <StickyTabs
          mainNavHeight="80px"
          rootClassName="bg-white text-gray-900"
        navSpacerClassName="bg-white border-b border-gray-200"
        sectionClassName="bg-white"
        stickyHeaderContainerClassName="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
        headerContentWrapperClassName="bg-gradient-to-r from-gmv-blue/5 to-gmv-lime/5 border-b border-gmv-blue/10"
        headerContentLayoutClassName="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8"
        titleClassName="text-xl font-semibold text-gmv-blue md:text-2xl lg:text-3xl"
        contentLayoutClassName="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8"
      >
        {cases.map((caseItem) => {
          return (
            <StickyTabs.Item
              key={caseItem.id}
              id={caseItem.id}
              title={caseItem.title}
            >
              {/* Card horizontal com imagem de fundo e conteúdo sobreposto */}
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
                {/* Imagem de fundo */}
                <img 
                  src={caseItem.image} 
                  alt={caseItem.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay escuro */}
                <div className="absolute inset-0 bg-black/40"></div>
                
                {/* Gradient blur mais escuro do lado esquerdo */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
                
                {/* Conteúdo sobreposto */}
                <div className="absolute inset-0 flex items-end pb-16">
                  <div className="w-full px-8 lg:px-12">
                    <div className="max-w-2xl">
                      {/* Título */}
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {caseItem.title}
                      </h3>
                      
                      {/* Descrição */}
                      <p className="text-xl text-white/90 leading-relaxed mb-6 max-w-lg">
                        {caseItem.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </StickyTabs.Item>
          );
        })}
      </StickyTabs>
      </div>
    </section>
  );
};

export default CasesSection;
