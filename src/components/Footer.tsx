import { Zap, Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'Soluções',
    links: [
      { title: 'Para Anunciantes', href: '/anunciantes' },
      { title: 'Para Estabelecimentos', href: '/estabelecimentos' },
      { title: 'Cases de Sucesso', href: '#cases' },
      { title: 'FAQ', href: '#faq' },
    ],
  },
  {
    label: 'Segmentos',
    links: [
      { title: 'Academias e Fitness', href: '#' },
      { title: 'Clínicas e Consultórios', href: '#' },
      { title: 'Elevadores', href: '#' },
      { title: 'Condomínios', href: '#' },
      { title: 'Centros Comerciais', href: '#' },
    ],
  },
  {
    label: 'Empresa',
    links: [
      { title: 'Sobre Nós', href: '#sobre' },
      { title: 'Política de Privacidade', href: '#' },
      { title: 'Termos de Serviço', href: '#' },
    ],
  },
  {
    label: 'Redes Sociais',
    links: [
      { title: 'LinkedIn', href: '#', icon: Linkedin },
      { title: 'Instagram', href: '#', icon: Instagram },
    ],
  },
];

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
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const Footer = () => {
  return (
    <footer className="md:rounded-t-6xl relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
      <div className="bg-gmv-lime/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gmv-blue flex items-center justify-center">
              <Zap className="w-5 h-5 text-gmv-white" />
            </div>
            <span className="font-medium text-lg text-gmv-blue">
              GMvision
            </span>
          </Link>
          <p className="text-gmv-gray text-sm leading-relaxed max-w-xs mt-4">
            Conectando anunciantes e estabelecimentos através de tecnologia LED inovadora.
          </p>
          
          {/* Informações de contato */}
          <div className="space-y-3 text-sm text-gmv-gray mt-6">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">
                <Mail className="w-3 h-3 text-gmv-gray" />
              </div>
              <span>contato@gmvision.com.br</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">
                <Phone className="w-3 h-3 text-gmv-gray" />
              </div>
              <span>(11) 9999-0000</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">
                <MapPin className="w-3 h-3 text-gmv-gray" />
              </div>
              <span>São Paulo, SP</span>
            </div>
          </div>
          
          <p className="text-gmv-gray/70 text-sm mt-8">
            © {new Date().getFullYear()} GMvision Connect. Todos os direitos reservados.
          </p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs font-medium text-gmv-blue uppercase tracking-wider">{section.label}</h3>
                <ul className="text-gmv-gray mt-4 space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      {link.href.startsWith('/') ? (
                        <Link
                          to={link.href}
                          className="hover:text-gmv-lime inline-flex items-center transition-all duration-300"
                        >
                          {link.icon && <link.icon className="me-1 size-4" />}
                          {link.title}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="hover:text-gmv-lime inline-flex items-center transition-all duration-300"
                        >
                          {link.icon && <link.icon className="me-1 size-4" />}
                          {link.title}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;