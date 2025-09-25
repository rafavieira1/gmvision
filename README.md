# GMvision - Displays Digitais Inteligentes

## Sobre o Projeto

A **GMvision** é uma plataforma inovadora que conecta anunciantes e estabelecimentos através de displays digitais inteligentes, revolucionando a forma como a publicidade digital é exibida e gerenciada.

### 🎯 O que é a GMvision?

A GMvision oferece uma solução completa de mídia digital que permite:

- **Para Anunciantes**: Criar e gerenciar campanhas publicitárias direcionadas em displays digitais estrategicamente posicionados
- **Para Estabelecimentos**: Monetizar seus espaços através da instalação de displays digitais sem custo inicial
- **Para Locais Parceiros**: Expandir a rede de pontos de exibição em locais de alto fluxo

### ✨ Principais Funcionalidades

#### 🏢 **Para Estabelecimentos**
- Instalação gratuita de displays digitais profissionais
- Geração de renda passiva através da exibição de anúncios
- Controle total sobre o conteúdo exibido
- Suporte técnico completo e manutenção

#### 📢 **Para Anunciantes**
- Campanhas direcionadas por localização e público-alvo
- Relatórios detalhados de performance em tempo real
- Flexibilidade de horários e duração das campanhas
- ROI mensurável e transparente

#### 🎨 **Tecnologia Avançada**
- Displays digitais de alta resolução e brilho
- Sistema de gerenciamento remoto em nuvem
- Agendamento automático de conteúdo
- Monitoramento 24/7 da rede

### 🌟 Vantagens Competitivas

- **Custo Zero**: Estabelecimentos recebem painéis sem investimento inicial
- **Renda Garantida**: Compartilhamento dos lucros publicitários
- **Tecnologia de Ponta**: Equipamentos de última geração
- **Suporte Completo**: Equipe especializada em todo o processo

## 🚀 Como executar o projeto

Para executar este projeto localmente, você precisa ter Node.js & npm instalados - [instale com nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Git

### Passos para instalação:

```sh
# Passo 1: Clone o repositório
git clone https://github.com/rafavieira1/gmvision.git

# Passo 2: Navegue até o diretório do projeto
cd gmvision

# Passo 3: Instale as dependências necessárias
npm install

# Passo 4: Configure as variáveis de ambiente
cp .env.example .env.local
# Edite o arquivo .env.local com suas configurações do EmailJS

# Passo 5: Execute o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 🛠️ Tecnologias utilizadas

Este projeto foi construído com tecnologias modernas e performáticas:

### Frontend
- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool rápido e moderno
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações fluidas e interativas

### UI/UX
- **shadcn/ui** - Componentes acessíveis e customizáveis
- **Radix UI** - Primitivos de UI sem estilo
- **Lucide React** - Ícones modernos e consistentes
- **Responsive Design** - Totalmente responsivo para todos os dispositivos

### Funcionalidades
- **React Router** - Navegação SPA
- **EmailJS** - Sistema de contato sem backend
- **React Query** - Gerenciamento de estado servidor
- **Code Splitting** - Carregamento otimizado

## ⚙️ Configuração de Variáveis de Ambiente

Este projeto usa **EmailJS** para o sistema de contato. Para configurar:

### 1. Arquivo de configuração
```sh
# Copie o arquivo de exemplo
cp .env.example .env.local
```

### 2. Obtenha suas credenciais
Acesse [EmailJS](https://www.emailjs.com/) e obtenha suas credenciais:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id  
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

### 3. Configuração no EmailJS
1. Crie uma conta no EmailJS
2. Configure um serviço de email (Gmail, Outlook, etc.)
3. Crie um template de email
4. Copie as credenciais para o arquivo `.env.local`

**⚠️ Nota de Segurança**: Variáveis com prefixo `VITE_` são incluídas no bundle frontend e são visíveis no código do cliente. Isso é normal para configurações do EmailJS, que são públicas por design.

## 📦 Scripts Disponíveis

```sh
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Preview do build de produção
npm run lint         # Executa linting do código
```

## 🚀 Deploy e Produção

### Build para produção
```sh
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/` e estarão prontos para deploy.

### Deploy automatizado
Este projeto está configurado para deploy automático via **Netlify**:

- **Produção**: Deploys automáticos da branch `main`
- **Preview**: Deploys de preview para Pull Requests
- **Configuração**: Via `netlify.toml`

## 📁 Estrutura do Projeto

```
gmvision/
├── public/                 # Assets estáticos
│   ├── *.avif             # Imagens otimizadas
│   ├── *.png              # Logos e ícones
│   └── *.otf              # Fontes personalizadas
├── src/
│   ├── components/        # Componentes React
│   │   ├── ui/           # Componentes de UI base
│   │   └── *.tsx         # Seções da aplicação
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utilitários
│   ├── pages/            # Páginas da aplicação
│   └── App.tsx           # Componente principal
├── .env.example          # Template de variáveis
└── README.md            # Documentação
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob licença privada. Todos os direitos reservados à GMvision.

## 📞 Contato

- **Website**: [GMvision](https://gmvision.netlify.app)
- **Email**: contato@gmvision.com.br
- **GitHub**: [@rafavieira1](https://github.com/rafavieira1)

---

**💡 GMvision** - Transformando espaços em oportunidades através da tecnologia digital inteligente.

git add .

git commit -m "sua mensagem de commit"

git push upstream feature/updates:marssa