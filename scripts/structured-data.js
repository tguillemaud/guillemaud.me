// scripts/structured-data.js

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Thomas GUILLEMAUD",
    "jobTitle": "Chief Information Officer",
    "worksFor": {
      "@type": "Organization",
      "name": "Maison Retail Management International",
      "url": "https://maisonrmi.com/"
    },
    "url": "https://guillemaud.me/",
    "sameAs": [
      "https://linkedin.com/in/thomasguillemaud",
      "https://x.com/tguillemaud",
      "https://github.com/tguillemaud"
    ],
    "image": "https://guillemaud.me/img/avatar.jpg",
    "description": "Digital Transformation Leader and CIO at Maison Retail Management International.",
    "email": "mailto:your-email@example.com",
    "telephone": "+84-123-456-7890",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ho Chi Minh City",
      "addressCountry": "Vietnam"
    }
  };
  
  // Insert structured data into the page
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
  