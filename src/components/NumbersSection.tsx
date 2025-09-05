import { MapPin, Users, Monitor, Building, ArrowRight } from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";

const NumbersSection = () => {
  const stats = [
    {
      value: 850,
      suffix: "k",
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
          <div className="mb-16">
            <div className="text-base font-medium text-gmv-lime uppercase tracking-wider mb-8">
              NOSSOS NÚMEROS
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gmv-blue leading-tight mb-10">
              Impacto que
              <br />
              <span className="font-normal">cresce</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-16 mb-12">
            {stats.slice(0, 3).map((stat, index) => (
              <div key={index} className="text-left">
                <div className="text-6xl md:text-7xl font-light text-gmv-lime mb-2 leading-none">
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <NumberTicker 
                    value={stat.value} 
                    className="text-gmv-lime" 
                  />
                  {stat.suffix && <span>{stat.suffix}</span>}
                </div>
                <div className="text-gmv-gray text-base font-normal">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="text-left">
            <button className="inline-flex items-center px-6 py-3 border border-gmv-lime text-gmv-blue bg-gmv-lime rounded-full hover:bg-gmv-lime/90 transition-colors duration-200">
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