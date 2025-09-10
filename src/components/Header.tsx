import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "@/assets/logobranca.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === "/";
  const isSubPage = location.pathname === "/anunciantes" || location.pathname === "/estabelecimentos";

  // Detecta o scroll da página
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll para o topo quando a rota muda
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navLinks = [
    { href: "#sobre", label: "Sobre", isSection: true },
    { href: "#cases", label: "Casos", isSection: true },
    { href: "#beneficios", label: "Benefícios", isSection: true },
    { href: "#faq", label: "FAQ", isSection: true },
  ];

  const pageLinks = [
    { href: "/anunciantes", label: "Para Anunciantes" },
    { href: "/estabelecimentos", label: "Para Estabelecimentos" },
  ];

  const handleSectionClick = (href: string) => {
    if (href.startsWith('#')) {
      // Se estamos em uma página que não é a home, primeiro navegue para home
      if (location.pathname !== '/') {
        window.location.href = '/' + href;
      } else {
        // Se já estamos na home, faça scroll suave para a seção
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // Se já estamos na home, volta para o topo
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Se não estamos na home, o Link já cuida da navegação para "/"
  };

  const handleAnunciantesClick = () => {
    // Pequeno delay para garantir que a navegação aconteça primeiro
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleEstabelecimentosClick = () => {
    // Pequeno delay para garantir que a navegação aconteça primeiro
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isHomePage 
        ? isScrolled 
          ? "backdrop-blur-lg bg-black/60 border-b border-white/20" 
          : "bg-transparent border-b border-transparent"
        : "backdrop-blur-lg bg-black/60 border-b border-white/20"
    }`}>
      <div className="container mx-auto pl-4 pr-0 h-20 flex items-center relative">
        {/* Logo à esquerda */}
        <Link to="/" className="flex items-center group" onClick={handleLogoClick}>
          <img src={logo} alt="GMvision" className="w-24 h-24 object-contain" />
        </Link>

        {/* Navigation Centralizada */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleSectionClick(link.href)}
                className={cn(
                  "text-base font-normal transition-colors duration-200 cursor-pointer",
                  isHomePage || isSubPage
                    ? "text-white/90 hover:text-white"
                    : "text-gmv-gray hover:text-gmv-blue"
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Botões de ação à direita */}
        <div className="hidden md:flex items-center space-x-3 ml-auto -mr-40">
          <Link to="/anunciantes" onClick={handleAnunciantesClick}>
            <button className={`px-6 py-3 text-sm font-medium rounded-full transition-colors duration-200 ${
              isHomePage || isSubPage 
                ? "border border-white text-white hover:bg-white hover:text-gmv-blue" 
                : "border border-gmv-blue text-gmv-blue hover:bg-gmv-blue hover:text-white"
            }`}>
              Quero Anunciar
            </button>
          </Link>
          <Link to="/estabelecimentos" onClick={handleEstabelecimentosClick}>
            <button className={`px-6 py-3 text-sm font-medium rounded-full transition-colors duration-200 ${
              isHomePage || isSubPage
                ? "bg-gmv-lime text-gmv-blue hover:bg-gmv-lime/90"
                : "bg-gmv-lime text-gmv-blue hover:bg-gmv-lime/90"
            }`}>
              Quero Instalar
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn("md:hidden p-2", isHomePage || isSubPage ? "text-white" : "text-gmv-blue")}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden absolute top-20 left-0 right-0 ${
          isHomePage 
            ? isScrolled
              ? "bg-gmv-blue/95 backdrop-blur-lg border-b border-white/20"
              : "bg-black/50 backdrop-blur-md border-b border-white/10"
            : isSubPage
              ? "bg-gmv-blue/95 backdrop-blur-lg border-b border-white/20"
              : "bg-gmv-white backdrop-blur-lg border-b border-gmv-gray/20"
        }`}>
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  handleSectionClick(link.href);
                  setIsMenuOpen(false);
                }}
                className={cn(
                  "block w-full text-left text-base font-normal transition-colors duration-200",
                  isHomePage || isSubPage
                    ? "text-white/90 hover:text-white"
                    : "text-gmv-gray hover:text-gmv-blue"
                )}
              >
                {link.label}
              </button>
            ))}
            <div className={`pt-4 space-y-3 ${
              isHomePage || isSubPage ? "border-t border-white/20" : "border-t border-gmv-gray/20"
            }`}>
              <Link to="/anunciantes" onClick={() => { handleAnunciantesClick(); setIsMenuOpen(false); }}>
                <button className={`w-full px-6 py-3 text-sm font-medium rounded-full transition-colors duration-200 ${
                  isHomePage || isSubPage 
                    ? "border border-white text-white hover:bg-white hover:text-gmv-blue" 
                    : "border border-gmv-blue text-gmv-blue hover:bg-gmv-blue hover:text-white"
                }`}>
                  Quero Anunciar
                </button>
              </Link>
              <Link to="/estabelecimentos" onClick={() => { handleEstabelecimentosClick(); setIsMenuOpen(false); }}>
                <button className={`w-full px-6 py-3 text-sm font-medium rounded-full transition-colors duration-200 ${
                  isHomePage || isSubPage
                    ? "bg-gmv-lime text-gmv-blue hover:bg-gmv-lime/90"
                    : "bg-gmv-lime text-gmv-blue hover:bg-gmv-lime/90"
                }`}>
                  Quero Instalar
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;