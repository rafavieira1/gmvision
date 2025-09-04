import { ArrowRight, Users, Building, TrendingUp, Zap, Target, MapPin, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useExpandable } from "@/hooks/use-expandable";
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
}: PlatformCardProps) {
  const { isExpanded, toggleExpand, animatedHeight } = useExpandable();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      animatedHeight.set(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded, animatedHeight]);

  return (
    <Card
      className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] rounded-3xl overflow-hidden ${bgColor} shadow-lg flex flex-col h-full`}
      onClick={toggleExpand}
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
          style={{ height: animatedHeight }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="overflow-hidden"
        >
          <div ref={contentRef}>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 pt-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Image */}
                  <div className="rounded-xl overflow-hidden">
                    <img 
                      src={image} 
                      alt={imageAlt}
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-medium text-white flex items-center">
                      <Target className="h-4 w-4 mr-2 text-gmv-lime" />
                      Principais Benefícios
                    </h4>
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-white/10 rounded-lg p-3 border border-white/10">
                        <feature.icon className="h-5 w-5 text-gmv-lime mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-white font-medium text-sm">{feature.title}</div>
                          <div className="text-white/80 text-xs leading-relaxed">{feature.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
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
                toggleExpand();
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
  );
}

const PlatformSection = () => {
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
          <div className="mb-16">
            <div className="text-sm font-medium text-gmv-lime uppercase tracking-wider mb-4">
              NOSSA PLATAFORMA
            </div>
            <h2 className="text-3xl md:text-4xl font-normal text-gmv-blue leading-relaxed max-w-4xl">
              Conectamos empresas que querem anunciar com estabelecimentos 
              que querem modernizar sua comunicação visual
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:items-stretch">
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
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
