import heroImage from "@/assets/degrade.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* Large GMVISION text at bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <div className="w-full px-0">
          <h2 className="text-[10rem] md:text-[15rem] lg:text-[20rem] xl:text-[17rem] font-bold text-black leading-none tracking-tighter opacity-90 text-center whitespace-nowrap overflow-hidden" style={{ fontFamily: 'Pavelt, sans-serif' }}>
            GMVISION
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
