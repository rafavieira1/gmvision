import { ArrowRight, Users, Building, TrendingUp, Zap, Target, MapPin, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import heroImage from "@/assets/hero-led-business.jpg";
import clinicImage from "@/assets/led-panel-clinic.jpg";

interface PlatformCardProps {
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

function PlatformCard({
  title,
  subtitle,
  description,
  link,
  linkText,
  features,
  bgColor,
  image,
  imageAlt,
}: PlatformCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 50 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-full"
    >
      <Card className={`overflow-hidden rounded-2xl ${bgColor} shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border-0`}>
        {/* Image at top */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>

        <CardContent className="p-6 flex-1 flex flex-col">
          {/* Title and Description */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gmv-blue mb-2 uppercase tracking-wide">
              {title}
            </h3>
            <p className="text-gmv-gray text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-2 mb-6 flex-1">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-gmv-gray text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <Link to={link} className="mt-auto">
            <LiquidButton 
              variant="default"
              size="lg"
              className="w-full text-gmv-blue font-medium [&>div:first-child]:shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(5,72,127,0.9),inset_-3px_-3px_0.5px_-3px_rgba(5,72,127,0.85),inset_1px_1px_1px_-0.5px_rgba(5,72,127,0.6),inset_-1px_-1px_1px_-0.5px_rgba(5,72,127,0.6),inset_0_0_6px_6px_rgba(5,72,127,0.12),inset_0_0_2px_2px_rgba(5,72,127,0.06),0_0_12px_rgba(255,255,255,0.15)]"
            >
              <div className="flex items-center">
                <span className="text-sm font-medium">{linkText}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </LiquidButton>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}

const TipoClienteSection = () => {
  const anunciantesFeatures = [
    "Segmentação Avançada",
    "Relatórios em Tempo Real",
    "Rede Nacional de Painéis",
    "Campanhas Personalizadas",
    "ROI Mensurado"
  ];

  const estabelecimentosFeatures = [
    "Instalação Gratuita",
    "Receita Adicional Garantida",
    "Tecnologia LED Moderna", 
    "Manutenção Inclusa",
    "Suporte 24/7"
  ];

  return (
    <section className="py-24" style={{backgroundColor: '#f7f7f7'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16 text-center"
          >
            <div className="text-base font-apparel uppercase tracking-wider mb-4" style={{ color: '#b8e600', WebkitTextStroke: '1px rgba(186, 233, 94, 0.74)' }}>
              DIFERENTES PÚBLICOS
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light font-halenoir text-gmv-blue leading-tight mb-10">
              Conexões geram
              <br />
              <span className="font-normal font-garamond"> valor</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {/* Card para Anunciantes */}
            <PlatformCard
              title="ANUNCIANTES"
              subtitle="Anunciantes"
              description="Maximize o alcance da sua marca com publicidade direcionada em locais estratégicos"
              link="/anunciantes"
              linkText="Saiba Mais"
              features={anunciantesFeatures}
              bgColor="bg-[#f7f7f7]"
              image={heroImage}
              imageAlt="Anunciantes GMvision - Maximize o alcance da sua marca"
            />

            {/* Card para Estabelecimentos */}
            <PlatformCard
              title="ESTABELECIMENTOS"
              subtitle="Estabelecimentos"
              description="Modernize seu espaço e gere receita adicional com nossa tecnologia LED"
              link="/estabelecimentos"
              linkText="Saiba Mais"
              features={estabelecimentosFeatures}
              bgColor="bg-[#f7f7f7]"
              image={clinicImage}
              imageAlt="Estabelecimentos GMvision - Modernize seu espaço"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TipoClienteSection;
