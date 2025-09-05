import { ArrowRight, Users, Building, TrendingUp, Zap, Target, MapPin, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-led-business.jpg";
import clinicImage from "@/assets/led-panel-clinic.jpg";

interface PlatformCardProps {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  linkText: string;
  features: Array<{ title: string; description: string; icon: React.ComponentType<{ className?: string }> }>;
  bgColor: string;
  badgeText: string;
  image: string;
  imageAlt: string;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

function PlatformCard({
  title,
  subtitle,
  description,
  link,
  linkText,
  features,
  bgColor,
  badgeText,
  image,
  imageAlt,
  isExpanded,
  onToggleExpand,
}: PlatformCardProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [animatedHeight, setAnimatedHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setAnimatedHeight(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded]);

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 50 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-full"
    >
      <Card
        className={`cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] rounded-3xl overflow-hidden ${bgColor} shadow-lg flex flex-col h-full`}
        onClick={onToggleExpand}
      >
      <CardHeader className="p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-start w-full">
          <div className="space-y-2 flex-1">
            <Badge variant="secondary" className="bg-gmv-lime text-gmv-blue font-medium">
              {badgeText}
            </Badge>
            <div className="text-lg font-medium text-white/95">
              {subtitle}
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 leading-tight text-white min-h-[4.5rem] flex items-center">
              {title}
            </h3>
            <p className="text-white/90 text-base leading-relaxed">
              {description}
            </p>
          </div>
          <div className="ml-4 text-white/60 text-xs text-center">
            {isExpanded ? (
              <>
                <ChevronDown className="w-4 h-4 mx-auto mb-1 rotate-180" />
                <div>Clique para<br />encolher</div>
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mx-auto mb-1" />
                <div>Clique para<br />expandir</div>
              </>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-8 pt-0">
        <motion.div
          animate={{ height: animatedHeight }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            duration: 0.6 
          }}
          className="overflow-hidden"
        >
          <div ref={contentRef}>
            <AnimatePresence mode="wait">
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="space-y-6 pt-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Image */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="rounded-xl overflow-hidden"
                  >
                    <img 
                      src={image} 
                      alt={imageAlt}
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>

                  {/* Features */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="space-y-3"
                  >
                    <h4 className="font-medium text-white flex items-center">
                      <Target className="h-4 w-4 mr-2 text-gmv-lime" />
                      Principais Benefícios
                    </h4>
                    {features.map((feature, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                        className="flex items-start space-x-3 bg-white/10 rounded-lg p-3 border border-white/10"
                      >
                        <feature.icon className="h-5 w-5 text-gmv-lime mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-white font-medium text-sm">{feature.title}</div>
                          <div className="text-white/80 text-xs leading-relaxed">{feature.description}</div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="mt-8" onClick={(e) => e.stopPropagation()}>
          {!isExpanded ? (
            <Button 
              variant="outline" 
              className="w-full h-12 border-2 border-gmv-lime bg-transparent text-gmv-lime hover:bg-gmv-lime hover:text-gmv-blue transition-all duration-200 font-medium"
              onClick={(e) => {
                e.stopPropagation();
                onToggleExpand();
              }}
            >
              <span className="text-sm font-medium">Ver mais</span>
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Link to={link}>
              <Button 
                variant="outline" 
                className="w-full h-12 border-2 border-gmv-lime bg-gmv-lime text-gmv-blue hover:bg-transparent hover:text-gmv-lime transition-all duration-200 font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="text-sm font-medium">{linkText}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
    </motion.div>
  );
}

const PlatformSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const anunciantesFeatures = [
    {
      title: "Segmentação Avançada",
      description: "Publique em locais estratégicos baseados no perfil do seu público",
      icon: Target
    },
    {
      title: "Relatórios Detalhados",
      description: "Acompanhe métricas em tempo real com dashboard completo",
      icon: TrendingUp
    },
    {
      title: "Rede Expandida",
      description: "Acesso a mais de 500+ pontos em 22 estados brasileiros",
      icon: MapPin
    }
  ];

  const estabelecimentosFeatures = [
    {
      title: "Instalação Gratuita",
      description: "Setup completo sem custos iniciais para seu estabelecimento",
      icon: Zap
    },
    {
      title: "Receita Adicional",
      description: "Monetize seu espaço com publicidade de marcas parceiras",
      icon: TrendingUp
    },
    {
      title: "Tecnologia Moderna",
      description: "Painéis LED de última geração com manutenção inclusa",
      icon: Building
    }
  ];

  return (
    <section className="py-24 bg-gmv-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16"
          >
            <div className="text-base font-medium text-gmv-lime uppercase tracking-wider mb-8">
              NOSSA PLATAFORMA
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gmv-blue leading-tight mb-10">
              Conexões que
              <br />
              <span className="font-normal">geram valor</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 md:items-stretch"
          >
            {/* Card para Anunciantes */}
            <div className="flex">
              <PlatformCard
                title="Maximize o alcance da sua marca"
                subtitle="Anunciantes"
                description="Publicidade direcionada em locais estratégicos com relatórios detalhados."
                link="/anunciantes"
                linkText="Saiba Mais"
                features={anunciantesFeatures}
                bgColor="bg-gradient-to-br from-gmv-blue via-gmv-blue to-blue-700"
                badgeText="Para Empresas"
                image={heroImage}
                imageAlt="Anunciantes GMvision - Maximize o alcance da sua marca"
                isExpanded={isExpanded}
                onToggleExpand={toggleExpand}
              />
            </div>

            {/* Card para Estabelecimentos */}
            <div className="flex">
              <PlatformCard
                title="Modernize seu espaço"
                subtitle="Estabelecimentos"
                description="Tecnologia LED com instalação gratuita e receita adicional garantida."
                link="/estabelecimentos"
                linkText="Saiba Mais"
                features={estabelecimentosFeatures}
                bgColor="bg-gradient-to-br from-gray-700 via-gray-600 to-gmv-gray"
                badgeText="Para Locais"
                image={clinicImage}
                imageAlt="Estabelecimentos GMvision - Modernize seu espaço"
                isExpanded={isExpanded}
                onToggleExpand={toggleExpand}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
