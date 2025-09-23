import { memo } from "react";

// Types
interface BackgroundTextProps {
  children: React.ReactNode;
  className?: string;
}

// Constants
const SECTION_CONTENT = {
  mainTitle: "GMvision",
  subtitle: "O Futuro da sua marca mais iluminado.",
  backgroundImage: "/chat.avif",
  backgroundColor: "#f7f7f7",
} as const;

const TEXT_STYLES = {
  backgroundImage: `url(${SECTION_CONTENT.backgroundImage})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
} as const;

const FONT_FAMILY = { fontFamily: 'Pavelt, sans-serif' } as const;

// Components
const BackgroundText = memo(({ children, className }: BackgroundTextProps) => (
  <span 
    className={`inline-block bg-clip-text text-transparent bg-cover bg-center bg-no-repeat ${className || ''}`}
    style={TEXT_STYLES}
  >
    {children}
  </span>
));
BackgroundText.displayName = 'BackgroundText';

const MainTitle = memo(() => (
  <h2 
    className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[8rem] 2xl:text-[14rem] font-black leading-none select-none tracking-tight mb-4 text-center w-full"
    style={FONT_FAMILY}
  >
    <BackgroundText>
      {SECTION_CONTENT.mainTitle}
    </BackgroundText>
  </h2>
));
MainTitle.displayName = 'MainTitle';

const Subtitle = memo(() => (
  <p 
    className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium leading-tight select-none tracking-wide text-center w-full"
    style={FONT_FAMILY}
  >
    <BackgroundText>
      {SECTION_CONTENT.subtitle}
    </BackgroundText>
  </p>
));
Subtitle.displayName = 'Subtitle';

const TextHorizonSection = memo(() => {
  return (
    <section 
      className="py-12 md:py-24 min-h-[40vh] md:min-h-[70vh] flex items-end"
      style={{ backgroundColor: SECTION_CONTENT.backgroundColor }}
      aria-label="Seção de apresentação da GMvision"
    >
      <div className="container mx-auto px-4 w-full mb-8 md:mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative text-center flex flex-col items-center justify-end">
            <MainTitle />
            <Subtitle />
          </div>
        </div>
      </div>
    </section>
  );
});

TextHorizonSection.displayName = 'TextHorizonSection';

export default TextHorizonSection;
