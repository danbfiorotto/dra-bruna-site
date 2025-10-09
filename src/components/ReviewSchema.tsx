import { ReactNode } from 'react';

interface Review {
  id: string;
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
  treatment?: string;
  location?: string;
}

interface ReviewSchemaProps {
  reviews: Review[];
  businessName?: string;
  businessUrl?: string;
  className?: string;
}

export default function ReviewSchema({ 
  reviews, 
  businessName = "Dra. Bruna Torelli Soares",
  businessUrl = "https://brunatorelli.com.br",
  className = '' 
}: ReviewSchemaProps) {
  // Gerar schema.org para reviews
  const generateReviewSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": businessName,
      "url": businessUrl,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": calculateAverageRating(reviews),
        "reviewCount": reviews.length,
        "bestRating": 5,
        "worstRating": 1
      },
      "review": reviews.map((review) => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": review.author
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating,
          "bestRating": 5,
          "worstRating": 1
        },
        "reviewBody": review.reviewBody,
        "datePublished": review.datePublished,
        "publisher": {
          "@type": "Organization",
          "name": businessName
        }
      }))
    };
  };

  // Calcular média das avaliações
  const calculateAverageRating = (reviews: Review[]): number => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return Math.round((sum / reviews.length) * 10) / 10; // Arredondar para 1 casa decimal
  };

  return (
    <>
      {/* Schema.org Review */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateReviewSchema())
        }}
      />
    </>
  );
}

// Hook para gerar review schema automaticamente
export const useReviewSchema = (reviews: Review[], businessName?: string) => {
  return <ReviewSchema reviews={reviews} businessName={businessName} />;
};
