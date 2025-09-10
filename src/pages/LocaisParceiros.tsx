import { useState } from "react";
import { MapPin, Users, Clock, Star, Search, ArrowDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import heroImage from "@/assets/invert.png";

const LocaisParceiros = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const parceiros = [
    {
      id: 1,
      nome: "Academia Strong Fitness",
      tipo: "Academia",
      endereco: "Rua das Flores, 123 - Vila Madalena, São Paulo",
      fluxo: "300+ pessoas/dia",
      horario: "06h às 22h",
      avaliacao: 4.8,
      imagem: "/grad1.jpg"
    },
    {
      id: 2,
      nome: "Clínica Saúde Total",
      tipo: "Consultório Médico",
      endereco: "Av. Paulista, 1000 - Bela Vista, São Paulo", 
      fluxo: "200+ pessoas/dia",
      horario: "07h às 19h",
      avaliacao: 4.9,
      imagem: "/grad2.jpg"
    },
    {
      id: 3,
      nome: "Barbearia Moderna",
      tipo: "Barbearia",
      endereco: "Rua Augusta, 500 - Consolação, São Paulo",
      fluxo: "150+ pessoas/dia", 
      horario: "09h às 20h",
      avaliacao: 4.7,
      imagem: "/grad3.jpg"
    },
    {
      id: 4,
      nome: "Café Central",
      tipo: "Cafeteria",
      endereco: "Rua Oscar Freire, 800 - Jardins, São Paulo",
      fluxo: "400+ pessoas/dia",
      horario: "07h às 18h",
      avaliacao: 4.6,
      imagem: "/grad1.jpg"
    },
    {
      id: 5,
      nome: "Edifício Empresarial Prime",
      tipo: "Escritório",
      endereco: "Av. Faria Lima, 1500 - Itaim Bibi, São Paulo",
      fluxo: "800+ pessoas/dia",
      horario: "08h às 18h",
      avaliacao: 4.8,
      imagem: "/grad2.jpg"
    },
    {
      id: 6,
      nome: "Salão Beleza & Estilo",
      tipo: "Salão de Beleza",
      endereco: "Rua Haddock Lobo, 300 - Cerqueira César, São Paulo",
      fluxo: "180+ pessoas/dia",
      horario: "09h às 19h",
      avaliacao: 4.9,
      imagem: "/grad3.jpg"
    }
  ];

  const filteredParceiros = parceiros.filter(parceiro =>
    parceiro.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    parceiro.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    parceiro.endereco.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen" style={{backgroundColor: '#f7f7f7'}}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative pt-48 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gmv-gray leading-none tracking-tighter mb-16" style={{ fontFamily: 'Pavelt, sans-serif' }}>
            LOCAIS PARCEIROS
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gmv-gray leading-relaxed max-w-4xl mx-auto mb-20 px-4">
            Conheça os estabelecimentos onde seus anúncios<br />
            podem ser exibidos para o público certo.
          </p>
          
          {/* Botão Liquid Glass */}
          <div className="flex justify-center">
            <LiquidButton 
              variant="default" 
              size="xxl"
              className="text-gmv-blue font-semibold"
              onClick={() => {
                const element = document.querySelector('#search-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <div className="flex items-center">
                Confira Abaixo
                <ArrowDown className="w-6 h-6 ml-3" />
              </div>
            </LiquidButton>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section id="search-section" className="py-16" style={{backgroundColor: '#f7f7f7'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gmv-gray w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar por estabelecimento, tipo ou localização..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-4 text-lg border-gmv-gray/20 focus:ring-gmv-lime focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Parceiros Grid */}
      <section className="py-16" style={{backgroundColor: '#f7f7f7'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-base font-apparel uppercase tracking-wider mb-8" style={{ color: '#b8e600', WebkitTextStroke: '1px rgba(186, 233, 94, 0.74)' }}>
                REDE DE PARCEIROS
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light font-halenoir text-gmv-blue leading-tight mb-8">
                Locais estratégicos
                <br />
                <span className="font-normal font-garamond">para sua marca</span>
              </h2>
              <p className="text-xl text-gmv-gray max-w-3xl mx-auto">
                Nossa rede abrange estabelecimentos de alto fluxo em pontos estratégicos da cidade, 
                garantindo máxima visibilidade para seus anúncios.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredParceiros.map((parceiro) => (
                <Card key={parceiro.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="relative h-48">
                    <img 
                      src={parceiro.imagem} 
                      alt={parceiro.nome}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-gmv-blue">{parceiro.tipo}</span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl text-gmv-blue flex items-center justify-between">
                      {parceiro.nome}
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm text-gmv-gray">{parceiro.avaliacao}</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-gmv-lime mt-1 flex-shrink-0" />
                      <span className="text-sm text-gmv-gray">{parceiro.endereco}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gmv-lime" />
                      <span className="text-sm text-gmv-gray">{parceiro.fluxo}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gmv-lime" />
                      <span className="text-sm text-gmv-gray">{parceiro.horario}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredParceiros.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-gmv-gray">Nenhum parceiro encontrado com os critérios de busca.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        {/* Dark Blur Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light font-halenoir text-white leading-tight mb-6">
              Quer anunciar nesses locais?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Entre em contato conosco e descubra como sua marca pode estar presente 
              nos pontos de maior fluxo da cidade.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-gmv-lime text-gmv-blue rounded-full hover:bg-gmv-lime/90 transition-all duration-300 hover:scale-105 font-medium text-lg">
              Solicitar Proposta
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocaisParceiros;
