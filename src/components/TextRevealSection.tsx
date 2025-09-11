import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TextRevealSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const textParts = [
    { text: "Por", highlighted: false },
    { text: "que", highlighted: false },
    { text: "escolher", highlighted: false },
    { text: "publicidade", highlighted: false },
    { text: "em", highlighted: false },
    { text: "massa", highlighted: true },
    { text: "quando", highlighted: false },
    { text: "você", highlighted: false },
    { text: "pode", highlighted: false },
    { text: "atingir", highlighted: true },
    { text: "exatamente", highlighted: true },
    { text: "seu", highlighted: false },
    { text: "público-alvo?", highlighted: true },
    { text: "A", highlighted: false },
    { text: "GMvision", highlighted: true },
    { text: "revoluciona", highlighted: false },
    { text: "o", highlighted: false },
    { text: "marketing", highlighted: true },
    { text: "DOOH", highlighted: true },
    { text: "conectando", highlighted: false },
    { text: "sua", highlighted: false },
    { text: "marca", highlighted: true },
    { text: "aos", highlighted: false },
    { text: "locais", highlighted: true },
    { text: "estratégicos", highlighted: true },
    { text: "onde", highlighted: false },
    { text: "seus", highlighted: false },
    { text: "clientes", highlighted: true },
    { text: "realmente", highlighted: false },
    { text: "estão.", highlighted: false },
    { text: "Transforme", highlighted: false },
    { text: "investimento", highlighted: true },
    { text: "em", highlighted: false },
    { text: "resultados", highlighted: true },
    { text: "mensuráveis.", highlighted: true },
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div ref={targetRef} className="relative z-0 h-[200vh]">
            <div className="sticky top-0 mx-auto flex h-[50%] max-w-7xl items-center bg-transparent px-[1rem] py-[5rem]">
              <p className="flex flex-wrap p-5 text-2xl font-bold md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl text-justify w-full" style={{ lineHeight: '1.2' }}>
                {textParts.map((part, i) => {
                  const start = i / textParts.length;
                  const end = start + 1 / textParts.length;
                  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
                  
                  return (
                    <motion.span
                      key={i}
                      style={{ opacity: opacity }}
                      className={`mx-0.5 lg:mx-1 ${part.highlighted ? 'text-gmv-lime font-medium' : 'text-gmv-blue'}`}
                    >
                      {part.text}
                    </motion.span>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextRevealSection;
