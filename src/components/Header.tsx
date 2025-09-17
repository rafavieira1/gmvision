import { useState, useEffect, useCallback, useMemo } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logo from "/logocompletobranco.png";

// Types
interface NavigationItem {
  title: string;
  href: string;
  description: string;
}

interface ButtonStyle {
  primary: string;
  secondary: string;
}

// Constants
const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    title: "Quero ser um parceiro",
    href: "/estabelecimentos",
    description: "Transforme seu espaço em um ponto de mídia rentável",
  },
  {
    title: "Locais de parceiros",
    href: "/locais-parceiros",
    description: "Conheça onde seus anúncios podem ser exibidos",
  },
];

const BUTTON_STYLES: Record<string, ButtonStyle> = {
  light: {
    primary: "border border-white text-white hover:bg-white hover:text-gmv-blue",
    secondary: "bg-gmv-lime text-gmv-blue hover:bg-gmv-lime/90",
  },
  dark: {
    primary: "border border-gmv-blue text-gmv-blue hover:bg-gmv-blue hover:text-white",
    secondary: "bg-gmv-lime text-gmv-blue hover:bg-gmv-lime/90",
  },
};

const SCROLL_OPTIONS: ScrollToOptions = { top: 0, behavior: 'smooth' };

// Helper functions
const scrollToTop = (): void => {
  window.scrollTo(SCROLL_OPTIONS);
};

const delayedScrollToTop = (): void => {
  setTimeout(scrollToTop, 100);
};

// Components
interface ActionButtonProps {
  to: string;
  onClick: () => void;
  variant: 'primary' | 'secondary';
  className?: string;
  children: React.ReactNode;
  theme: 'light' | 'dark';
}

const ActionButton = ({ to, onClick, variant, className = '', children, theme }: ActionButtonProps) => (
  <Link to={to} onClick={onClick}>
    <button 
      className={cn(
        "px-2 md:px-3 lg:px-6 py-1.5 md:py-2 lg:py-3 text-xs lg:text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap",
        BUTTON_STYLES[theme][variant],
        className
      )}
      aria-label={`Ir para ${to}`}
    >
      {children}
    </button>
  </Link>
);

interface MobileActionButtonProps extends ActionButtonProps {
  onMenuClose: () => void;
}

const MobileActionButton = ({ onMenuClose, onClick, ...props }: MobileActionButtonProps) => (
  <ActionButton
    {...props}
    onClick={() => {
      onClick();
      onMenuClose();
    }}
    className="w-full block"
  />
);

interface NavigationLinkProps {
  to: string;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  theme: 'light' | 'dark';
}

const NavigationLink = ({ to, onClick, children, className = '', theme }: NavigationLinkProps) => (
  <Link 
    to={to} 
    onClick={onClick}
    className={cn(
      "px-4 py-2 text-lg md:text-lg font-normal transition-colors duration-200",
      theme === 'light'
        ? "text-white/90 hover:text-white"
        : "text-gmv-gray hover:text-gmv-blue",
      className
    )}
    aria-label={`Ir para ${to}`}
  >
    {children}
  </Link>
);

interface DropdownItemProps {
  item: NavigationItem;
  onClick: () => void;
}

const DropdownItem = ({ item, onClick }: DropdownItemProps) => (
  <Link
    to={item.href}
    onClick={onClick}
    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50"
    aria-label={item.title}
  >
    <div className="text-sm font-medium leading-none text-gmv-blue">
      {item.title}
    </div>
    <p className="line-clamp-2 text-sm leading-snug text-gmv-gray mt-1">
      {item.description}
    </p>
  </Link>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === "/";
  const isSubPage = useMemo(() => 
    ["/anunciantes", "/estabelecimentos", "/locais-parceiros"].includes(location.pathname),
    [location.pathname]
  );
  
  const theme = useMemo(() => 
    (isHomePage || isSubPage) ? 'light' : 'dark',
    [isHomePage, isSubPage]
  );

  // Event handlers
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  const handleLogoClick = useCallback(() => {
    if (isHomePage) {
      scrollToTop();
    }
  }, [isHomePage]);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleNavigationClick = useCallback((callback?: () => void) => {
    return () => {
      if (callback) callback();
      delayedScrollToTop();
    };
  }, []);

  // Effects
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  // Computed styles
  const headerStyles = useMemo(() => {
    const base = "fixed top-0 left-0 right-0 z-50 transition-all duration-300";
    
    if (isHomePage) {
      return cn(base, 
        isScrolled 
          ? "backdrop-blur-lg bg-black/60 border-b border-white/20" 
          : "bg-transparent border-b border-transparent"
      );
    }
    
    return cn(base, "backdrop-blur-lg bg-black/60 border-b border-white/20");
  }, [isHomePage, isScrolled]);

  const mobileMenuStyles = useMemo(() => {
    const base = "md:hidden absolute top-20 lg:top-24 left-0 right-0";
    
    if (isHomePage) {
      return cn(base,
        isScrolled
          ? "bg-gmv-blue/95 backdrop-blur-lg border-b border-white/20"
          : "bg-black/50 backdrop-blur-md border-b border-white/10"
      );
    }
    
    if (isSubPage) {
      return cn(base, "bg-gmv-blue/95 backdrop-blur-lg border-b border-white/20");
    }
    
    return cn(base, "bg-gmv-white backdrop-blur-lg border-b border-gmv-gray/20");
  }, [isHomePage, isSubPage, isScrolled]);

  return (
    <header className={headerStyles} role="banner">
      <div className="container mx-auto px-4 h-20 lg:h-24 flex items-center relative">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center group" 
          onClick={handleLogoClick}
          aria-label="GMvision - Ir para página inicial"
        >
          <img 
            src={logo} 
            alt="GMvision Logo" 
            className="w-24 lg:w-32 h-24 lg:h-32 object-contain" 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationLink
                  to="/"
                  onClick={handleLogoClick}
                  theme={theme}
                >
                  Início
                </NavigationLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationLink
                  to="/anunciantes"
                  onClick={handleNavigationClick()}
                  theme={theme}
                >
                  Anunciantes
                </NavigationLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className={cn(
                    "px-4 py-2 text-lg font-normal transition-colors duration-200 bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent h-auto",
                    theme === 'light'
                      ? "text-white/90 hover:text-white"
                      : "text-gmv-gray hover:text-gmv-blue"
                  )}
                  aria-label="Menu de parceiros"
                >
                  Parceiros
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div 
                    className="grid w-[400px] gap-3 p-4 bg-white rounded-lg shadow-lg"
                    role="menu"
                    aria-label="Opções para parceiros"
                  >
                    {NAVIGATION_ITEMS.map((item) => (
                      <DropdownItem
                        key={item.href}
                        item={item}
                        onClick={handleNavigationClick()}
                      />
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-3 ml-auto pr-2 lg:pr-4">
          <ActionButton
            to="/anunciantes"
            onClick={handleNavigationClick()}
            variant="primary"
            theme={theme}
          >
            Quero Anunciar
          </ActionButton>
          <ActionButton
            to="/estabelecimentos"
            onClick={handleNavigationClick()}
            variant="secondary"
            theme={theme}
          >
            Quero Instalar
          </ActionButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden p-2 ml-auto transition-colors",
            theme === 'light' ? "text-white hover:text-white/80" : "text-gmv-blue hover:text-gmv-blue/80"
          )}
          onClick={handleMenuToggle}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav 
          className={mobileMenuStyles}
          role="navigation"
          aria-label="Menu de navegação mobile"
        >
          <div className="container mx-auto px-4 py-4 lg:py-6 space-y-4">
            <NavigationLink
              to="/"
              onClick={() => {
                handleLogoClick();
                handleMenuClose();
              }}
              theme={theme}
              className="block w-full text-left text-base px-0 py-3"
            >
              Início
            </NavigationLink>
            
            <NavigationLink
              to="/anunciantes"
              onClick={() => {
                handleNavigationClick()();
                handleMenuClose();
              }}
              theme={theme}
              className="block w-full text-left text-base px-0 py-3"
            >
              Anunciantes
            </NavigationLink>
            
            <div className="space-y-2">
              <div className={cn(
                "text-base font-normal px-0 py-3",
                theme === 'light' ? "text-white/90" : "text-gmv-gray"
              )}>
                Parceiros
              </div>
              <div 
                className="pl-4 space-y-2"
                role="list"
              >
                {NAVIGATION_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => {
                      handleNavigationClick()();
                      handleMenuClose();
                    }}
                    className={cn(
                      "block text-base transition-colors duration-200 py-2",
                      theme === 'light'
                        ? "text-white/70 hover:text-white"
                        : "text-gmv-gray hover:text-gmv-blue"
                    )}
                    aria-label={item.title}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className={cn(
              "pt-4 flex flex-col gap-4",
              theme === 'light' ? "border-t border-white/20" : "border-t border-gmv-gray/20"
            )}>
              <MobileActionButton
                to="/anunciantes"
                onClick={handleNavigationClick()}
                onMenuClose={handleMenuClose}
                variant="primary"
                theme={theme}
              >
                Quero Anunciar
              </MobileActionButton>
              <MobileActionButton
                to="/estabelecimentos"
                onClick={handleNavigationClick()}
                onMenuClose={handleMenuClose}
                variant="secondary"
                theme={theme}
              >
                Quero Instalar
              </MobileActionButton>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;