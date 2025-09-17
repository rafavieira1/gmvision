import { useRef, useMemo, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Types
interface TextPart {
  text: string;
  highlighted: boolean;
}

interface AnimatedTextPartProps {
  part: TextPart;
  index: number;
  totalParts: number;
  scrollYProgress: any;
}

// Constants
const TEXT_PARTS: TextPart[] = [
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
] as const;

const STYLES = {
  lineHeight: '1.2',
} as const;

// Components
const AnimatedTextPart = memo(({ part, index, totalParts, scrollYProgress }: AnimatedTextPartProps) => {
  const start = index / totalParts;
  const end = start + 1 / totalParts;
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  const textClassName = useMemo(() => 
    `mx-0.5 lg:mx-1 ${part.highlighted ? 'text-gmv-lime font-medium' : 'text-gmv-blue'}`,
    [part.highlighted]
  );

  return (
    <motion.span
      style={{ opacity }}
      className={textClassName}
      aria-label={part.highlighted ? `${part.text} (destacado)` : part.text}
    >
      {part.text}
    </motion.span>
  );
});
AnimatedTextPart.displayName = 'AnimatedTextPart';

const RevealText = memo(({ scrollYProgress }: { scrollYProgress: any }) => (
  <p 
    className="flex flex-wrap p-5 text-2xl font-bold md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl text-justify w-full"
    style={STYLES}
    role="presentation"
    aria-live="polite"
  >
    {TEXT_PARTS.map((part, index) => (
      <AnimatedTextPart
        key={`${part.text}-${index}`}
        part={part}
        index={index}
        totalParts={TEXT_PARTS.length}
        scrollYProgress={scrollYProgress}
      />
    ))}
  </p>
));
RevealText.displayName = 'RevealText';

const TextRevealSection = memo(() => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <section 
      className="bg-white relative"
      aria-label="Seção de texto revelado sobre marketing DOOH"
    >
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto relative">
          <div ref={targetRef} className="relative z-0 h-[200vh]">
            <div className="sticky top-0 mx-auto flex h-[50%] max-w-7xl items-center bg-transparent px-[1rem] py-[5rem]">
              <RevealText scrollYProgress={scrollYProgress} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

TextRevealSection.displayName = 'TextRevealSection';

export default TextRevealSection;
