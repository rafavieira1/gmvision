# LED Shine Connect

## Project info

Plataforma para conectar anunciantes e estabelecimentos através de painéis LED inteligentes.

## Como executar o projeto

Para executar este projeto localmente, você precisa ter Node.js & npm instalados - [instale com nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Siga estes passos:

```sh
# Passo 1: Clone o repositório
git clone <URL_DO_GIT>

# Passo 2: Navegue até o diretório do projeto
cd led-shine-connect

# Passo 3: Instale as dependências necessárias
npm i

# Passo 4: Configure as variáveis de ambiente
cp .env.example .env.local
# Edite o arquivo .env.local com suas configurações do EmailJS

# Passo 5: Execute o servidor de desenvolvimento
npm run dev
```

## Tecnologias utilizadas

Este projeto foi construído com:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Variáveis de Ambiente

Este projeto usa EmailJS para o formulário de contato. Você precisa configurar as seguintes variáveis de ambiente:

1. Copie o arquivo `.env.example` para `.env.local`:
```sh
cp .env.example .env.local
```

2. Obtenha suas credenciais no [EmailJS](https://www.emailjs.com/) e preencha:
```
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id  
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

**Nota**: Essas variáveis com prefixo `VITE_` são incluídas no bundle frontend e são visíveis no código do cliente. Isso é normal para configurações do EmailJS, que são públicas por design.

## Como fazer deploy

Para fazer deploy do projeto, execute:

```sh
npm run build
```

Os arquivos de produção serão gerados na pasta `dist/`.

git add .

git commit -m "sua mensagem de commit"

git push upstream feature/updates:marssa
