# Site Dra. Bruna Torelli Soares

Site institucional da Dra. Bruna Torelli Soares, especialista em endodontia.

## 🚀 Como Executar

### Desenvolvimento Local (Next.js)
```bash
npm run dev
```
Acesse: http://localhost:3000

### Deploy no GitHub Pages
```bash
npm run deploy:github
```

## 📁 Estrutura do Projeto

```
dra-bruna-site/
├── src/
│   ├── components/     # Componentes React
│   ├── pages/         # Páginas do site
│   ├── styles/        # Estilos CSS
│   └── lib/           # Utilitários
├── public/
│   └── images/        # Imagens do site
├── next.config.js     # Configuração Next.js (desenvolvimento)
├── next.config.github.js # Configuração para GitHub Pages
└── package.json
```

## 🛠️ Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento
- `npm run build` - Build para produção (Next.js normal)
- `npm run build:github` - Build para GitHub Pages (HTML estático)
- `npm run deploy:github` - Deploy automático para GitHub Pages
- `npm run lint` - Executa o linter
- `npm run lint:fix` - Corrige problemas do linter automaticamente

## 🎨 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones

## 📱 Páginas

- **Home** - Página inicial com hero e tratamentos
- **Sobre** - Informações sobre a Dra. Bruna
- **Tratamentos** - Lista de tratamentos oferecidos
- **Tratamento de Canal** - Página específica sobre canal
- **Blog** - Artigos sobre endodontia
- **Contato** - Formulário de contato

## 🔧 Configuração

### Para Desenvolvimento
Use `next.config.js` (configuração padrão)

### Para GitHub Pages
Use `next.config.github.js` que:
- Gera arquivos HTML estáticos
- Otimiza imagens para export
- Configura paths corretos

## 🚀 Deploy

### GitHub Pages
1. Configure o repositório para usar GitHub Pages
2. Execute: `npm run deploy:github`
3. Acesse: `https://seu-usuario.github.io/dra-bruna-site`

### Vercel/Netlify
1. Execute: `npm run build`
2. Faça deploy da pasta `.next`

## 📝 Notas

- As imagens estão em formato SVG placeholder
- O site é totalmente responsivo
- Otimizado para SEO
- Acessível (WCAG 2.1)

## 🐛 Troubleshooting

### ESLint Errors
```bash
npm run lint:fix
```

### Build Errors
```bash
npm run clean
npm run build
```

### Imagens não aparecem
Verifique se as imagens estão na pasta `public/images/`