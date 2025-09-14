# Site Institucional Dra. Bruna

Site institucional da Dra. Bruna Torelli Soares, especialista em Endodontia.

## 🏗️ Tecnologias

- **Framework**: Next.js 14 (SSG)
- **Frontend**: React 18 + TypeScript
- **Styling**: TailwindCSS + shadcn/ui
- **Deploy**: Vercel
- **CI/CD**: GitHub Actions

## 🚀 Quick Start

### Pré-requisitos

- Node.js 18+
- npm 9+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/danbfiorotto/dra-bruna-site.git
cd dra-bruna-site

# Instale as dependências
npm install

# Desenvolvimento
npm run dev

# Build
npm run build

# Deploy
npm run start
```

### Scripts Disponíveis

```bash
npm run dev          # Desenvolvimento (http://localhost:3000)
npm run build        # Build para produção
npm run start        # Servidor de produção
npm run lint         # ESLint + Prettier
npm run lint:fix     # Fix automático
```

## 📁 Estrutura do Projeto

```
dra-bruna-site/
├── src/
│   ├── components/      # Componentes React
│   │   ├── ui/         # Componentes UI (shadcn/ui)
│   │   ├── Layout.tsx  # Layout principal
│   │   ├── Header.tsx  # Cabeçalho
│   │   └── Footer.tsx  # Rodapé
│   ├── pages/          # Páginas Next.js
│   │   ├── index.tsx   # Home
│   │   ├── blog.tsx    # Blog
│   │   ├── tratamentos.tsx
│   │   └── contato.tsx
│   ├── lib/            # Utilitários
│   └── styles/         # Estilos globais
├── public/             # Assets estáticos
├── package.json
├── next.config.js
└── tailwind.config.js
```

## 🎨 Design System

### Cores da Marca

- **Dourado**: `#D4AF37` (primary)
- **Preto**: `#000000` (text)
- **Branco**: `#FFFFFF` (background)
- **Cinza Claro**: `#F5F5F5` (secondary)

### Componentes UI

Utilizamos shadcn/ui com customizações para a marca Dra. Bruna:

- Button
- Card
- Input
- Label
- Textarea

## 📱 Páginas

- **Home** (`/`) - Página inicial
- **Sobre** (`/sobre`) - Sobre a Dra. Bruna
- **Tratamentos** (`/tratamentos`) - Tratamentos oferecidos
- **Blog** (`/blog`) - Artigos sobre endodontia
- **Casos** (`/casos`) - Casos clínicos
- **Depoimentos** (`/depoimentos`) - Depoimentos de pacientes
- **Contato** (`/contato`) - Formulário de contato

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Deploy

O site está configurado para deploy automático no Vercel:

1. Push para `main` → Deploy automático
2. Pull Request → Preview automático

## 🛡️ SEO

- ✅ Meta tags otimizadas
- ✅ Sitemap automático
- ✅ Robots.txt
- ✅ Estrutura semântica
- ✅ Performance otimizada

## 📊 Performance

- ✅ Next.js SSG (Static Site Generation)
- ✅ Imagens otimizadas
- ✅ CSS otimizado
- ✅ JavaScript otimizado
- ✅ Lazy loading

## 🤝 Contribuição

1. Fork o repositório
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é proprietário e confidencial. Todos os direitos reservados.

## 🆘 Suporte

Para suporte técnico ou dúvidas:

- **Issues**: GitHub Issues
- **Email**: contato@drabruna.com.br

---

**Site Dra. Bruna** - Presença digital profissional para especialista em Endodontia.