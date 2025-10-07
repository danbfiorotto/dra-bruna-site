// Analytics utilities for tracking user interactions

/**
 * Track page views across all analytics platforms
 */
export const trackPageView = (pageName: string, pagePath: string) => {
  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: pagePath,
      page_title: pageName,
    });
  }

  // Google Tag Manager
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page_name: pageName,
      page_path: pagePath,
      page_location: window.location.href,
    });
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

/**
 * Track form submissions
 */
export const trackFormSubmission = (formType: 'contact' | 'appointment', formData?: any) => {
  const eventData = {
    form_type: formType,
    page_location: window.location.href,
    ...formData,
  };

  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'engagement',
      event_label: formType,
      value: 1,
    });
  }

  // Google Tag Manager
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'form_submit',
      ...eventData,
    });
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: `${formType}_form`,
      content_category: 'dental_consultation',
    });
  }
};

/**
 * Track WhatsApp clicks
 */
export const trackWhatsAppClick = (source: string) => {
  const eventData = {
    source: source,
    page_location: window.location.href,
  };

  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: source,
      value: 1,
    });
  }

  // Google Tag Manager
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'whatsapp_click',
      ...eventData,
    });
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', {
      content_name: 'whatsapp_click',
      content_category: 'dental_consultation',
      source: source,
    });
  }
};

/**
 * Track phone clicks
 */
export const trackPhoneClick = (phoneNumber: string) => {
  const eventData = {
    phone_number: phoneNumber,
    page_location: window.location.href,
  };

  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_click', {
      event_category: 'engagement',
      event_label: phoneNumber,
      value: 1,
    });
  }

  // Google Tag Manager
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'phone_click',
      ...eventData,
    });
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', {
      content_name: 'phone_click',
      content_category: 'dental_consultation',
      phone_number: phoneNumber,
    });
  }
};

/**
 * Track email clicks
 */
export const trackEmailClick = (email: string) => {
  const eventData = {
    email: email,
    page_location: window.location.href,
  };

  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'email_click', {
      event_category: 'engagement',
      event_label: email,
      value: 1,
    });
  }

  // Google Tag Manager
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'email_click',
      ...eventData,
    });
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', {
      content_name: 'email_click',
      content_category: 'dental_consultation',
      email: email,
    });
  }
};

/**
 * Track content views (blog posts, treatments, etc.)
 */
export const trackContentView = (contentName: string, contentType: string) => {
  const eventData = {
    content_name: contentName,
    content_type: contentType,
    page_location: window.location.href,
  };

  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      event_category: 'content',
      event_label: contentName,
      value: 1,
    });
  }

  // Google Tag Manager
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'view_content',
      ...eventData,
    });
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: contentName,
      content_type: contentType,
    });
  }
};

/**
 * Track appointment scheduling
 */
export const trackAppointmentSchedule = (method: string) => {
  const eventData = {
    method: method,
    page_location: window.location.href,
  };

  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'schedule', {
      event_category: 'conversion',
      event_label: method,
      value: 1,
    });
  }

  // Google Tag Manager
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'appointment_schedule',
      ...eventData,
    });
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Schedule', {
      content_name: 'appointment_request',
      content_category: 'dental_consultation',
    });
  }
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (depth: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll', {
      event_category: 'engagement',
      event_label: `${depth}%`,
      value: depth,
    });
  }
};

/**
 * Track time on page
 */
export const trackTimeOnPage = (timeInSeconds: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'timing_complete', {
      name: 'page_time',
      value: timeInSeconds,
    });
  }
};

/**
 * Get UTM parameters from URL
 */
export const getUTMParameters = () => {
  if (typeof window === 'undefined') return {};

  const urlParams = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};

  urlParams.forEach((value, key) => {
    if (key.startsWith('utm_')) {
      utm[key] = value;
    }
  });

  return utm;
};

/**
 * Track custom events
 */
export const trackCustomEvent = (eventName: string, parameters?: Record<string, any>) => {
  const eventData = {
    event: eventName,
    page_location: window.location.href,
    ...parameters,
  };

  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }

  // Google Tag Manager
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(eventData);
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'CustomEvent', {
      event_name: eventName,
      ...parameters,
    });
  }
};
