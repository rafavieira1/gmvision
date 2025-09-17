import { Mail, Phone, MapPin, Instagram, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useMemo } from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import footerLogo from "/footer.png";

// Constants
const ANIMATION_DURATION = 0.8;
const ANIMATION_BASE_DELAY = 0.1;

const CONTACT_INFO = {
  email: 'adm@gmvisionco.com',
  phone: '(11) 93620-8864',
  location: 'São Paulo, SP',
  description: 'Conectando anunciantes e estabelecimentos através de tecnologia LED inovadora.'
} as const;

const COMPANY_INFO = {
  name: 'GMvision Connect',
  currentYear: new Date().getFullYear()
} as const;

// Types
interface FooterLink {
  title: string;
  href: string;
  icon?: LucideIcon;
  external?: boolean;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

interface ContactItem {
  icon: LucideIcon;
  value: string;
  label: string;
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

// Data
const FOOTER_LINKS: FooterSection[] = [
  {
    label: 'Soluções',
    links: [
      { title: 'Para Anunciantes', href: '/anunciantes' },
      { title: 'Para Estabelecimentos', href: '/estabelecimentos' },
      { title: 'Locais Parceiros', href: '/locais-parceiros' },
      { title: 'Cases de Sucesso', href: '/#cases' },
      { title: 'FAQ', href: '/#faq' },
    ],
  },
  {
    label: 'Segmentos',
    links: [
      { title: 'Academias e Fitness', href: '/#cases' },
      { title: 'Clínicas e Consultórios', href: '/#cases' },
      { title: 'Elevadores', href: '/#cases' },
    ],
  },
  {
    label: 'Empresa',
    links: [
      { title: 'Sobre Nós', href: '/#sobre' },
      { title: 'Entre em Contato', href: '/#contato' },
      { title: 'Política de Privacidade', href: '#' },
      { title: 'Termos de Serviço', href: '#' },
    ],
  },
  {
    label: 'Redes Sociais',
    links: [
      { title: 'Instagram', href: 'https://instagram.com/gmvisionco', icon: Instagram, external: true },
    ],
  },
];

const CONTACT_ITEMS: ContactItem[] = [
  { icon: Mail, value: CONTACT_INFO.email, label: 'E-mail' },
  { icon: Phone, value: CONTACT_INFO.phone, label: 'Telefone' },
  { icon: MapPin, value: CONTACT_INFO.location, label: 'Localização' },
];

// Components
const AnimatedContainer = ({ className, delay = ANIMATION_BASE_DELAY, children }: ViewAnimationProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: ANIMATION_DURATION }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ContactItem = ({ item }: { item: ContactItem }) => (
  <div className="flex items-center space-x-3">
    <div 
      className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center"
      aria-hidden="true"
    >
      <item.icon className="w-3 h-3 text-gmv-gray" />
    </div>
    <span className="text-sm text-gmv-gray">{item.value}</span>
  </div>
);

const FooterLink = ({ link }: { link: FooterLink }) => {
  const isInternal = link.href.startsWith('/') || link.href.startsWith('#');
  const commonClasses = "hover:text-gmv-lime-accessible inline-flex items-center transition-all duration-300";
  
  if (isInternal) {
    return (
      <Link
        to={link.href}
        className={commonClasses}
        aria-label={link.external ? `${link.title} (abre em nova aba)` : link.title}
      >
        {link.icon && <link.icon className="me-1 size-4" aria-hidden="true" />}
        {link.title}
      </Link>
    );
  }

  return (
    <a
      href={link.href}
      className={commonClasses}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      aria-label={link.external ? `${link.title} (abre em nova aba)` : link.title}
    >
      {link.icon && <link.icon className="me-1 size-4" aria-hidden="true" />}
      {link.title}
    </a>
  );
};

const FooterSection = ({ section, delay }: { section: FooterSection; delay: number }) => (
  <AnimatedContainer delay={delay}>
    <div className="mb-10 md:mb-0">
      <h3 className="text-xs font-medium text-gmv-blue uppercase tracking-wider">
        {section.label}
      </h3>
      <ul 
        className="text-gmv-gray mt-4 space-y-2 text-sm"
        role="list"
        aria-label={`Links da seção ${section.label}`}
      >
        {section.links.map((link) => (
          <li key={link.title} role="listitem">
            <FooterLink link={link} />
          </li>
        ))}
      </ul>
    </div>
  </AnimatedContainer>
);

const Footer = () => {
  const copyrightText = useMemo(
    () => `© ${COMPANY_INFO.currentYear} ${COMPANY_INFO.name}. Todos os direitos reservados.`,
    []
  );

  return (
    <footer 
      className="md:rounded-t-6xl relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center rounded-t-4xl bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16"
      role="contentinfo"
      aria-label="Rodapé do site"
    >
      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <Link 
            to="/" 
            className="flex items-center"
            aria-label="Ir para página inicial da GMvision"
          >
            <img 
              src={footerLogo} 
              alt="Logo da GMvision" 
              className="w-16 h-16 object-contain" 
            />
          </Link>
          
          {/* Contact information */}
          <div 
            className="space-y-3 text-sm text-gmv-gray mt-6"
            role="list"
            aria-label="Informações de contato"
          >
            {CONTACT_ITEMS.map((item, index) => (
              <div key={index} role="listitem">
                <ContactItem item={item} />
              </div>
            ))}
          </div>
          
          <p className="text-gmv-gray/70 text-sm mt-8">
            {copyrightText}
          </p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-5 xl:col-span-2 xl:mt-0">
          {/* Descriptive text column */}
          <AnimatedContainer delay={ANIMATION_BASE_DELAY}>
            <div className="mb-10 md:mb-0 col-span-2 md:col-span-1">
              <p className="text-gmv-gray text-sm leading-relaxed">
                {CONTACT_INFO.description}
              </p>
            </div>
          </AnimatedContainer>

          {/* Link sections */}
          {FOOTER_LINKS.map((section, index) => (
            <FooterSection 
              key={section.label} 
              section={section} 
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;