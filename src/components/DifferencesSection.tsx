import { Shield, Users, Wifi, ArrowRight } from "lucide-react";

const DifferencesSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Para garantir que seus dados e campanhas estejam sempre protegidos"
    },
    {
      icon: Users,
      title: "Suporte Dedicado",
      description: "Para proteger e dar suporte aos nossos parceiros"
    },
    {
      icon: Wifi,
      title: "Conectividade Total",
      description: "4 níveis de proteção contra falhas de conectividade"
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-gmv-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="text-base font-medium text-gmv-lime uppercase tracking-wider mb-8">
              NOSSOS DIFERENCIAIS
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gmv-blue leading-tight mb-10">
              Tecnologia que
              <br />
              <span className="font-normal">transforma</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-20 text-left shadow-sm border border-gmv-gray/10">
                  <h3 className="text-lg font-medium text-gmv-blue mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gmv-gray leading-relaxed text-sm mb-12">
                    {benefit.description}
                  </p>
                  
                  {/* Ícone grande centralizado */}
                  <div className="flex justify-center">
                    <benefit.icon className="w-24 h-24 text-gmv-lime" />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Botão CTA centralizado */}
            <div className="flex justify-center">
              <button className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition-colors duration-200">
                <span className="text-sm font-medium">Solicitar Proposta</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferencesSection;
