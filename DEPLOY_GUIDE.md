# 🚀 Guia de Deploy - Site Dra. Bruna

## 📋 Opções de Deploy

### 1. **Desenvolvimento Local** (Next.js)
```bash
npm run dev
```
- Acesse: http://localhost:3000
- Hot reload ativo
- Debug completo

### 2. **GitHub Pages** (HTML Estático)
```bash
# Windows
copy next.config.github.js next.config.js
npm run build
git add out/
git commit -m "Deploy: Update site"
git push origin main

# Ou use o script batch
deploy-github.bat
```

### 3. **Vercel** (Recomendado)
```bash
# 1. Instale o Vercel CLI
npm i -g vercel

# 2. Faça login
vercel login

# 3. Deploy
vercel

# 4. Para usar configuração estática
vercel --prod
```

### 4. **Netlify**
```bash
# 1. Build para produção
npm run build

# 2. Deploy da pasta 'out'
# Ou conecte o repositório no Netlify
```

## ⚙️ Configurações

### Para Desenvolvimento
- Use `next.config.js` (configuração padrão)
- Next.js normal com SSR

### Para GitHub Pages
- Use `next.config.github.js`
- Gera arquivos HTML estáticos
- Copie para `next.config.js` antes do build

### Para Vercel/Netlify
- Use `next.config.js` (configuração padrão)
- Deploy da pasta `.next` ou `out`

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build normal (Next.js)
npm run build

# Build para GitHub Pages
npm run build:github

# Deploy para GitHub Pages
npm run deploy:github

# Lint
npm run lint
npm run lint:fix

# Limpar
npm run clean
```

## 📁 Arquivos de Configuração

- `next.config.js` - Configuração padrão (desenvolvimento)
- `next.config.github.js` - Para GitHub Pages
- `vercel.json` - Configuração Vercel
- `vercel-static.json` - Vercel para sites estáticos
- `netlify.toml` - Configuração Netlify

## 🐛 Troubleshooting

### Erro "cp não reconhecido" (Windows)
```bash
# Use copy em vez de cp
copy next.config.github.js next.config.js
```

### Erro Vercel "Function Runtimes"
- Use `vercel-static.json` para sites estáticos
- Ou remova a seção `functions` do `vercel.json`

### Build falha
```bash
npm run clean
npm install
npm run build
```

### Imagens não aparecem
- Verifique se estão em `public/images/`
- Use caminhos relativos: `/images/nome.jpg`

## 🌐 URLs de Deploy

- **GitHub Pages**: `https://seu-usuario.github.io/dra-bruna-site`
- **Vercel**: `https://dra-bruna-site.vercel.app`
- **Netlify**: `https://dra-bruna-site.netlify.app`

## 📝 Notas Importantes

1. **GitHub Pages**: Precisa de `output: 'export'`
2. **Vercel/Netlify**: Funciona com Next.js normal
3. **Imagens**: Sempre em `public/images/`
4. **Build**: Sempre teste localmente antes do deploy


