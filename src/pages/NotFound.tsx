import { useLocation, Link } from "react-router-dom";
import { useEffect, memo, useCallback } from "react";
import { Button } from "@/components/ui/button";

// Constants
const ERROR_MESSAGES = {
  title: "404",
  subtitle: "Página não encontrada",
  description: "A página que você está procurando não existe ou foi movida.",
  buttonText: "Voltar ao Início"
} as const;

const NotFound = memo(() => {
  const location = useLocation();

  const logError = useCallback(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  useEffect(() => {
    logError();
  }, [logError]);

  return (
    <main 
      className="min-h-screen flex items-center justify-center bg-background"
      role="main"
      aria-labelledby="error-title"
      aria-describedby="error-description"
    >
      <div className="text-center space-y-6 max-w-lg px-4">
        <h1 
          id="error-title"
          className="text-display font-bold text-gradient-primary"
          aria-label="Erro 404"
        >
          {ERROR_MESSAGES.title}
        </h1>
        <h2 
          className="text-2xl font-semibold text-foreground"
          aria-level={2}
        >
          {ERROR_MESSAGES.subtitle}
        </h2>
        <p 
          id="error-description"
          className="text-lg text-muted-foreground max-w-md mx-auto"
        >
          {ERROR_MESSAGES.description}
        </p>
        <div className="pt-4">
          <Link 
            to="/"
            aria-label="Navegar de volta para a página inicial"
          >
            <Button 
              variant="default" 
              size="lg"
              className="min-w-[160px]"
            >
              {ERROR_MESSAGES.buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
});

NotFound.displayName = 'NotFound';

export default NotFound;
