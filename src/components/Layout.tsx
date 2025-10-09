import Head from 'next/head';
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import GoogleAnalytics from './analytics/GoogleAnalytics';
import GoogleTagManager from './analytics/GoogleTagManager';
import FacebookPixel from './analytics/FacebookPixel';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export default function Layout({
  children,
  title = 'Dra. Bruna - Especialista em Endodontia',
  description = 'Dra. Bruna Torelli Soares é especialista em endodontia com vasta experiência em tratamentos de canal. Agende sua consulta.',
  keywords = 'endodontia, tratamento de canal, retratamento endodôntico, Dra. Bruna',
  canonical,
  ogImage = '/og-image.jpg',
  noindex = false,
  nofollow = false
}: LayoutProps) {
  const fullTitle = title.includes('Dra. Bruna') ? title : `${title} | Dra. Bruna`;
  
  // Generate canonical URL if not provided
  const getCanonicalUrl = () => {
    if (canonical) return canonical;
    if (typeof window !== 'undefined') {
      return `https://brunatorelli.com.br${window.location.pathname}`;
    }
    return 'https://brunatorelli.com.br';
  };
  
  // Generate robots meta content
  const getRobotsContent = () => {
    const robots = [];
    if (noindex) robots.push('noindex');
    else robots.push('index');
    if (nofollow) robots.push('nofollow');
    else robots.push('follow');
    return robots.join(', ');
  };
  
  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Dra. Bruna Torelli Soares" />
        <meta name="robots" content={getRobotsContent()} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#D4AF37" />
        <meta name="msapplication-TileColor" content="#D4AF37" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={getCanonicalUrl()} />
        
        {/* Open Graph */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={getCanonicalUrl()} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Dra. Bruna Torelli Soares" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content="@brunatorellis" />
        <meta name="twitter:creator" content="@brunatorellis" />
        
        {/* Schema.org LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Dra. Bruna Torelli Soares",
              "alternateName": "Dra. Bruna Torelli",
              "description": "Especialista em endodontia com vasta experiência em tratamentos de canal. Atendimento em Sorocaba-SP com tecnologia de ponta e abordagem humanizada.",
              "url": "https://brunatorelli.com.br",
              "telephone": "+55-15-99283-6336",
              "email": "dra.brunatorellisoares@hotmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua Bernardo Guimarães 105, Edifício Boulevar Alavanca",
                "addressLocality": "Sorocaba",
                "addressRegion": "SP",
                "postalCode": "18030-030",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-23.5075",
                "longitude": "-47.4608"
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "$$",
              "medicalSpecialty": "Endodontics",
              "image": "https://brunatorelli.com.br/og-image.jpg",
              "logo": "https://brunatorelli.com.br/images/logo.png",
              "sameAs": [
                "https://instagram.com/brunatorellis"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Tratamentos Endodônticos",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "Tratamento de Canal",
                      "description": "Procedimento especializado para preservar dentes com infecção na polpa"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "Retratamento Endodôntico",
                      "description": "Intervenção para casos onde o tratamento anterior não foi bem-sucedido"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Analytics Components */}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        <FacebookPixel pixelId={process.env.NEXT_PUBLIC_FB_PIXEL_ID} />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

