# Deploy no GitHub Pages - Dra. Bruna Site

## Problemas Identificados e Corrigidos

### 1. **Imagens Faltando**
- **Problema**: O site estava referenciando imagens que não existiam na pasta `public`
- **Solução**: Criadas imagens placeholder em SVG para todas as imagens referenciadas:
  - `/images/dentist-hero.svg` - Imagem de fundo do hero
  - `/images/dra-bruna.jpg` - Foto da Dra. Bruna
  - `/images/tratamento-canal.jpg` - Imagem do tratamento
  - `/images/blog/*.jpg` - Imagens dos artigos do blog
  - `/images/casos/*.jpg` - Imagens dos casos antes/depois
  - `/images/depoimentos/*.jpg` - Thumbnails dos vídeos
  - `/og-image.jpg` - Imagem para redes sociais

### 2. **Configuração do GitHub Pages**
- **Problema**: Faltavam arquivos de configuração para o GitHub Pages
- **Solução**: Criados arquivos essenciais:
  - `.nojekyll` - Para desabilitar o processamento Jekyll
  - `_config.yml` - Configuração do Jekyll (se necessário)
  - `404.html` - Página de erro personalizada
  - `custom-styles.css` - CSS com fallbacks para variáveis CSS

### 3. **Variáveis CSS**
- **Problema**: As variáveis CSS customizadas podem não funcionar em todos os navegadores
- **Solução**: Adicionado CSS com fallbacks para as cores principais:
  - `--gold: #D4AF37`
  - `--black: #000000`
  - `--light-gray: #F5F5F5`

## Como Fazer o Deploy

### Opção 1: Deploy Manual
1. **Fazer build do projeto:**
   ```bash
   cd dra-bruna-site
   npm run build
   ```

2. **Fazer commit e push da pasta `out`:**
   ```bash
   # Adicionar todos os arquivos da pasta out
   git add out/
   git commit -m "Deploy: Corrigir layout e adicionar imagens"
   git push origin main
   ```

3. **Configurar GitHub Pages:**
   - Vá para Settings > Pages no repositório
   - Selecione "Deploy from a branch"
   - Escolha a branch `main` e pasta `/out`
   - Salve as configurações

### Opção 2: Deploy Automático com GitHub Actions
1. **Criar arquivo `.github/workflows/deploy.yml`:**
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             cache: 'npm'
             cache-dependency-path: dra-bruna-site/package-lock.json
         
         - name: Install dependencies
           run: |
             cd dra-bruna-site
             npm ci
         
         - name: Build
           run: |
             cd dra-bruna-site
             npm run build
         
         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dra-bruna-site/out
   ```

2. **Fazer commit do arquivo:**
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Actions workflow for deployment"
   git push origin main
   ```

## Verificação Pós-Deploy

Após o deploy, verifique se:

1. **Layout está correto:**
   - Cores douradas e pretas aparecem corretamente
   - Imagens são exibidas
   - Responsividade funciona em mobile

2. **Navegação funciona:**
   - Todos os links internos funcionam
   - Páginas carregam corretamente
   - 404 personalizada aparece para páginas inexistentes

3. **Performance:**
   - Site carrega rapidamente
   - Imagens são otimizadas
   - CSS é aplicado corretamente

## URLs de Teste

- **Página principal**: `https://danbfiorotto.github.io/dra-bruna-site/`
- **Sobre**: `https://danbfiorotto.github.io/dra-bruna-site/sobre/`
- **Tratamentos**: `https://danbfiorotto.github.io/dra-bruna-site/tratamentos/`
- **Blog**: `https://danbfiorotto.github.io/dra-bruna-site/blog/`
- **Casos**: `https://danbfiorotto.github.io/dra-bruna-site/casos/`
- **Depoimentos**: `https://danbfiorotto.github.io/dra-bruna-site/depoimentos/`
- **Contato**: `https://danbfiorotto.github.io/dra-bruna-site/contato/`

## Próximos Passos

1. **Substituir imagens placeholder** por imagens reais da Dra. Bruna
2. **Configurar domínio personalizado** (se desejado)
3. **Adicionar analytics** (Google Analytics)
4. **Otimizar SEO** com meta tags específicas
5. **Implementar formulário de contato** funcional

## Troubleshooting

### Se o layout ainda estiver quebrado:
1. Verifique se o arquivo `.nojekyll` está na raiz da pasta `out`
2. Confirme se o `custom-styles.css` está sendo carregado
3. Teste em modo incógnito para evitar cache
4. Verifique o console do navegador para erros

### Se as imagens não aparecerem:
1. Confirme se as imagens estão na pasta `out/images/`
2. Verifique se os caminhos estão corretos (começam com `/images/`)
3. Teste acessando a imagem diretamente no navegador

### Se o CSS não estiver funcionando:
1. Verifique se o arquivo CSS está sendo servido
2. Confirme se as classes Tailwind estão sendo aplicadas
3. Teste com o CSS customizado como fallback
