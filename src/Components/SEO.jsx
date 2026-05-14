import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  keywords,
  image = "/shipping.jpg",
  url = "https://lukeshipping.com",
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Luke Shipping",
    url: "https://lukeshipping.com",
    logo: "https://lukeshipping.com/logo.png",
    description:
      "Luke Shipping provides logistics, freight forwarding, customs clearance, warehousing, project cargo handling, and TIC services across Saudi Arabia and GCC.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dammam",
      addressCountry: "Saudi Arabia",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+966582780836",
      contactType: "customer service",
    },
    sameAs: [
      "https://www.linkedin.com/",
      "https://x.com/",
      "https://www.instagram.com/"
    ]
  };

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Luke Shipping" />

      {/* Mobile */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />

      {/* Robots */}
      <meta name="robots" content="index, follow" />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Luke Shipping" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Theme */}
      <meta name="theme-color" content="#000000" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}