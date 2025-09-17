import { Lightbulb, Network, TrendingUp, ArrowRight, LucideIcon } from "lucide-react";

// Constants
const WHATSAPP_DATA = {
  number: '5511936208864',
  message: 'Olá! Gostaria de solicitar uma proposta para divulgar minha marca através da rede de displays LED da GMvision.',
  get url() {
    return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
  }
} as const;

const SECTION_DATA = {
  backgroundImage: 'url(/cortada.avif)',
  label: 'NOSSOS DIFERENCIAIS',
  title: {
    line1: 'Construindo pontes',
    line2: 'para o sucesso'
  },
  buttonText: 'Solicitar Proposta'
} as const;

// Types
interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

// Data
const BENEFITS_DATA: Benefit[] = [
  {
    icon: Lightbulb,
    title: "Inovação Constante",
    description: "Buscamos constantemente novas formas de usar a tecnologia para conectar pessoas e marcas, mantendo-nos à frente do mercado de publicidade."
  },
  {
    icon: Network,
    title: "Conexões Estratégicas",
    description: "Acreditamos que o sucesso está em construir pontes. Nosso modelo se baseia em criar uma rede de colaboração e confiança mútua."
  },
  {
    icon: TrendingUp,
    title: "Prosperidade Compartilhada",
    description: "O sucesso de nossos clientes e parceiros é o nosso sucesso. Trabalhamos para que todos os envolvidos cresçam e prosperem juntos."
  }
];

// Components
const BenefitCard = ({ benefit, index }: { benefit: Benefit; index: number }) => (
  <div 
    className="bg-white rounded-2xl p-6 lg:p-20 text-left shadow-sm border border-gmv-gray/10"
    role="article"
    aria-labelledby={`benefit-title-${index}`}
  >
    <h3 
      id={`benefit-title-${index}`}
      className="text-base lg:text-lg font-medium text-gmv-blue mb-3 lg:mb-4"
    >
      {benefit.title}
    </h3>
    <p className="text-gmv-gray leading-relaxed text-sm mb-6 lg:mb-12">
      {benefit.description}
    </p>
    
    {/* Large centered icon */}
    <div className="flex justify-center" aria-hidden="true">
      <benefit.icon className="w-16 lg:w-24 h-16 lg:h-24 text-gmv-lime" />
    </div>
  </div>
);

const DifferencesSection = () => {
  return (
    <section 
      id="beneficios" 
      className="py-16 lg:py-24 bg-cover bg-center bg-no-repeat" 
      style={{backgroundImage: SECTION_DATA.backgroundImage}}
      aria-labelledby="differences-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 lg:mb-16">
            <div 
              className="text-sm lg:text-base mb-4 font-halenoir italic" 
              style={{ color: '#000', textTransform: 'uppercase', WebkitTextStroke: '0' }}
            >
              {SECTION_DATA.label}
            </div>
            <h2 
              id="differences-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light font-halenoir text-gmv-blue leading-tight mb-8 lg:mb-10"
            >
              {SECTION_DATA.title.line1}
              <br />
              {SECTION_DATA.title.line2}
            </h2>
            
            <div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12"
              role="list"
              aria-label="Lista de diferenciais da empresa"
            >
              {BENEFITS_DATA.map((benefit, index) => (
                <div key={`benefit-${index}`} role="listitem">
                  <BenefitCard benefit={benefit} index={index} />
                </div>
              ))}
            </div>
            
            {/* Centered CTA button */}
            <div className="flex justify-center">
              <a
                href={WHATSAPP_DATA.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir WhatsApp para solicitar proposta (abre em nova aba)"
              >
                <button 
                  className="inline-flex items-center px-6 py-3 bg-gmv-lime border border-gmv-lime text-gmv-blue rounded-full hover:bg-gmv-lime/90 hover:border-gmv-lime/90 transition-all duration-300 hover:scale-105 font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-gmv-lime focus:ring-opacity-50"
                  type="button"
                >
                  <span className="text-sm font-medium">{SECTION_DATA.buttonText}</span>
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferencesSection;
