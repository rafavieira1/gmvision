import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-display font-bold text-gradient-primary">404</h1>
        <h2 className="text-2xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="text-lg text-muted-foreground max-w-md">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link to="/">
          <Button variant="gradient" size="lg">
            Voltar ao Início
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
