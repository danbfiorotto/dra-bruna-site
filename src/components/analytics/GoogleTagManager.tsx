import { useEffect } from 'react';
import Script from 'next/script';

interface GoogleTagManagerProps {
  gtmId?: string;
}

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
  useEffect(() => {
    if (!gtmId) return;

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    
    // Push initial data
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });
  }, [gtmId]);

  if (!gtmId) return null;

  return (
    <>
      {/* GTM Head Script */}
      <Script
        id="gtm-head"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />
      
      {/* GTM NoScript */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}

// Utility functions for GTM
export const pushToDataLayer = (data: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(data);
  }
};

export const trackGTMEvent = (eventName: string, parameters?: Record<string, any>) => {
  pushToDataLayer({
    event: eventName,
    ...parameters,
  });
};

// Common tracking events for the dental website
export const trackContactForm = (formType: 'contact' | 'appointment') => {
  trackGTMEvent('form_submit', {
    form_type: formType,
    page_location: window.location.href,
  });
};

export const trackWhatsAppClick = (source: string) => {
  trackGTMEvent('whatsapp_click', {
    source: source,
    page_location: window.location.href,
  });
};

export const trackPhoneClick = (phoneNumber: string) => {
  trackGTMEvent('phone_click', {
    phone_number: phoneNumber,
    page_location: window.location.href,
  });
};

export const trackEmailClick = (email: string) => {
  trackGTMEvent('email_click', {
    email: email,
    page_location: window.location.href,
  });
};

export const trackPageView = (pageName: string, pagePath: string) => {
  trackGTMEvent('page_view', {
    page_name: pageName,
    page_path: pagePath,
    page_location: window.location.href,
  });
};

