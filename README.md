# Web Click Landing Page

Landing page moderna e responsiva para Web Click, construída com Next.js 15, React 19, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca de interface do usuário
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones modernos
- **Calendly** - Integração de agendamento

## 📦 Instalação

```bash
# Instalar dependências
pnpm install

# Executar em desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Executar servidor de produção
pnpm start
```

## 🌐 Deploy no Vercel

### Pré-requisitos
- Conta no Vercel
- Projeto conectado ao GitHub/GitLab

### Passos para Deploy

1. **Conectar repositório ao Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Conecte seu repositório GitHub/GitLab

2. **Configurações automáticas**
   - O Vercel detectará automaticamente que é um projeto Next.js
   - As configurações do `vercel.json` serão aplicadas automaticamente

3. **Variáveis de ambiente (se necessário)**
   - Adicione variáveis de ambiente no dashboard do Vercel
   - Exemplo: `NEXT_PUBLIC_CALENDLY_URL`

4. **Deploy**
   - Clique em "Deploy"
   - O Vercel fará o build e deploy automaticamente

### Configurações do Vercel

O projeto inclui um arquivo `vercel.json` com configurações otimizadas:

- **Região**: São Paulo (gru1) para melhor performance no Brasil
- **Runtime**: Node.js 20.x
- **Headers de segurança**: X-Frame-Options, X-Content-Type-Options, etc.
- **Redirects**: Configurados para SEO

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev          # Servidor de desenvolvimento
pnpm build        # Build de produção
pnpm start        # Servidor de produção
pnpm lint         # Linting do código

# Utilitários
pnpm type-check   # Verificação de tipos TypeScript
pnpm preview      # Build + servidor de produção
```

## 📁 Estrutura do Projeto

```
├── app/                    # App Router (Next.js 15)
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── contato/           # Página de contato
├── components/            # Componentes React
│   ├── ui/               # Componentes de UI (shadcn/ui)
│   └── *.tsx             # Componentes da landing page
├── lib/                  # Utilitários e configurações
├── hooks/                # Custom hooks
├── public/               # Arquivos estáticos
├── vercel.json          # Configurações do Vercel
├── next.config.mjs      # Configurações do Next.js
└── package.json         # Dependências e scripts
```

## 🎨 Componentes Principais

- **Header** - Navegação principal
- **Hero** - Seção principal com CTA
- **SocialProof** - Logos de empresas parceiras
- **Benefits** - Benefícios do produto
- **HowItWorks** - Como funciona
- **Features** - Funcionalidades
- **ROI** - Retorno sobre investimento
- **Pricing** - Planos e preços
- **FAQ** - Perguntas frequentes
- **FinalCTA** - Call-to-action final
- **Footer** - Rodapé

## 🔒 Segurança

O projeto inclui headers de segurança configurados:

- `X-Frame-Options: DENY` - Previne clickjacking
- `X-Content-Type-Options: nosniff` - Previne MIME sniffing
- `Referrer-Policy: origin-when-cross-origin` - Controle de referrer

## 📱 Responsividade

- Design mobile-first
- Breakpoints otimizados para todos os dispositivos
- Componentes adaptativos

## 🚀 Performance

- **Otimizações de imagem**: WebP e AVIF
- **Compressão**: Habilitada
- **Tree shaking**: Otimização de imports
- **Static generation**: Páginas pré-renderizadas

## 🔧 Configurações de Produção

### Next.js
- TypeScript configurado para produção
- Otimizações de imagem habilitadas
- Headers de segurança configurados
- Compressão habilitada

### Vercel
- Região São Paulo para melhor latência
- Runtime Node.js 20.x
- Build automático com pnpm
- Deploy automático em push

## 📞 Suporte

Para dúvidas ou problemas:
- Abra uma issue no repositório
- Entre em contato através da página de contato

---

**Status**: ✅ Pronto para produção
**Última atualização**: Dezembro 2024
