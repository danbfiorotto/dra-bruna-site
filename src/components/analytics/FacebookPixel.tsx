import { useEffect } from 'react';
import Script from 'next/script';

interface FacebookPixelProps {
  pixelId?: string;
}

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
    _fbq: (...args: any[]) => void;
  }
}

export default function FacebookPixel({ pixelId }: FacebookPixelProps) {
  useEffect(() => {
    if (!pixelId) return;

    // Initialize Facebook Pixel
    if (typeof window !== 'undefined') {
      window.fbq = window.fbq || function(...args: any[]) {
        (window.fbq.q = window.fbq.q || []).push(args);
      };
      window._fbq = window.fbq;
      
      // Track page view
      window.fbq('init', pixelId);
      window.fbq('track', 'PageView');
    }
  }, [pixelId]);

  if (!pixelId) return null;

  return (
    <>
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `,
        }}
      />
      
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}

// Utility functions for Facebook Pixel
export const trackFacebookEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

// Common tracking events for the dental website
export const trackContactFormSubmission = (formType: 'contact' | 'appointment') => {
  trackFacebookEvent('Lead', {
    content_name: `${formType}_form`,
    content_category: 'dental_consultation',
  });
};

export const trackWhatsAppClick = (source: string) => {
  trackFacebookEvent('Contact', {
    content_name: 'whatsapp_click',
    content_category: 'dental_consultation',
    source: source,
  });
};

export const trackPhoneClick = (phoneNumber: string) => {
  trackFacebookEvent('Contact', {
    content_name: 'phone_click',
    content_category: 'dental_consultation',
    phone_number: phoneNumber,
  });
};

export const trackEmailClick = (email: string) => {
  trackFacebookEvent('Contact', {
    content_name: 'email_click',
    content_category: 'dental_consultation',
    email: email,
  });
};

export const trackViewContent = (contentName: string, contentType: string) => {
  trackFacebookEvent('ViewContent', {
    content_name: contentName,
    content_type: contentType,
  });
};

export const trackScheduleAppointment = () => {
  trackFacebookEvent('Schedule', {
    content_name: 'appointment_request',
    content_category: 'dental_consultation',
  });
};

export const trackCompleteRegistration = (method: string) => {
  trackFacebookEvent('CompleteRegistration', {
    registration_method: method,
    content_category: 'dental_consultation',
  });
};

