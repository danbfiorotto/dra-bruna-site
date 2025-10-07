// Performance optimization utilities

/**
 * Lazy load images with intersection observer
 */
export function lazyLoadImages() {
  if (typeof window === 'undefined') return;

  const images = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for browsers without IntersectionObserver
    images.forEach((img) => {
      const imageElement = img as HTMLImageElement;
      imageElement.src = imageElement.dataset.src || '';
    });
  }
}

/**
 * Preload critical resources
 */
export function preloadCriticalResources() {
  if (typeof window === 'undefined') return;

  // Preload critical fonts
  const fontLinks = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
  ];

  fontLinks.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    document.head.appendChild(link);
  });
}

/**
 * Optimize third-party scripts loading
 */
export function optimizeThirdPartyScripts() {
  if (typeof window === 'undefined') return;

  // Load non-critical scripts after page load
  window.addEventListener('load', () => {
    // Load analytics or other non-critical scripts here
    console.log('Page loaded, ready for non-critical scripts');
    
    // Track page load performance
    if (window.performance && window.performance.timing) {
      const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
      console.log(`Page load time: ${loadTime}ms`);
    }
  });
}

/**
 * Track scroll depth for analytics
 */
export function trackScrollDepth() {
  if (typeof window === 'undefined') return;

  let maxScroll = 0;
  const scrollThresholds = [25, 50, 75, 90, 100];
  const trackedThresholds = new Set();

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
      
      scrollThresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
          trackedThresholds.add(threshold);
          
          // Track scroll depth event
          if (window.gtag) {
            window.gtag('event', 'scroll', {
              event_category: 'engagement',
              event_label: `${threshold}%`,
              value: threshold,
            });
          }
        }
      });
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
}

/**
 * Track time on page
 */
export function trackTimeOnPage() {
  if (typeof window === 'undefined') return;

  const startTime = Date.now();
  
  const trackTime = () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    
    if (window.gtag) {
      window.gtag('event', 'timing_complete', {
        name: 'page_time',
        value: timeSpent,
      });
    }
  };

  // Track time when user leaves the page
  window.addEventListener('beforeunload', trackTime);
  
  // Track time every 30 seconds
  const interval = setInterval(trackTime, 30000);
  
  // Clean up interval when page unloads
  window.addEventListener('beforeunload', () => {
    clearInterval(interval);
  });
}

/**
 * Initialize performance optimizations
 */
export function initPerformanceOptimizations() {
  if (typeof window === 'undefined') return;

  // Initialize lazy loading
  lazyLoadImages();
  
  // Preload critical resources
  preloadCriticalResources();
  
  // Optimize third-party scripts
  optimizeThirdPartyScripts();
  
  // Track user engagement
  trackScrollDepth();
  trackTimeOnPage();
}
