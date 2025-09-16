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
    <section id="beneficios" className="py-16 lg:py-24 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/cortada.png)'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 lg:mb-16">
            <div className="text-sm lg:text-base mb-4 font-halenoir italic" style={{ color: '#000', textTransform: 'uppercase', WebkitTextStroke: '0' }}>
              NOSSOS DIFERENCIAIS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light font-halenoir text-gmv-blue leading-tight mb-8 lg:mb-10">
              Construindo pontes
              <br />
              para o sucesso
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 lg:p-20 text-left shadow-sm border border-gmv-gray/10">
                  <h3 className="text-base lg:text-lg font-medium text-gmv-blue mb-3 lg:mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gmv-gray leading-relaxed text-sm mb-6 lg:mb-12">
                    {benefit.description}
                  </p>
                  
                  {/* Ícone grande centralizado */}
                  <div className="flex justify-center">
                    <benefit.icon className="w-16 lg:w-24 h-16 lg:h-24 text-gmv-lime" />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Botão CTA centralizado */}
            <div className="flex justify-center">
              <a
                href="https://wa.me/5511936208864?text=Olá! Gostaria de solicitar uma proposta para divulgar minha marca através da rede de displays LED da GMvision."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center px-6 py-3 bg-gmv-lime border border-gmv-lime text-gmv-blue rounded-full hover:bg-gmv-lime/90 hover:border-gmv-lime/90 transition-all duration-300 hover:scale-105 font-medium shadow-lg">
                  <span className="text-sm font-medium">Solicitar Proposta</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
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
