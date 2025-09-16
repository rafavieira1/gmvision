const TextHorizonSection = () => {
  return (
  <section className="py-48" style={{backgroundColor: '#f7f7f7'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Texto GMvision com imagens em uma linha */}
          <div className="relative mb-16 text-center">
            <h2 className="text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[14rem] font-black leading-none select-none tracking-tight mb-4" style={{ fontFamily: 'Pavelt, sans-serif' }}>
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
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium leading-tight select-none tracking-wide" style={{ fontFamily: 'Pavelt, sans-serif' }}>
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
