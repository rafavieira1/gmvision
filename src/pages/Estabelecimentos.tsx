import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  Monitor, Zap, DollarSign, Users, Settings, 
  Wifi, Power, Ruler, ChevronDown, CheckCircle, 
  ArrowRight, Shield, Wrench, BarChart3, Trophy 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    espacos: "",
    mensagem: ""
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: DollarSign,
      title: "Receita Adicional",
      description: "Gere renda extra com seu espaço sem interferir nas atividades principais do estabelecimento."
    },
    {
      icon: Monitor,
      title: "Modernização Gratuita",
      description: "Receba tecnologia LED de ponta sem investimento inicial. Instalação e equipamento por nossa conta."
    },
    {
      icon: Users,
      title: "Melhora na Experiência",
      description: "Ofereça conteúdo relevante aos seus clientes durante tempos de espera ou deslocamento."
    },
    {
      icon: Shield,
      title: "Suporte Completo",
      description: "Manutenção, suporte técnico e gestão de conteúdo totalmente inclusos na parceria."
    }
  ];

  const partnershipModels = [
    {
      title: "Revenue Share",
      description: "Compartilhamento de receita publicitária",
      details: "Receba de 20% a 40% da receita gerada pelos anúncios em seu estabelecimento",
      icon: BarChart3,
      popular: true
    },
    {
      title: "Aluguel Fixo",
      description: "Valor mensal garantido pelo espaço",
      details: "Receba entre R$ 200 a R$ 800 mensais por painel, dependendo do local e movimento",
      icon: DollarSign,
      popular: false
    },
    {
      title: "Híbrido",
      description: "Combinação de valor fixo + percentual",
      details: "Valor base mensal + percentual da receita publicitária acima de metas",
      icon: Trophy,
      popular: false
    }
  ];

  const requirements = [
    { icon: Power, title: "Energia Elétrica", description: "Tomada 110V/220V próxima ao local de instalação" },
    { icon: Wifi, title: "Internet", description: "Conexão Wi-Fi estável com pelo menos 10Mbps" },
    { icon: Ruler, title: "Espaço Físico", description: "Parede livre de 65cm x 40cm para fixação" },
    { icon: Users, title: "Fluxo Mínimo", description: "Pelo menos 200 pessoas/dia circulando pelo local" }
  ];

  const faqData = [
    {
      question: "Qual o investimento necessário para se tornar parceiro?",
      answer: "Zero! Nós fornecemos todo o equipamento, fazemos a instalação e arcamos com os custos de manutenção. Você apenas disponibiliza o espaço e energia elétrica."
    },
    {
      question: "Como funciona a divisão de receita?",
      answer: "Dependendo do modelo escolhido, você pode receber um valor fixo mensal ou uma porcentagem da receita publicitária (20-40%). O valor varia conforme localização, fluxo de pessoas e performance dos anúncios."
    },
    {
      question: "Posso controlar que tipo de anúncio é exibido?",
      answer: "Sim! Você tem poder de veto sobre conteúdos inadequados para seu estabelecimento. Priorizamos anúncios relevantes para seu público e que agreguem valor à experiência dos clientes."
    },
    {
      question: "E se o equipamento quebrar?",
      answer: "Temos equipe técnica especializada e SLA de 24h para resolução de problemas. Manutenção preventiva e corretiva está incluída no contrato sem custo adicional."
    },
    {
      question: "Qual o prazo de contrato?",
      answer: "Contratos flexíveis de 12 a 36 meses. Quanto maior o prazo, melhores as condições de revenue share oferecidas."
    },
    {
      question: "Posso cancelar a parceria?",
      answer: "Sim, com 30 dias de antecedência. Removemos todo o equipamento sem custo para você. Sem taxas de cancelamento ou penalidades."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Interesse Registrado!",
      description: "Nossa equipe entrará em contato em até 24 horas para uma avaliação gratuita do seu espaço.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-dark opacity-60"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
            <h1 className="text-display font-bold text-white leading-tight">
              Transforme seu Espaço em 
              <span className="text-gradient-primary"> Fonte de Receita</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Instale painéis LED gratuitos e ganhe renda extra modernizando seu estabelecimento. 
              Tecnologia de ponta, instalação gratuita e suporte completo.
            </p>
            <Button variant="hero" size="xl" className="animate-pulse-glow">
              <Monitor className="w-5 h-5 mr-2" />
              Quero ser Parceiro
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-section font-bold mb-6 text-gradient-primary">
              Vantagens de ser nosso Parceiro
            </h2>
            <p className="text-lg text-muted-foreground">
              Uma parceria que moderniza seu espaço, gera receita e melhora a experiência dos seus clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-tech transition-smooth border-border/50 hover:border-primary/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-section font-bold mb-6">
              Modelos de Parceria
            </h2>
            <p className="text-lg text-muted-foreground">
              Escolha o modelo que melhor se adapta ao seu negócio. Flexibilidade total para maximizar seus ganhos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {partnershipModels.map((model, index) => (
              <Card key={index} className={`relative hover:shadow-tech transition-smooth ${model.popular ? 'border-primary shadow-tech scale-105' : 'border-border/50'}`}>
                {model.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="gradient-primary text-white text-sm font-medium px-4 py-2 rounded-full">
                      Mais Escolhido
                    </div>
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-secondary flex items-center justify-center">
                    <model.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{model.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{model.description}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-sm text-muted-foreground mb-6">
                    {model.details}
                  </p>
                  <Button 
                    variant={model.popular ? "gradient" : "outline"} 
                    className="w-full"
                  >
                    Saber Mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-section font-bold mb-6 text-gradient-primary">
              Requisitos Técnicos
            </h2>
            <p className="text-lg text-muted-foreground">
              Requisitos simples para garantir o funcionamento perfeito dos painéis em seu estabelecimento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requirements.map((req, index) => (
              <Card key={index} className="hover:shadow-tech transition-smooth border-border/50 hover:border-primary/50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg gradient-primary flex items-center justify-center">
                    <req.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">
                    {req.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {req.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto border-primary/30 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Avaliação Gratuita</h3>
                <p className="text-muted-foreground text-sm">
                  Nossa equipe técnica faz uma visita gratuita para avaliar a viabilidade 
                  e definir a melhor localização para os painéis em seu estabelecimento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-section font-bold mb-6">
              Suporte e Manutenção Completos
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Você não precisa se preocupar com nada técnico. Cuidamos de tudo para você.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border/50">
                <CardContent className="p-6 text-center">
                  <Wrench className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Manutenção 24/7</h3>
                  <p className="text-sm text-muted-foreground">
                    Suporte técnico e manutenção preventiva/corretiva sem custo adicional.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6 text-center">
                  <Monitor className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Gestão Remota</h3>
                  <p className="text-sm text-muted-foreground">
                    Monitoramento e atualizações remotas. Você não precisa fazer nada.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Garantia Total</h3>
                  <p className="text-sm text-muted-foreground">
                    Equipamentos com garantia completa e reposição imediata em caso de problemas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-section font-bold mb-6 text-gradient-primary">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Esclarecemos as principais dúvidas sobre nossa parceria.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index} className="border-border/50">
                <Collapsible 
                  open={openFaq === index} 
                  onOpenChange={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-muted/50 transition-smooth">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-base text-left">{faq.question}</CardTitle>
                        <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-section font-bold mb-6">
                Registre seu Interesse
              </h2>
              <p className="text-lg text-muted-foreground">
                Preencha o formulário e agende uma avaliação gratuita do seu estabelecimento.
              </p>
            </div>

            <Card className="border-border/50">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome Completo*</Label>
                      <Input 
                        id="nome" 
                        value={formData.nome}
                        onChange={(e) => handleInputChange('nome', e.target.value)}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail*</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone*</Label>
                      <Input 
                        id="telefone" 
                        value={formData.telefone}
                        onChange={(e) => handleInputChange('telefone', e.target.value)}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="estabelecimento">Nome do Estabelecimento*</Label>
                      <Input 
                        id="estabelecimento" 
                        value={formData.estabelecimento}
                        onChange={(e) => handleInputChange('estabelecimento', e.target.value)}
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="tipo">Tipo de Estabelecimento*</Label>
                      <Select onValueChange={(value) => handleInputChange('tipo', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="academia">Academia/Studio</SelectItem>
                          <SelectItem value="clinica">Clínica/Consultório</SelectItem>
                          <SelectItem value="condominio">Condomínio</SelectItem>
                          <SelectItem value="elevador">Elevadores</SelectItem>
                          <SelectItem value="comercial">Centro Comercial</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="localizacao">Localização (Cidade/Bairro)*</Label>
                      <Input 
                        id="localizacao" 
                        placeholder="Ex: São Paulo - Vila Olimpia"
                        value={formData.localizacao}
                        onChange={(e) => handleInputChange('localizacao', e.target.value)}
                        required 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="espacos">Espaços Disponíveis</Label>
                    <Textarea 
                      id="espacos" 
                      placeholder="Descreva os espaços onde poderiam ser instalados os painéis (recepção, sala de espera, etc.)"
                      value={formData.espacos}
                      onChange={(e) => handleInputChange('espacos', e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Informações Adicionais</Label>
                    <Textarea 
                      id="mensagem" 
                      placeholder="Horário de funcionamento, fluxo médio de pessoas, dúvidas específicas..."
                      value={formData.mensagem}
                      onChange={(e) => handleInputChange('mensagem', e.target.value)}
                    />
                  </div>

                  <Button type="submit" variant="gradient" size="lg" className="w-full">
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