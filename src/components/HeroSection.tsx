import heroImage from "@/assets/hero-led-business.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      <div className="relative h-full flex items-end pb-44">
        <div className="container mx-auto px-0 pb-0">
          <div className="max-w-4xl space-y-8 animate-slide-up">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Atenção Que Vira Conexão
            </h1>
            <p className="text-xl md:text-1xl text-white/80 leading-relaxed max-w-2xl">
              A GMvision revoluciona a publicidade digital com painéis LED inteligentes que conectam anunciantes e estabelecimentos.
            </p>
            <div className="pt-4">
              <button className="bg-gmv-lime text-gmv-blue px-8 py-4 rounded-full text-lg font-medium hover:bg-gmv-lime/90 transition-colors duration-200">
                Descobrir Soluções
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
