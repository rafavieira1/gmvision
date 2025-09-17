import { memo, useMemo } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "/hero-led-business.jpg";
import clinicImage from "/led-panel-clinic.jpg";

// Types
interface PlatformData {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  linkText: string;
  features: string[];
  bgColor: string;
  image: string;
  imageAlt: string;
}

interface PlatformCardProps extends PlatformData {}

interface FeatureItemProps {
  feature: string;
  index: number;
}

// Constants
const SECTION_CONTENT = {
  badge: "PROSPERIDADE COMPARTILHADA",
  title: "Conectamos negócios",
  subtitle: "e criamos valor",
  backgroundColor: "#f7f7f7",
} as const;

const PLATFORM_DATA: Record<'anunciantes' | 'estabelecimentos', PlatformData> = {
  anunciantes: {
    title: "ANUNCIANTES",
    subtitle: "Anunciantes",
    description: "Abandone a publicidade em massa e atinja seu público-alvo de forma segmentada em estabelecimentos estratégicos, aumentando suas vendas com publicidade inteligente.",
    link: "/anunciantes",
    linkText: "Saiba Mais",
    features: [
      "Visibilidade segmentada",
      "Alcance local direcionado", 
      "Custo-benefício otimizado",
      "Consultoria estratégica",
      "Aprovação do estabelecimento"
    ],
    bgColor: "bg-[#f7f7f7]",
    image: heroImage,
    imageAlt: "Anunciantes GMvision - Publicidade segmentada e estratégica",
  },
  estabelecimentos: {
    title: "ESTABELECIMENTOS",
    subtitle: "Estabelecimentos", 
    description: "Transforme seu espaço em um ponto de mídia rentável. Cada display instalado gera renda extra enquanto moderniza seu ambiente com tecnologia LED de ponta.",
    link: "/estabelecimentos",
    linkText: "Saiba Mais",
    features: [
      "Renda extra garantida",
      "Modernização do ambiente",
      "Instalação e manutenção gratuitas",
      "Conteúdo próprio nos displays",
      "Gestão completa de anunciantes"
    ],
    bgColor: "bg-[#f7f7f7]",
    image: clinicImage,
    imageAlt: "Estabelecimentos GMvision - Renda extra e modernização",
  },
} as const;

const ANIMATIONS = {
  card: {
    initial: { scale: 0.9, opacity: 0, y: 50 },
    whileInView: { scale: 1, opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  title: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  grid: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, delay: 0.2 },
  },
} as const;

// Components
const FeatureItem = memo(({ feature, index }: FeatureItemProps) => (
  <div className="flex items-center space-x-2">
    <Check 
      className="h-4 w-4 text-green-400 flex-shrink-0" 
      aria-hidden="true"
    />
    <span className="text-gmv-gray text-sm">{feature}</span>
  </div>
));
FeatureItem.displayName = 'FeatureItem';

const PlatformImage = memo(({ image, imageAlt }: { image: string; imageAlt: string }) => (
  <div className="relative h-36 lg:h-48 overflow-hidden">
    <img 
      src={image} 
      alt={imageAlt}
      className="w-full h-full object-cover"
      loading="lazy"
      decoding="async"
    />
  </div>
));
PlatformImage.displayName = 'PlatformImage';

const PlatformInfo = memo(({ title, description }: { title: string; description: string }) => (
  <div className="text-center mb-4 lg:mb-6">
    <h3 className="text-lg lg:text-xl font-bold text-gmv-blue mb-2 uppercase tracking-wide">
      {title}
    </h3>
    <p className="text-gmv-gray text-sm leading-relaxed">
      {description}
    </p>
  </div>
));
PlatformInfo.displayName = 'PlatformInfo';

const FeaturesList = memo(({ features }: { features: string[] }) => (
  <div 
    className="space-y-2 mb-4 lg:mb-6 flex-1"
    role="list"
    aria-label="Lista de características"
  >
    {features.map((feature, index) => (
      <FeatureItem 
        key={`${feature}-${index}`} 
        feature={feature} 
        index={index} 
      />
    ))}
  </div>
));
FeaturesList.displayName = 'FeaturesList';

const ActionButton = memo(({ link, linkText }: { link: string; linkText: string }) => (
  <Link to={link} className="mt-auto" aria-label={`Saiba mais sobre ${linkText}`}>
    <button className="inline-flex items-center px-4 lg:px-6 py-2 lg:py-3 border border-gmv-blue text-gmv-blue rounded-full hover:bg-gmv-blue hover:text-white transition-all duration-300 hover:scale-105 w-full justify-center focus:outline-none focus:ring-2 focus:ring-gmv-blue focus:ring-offset-2">
      <span className="text-xs lg:text-sm font-medium">{linkText}</span>
      <ArrowRight className="w-3 lg:w-4 h-3 lg:h-4 ml-2" aria-hidden="true" />
    </button>
  </Link>
));
ActionButton.displayName = 'ActionButton';

const PlatformCard = memo((props: PlatformCardProps) => {
  const { title, description, link, linkText, features, bgColor, image, imageAlt } = props;

  return (
    <motion.div
      {...ANIMATIONS.card}
      className="h-full"
    >
      <Card 
        className={`overflow-hidden rounded-2xl ${bgColor} shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border-0`}
        role="article"
        aria-label={`Informações para ${title.toLowerCase()}`}
      >
        <PlatformImage image={image} imageAlt={imageAlt} />
        
        <CardContent className="p-4 lg:p-6 flex-1 flex flex-col">
          <PlatformInfo title={title} description={description} />
          <FeaturesList features={features} />
          <ActionButton link={link} linkText={linkText} />
        </CardContent>
      </Card>
    </motion.div>
  );
});
PlatformCard.displayName = 'PlatformCard';

const SectionHeader = memo(() => (
  <motion.div 
    {...ANIMATIONS.title}
    className="mb-12 lg:mb-16 text-center"
  >
    <div 
      className="text-sm lg:text-base mb-4 font-halenoir italic" 
      style={{ 
        color: '#000', 
        textTransform: 'uppercase', 
        WebkitTextStroke: '0' 
      }}
    >
      {SECTION_CONTENT.badge}
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light font-halenoir text-gmv-blue leading-tight mb-8 lg:mb-10">
      {SECTION_CONTENT.title}
      <br />
      {SECTION_CONTENT.subtitle}
    </h2>
  </motion.div>
));
SectionHeader.displayName = 'SectionHeader';

const PlatformsGrid = memo(() => {
  const platforms = useMemo(() => Object.values(PLATFORM_DATA), []);

  return (
    <motion.div 
      {...ANIMATIONS.grid}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"
      role="region"
      aria-label="Opções de plataforma"
    >
      {platforms.map((platform) => (
        <PlatformCard
          key={platform.title}
          {...platform}
        />
      ))}
    </motion.div>
  );
});
PlatformsGrid.displayName = 'PlatformsGrid';

const TipoClienteSection = memo(() => {
  return (
    <section 
      className="py-16 lg:py-24" 
      style={{ backgroundColor: SECTION_CONTENT.backgroundColor }}
      aria-label="Seção de tipos de cliente"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader />
          <PlatformsGrid />
        </div>
      </div>
    </section>
  );
});

TipoClienteSection.displayName = 'TipoClienteSection';

export default TipoClienteSection;
