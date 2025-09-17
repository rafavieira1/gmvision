import { Suspense, lazy, memo, useCallback, Component } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Configuração do Query Client com otimizações
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutos
      gcTime: 10 * 60 * 1000, // 10 minutos (gcTime é o novo nome do cacheTime)
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

// Lazy loading das páginas para code splitting otimizado
const Home = lazy(() => 
  import("./pages/Home").then(module => ({
    default: module.default
  }))
);

const Anunciantes = lazy(() => 
  import("./pages/Anunciantes").then(module => ({
    default: module.default
  }))
);

const Estabelecimentos = lazy(() => 
  import("./pages/Estabelecimentos").then(module => ({
    default: module.default
  }))
);

const LocaisParceiros = lazy(() => 
  import("./pages/LocaisParceiros").then(module => ({
    default: module.default
  }))
);

const NotFound = lazy(() => 
  import("./pages/NotFound").then(module => ({
    default: module.default
  }))
);

// Loading component otimizado e memoizado
const PageLoader = memo(() => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div 
        className="animate-spin rounded-full h-12 w-12 border-b-2 border-gmv-blue mx-auto mb-4"
        role="status"
        aria-label="Carregando página"
      />
      <p className="text-gmv-gray">Carregando...</p>
    </div>
  </div>
));

PageLoader.displayName = 'PageLoader';

// Error Boundary para lazy loading
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Erro no carregamento da página:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h2 className="text-xl font-bold text-gmv-blue mb-4">
              Erro no carregamento
            </h2>
            <p className="text-gmv-gray mb-4">
              Ocorreu um erro ao carregar esta página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-gmv-blue text-white rounded hover:bg-blue-700 transition-colors"
            >
              Recarregar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Componente de rotas memoizado
const AppRoutes = memo(() => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/anunciantes" element={<Anunciantes />} />
    <Route path="/estabelecimentos" element={<Estabelecimentos />} />
    <Route path="/locais-parceiros" element={<LocaisParceiros />} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
  </Routes>
));

AppRoutes.displayName = 'AppRoutes';

// Componente principal otimizado
const App = memo(() => {
  const handleError = useCallback((error: Error) => {
    console.error('Erro na aplicação:', error);
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            <Suspense fallback={<PageLoader />}>
              <AppRoutes />
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
});

App.displayName = 'App';

export default App;
