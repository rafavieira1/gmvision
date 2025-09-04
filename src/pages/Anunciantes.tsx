import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  TrendingUp, Target, BarChart3, Clock, FileImage, 
  MapPin, Users, Zap, CheckCircle, ArrowRight 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-led-business.jpg";
import gymImage from "@/assets/led-panel-gym.jpg";

const Anunciantes = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    segmento: "",
    orcamento: "",
    campanha: "",
    mensagem: ""
  });

  const benefits = [
    {
      icon: Target,
      title: "Segmentação Inteligente",
      description: "Direcione seus anúncios por localização, horário e perfil do público para máxima efetividade."
    },
    {
      icon: BarChart3,
      title: "Relatórios Detalhados",
      description: "Métricas em tempo real: impressões, tempo de visualização, engagement e ROI da campanha."
    },
    {
      icon: Users,
      title: "Alcance Qualificado",
      description: "Atinja milhares de pessoas em locais estratégicos como academias, clínicas e elevadores."
    },
    {
      icon: Zap,
      title: "Gestão Simplificada",
      description: "Plataforma intuitiva para criar, editar e monitorar campanhas em todos os painéis."
    }
  ];

  const specs = [
    { label: "Tempo de Exibição", value: "15-30 segundos por ciclo" },
    { label: "Formatos Aceitos", value: "MP4, JPG, PNG até 10MB" },
    { label: "Resolução", value: "Full HD 1920x1080" },
    { label: "Horários", value: "6h às 22h (personalizável)" }
  ];

  const planos = [
    {
      nome: "Inicial",
      preco: "R$ 299",
      periodo: "/mês",
      descricao: "Ideal para pequenas empresas",
      features: [
        "Até 5 painéis",
        "Relatórios básicos",
        "Suporte via chat",
        "Até 10 campanhas/mês"
      ],
      destaque: false
    },
    {
      nome: "Crescimento",
      preco: "R$ 599",
      periodo: "/mês",
      descricao: "Para empresas em crescimento",
      features: [
        "Até 15 painéis",
        "Relatórios avançados",
        "Suporte prioritário",
        "Campanhas ilimitadas",
        "Segmentação avançada"
      ],
      destaque: true
    },
    {
      nome: "Corporativo",
      preco: "Sob consulta",
      periodo: "",
      descricao: "Para grandes corporações",
      features: [
        "Painéis ilimitados",
        "Dashboard personalizado",
        "Gerente de conta dedicado",
        "API personalizada",
        "SLA garantido"
      ],
      destaque: false
    }
  ];

  const cases = [
    {
      empresa: "Suplementos Pro",
      resultado: "+85% de reconhecimento de marca",
      detalhes: "Campanha em 25 academias por 3 meses gerou aumento significativo nas vendas online."
    },
    {
      empresa: "Clínica Dental Care",
      resultado: "+120 novos pacientes",
      detalhes: "Anúncios em elevadores de prédios comerciais trouxeram 40% mais consultas."
    },
    {
      empresa: "App Fitness Tech",
      resultado: "+2.500 downloads",
      detalhes: "Promoção do app em academias resultou em alta taxa de conversão e retenção."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Proposta Enviada!",
      description: "Entraremos em contato em até 24 horas para apresentar sua solução personalizada.",
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
              Amplifique sua Marca com 
              <span className="text-gradient-primary"> Publicidade LED</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Alcance seu público-alvo nos momentos certos, nos locais ideais. 
              Resultados mensuráveis e campanhas que realmente convertem.
            </p>
            <Button variant="hero" size="xl" className="animate-pulse-glow">
              <TrendingUp className="w-5 h-5 mr-2" />
              Solicitar Proposta Gratuita
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
              Por que Anunciar Conosco?
            </h2>
            <p className="text-lg text-muted-foreground">
              Tecnologia avançada e estratégia inteligente para maximizar o ROI das suas campanhas.
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

      {/* Specifications Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-section font-bold mb-6">
                Especificações dos Anúncios
              </h2>
              <p className="text-lg text-muted-foreground">
                Formatos otimizados para máximo impacto visual e técnico.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileImage className="w-5 h-5 mr-2 text-primary" />
                    Especificações Técnicas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {specs.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border/30 last:border-0">
                      <span className="font-medium text-foreground">{spec.label}</span>
                      <span className="text-muted-foreground">{spec.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-border/50 overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    Locais Disponíveis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Academias e Studios</span>
                      <span className="text-primary font-medium">45+ locais</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Clínicas e Consultórios</span>
                      <span className="text-primary font-medium">32+ locais</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Elevadores Comerciais</span>
                      <span className="text-primary font-medium">28+ locais</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Condomínios</span>
                      <span className="text-primary font-medium">18+ locais</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <p className="text-sm text-primary font-medium">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Novos locais adicionados semanalmente
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-section font-bold mb-6 text-gradient-primary">
              Planos e Investimento
            </h2>
            <p className="text-lg text-muted-foreground">
              Escolha o plano ideal para seu negócio. Sem taxas ocultas, máxima transparência.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {planos.map((plano, index) => (
              <Card key={index} className={`relative hover:shadow-tech transition-smooth ${plano.destaque ? 'border-primary shadow-tech scale-105' : 'border-border/50'}`}>
                {plano.destaque && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="gradient-primary text-white text-sm font-medium px-4 py-2 rounded-full">
                      Mais Popular
                    </div>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plano.nome}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-foreground">{plano.preco}</span>
                      <span className="text-muted-foreground ml-1">{plano.periodo}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plano.descricao}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plano.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plano.destaque ? "gradient" : "outline"} 
                    className="w-full"
                  >
                    {plano.nome === "Enterprise" ? "Falar com Consultor" : "Começar Agora"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-section font-bold mb-6">
              Campanhas que Geraram Resultados
            </h2>
            <p className="text-lg text-muted-foreground">
              Cases reais de clientes que alcançaram seus objetivos com nossa plataforma.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <Card key={index} className="hover:shadow-tech transition-smooth border-border/50 hover:border-primary/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-secondary flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {case_.empresa}
                  </h3>
                  <div className="text-primary font-bold text-xl mb-3">
                    {case_.resultado}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {case_.detalhes}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-section font-bold mb-6 text-gradient-primary">
                Solicite sua Proposta Personalizada
              </h2>
              <p className="text-lg text-muted-foreground">
                Preencha o formulário e receba uma proposta sob medida para sua empresa em até 24h.
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
                      <Label htmlFor="email">E-mail Corporativo*</Label>
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
                      <Label htmlFor="empresa">Empresa*</Label>
                      <Input 
                        id="empresa" 
                        value={formData.empresa}
                        onChange={(e) => handleInputChange('empresa', e.target.value)}
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="segmento">Segmento</Label>
                      <Select onValueChange={(value) => handleInputChange('segmento', value)}>
                        <SelectTrigger>
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
                      <Label htmlFor="orcamento">Orçamento Mensal</Label>
                      <Select onValueChange={(value) => handleInputChange('orcamento', value)}>
                        <SelectTrigger>
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
                    <Label htmlFor="campanha">Descreva sua Campanha</Label>
                    <Textarea 
                      id="campanha" 
                      placeholder="Conte-nos sobre seus objetivos, público-alvo e tipo de campanha..."
                      value={formData.campanha}
                      onChange={(e) => handleInputChange('campanha', e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Mensagem Adicional (Opcional)</Label>
                    <Textarea 
                      id="mensagem" 
                      placeholder="Informações adicionais, dúvidas ou pedidos especiais..."
                      value={formData.mensagem}
                      onChange={(e) => handleInputChange('mensagem', e.target.value)}
                    />
                  </div>

                  <Button type="submit" variant="gradient" size="lg" className="w-full">
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