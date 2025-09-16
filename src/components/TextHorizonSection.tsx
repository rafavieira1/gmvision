const TextHorizonSection = () => {
  return (
  <section className="py-12 md:py-24 min-h-[40vh] md:min-h-[70vh] flex items-end" style={{backgroundColor: '#f7f7f7'}}>
      <div className="container mx-auto px-4 w-full mb-8 md:mb-16">
        <div className="max-w-7xl mx-auto">
          {/* Texto GMvision com imagens em uma linha */}
          <div className="relative text-center flex flex-col items-center justify-end">
            <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[6rem] lg:text-[8rem] xl:text-[14rem] font-black leading-none select-none tracking-tight mb-4 text-center w-full" style={{ fontFamily: 'Pavelt, sans-serif' }}>
              <span 
                className="inline-block bg-clip-text text-transparent bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: `url(/chat.png)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                GMvision
              </span>
            </h2>
            
            {/* Subtítulo com mesmo efeito */}
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-medium leading-tight select-none tracking-wide text-center w-full" style={{ fontFamily: 'Pavelt, sans-serif' }}>
              <span 
                className="inline-block bg-clip-text text-transparent bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: `url(/chat.png)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                O Futuro da sua marca mais iluminado.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextHorizonSection;
