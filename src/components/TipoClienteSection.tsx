import { ArrowRight, Users, Building, TrendingUp, Zap, Target, MapPin, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
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
            <button className="inline-flex items-center px-6 py-3 border border-gmv-blue text-gmv-blue rounded-full hover:bg-gmv-blue hover:text-white transition-all duration-300 hover:scale-105 w-full justify-center">
              <span className="text-sm font-medium">{linkText}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}

const TipoClienteSection = () => {
  const anunciantesFeatures = [
    "Visibilidade segmentada",
    "Alcance local direcionado", 
    "Custo-benefício otimizado",
    "Consultoria estratégica",
    "Aprovação do estabelecimento"
  ];

  const estabelecimentosFeatures = [
    "Renda extra garantida",
    "Modernização do ambiente",
    "Instalação e manutenção gratuitas",
    "Conteúdo próprio nos displays",
    "Gestão completa de anunciantes"
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
            <div className="text-base mb-4 font-halenoir italic" style={{ color: '#000', textTransform: 'uppercase', WebkitTextStroke: '0' }}>
              PROSPERIDADE COMPARTILHADA
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light font-halenoir text-gmv-blue leading-tight mb-10">
              Conectamos negócios
              <br />
              e criamos valor
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
              description="Abandone a publicidade em massa e atinja seu público-alvo de forma segmentada em estabelecimentos estratégicos, aumentando suas vendas com publicidade inteligente."
              link="/anunciantes"
              linkText="Saiba Mais"
              features={anunciantesFeatures}
              bgColor="bg-[#f7f7f7]"
              image={heroImage}
              imageAlt="Anunciantes GMvision - Publicidade segmentada e estratégica"
            />

            {/* Card para Estabelecimentos */}
            <PlatformCard
              title="ESTABELECIMENTOS"
              subtitle="Estabelecimentos"
              description="Transforme seu espaço em um ponto de mídia rentável. Cada display instalado gera renda extra enquanto moderniza seu ambiente com tecnologia LED de ponta."
              link="/estabelecimentos"
              linkText="Saiba Mais"
              features={estabelecimentosFeatures}
              bgColor="bg-[#f7f7f7]"
              image={clinicImage}
              imageAlt="Estabelecimentos GMvision - Renda extra e modernização"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TipoClienteSection;
