import React, { memo } from "react";
import { ArrowRight, ArrowDown, Play, Calendar, MessageCircle, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "/invert.avif";

// TypeScript interfaces
interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface SpecItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  items: string[];
}

// Constants
const STEP_PROCESS: ProcessStep[] = [
  {
    number: "01",
    title: "Envie sua Proposta",
    description: "Preencha o formulário com seus dados e objetivos de campanha"
  },
  {
    number: "02", 
    title: "Análise Personalizada",
    description: "Nossa equipe analisa seu perfil e sugere os melhores locais"
  },
  {
    number: "03",
    title: "Aprovação e Criação",
    description: "Você aprova a proposta e criamos o material da campanha"
  },
  {
    number: "04",
    title: "Veiculação e Relatórios",
    description: "Sua campanha entra no ar com relatórios em tempo real"
  }
] as const;

const SPECS: SpecItem[] = [
  {
    icon: Play,
    title: "Formatos Aceitos",
    items: ["Vídeo MP4 até 30s", "Imagens JPG/PNG", "Resolução Full HD", "Tamanho máximo 10MB"]
  },
  {
    icon: Calendar,
    title: "Horários de Exibição", 
    items: ["Os anúncios seguem o horário de funcionamento do estabelecimento", "Ciclos de 10-15 segundos", "Personalização por local", "Agendamento flexível"]
  },
  {
    icon: MessageCircle,
    title: "Negociação Personalizada",
    items: ["Consulta via WhatsApp", "Proposta sob medida", "Suporte especializado", "Flexibilidade total"]
  }
] as const;

// Components
const PageLayout = memo(({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen" style={{ backgroundColor: '#f7f7f7' }}>
    <Header />
    <main role="main" aria-label="Página para anunciantes">
      {children}
    </main>
    <Footer />
  </div>
));
PageLayout.displayName = 'PageLayout';

const Anunciantes = memo(() => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" aria-hidden="true" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
          role="img"
          aria-label="Imagem de fundo da seção hero"
        />
        
        {/* Título Anunciantes centralizado - mobile: mais baixo, desktop: logo abaixo da navbar */}
        <div className="relative pt-64 sm:pt-80 md:pt-40 lg:pt-48 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gmv-gray leading-none tracking-tighter mb-8 sm:mb-12 md:mb-16" style={{ fontFamily: 'Pavelt, sans-serif' }}>
            ANUNCIANTES
          </h1>
          
          {/* Subtítulo */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gmv-gray leading-relaxed max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 px-2">
            Abandone a publicidade em massa.<br />
            Atinja seu público-alvo com visibilidade segmentada e estratégica.
          </p>
          
          {/* Botão Liquid Glass */}
          <div className="flex justify-center">
            <LiquidButton 
              variant="default" 
              size="xl"
              className="text-gmv-blue font-semibold text-sm sm:text-base"
              onClick={() => {
                const element = document.querySelector('#como-funciona-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              aria-label="Rolar para baixo para ver mais informações"
            >
              <div className="flex items-center">
                Confira Abaixo
                <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" aria-hidden="true" />
              </div>
            </LiquidButton>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona-section" className="py-16 sm:py-24 md:py-32" style={{ backgroundColor: '#f7f7f7' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <div className="text-sm sm:text-base mb-6 sm:mb-8 font-halenoir italic" style={{ color: '#000', textTransform: 'uppercase', WebkitTextStroke: '0' }}>
                PROCESSO SIMPLES
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light font-halenoir text-gmv-blue leading-tight mb-6 sm:mb-8">
                Como<br />funciona
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {STEP_PROCESS.map((step, index) => (
                <div key={step.number} className="text-center relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gmv-blue flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-bold text-white" aria-label={`Passo ${step.number}`}>
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gmv-blue mb-3 sm:mb-4 px-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gmv-gray leading-relaxed px-2">
                    {step.description}
                  </p>
                  {index < STEP_PROCESS.length - 1 && (
                    <div className="hidden lg:block absolute top-8 sm:top-10 left-full w-full">
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-gmv-lime mx-auto" aria-hidden="true" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Especificações Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <div className="text-sm sm:text-base mb-6 sm:mb-8 font-halenoir italic" style={{ color: '#000', textTransform: 'uppercase', WebkitTextStroke: '0' }}>
                ESPECIFICAÇÕES
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light font-halenoir text-gmv-blue leading-tight mb-6 sm:mb-8">
                Formatos e
                <br />
                configurações
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {SPECS.map((spec, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-gmv-blue hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center pb-3 sm:pb-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gmv-blue flex items-center justify-center">
                      <spec.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl text-gmv-blue px-2">{spec.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6">
                    <ul className="space-y-2 sm:space-y-3">
                      {spec.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-xs sm:text-sm">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-gmv-lime mr-2 sm:mr-3 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-gmv-gray leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Contact Section */}
      <section className="py-16 sm:py-24 md:py-32" style={{ backgroundColor: '#f7f7f7' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm sm:text-base mb-6 sm:mb-8 font-halenoir italic" style={{ color: '#000', textTransform: 'uppercase', WebkitTextStroke: '0' }}>
              FALE CONOSCO
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light font-halenoir text-gmv-blue leading-tight mb-6 sm:mb-8 md:mb-10">
              Vamos conversar<br />sobre valores
            </h2>
            <p className="text-lg sm:text-xl text-gmv-gray max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 px-2">
              Cada projeto é único. Vamos conversar no WhatsApp para criar uma proposta personalizada para sua marca.
            </p>
            
            <div className="flex flex-col items-center space-y-6 sm:space-y-8">
              <a
                href="https://wa.me/5511936208864?text=Olá! Tenho interesse em criar uma campanha publicitária com a GMvision. Gostaria de saber mais sobre valores e condições."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conversar no WhatsApp sobre campanhas publicitárias"
              >
                <button 
                  className="bg-gmv-lime text-gmv-blue hover:bg-gmv-lime/90 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105 inline-flex items-center"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" aria-hidden="true" />
                  Conversar no WhatsApp
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" aria-hidden="true" />
                </button>
              </a>
              
              <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 md:space-x-8 text-gmv-gray text-sm sm:text-base">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gmv-lime mr-2" aria-hidden="true" />
                  <span>Resposta em até 1 hora</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gmv-lime mr-2" aria-hidden="true" />
                  <span>Proposta personalizada</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gmv-lime mr-2" aria-hidden="true" />
                  <span>Sem compromisso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
});

Anunciantes.displayName = 'Anunciantes';

export default Anunciantes;