import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Configuração de erro para desenvolvimento
if (import.meta.env.DEV) {
  // Habilita avisos de desenvolvimento mais detalhados
  console.info('🚀 GMVision - Modo de desenvolvimento ativo');
}

// Otimização: cache da referência do elemento root
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found. Make sure you have a <div id="root"></div> in your HTML.');
}

// Inicialização da aplicação com StrictMode para detecção de problemas
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
