import { useState, useCallback, useMemo } from "react";
import { Send, User, Mail, Phone, MessageSquare, Building, MapPin } from "lucide-react";
import { motion, useReducedMotion } from 'motion/react';
import type { ComponentProps, ReactNode } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import logoContact from "/logocontact.png";
import emailjs from '@emailjs/browser';

// Constants
const ANIMATION_DURATION = 0.8;
const ANIMATION_DELAY = 0.1;
const CONTACT_EMAIL = 'adm@gmvisionco.com';

const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  phone: '',
  company: '',
  city: '',
  segment: '',
  message: ''
} as const;

const FORM_FIELDS = [
  { name: 'name', label: 'Nome Completo', icon: User, type: 'text', required: true },
  { name: 'email', label: 'E-mail Corporativo', icon: Mail, type: 'email', required: true },
  { name: 'phone', label: 'Telefone', icon: Phone, type: 'tel', required: true },
  { name: 'company', label: 'Empresa', icon: Building, type: 'text', required: true },
  { name: 'city', label: 'Cidade', icon: MapPin, type: 'text', required: true },
  { name: 'segment', label: 'Segmento', icon: Building, type: 'text', required: false }
] as const;

// Types
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

type FormFieldName = keyof FormData;

interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

interface TemplateParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  phone: string;
  company: string;
  city: string;
  segment: string;
  message: string;
  to_email: string;
  reply_to: string;
}

// Optimized AnimatedContainer component
const AnimatedContainer = ({ className, delay = ANIMATION_DELAY, children }: ViewAnimationProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: 20, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: ANIMATION_DURATION }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Utility functions
const getEmailJSConfig = (): EmailJSConfig | null => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.error('Configurações do EmailJS não encontradas. Verifique o arquivo .env.local');
    return null;
  }

  return { serviceId, templateId, publicKey };
};

const createTemplateParams = (formData: FormData): TemplateParams => ({
  from_name: formData.name,
  from_email: formData.email,
  phone: formData.phone,
  company: formData.company,
  city: formData.city,
  segment: formData.segment,
  message: formData.message,
  to_email: CONTACT_EMAIL,
  reply_to: formData.email
});

const ContactFormSection = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const config = getEmailJSConfig();
      
      if (!config) {
        alert(`Serviço de email não configurado. Entre em contato diretamente pelo email: ${CONTACT_EMAIL}`);
        return;
      }

      const templateParams = createTemplateParams(formData);
      
      await emailjs.send(config.serviceId, config.templateId, templateParams, config.publicKey);
      
      console.log('Email enviado com sucesso!');
      setIsSubmitted(true);
      resetForm();
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert(`Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente pelo email: ${CONTACT_EMAIL}`);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, resetForm]);

  const handleNewMessage = useCallback(() => {
    setIsSubmitted(false);
  }, []);

  // Memoized success screen
  const successScreen = useMemo(() => (
    <section 
      id="contato" 
      className="py-16 lg:py-32" 
      style={{backgroundColor: '#f7f7f7'}}
      aria-live="polite"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedContainer>
            <div 
              className="w-16 lg:w-20 h-16 lg:h-20 mx-auto mb-6 lg:mb-8 rounded-full bg-gmv-lime flex items-center justify-center"
              aria-hidden="true"
            >
              <Send className="w-8 lg:w-10 h-8 lg:h-10 text-gmv-blue" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light font-halenoir text-gmv-blue leading-tight mb-8 lg:mb-10">
              Mensagem 
              <br />
              <span className="font-normal">Enviada!</span>
            </h2>
            <p className="text-gmv-gray leading-relaxed text-base lg:text-lg mb-8 lg:mb-10 max-w-2xl mx-auto">
              Obrigado pelo seu interesse! Nossa equipe entrará em contato em breve para apresentar as melhores soluções para seu negócio.
            </p>
            <button 
              onClick={handleNewMessage}
              className="inline-flex items-center px-6 lg:px-8 py-2 lg:py-3 border border-gmv-blue text-gmv-blue rounded-full hover:bg-gmv-blue hover:text-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gmv-blue focus:ring-opacity-50"
              aria-label="Enviar uma nova mensagem"
            >
              Enviar Outra Mensagem
            </button>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  ), [handleNewMessage]);

  if (isSubmitted) {
    return successScreen;
  }

  return (
  <section id="contato" className="py-16 lg:py-32" style={{backgroundColor: '#f7f7f7'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Conteúdo à esquerda */}
            <AnimatedContainer className="">
              <div className="text-sm lg:text-base mb-4 font-halenoir italic" style={{ color: '#000', textTransform: 'uppercase', WebkitTextStroke: '0' }}>
                FALE CONOSCO
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light font-halenoir text-gmv-blue leading-tight mb-8 lg:mb-10">
                Vamos conversar
                <br />
                sobre resultados!
              </h2>

              {/* Informações de Contato */}
              <div className="space-y-4 lg:space-y-6">
                <h3 className="text-lg lg:text-xl font-medium text-gmv-blue">
                  Informações de Contato
                </h3>
                <div className="space-y-3 lg:space-y-4 text-gmv-gray">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">
                      <Phone className="w-3 h-3 text-gmv-gray" />
                    </div>
                    <span className="text-sm lg:text-base">(11) 93620-8864</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">
                      <Mail className="w-3 h-3 text-gmv-gray" />
                    </div>
                    <a href="mailto:adm@gmvisionco.com" className="hover:text-gmv-lime transition-colors text-sm lg:text-base">
                      adm@gmvisionco.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">
                      <MapPin className="w-3 h-3 text-gmv-gray" />
                    </div>
                    <span className="text-sm lg:text-base">São Paulo, SP</span>
                  </div>
                </div>
              </div>
              
              {/* Logo de contato */}
              <div className="mt-8 lg:mt-12 flex justify-center lg:justify-start">
                <img 
                  src={logoContact} 
                  alt="GMvision Contact Logo" 
                  className="h-16 lg:h-56 w-auto object-contain opacity-80"
                />
              </div>
            </AnimatedContainer>

            {/* Formulário à direita */}
            <AnimatedContainer delay={0.2} className="relative">
              <div className="bg-white rounded-3xl p-6 lg:p-8 xl:p-12 border border-gmv-gray/10 shadow-sm">
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
                        className="inline-flex items-center px-6 py-3 border border-gmv-blue text-gmv-blue rounded-full hover:bg-gmv-blue hover:text-white transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
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
