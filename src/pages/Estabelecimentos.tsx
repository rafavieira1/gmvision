import { memo } from "react";
import { ArrowRight, ArrowDown, Monitor, Users, Building2, Settings, CheckCircle, MapPin, MessageCircle, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "/invert.png";

// TypeScript Interfaces
interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface Requirement {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Constants
const STEP_PROCESS: ProcessStep[] = [
  {
    number: "01",
    title: "Cadastre seu Interesse",
    description: "Preencha o formulário com dados do seu estabelecimento"
  },
  {
    number: "02", 
    title: "Avaliação Gratuita",
    description: "Nossa equipe visita e avalia o potencial do seu espaço"
  },
  {
    number: "03",
    title: "Instalação Gratuita",
    description: "Instalamos os painéis LED sem custo para você"
  },
  {
    number: "04",
    title: "Comece a Ganhar",
    description: "Receba sua primeira receita em até 30 dias"
  }
];

const REQUIREMENTS: Requirement[] = [
  {
    title: "Fluxo de Pessoas",
    description: "Mínimo 200 pessoas/dia",
    icon: Users
  },
  {
    title: "Infraestrutura", 
    description: "Tomada 110V/220V próxima",
    icon: Building2
  },
  {
    title: "Internet Wi-Fi",
    description: "Conexão estável mínima 10Mbps",
    icon: Settings
  }
];

const BENEFITS: string[] = [
  "Renda extra sem esforço",
  "Instalação e manutenção gratuitas", 
  "Modernização do ambiente",
  "Conteúdo próprio nos displays",
  "Gestão completa de anunciantes",
  "Aprovação de cada anúncio"
];

const WHATSAPP_MESSAGE = "Olá! Tenho interesse em ser parceiro da GMvision instalando painéis LED no meu estabelecimento. Gostaria de saber mais sobre valores e modelos de parceria.";

// Memoized Components
const HeroSection = memo(() => (
  <section className="relative h-screen overflow-hidden" aria-label="Seção principal para estabelecimentos">
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
      role="img"
      aria-label="Imagem de fundo mostrando estabelecimento"
    ></div>
    
    {/* Título Estabelecimentos centralizado - mobile: mais baixo, desktop: logo abaixo da navbar */}
    <div className="relative pt-64 sm:pt-80 md:pt-40 lg:pt-48 text-center px-4">
      <h1 className="text-[1.75rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gmv-gray leading-none tracking-tighter mb-8 sm:mb-12 md:mb-16" style={{ fontFamily: 'Pavelt, sans-serif' }}>
        ESTABELECIMENTOS
      </h1>
      
      {/* Subtítulo */}
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gmv-gray leading-relaxed max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 px-2">
        Transforme seu espaço em um ponto de mídia rentável.<br />
        Gere renda extra com displays modernos e gratuitos.
      </p>
      
      {/* Botão Liquid Glass */}
      <div className="flex justify-center">
        <LiquidButton 
          variant="default" 
          size="xl"
          className="text-gmv-blue font-semibold text-sm sm:text-base"
          onClick={() => {
            const element = document.querySelector('#process-section');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          aria-label="Rolar para baixo para ver mais informações"
        >
          <div className="flex items-center">
            Confira Abaixo
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" />
          </div>
        </LiquidButton>
      </div>
    </div>
  </section>
));

const ProcessSection = memo(() => (
  <section id="process-section" className="py-16 sm:py-24 md:py-32" style={{backgroundColor: '#f7f7f7'}} aria-label="Como se tornar nosso parceiro">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="text-sm sm:text-base mb-6 sm:mb-8 font-halenoir italic" style={{ color: '#000', textTransform: 'uppercase', WebkitTextStroke: '0' }}>
            PROCESSO SIMPLES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light font-halenoir text-gmv-blue leading-tight mb-6 sm:mb-8">
            Como se tornar
            <br />
            nosso parceiro
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" role="list">
          {STEP_PROCESS.map((step, index) => (
            <div key={index} className="text-center relative" role="listitem">
              <div 
                className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gmv-blue flex items-center justify-center"
                aria-label={`Passo ${step.number}`}
              >
                <span className="text-xl sm:text-2xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gmv-blue mb-3 sm:mb-4 px-2">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-gmv-gray leading-relaxed px-2">
                {step.description}
              </p>
              {index < STEP_PROCESS.length - 1 && (
                <div className="hidden lg:block absolute top-8 sm:top-10 left-full w-full" aria-hidden="true">
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-gmv-lime mx-auto" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
));

const WhatsAppSection = memo(() => (
  <section className="py-16 sm:py-24 md:py-32 bg-gray-50" aria-label="Contato via WhatsApp">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-sm sm:text-base mb-6 sm:mb-8 font-halenoir italic" style={{ color: '#000', textTransform: 'uppercase', WebkitTextStroke: '0' }}>
          VAMOS NEGOCIAR
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light font-halenoir text-gmv-blue leading-tight mb-6 sm:mb-8 md:mb-10">
          Fale conosco sobre
          <br />
          valores
        </h2>
        <p className="text-lg sm:text-xl text-gmv-gray max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 px-2">
          Cada estabelecimento é único. Vamos conversar no WhatsApp para definir o melhor modelo de parceria para você.
        </p>
        
        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
          <a
            href={`https://wa.me/5511936208864?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir conversa no WhatsApp sobre parceria"
          >
            <button 
              className="bg-gmv-lime text-gmv-blue hover:bg-gmv-lime/90 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105 inline-flex items-center"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              Conversar sobre Parceria
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" />
            </button>
          </a>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center w-full max-w-2xl" role="list">
            <div className="flex flex-col items-center" role="listitem">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-gmv-lime mb-2" />
              <span className="text-sm sm:text-base text-gmv-gray">Revenue Share</span>
            </div>
            <div className="flex flex-col items-center" role="listitem">
              <Monitor className="w-6 h-6 sm:w-8 sm:h-8 text-gmv-lime mb-2" />
              <span className="text-sm sm:text-base text-gmv-gray">Aluguel Fixo</span>
            </div>
            <div className="flex flex-col items-center" role="listitem">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-gmv-lime mb-2" />
              <span className="text-sm sm:text-base text-gmv-gray">Modelo Híbrido</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
));

const RequirementsSection = memo(() => (
  <section className="py-16 sm:py-24 md:py-32" style={{backgroundColor: '#f7f7f7'}} aria-label="Requisitos e benefícios">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="text-sm sm:text-base mb-6 sm:mb-8 font-halenoir italic" style={{ color: '#000', textTransform: 'uppercase', WebkitTextStroke: '0' }}>
            REQUISITOS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light font-halenoir text-gmv-blue leading-tight mb-6 sm:mb-8">
            O que você
            <br />
            precisa ter
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 justify-center" role="list">
          {REQUIREMENTS.map((req, index) => (
            <div key={index} className="text-center" role="listitem">
              <div 
                className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gmv-blue flex items-center justify-center"
                aria-label={req.title}
              >
                <req.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gmv-blue mb-3 sm:mb-4 px-2">
                {req.title}
              </h3>
              <p className="text-sm sm:text-base text-gmv-gray px-2">{req.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gmv-blue mb-4 sm:mb-6 text-center lg:text-left">O que você ganha:</h3>
            <div className="space-y-3 sm:space-y-4" role="list">
              {BENEFITS.map((benefit, index) => (
                <div key={index} className="flex items-center" role="listitem">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-gmv-lime mr-3 sm:mr-4 flex-shrink-0" />
                  <span className="text-base sm:text-lg text-gmv-gray">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <Card className="border-2 border-gmv-lime bg-gmv-lime/5 order-1 lg:order-2">
            <CardContent className="p-6 sm:p-8 text-center">
              <MapPin className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-gmv-blue" />
              <h3 className="text-xl sm:text-2xl font-semibold text-gmv-blue mb-3 sm:mb-4">Avaliação Gratuita</h3>
              <p className="text-sm sm:text-base text-gmv-gray mb-4 sm:mb-6 leading-relaxed">
                Nossa equipe técnica faz uma visita gratuita para avaliar seu espaço e definir 
                as melhores localizações para os painéis.
              </p>
              <a
                href={`https://wa.me/5511936208864?text=${encodeURIComponent('Olá! Gostaria de agendar uma visita técnica gratuita para avaliação do meu estabelecimento para instalação de painéis LED da GMvision.')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  className="bg-gmv-blue text-white hover:bg-gmv-blue/90 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium w-full sm:w-auto"
                  aria-label="Agendar visita técnica gratuita via WhatsApp"
                >
                  Agendar Visita
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
));

const Estabelecimentos = memo(() => {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f7f7f7'}}>
      <Header />
      <HeroSection />
      <ProcessSection />
      <WhatsAppSection />
      <RequirementsSection />
      <Footer />
    </div>
  );
});

Estabelecimentos.displayName = 'Estabelecimentos';

export default Estabelecimentos;