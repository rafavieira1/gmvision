import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TextRevealSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const textParts = [
    { text: "A", highlighted: false },
    { text: "GMvision", highlighted: false },
    { text: "está", highlighted: false },
    { text: "presente", highlighted: false },
    { text: "em", highlighted: false },
    { text: "22", highlighted: true },
    { text: "estados", highlighted: true },
    { text: "e", highlighted: false },
    { text: "87", highlighted: true },
    { text: "cidades", highlighted: true },
    { text: "brasileiras", highlighted: false },
    { text: "impactando", highlighted: false },
    { text: "mais", highlighted: false },
    { text: "de", highlighted: false },
    { text: "53", highlighted: true },
    { text: "milhões", highlighted: true },
    { text: "de", highlighted: false },
    { text: "pessoas", highlighted: false },
    { text: "todos", highlighted: false },
    { text: "os", highlighted: false },
    { text: "meses!", highlighted: false },
    { text: "Temos", highlighted: false },
    { text: "a", highlighted: false },
    { text: "solução", highlighted: false },
    { text: "de", highlighted: false },
    { text: "comunicação", highlighted: false },
    { text: "ideal", highlighted: false },
    { text: "para", highlighted: false },
    { text: "a", highlighted: false },
    { text: "sua", highlighted: false },
    { text: "marca.", highlighted: false },
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
                    <span key={i} className="relative mx-0.5 lg:mx-1">
                      <span className={`absolute opacity-30 ${part.highlighted ? 'text-gmv-lime' : 'text-gmv-blue'}`}>
                        {part.text}
                      </span>
                      <motion.span
                        style={{ opacity: opacity }}
                        className={part.highlighted ? 'text-gmv-lime font-medium' : 'text-gmv-blue'}
                      >
                        {part.text}
                      </motion.span>
                    </span>
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
