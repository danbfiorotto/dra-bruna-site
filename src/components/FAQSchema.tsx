import { ReactNode } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  className?: string;
}

export default function FAQSchema({ faqs, className = '' }: FAQSchemaProps) {
  // Gerar schema.org para FAQ
  const generateFAQSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  };

  return (
    <>
      {/* Schema.org FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema())
        }}
      />
    </>
  );
}

// Hook para gerar FAQ schema automaticamente
export const useFAQSchema = (faqs: FAQItem[]) => {
  return <FAQSchema faqs={faqs} />;
};
