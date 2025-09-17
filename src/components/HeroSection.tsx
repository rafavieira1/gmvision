import { memo, useCallback } from "react";
import heroImage from "/degrade.avif";
import completoImage from "/completo.png";

// Types
interface BackgroundOverlayProps {
  className?: string;
}

interface BackgroundImageProps {
  imageUrl: string;
  alt?: string;
}

interface CenteredImageProps {
  imageUrl: string;
  alt: string;
  className?: string;
}

// Constants
const HERO_IMAGES = {
  background: heroImage,
  logo: completoImage,
} as const;

const HERO_CONFIG = {
  logoMaxSize: "80%",
  altText: "GMVision - Painéis LED Inteligentes",
  backgroundAlt: "Fundo degradê GMVision",
} as const;

const STYLES = {
  section: "relative h-screen overflow-hidden",
  overlay: "absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40",
  backgroundImage: "absolute inset-0 bg-cover bg-center",
  centeredContainer: "absolute inset-0 flex items-center justify-center",
  logoImage: "max-w-[80%] max-h-[80%] object-contain",
} as const;

// Components
const BackgroundOverlay = memo(({ className = STYLES.overlay }: BackgroundOverlayProps) => (
  <div 
    className={className}
    role="presentation"
    aria-hidden="true"
  />
));
BackgroundOverlay.displayName = 'BackgroundOverlay';

const BackgroundImage = memo(({ imageUrl, alt = HERO_CONFIG.backgroundAlt }: BackgroundImageProps) => (
  <div 
    className={STYLES.backgroundImage}
    style={{ backgroundImage: `url(${imageUrl})` }}
    role="img"
    aria-label={alt}
  />
));
BackgroundImage.displayName = 'BackgroundImage';

const CenteredImage = memo(({ imageUrl, alt, className = STYLES.logoImage }: CenteredImageProps) => {
  const handleImageError = useCallback((event: React.SyntheticEvent<HTMLImageElement>) => {
    console.error('Erro ao carregar imagem do hero:', event);
  }, []);

  const handleImageLoad = useCallback(() => {
    if (process.env.NODE_ENV === 'development') {
      console.info('✅ Imagem do hero carregada com sucesso');
    }
  }, []);

  return (
    <div className={STYLES.centeredContainer}>
      <img 
        src={imageUrl}
        alt={alt}
        className={className}
        onError={handleImageError}
        onLoad={handleImageLoad}
        loading="eager"
        decoding="async"
        role="img"
        aria-label={alt}
      />
    </div>
  );
});
CenteredImage.displayName = 'CenteredImage';

const HeroSection = memo(() => {
  return (
    <section 
      className={STYLES.section}
      aria-label="Seção principal - Hero da GMVision"
      role="banner"
    >
      <BackgroundOverlay />
      
      <BackgroundImage 
        imageUrl={HERO_IMAGES.background}
        alt={HERO_CONFIG.backgroundAlt}
      />

      <CenteredImage 
        imageUrl={HERO_IMAGES.logo}
        alt={HERO_CONFIG.altText}
      />

      {/* Large GMVISION text at bottom - REMOVED */}
      {/*
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <div className="w-full px-0">
          <h2 className="text-[10rem] md:text-[15rem] lg:text-[20rem] xl:text-[17rem] font-bold text-black leading-none tracking-tighter opacity-90 text-center whitespace-nowrap overflow-hidden" style={{ fontFamily: 'Pavelt, sans-serif' }}>
            GMVISION
          </h2>
        </div>
      </div>
      */}
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
