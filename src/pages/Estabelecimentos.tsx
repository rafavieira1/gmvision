import { useState } from "react";
import { ArrowRight, Monitor, Users, Zap, Settings, CheckCircle, MapPin, MessageCircle, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-led-business.jpg";

const Estabelecimentos = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    estabelecimento: "",
    tipo: "",
    localizacao: "",
    mensagem: ""
  });

  const stepProcess = [
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

  const requirements = [
    {
      title: "Fluxo de Pessoas",
      description: "Mínimo 200 pessoas/dia",
      icon: Users
    },
    {
      title: "Energia Elétrica", 
      description: "Tomada 110V/220V próxima",
      icon: Zap
    },
    {
      title: "Internet Wi-Fi",
      description: "Conexão estável mínima 10Mbps",
      icon: Settings
    },
    {
      title: "Espaço na Parede",
      description: "65cm x 40cm livres",
      icon: Monitor
    }
  ];

  const benefits = [
    "Receita adicional sem esforço",
    "Instalação 100% gratuita", 
    "Manutenção incluída",
    "Modernização do ambiente",
    "Conteúdo relevante para clientes",
    "Suporte técnico 24/7"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Interesse Registrado!",
      description: "Nossa equipe entrará em contato em até 24 horas.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gmv-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-tight mb-8">
              Transforme seu
              <br />
              <span className="font-normal text-gmv-lime">espaço</span>
              <br />
              <span className="font-normal">em receita</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
              Instale painéis LED gratuitos em seu estabelecimento e ganhe renda extra todo mês
            </p>
            <Button className="bg-gmv-lime text-gmv-blue px-8 py-4 rounded-full text-lg font-medium hover:bg-gmv-lime/90 transition-colors duration-200">
              <Monitor className="w-5 h-5 mr-2" />
              Quero ser Parceiro
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Large ESTABELECIMENTOS text at bottom */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <div className="w-full px-0">
            <h2 className="text-[6rem] md:text-[9rem] lg:text-[12rem] xl:text-[14rem] font-bold text-black/60 leading-none tracking-tighter opacity-90 text-center whitespace-nowrap overflow-hidden" style={{ fontFamily: 'Pavelt, sans-serif' }}>
              ESTABELECIMENTOS
            </h2>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-32 bg-gmv-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="text-base font-medium text-gmv-lime uppercase tracking-wider mb-8">
                PROCESSO SIMPLES
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gmv-blue leading-tight mb-8">
                Como se tornar
                <br />
                <span className="font-normal">nosso parceiro</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stepProcess.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gmv-blue flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gmv-blue mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gmv-gray leading-relaxed">
                    {step.description}
                  </p>
                  {index < stepProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full">
                      <ArrowRight className="w-6 h-6 text-gmv-lime mx-auto" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Contact Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-base font-medium text-gmv-lime uppercase tracking-wider mb-8">
              VAMOS NEGOCIAR
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gmv-blue leading-tight mb-10">
              Fale conosco sobre
              <br />
              <span className="font-normal">valores</span>
            </h2>
            <p className="text-xl text-gmv-gray max-w-2xl mx-auto mb-12">
              Cada estabelecimento é único. Vamos conversar no WhatsApp para definir o melhor modelo de parceria para você.
            </p>
            
            <div className="flex flex-col items-center space-y-8">
              <a
                href="https://wa.me/5511999999999?text=Olá! Tenho interesse em ser parceiro da GMvision instalando painéis LED no meu estabelecimento. Gostaria de saber mais sobre valores e modelos de parceria."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gmv-lime text-gmv-blue rounded-full text-lg font-medium hover:bg-gmv-lime/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Conversar sobre Parceria
                <ArrowRight className="w-5 h-5 ml-3" />
              </a>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <TrendingUp className="w-8 h-8 text-gmv-lime mb-2" />
                  <span className="text-gmv-gray">Revenue Share</span>
                  <span className="text-sm text-gmv-gray/70">20% a 40% da receita</span>
                </div>
                <div className="flex flex-col items-center">
                  <Monitor className="w-8 h-8 text-gmv-lime mb-2" />
                  <span className="text-gmv-gray">Aluguel Fixo</span>
                  <span className="text-sm text-gmv-gray/70">Valor mensal garantido</span>
                </div>
                <div className="flex flex-col items-center">
                  <CheckCircle className="w-8 h-8 text-gmv-lime mb-2" />
                  <span className="text-gmv-gray">Modelo Híbrido</span>
                  <span className="text-sm text-gmv-gray/70">Fixo + Performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requisitos Section */}
      <section className="py-32 bg-gmv-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="text-base font-medium text-gmv-lime uppercase tracking-wider mb-8">
                REQUISITOS
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gmv-blue leading-tight mb-8">
                O que você
                <br />
                <span className="font-normal">precisa ter</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {requirements.map((req, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gmv-blue flex items-center justify-center">
                    <req.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gmv-blue mb-4">
                    {req.title}
                  </h3>
                  <p className="text-gmv-gray leading-relaxed">
                    {req.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-semibold text-gmv-blue mb-6">O que você ganha:</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-gmv-lime mr-4 flex-shrink-0" />
                      <span className="text-lg text-gmv-gray">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="border-2 border-gmv-lime bg-gmv-lime/5">
                <CardContent className="p-8 text-center">
                  <MapPin className="w-16 h-16 mx-auto mb-6 text-gmv-blue" />
                  <h3 className="text-2xl font-semibold text-gmv-blue mb-4">Avaliação Gratuita</h3>
                  <p className="text-gmv-gray mb-6">
                    Nossa equipe técnica faz uma visita gratuita para avaliar seu espaço e definir 
                    as melhores localizações para os painéis.
                  </p>
                  <Button className="bg-gmv-blue text-white hover:bg-gmv-blue/90">
                    Agendar Visita
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-base font-medium text-gmv-lime uppercase tracking-wider mb-8">
                VAMOS COMEÇAR
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gmv-blue leading-tight mb-8">
                Registre seu
                <br />
                <span className="font-normal">interesse</span>
              </h2>
              <p className="text-xl text-gmv-gray max-w-2xl mx-auto">
                Preencha o formulário e agende uma avaliação gratuita do seu estabelecimento
              </p>
            </div>

            <Card className="border-2 border-gray-200">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome" className="text-gmv-blue font-medium">Nome Completo*</Label>
                      <Input 
                        id="nome" 
                        value={formData.nome}
                        onChange={(e) => handleInputChange('nome', e.target.value)}
                        className="border-gray-300 focus:border-gmv-blue"
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gmv-blue font-medium">E-mail*</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="border-gray-300 focus:border-gmv-blue"
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="telefone" className="text-gmv-blue font-medium">Telefone*</Label>
                      <Input 
                        id="telefone" 
                        value={formData.telefone}
                        onChange={(e) => handleInputChange('telefone', e.target.value)}
                        className="border-gray-300 focus:border-gmv-blue"
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="estabelecimento" className="text-gmv-blue font-medium">Nome do Estabelecimento*</Label>
                      <Input 
                        id="estabelecimento" 
                        value={formData.estabelecimento}
                        onChange={(e) => handleInputChange('estabelecimento', e.target.value)}
                        className="border-gray-300 focus:border-gmv-blue"
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="tipo" className="text-gmv-blue font-medium">Tipo de Estabelecimento*</Label>
                      <Select onValueChange={(value) => handleInputChange('tipo', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-gmv-blue">
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="academia">Academia/Studio</SelectItem>
                          <SelectItem value="clinica">Clínica/Consultório</SelectItem>
                          <SelectItem value="condominio">Condomínio</SelectItem>
                          <SelectItem value="elevador">Elevadores</SelectItem>
                          <SelectItem value="comercial">Centro Comercial</SelectItem>
                          <SelectItem value="restaurante">Restaurante/Café</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="localizacao" className="text-gmv-blue font-medium">Cidade/Bairro*</Label>
                      <Input 
                        id="localizacao" 
                        placeholder="Ex: São Paulo - Vila Olímpia"
                        value={formData.localizacao}
                        onChange={(e) => handleInputChange('localizacao', e.target.value)}
                        className="border-gray-300 focus:border-gmv-blue"
                        required 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensagem" className="text-gmv-blue font-medium">Informações Adicionais</Label>
                    <Textarea 
                      id="mensagem" 
                      placeholder="Descreva seu estabelecimento: fluxo de pessoas, horário de funcionamento, espaços disponíveis..."
                      value={formData.mensagem}
                      onChange={(e) => handleInputChange('mensagem', e.target.value)}
                      className="min-h-[120px] border-gray-300 focus:border-gmv-blue"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gmv-lime text-gmv-blue hover:bg-gmv-lime/90 py-4 text-lg font-medium"
                    size="lg"
                  >
                    <Monitor className="w-5 h-5 mr-2" />
                    Solicitar Avaliação Gratuita
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Estabelecimentos;