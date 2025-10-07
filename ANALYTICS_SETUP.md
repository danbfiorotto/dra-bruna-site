# 📊 Configuração de Analytics - Site Dra. Bruna

Este documento explica como configurar e usar os sistemas de analytics implementados no site.

## 🎯 Sistemas Implementados

### 1. Google Analytics 4 (GA4)
- **Arquivo**: `src/components/analytics/GoogleAnalytics.tsx`
- **Variável de ambiente**: `NEXT_PUBLIC_GA_ID`
- **Formato**: `G-XXXXXXXXXX`

### 2. Google Tag Manager (GTM)
- **Arquivo**: `src/components/analytics/GoogleTagManager.tsx`
- **Variável de ambiente**: `NEXT_PUBLIC_GTM_ID`
- **Formato**: `GTM-XXXXXXX`

### 3. Facebook Pixel
- **Arquivo**: `src/components/analytics/FacebookPixel.tsx`
- **Variável de ambiente**: `NEXT_PUBLIC_FB_PIXEL_ID`
- **Formato**: `123456789012345`

## ⚙️ Configuração

### 1. Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com:

```env
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=123456789012345
```

### 2. Como Obter os IDs

#### Google Analytics 4
1. Acesse [Google Analytics](https://analytics.google.com/)
2. Crie uma propriedade para o site
3. Copie o ID de medição (formato: G-XXXXXXXXXX)

#### Google Tag Manager
1. Acesse [Google Tag Manager](https://tagmanager.google.com/)
2. Crie um container para o site
3. Copie o ID do container (formato: GTM-XXXXXXX)

#### Facebook Pixel
1. Acesse [Facebook Business Manager](https://business.facebook.com/)
2. Vá em Gerenciador de Eventos
3. Crie um pixel
4. Copie o ID do pixel (formato: 123456789012345)

## 📈 Eventos Rastreados

### Eventos Automáticos
- **Page View**: Visualização de páginas
- **Scroll Depth**: Profundidade de rolagem (25%, 50%, 75%, 90%, 100%)
- **Time on Page**: Tempo gasto na página

### Eventos de Interação
- **Form Submission**: Envio de formulários de contato
- **WhatsApp Click**: Cliques nos botões do WhatsApp
- **Phone Click**: Cliques nos números de telefone
- **Email Click**: Cliques nos endereços de email
- **Content View**: Visualização de conteúdo específico

## 🔧 Funções de Tracking

### Uso Básico
```typescript
import { trackWhatsAppClick, trackFormSubmission } from '@/lib/analytics';

// Rastrear clique no WhatsApp
trackWhatsAppClick('header');

// Rastrear envio de formulário
trackFormSubmission('contact', {
  name: 'João Silva',
  email: 'joao@email.com'
});
```

### Funções Disponíveis
- `trackPageView(pageName, pagePath)`
- `trackFormSubmission(formType, formData)`
- `trackWhatsAppClick(source)`
- `trackPhoneClick(phoneNumber)`
- `trackEmailClick(email)`
- `trackContentView(contentName, contentType)`
- `trackAppointmentSchedule(method)`
- `trackCustomEvent(eventName, parameters)`

## 🎨 Personalização

### Adicionar Novos Eventos
1. Edite `src/lib/analytics.ts`
2. Crie uma nova função de tracking
3. Implemente o tracking nos componentes necessários

### Exemplo de Evento Personalizado
```typescript
export const trackVideoPlay = (videoTitle: string) => {
  trackCustomEvent('video_play', {
    video_title: videoTitle,
    page_location: window.location.href,
  });
};
```

## 🚀 Verificação

### 1. Google Analytics
- Use a extensão "Google Analytics Debugger" no Chrome
- Verifique no console se os eventos estão sendo enviados

### 2. Google Tag Manager
- Use o modo de visualização do GTM
- Verifique se os eventos aparecem no dataLayer

### 3. Facebook Pixel
- Use o "Facebook Pixel Helper" no Chrome
- Verifique se os eventos estão sendo disparados

## 📊 Relatórios Importantes

### Google Analytics
- **Audience**: Demografia dos visitantes
- **Acquisition**: Como os usuários chegam ao site
- **Behavior**: Páginas mais visitadas
- **Conversions**: Formulários enviados, cliques no WhatsApp

### Facebook Pixel
- **Events Manager**: Eventos disparados
- **Audience Insights**: Comportamento dos usuários
- **Custom Audiences**: Criação de públicos personalizados

## 🔒 Privacidade e LGPD

### Configurações Recomendadas
1. **Anonimização de IP**: Ativada por padrão
2. **Consentimento**: Implementar banner de cookies
3. **Retenção de dados**: Configurar período adequado
4. **Direitos do usuário**: Implementar funcionalidades de exclusão

### Exemplo de Banner de Cookies
```typescript
// Adicionar ao Layout.tsx
const [cookieConsent, setCookieConsent] = useState(false);

useEffect(() => {
  const consent = localStorage.getItem('cookie-consent');
  setCookieConsent(consent === 'true');
}, []);

const handleCookieConsent = (accepted: boolean) => {
  localStorage.setItem('cookie-consent', accepted.toString());
  setCookieConsent(true);
  
  if (accepted) {
    // Inicializar analytics
  }
};
```

## 🛠️ Troubleshooting

### Problemas Comuns

1. **Eventos não aparecem**
   - Verifique se as variáveis de ambiente estão configuradas
   - Confirme se os scripts estão carregando no console

2. **GTM não funciona**
   - Verifique se o container está publicado
   - Confirme se as tags estão configuradas corretamente

3. **Facebook Pixel não dispara**
   - Use o Pixel Helper para debug
   - Verifique se o pixel está ativo no Business Manager

### Logs de Debug
```typescript
// Adicionar ao analytics.ts para debug
if (process.env.NODE_ENV === 'development') {
  console.log('Analytics event:', eventName, parameters);
}
```

## 📞 Suporte

Para dúvidas sobre a implementação:
- **Documentação**: Este arquivo
- **Código**: Comentários nos arquivos de analytics
- **Testes**: Use as ferramentas de debug mencionadas

---

**✅ O sistema de analytics está pronto para uso!**

Configure as variáveis de ambiente e comece a coletar dados sobre o comportamento dos visitantes do site.
