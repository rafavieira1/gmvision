# Configuração do EmailJS para o Formulário de Contato

## Passos para configurar:

### 1. Criar conta no EmailJS
- Acesse https://www.emailjs.com/
- Crie uma conta gratuita (permite 200 emails/mês)

### 2. Configurar serviço de email
- No dashboard, vá em "Email Services"
- Clique em "Add New Service"
- Escolha seu provedor (Gmail, Outlook, etc.)
- Configure com o email adm@gmvisionco.com
- Anote o Service ID

### 3. Criar template de email
- Vá em "Email Templates"
- Clique em "Create New Template"
- Use este conteúdo:

**Subject:** Nova mensagem de contato - {{from_name}}

**Content:**
```
Nova mensagem de contato recebida através do site GMvision:

Nome: {{from_name}}
Email: {{from_email}}
Telefone: {{phone}}
Empresa: {{company}}
Cidade: {{city}}
Segmento: {{segment}}

Mensagem:
{{message}}

---
Esta mensagem foi enviada automaticamente através do formulário de contato do site.
```

- Anote o Template ID

### 4. Obter Public Key
- Vá em "Account" > "General"
- Copie a "Public Key"

### 5. Configurar variáveis de ambiente
- Edite o arquivo `.env.local`
- Substitua os valores pelas suas configurações:

```
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

### 6. Reiniciar o servidor
```bash
npm run dev
```

## Teste
Após a configuração, teste o formulário preenchendo todos os campos obrigatórios.

## Troubleshooting
- Verifique se as variáveis de ambiente estão corretas
- Confirme se o serviço EmailJS está ativo
- Verifique o console do navegador para erros
- Teste primeiro com um email pessoal antes de usar o adm@gmvisionco.com