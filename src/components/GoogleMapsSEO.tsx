import Script from 'next/script';

export default function GoogleMapsLocalSEO({ lang = 'en' }: { lang?: string }) {
  // The Local SEO Hack: Generates Google Maps schema localized to the chosen language,
  // targeting map pack results globally by linking localized Google CIDs and &hl parameters
  const getLocalizedSchema = () => {
    let localizedKeywords = "Mail Order Pharmacy, Delivery, Medication";
    let mapUrl = "https://maps.google.com/?cid=YOUR_CID_HERE&hl=en";
    
    switch(lang) {
      case 'es':
        localizedKeywords = "Farmacia por correo, Entrega a domicilio, Medicamentos en línea";
        mapUrl = "https://maps.google.com/?cid=YOUR_CID_HERE&hl=es";
        break;
      case 'fr':
        localizedKeywords = "Pharmacie en ligne, Livraison de médicaments, Ordonnances";
        mapUrl = "https://maps.google.com/?cid=YOUR_CID_HERE&hl=fr";
        break;
      case 'zh':
        localizedKeywords = "在线药房, 处方药配送, 邮购药房";
        mapUrl = "https://maps.google.com/?cid=YOUR_CID_HERE&hl=zh-CN";
        break;
      case 'hi':
        localizedKeywords = "ऑनलाइन फार्मेसी, दवा वितरण, पर्चे की दवाएं";
        mapUrl = "https://maps.google.com/?cid=YOUR_CID_HERE&hl=hi";
        break;
    }

    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "name": "Mail Order Pharmacy",
      "image": "https://mailorderpharmacy.io/logo.png",
      "@id": "https://mailorderpharmacy.io",
      "url": "https://mailorderpharmacy.io",
      "telephone": "+1-800-555-0199",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Digital Pharmacy Fulfillment",
        "addressLocality": "Vancouver",
        "addressRegion": "BC",
        "postalCode": "V6B 1A1",
        "addressCountry": "CA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 49.2827,
        "longitude": -123.1207
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "hasMap": mapUrl,
      "keywords": localizedKeywords,
      "department": [
        {
          "@type": "Pharmacy",
          "name": "Prescription Fulfillment"
        }
      ]
    });
  };

  return (
    <Script
      id="google-maps-local-seo"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: getLocalizedSchema() }}
    />
  );
}
