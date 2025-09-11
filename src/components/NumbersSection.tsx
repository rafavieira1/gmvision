import { MapPin, Users, Monitor, Building, ArrowRight } from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";

const NumbersSection = () => {
  const stats = [
    {
      value: 850,
      suffix: "K",
      label: "pessoas impactadas",
      icon: Users
    },
    {
      value: 180,
      prefix: "+",
      label: "estabelecimentos",
      icon: Building
    },
    {
      value: 450,
      prefix: "+",
      label: "painéis LED",
      icon: Monitor
    },
    {
      value: 25,
      prefix: "+",
      label: "cidades",
      icon: MapPin
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <div className="text-base font-apparel uppercase tracking-wider mb-4" style={{ color: '#b8e600', WebkitTextStroke: '1px rgba(186, 233, 94, 0.74)' }}>
              NOSSOS NÚMEROS
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light font-halenoir text-gmv-blue leading-tight mb-10">
              Impacto que
              <br />
              <span className="font-normal font-garamond">cresce</span>
            </h2>
          </div>

          <div className="flex justify-center items-center gap-32 mb-12 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col justify-center items-center text-center min-w-0 flex-1">
                <div className="text-4xl md:text-5xl lg:text-8xl font-medium font-noto-jp text-gmv-lime mb-2 leading-none whitespace-nowrap">
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <NumberTicker 
                    value={stat.value} 
                    className="text-gmv-lime font-medium font-noto-jp" 
                  />
                  {stat.suffix && <span>{stat.suffix}</span>}
                </div>
                <div className="text-gmv-gray text-sm md:text-base font-normal whitespace-nowrap">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Botão centralizado abaixo da primeira estatística */}
          <div className="text-center">
            <button className="inline-flex items-center px-6 py-3 border border-gmv-lime text-gmv-blue bg-gmv-lime rounded-full hover:bg-gmv-lime/90 transition-all duration-300 hover:scale-105">
              <span className="text-sm font-medium">Mais Sobre Nós</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;