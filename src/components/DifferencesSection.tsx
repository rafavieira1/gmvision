import { Lightbulb, Network, TrendingUp, ArrowRight } from "lucide-react";

const DifferencesSection = () => {
  const benefits = [
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

  return (
    <section id="beneficios" className="py-24 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/cortada.png)'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="text-base font-apparel uppercase tracking-wider mb-4" style={{ color: '#384145' }}>
              NOSSOS VALORES
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light font-halenoir text-gmv-blue leading-tight mb-10">
              Construindo pontes
              <br />
              <span className="font-normal font-garamond">para o sucesso</span>
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
              <button className="inline-flex items-center px-6 py-3 bg-gmv-lime border border-gmv-lime text-gmv-blue rounded-full hover:bg-gmv-lime/90 hover:border-gmv-lime/90 transition-all duration-300 hover:scale-105 font-medium shadow-lg">
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
