import { useState } from "react";
import { ArrowRight, Target, BarChart3, Users, Zap, TrendingUp, CheckCircle, Play, Calendar, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-led-business.jpg";

const Anunciantes = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    segmento: "",
    orcamento: "",
    mensagem: ""
  });

  const stepProcess = [
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
  ];

  const specs = [
    {
      icon: Play,
      title: "Formatos Aceitos",
      items: ["Vídeo MP4 até 30s", "Imagens JPG/PNG", "Resolução Full HD", "Tamanho máximo 10MB"]
    },
    {
      icon: Calendar,
      title: "Horários de Exibição", 
      items: ["6h às 22h diariamente", "Ciclos de 15-30 segundos", "Personalização por local", "Agendamento flexível"]
    },
    {
      icon: MessageCircle,
      title: "Negociação Personalizada",
      items: ["Consulta via WhatsApp", "Proposta sob medida", "Suporte especializado", "Flexibilidade total"]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Proposta Enviada!",
      description: "Nossa equipe entrará em contato em até 24 horas.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gmv-white">
      <Header />
      
      {/* Hero Section Simplificado */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-tight mb-8">
              Anuncie onde
              <br />
              <span className="font-normal text-gmv-lime">sua marca</span>
              <br />
              <span className="font-normal">importa</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
              Painéis LED inteligentes em locais estratégicos para maximizar o impacto da sua campanha
            </p>
            <Button className="bg-gmv-lime text-gmv-blue px-8 py-4 rounded-full text-lg font-medium hover:bg-gmv-lime/90 transition-colors duration-200">
              <TrendingUp className="w-5 h-5 mr-2" />
              Criar Minha Campanha
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Large ANUNCIANTES text at bottom */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <div className="w-full px-0">
            <h2 className="text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[18rem] font-bold text-black/60 leading-none tracking-tighter opacity-90 text-center whitespace-nowrap overflow-hidden" style={{ fontFamily: 'Pavelt, sans-serif' }}>
              ANUNCIANTES
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
                Como
                <br />
                <span className="font-normal">funciona</span>
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

      {/* Especificações Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="text-base font-medium text-gmv-lime uppercase tracking-wider mb-8">
                ESPECIFICAÇÕES
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gmv-blue leading-tight mb-8">
                Formatos e
                <br />
                <span className="font-normal">configurações</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {specs.map((spec, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-gmv-blue hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gmv-blue flex items-center justify-center">
                      <spec.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gmv-blue">{spec.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {spec.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-gmv-lime mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gmv-gray">{item}</span>
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
      <section className="py-32 bg-gmv-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-base font-medium text-gmv-lime uppercase tracking-wider mb-8">
              FALE CONOSCO
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gmv-blue leading-tight mb-10">
              Vamos conversar
              <br />
              <span className="font-normal">sobre valores</span>
            </h2>
            <p className="text-xl text-gmv-gray max-w-2xl mx-auto mb-12">
              Cada projeto é único. Vamos conversar no WhatsApp para criar uma proposta personalizada para sua marca.
            </p>
            
            <div className="flex flex-col items-center space-y-8">
              <a
                href="https://wa.me/5511999999999?text=Olá! Tenho interesse em criar uma campanha publicitária com a GMvision. Gostaria de saber mais sobre valores e condições."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gmv-lime text-gmv-blue rounded-full text-lg font-medium hover:bg-gmv-lime/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Conversar no WhatsApp
                <ArrowRight className="w-5 h-5 ml-3" />
              </a>
              
              <div className="flex items-center space-x-8 text-gmv-gray">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gmv-lime mr-2" />
                  <span>Resposta em até 1 hora</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gmv-lime mr-2" />
                  <span>Proposta personalizada</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gmv-lime mr-2" />
                  <span>Sem compromisso</span>
                </div>
              </div>
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
                Solicite sua
                <br />
                <span className="font-normal">proposta</span>
              </h2>
              <p className="text-xl text-gmv-gray max-w-2xl mx-auto">
                Preencha o formulário e receba uma proposta personalizada em até 24 horas
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
                      <Label htmlFor="email" className="text-gmv-blue font-medium">E-mail Corporativo*</Label>
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
                      <Label htmlFor="empresa" className="text-gmv-blue font-medium">Empresa*</Label>
                      <Input 
                        id="empresa" 
                        value={formData.empresa}
                        onChange={(e) => handleInputChange('empresa', e.target.value)}
                        className="border-gray-300 focus:border-gmv-blue"
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="segmento" className="text-gmv-blue font-medium">Segmento</Label>
                      <Select onValueChange={(value) => handleInputChange('segmento', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-gmv-blue">
                          <SelectValue placeholder="Selecione seu segmento" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fitness">Fitness e Esportes</SelectItem>
                          <SelectItem value="saude">Saúde e Bem-estar</SelectItem>
                          <SelectItem value="tecnologia">Tecnologia</SelectItem>
                          <SelectItem value="educacao">Educação</SelectItem>
                          <SelectItem value="alimentacao">Alimentação</SelectItem>
                          <SelectItem value="varejo">Varejo</SelectItem>
                          <SelectItem value="servicos">Serviços</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="orcamento" className="text-gmv-blue font-medium">Orçamento Mensal</Label>
                      <Select onValueChange={(value) => handleInputChange('orcamento', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-gmv-blue">
                          <SelectValue placeholder="Faixa de investimento" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ate-500">Até R$ 500</SelectItem>
                          <SelectItem value="500-1000">R$ 500 - R$ 1.000</SelectItem>
                          <SelectItem value="1000-3000">R$ 1.000 - R$ 3.000</SelectItem>
                          <SelectItem value="3000-5000">R$ 3.000 - R$ 5.000</SelectItem>
                          <SelectItem value="acima-5000">Acima de R$ 5.000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensagem" className="text-gmv-blue font-medium">Objetivos da Campanha</Label>
                    <Textarea 
                      id="mensagem" 
                      placeholder="Conte-nos sobre seus objetivos, público-alvo e como podemos ajudar..."
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
                    <Zap className="w-5 h-5 mr-2" />
                    Enviar Proposta Gratuita
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

export default Anunciantes;