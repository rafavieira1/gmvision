import { useState } from "react";
import { Send, User, Mail, Phone, MessageSquare, Building, MapPin } from "lucide-react";
import { motion, useReducedMotion } from 'motion/react';
import type { ComponentProps, ReactNode } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  city: string;
  segment: string;
  message: string;
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: 20, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const ContactFormSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    segment: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    try {
      // Aqui você pode integrar com um serviço de email como EmailJS, Formspree, etc.
      console.log('Form data:', formData);
      
      // Simulação de delay de envio
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        city: '',
        segment: '',
        message: ''
      });
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
  <section id="contato" className="py-32" style={{backgroundColor: '#f7f7f7'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedContainer>
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gmv-lime flex items-center justify-center">
                <Send className="w-10 h-10 text-gmv-blue" />
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light font-halenoir text-gmv-blue leading-tight mb-10">
                Mensagem 
                <br />
                <span className="font-normal">Enviada!</span>
              </h2>
              <p className="text-gmv-gray leading-relaxed text-lg mb-10 max-w-2xl mx-auto">
                Obrigado pelo seu interesse! Nossa equipe entrará em contato em breve para apresentar as melhores soluções para seu negócio.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="inline-flex items-center px-8 py-3 border border-gmv-blue text-gmv-blue rounded-full hover:bg-gmv-blue hover:text-white transition-colors duration-200"
              >
                Enviar Outra Mensagem
              </button>
            </AnimatedContainer>
          </div>
        </div>
      </section>
    );
  }

  return (
  <section id="contato" className="py-32" style={{backgroundColor: '#f7f7f7'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Conteúdo à esquerda */}
            <AnimatedContainer className="">
              <div className="text-base font-apparel text-gmv-lime uppercase tracking-wider mb-4">
                FALE CONOSCO
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light font-halenoir text-gmv-blue leading-tight mb-10">
                Vamos conversar
                <br />
                <span className="font-normal font-garamond">sobre resultados</span>
              </h2>

              {/* Informações de Contato */}
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gmv-blue">
                  Informações de Contato
                </h3>
                <div className="space-y-4 text-gmv-gray">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">
                      <Phone className="w-3 h-3 text-gmv-gray" />
                    </div>
                    <span>(11) 9999-0000</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">
                      <Mail className="w-3 h-3 text-gmv-gray" />
                    </div>
                    <a href="mailto:contato@gmvision.com.br" className="hover:text-gmv-lime transition-colors">
                      contato@gmvision.com.br
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">
                      <MapPin className="w-3 h-3 text-gmv-gray" />
                    </div>
                    <span>São Paulo, SP</span>
                  </div>
                </div>
              </div>
            </AnimatedContainer>

            {/* Formulário à direita */}
            <AnimatedContainer delay={0.2} className="relative">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-gmv-gray/10 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="name" className="text-sm font-medium text-gmv-blue">Nome Completo</Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        required
                        className="bg-gray-50 border-gmv-gray/20 focus:ring-gmv-lime focus:border-transparent h-12"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="email" className="text-sm font-medium text-gmv-blue">E-mail</Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="seu@email.com"
                          required
                          className="bg-gray-50 border-gmv-gray/20 focus:ring-gmv-lime focus:border-transparent h-12"
                        />
                      </div>
                      <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="phone" className="text-sm font-medium text-gmv-blue">Telefone</Label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(11) 99999-9999"
                          required
                          className="bg-gray-50 border-gmv-gray/20 focus:ring-gmv-lime focus:border-transparent h-12"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="company" className="text-sm font-medium text-gmv-blue">Empresa</Label>
                        <Input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Nome da sua empresa"
                          className="bg-gray-50 border-gmv-gray/20 focus:ring-gmv-lime focus:border-transparent h-12"
                        />
                      </div>
                      <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="city" className="text-sm font-medium text-gmv-blue">Cidade</Label>
                        <Input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="Sua cidade"
                          className="bg-gray-50 border-gmv-gray/20 focus:ring-gmv-lime focus:border-transparent h-12"
                        />
                      </div>
                    </div>

                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="segment" className="text-sm font-medium text-gmv-blue">Segmento</Label>
                      <Input
                        type="text"
                        id="segment"
                        name="segment"
                        value={formData.segment}
                        onChange={handleInputChange}
                        placeholder="Ex: Academias, Clínicas, Elevadores, Condomínios, Restaurantes..."
                        className="bg-gray-50 border-gmv-gray/20 focus:ring-gmv-lime focus:border-transparent h-12"
                      />
                    </div>

                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="message" className="text-sm font-medium text-gmv-blue">Mensagem</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Conte-nos sobre seu projeto ou dúvidas..."
                        required
                        className="bg-gray-50 border-gmv-gray/20 focus:ring-gmv-lime focus:border-transparent min-h-[120px]"
                      />
                    </div>

                    <div className="inline-block">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center px-6 py-3 border border-gmv-blue text-gmv-blue rounded-full hover:bg-gmv-blue hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-gmv-blue border-t-transparent rounded-full animate-spin mr-2" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">Enviar Mensagem</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </AnimatedContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
