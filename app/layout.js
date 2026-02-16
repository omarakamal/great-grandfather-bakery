import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Great Grandfather Bakery | Fresh Desserts in Bahrain",
  description:
    "The best banana pudding dessert made locally in Bahrain. Based on tradition.",
  keywords: [
    "bakery Bahrain",
    "cakes in Bahrain",
    "order desserts Bahrain",
    "fresh bread pudding Bahrain",
    "homemade",
    "desserts",
    "bahrain",
  ],
  // metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Great Grandfather Bakery",
    description: "Freshly baked delights every day. Order now in Bahrain.",
    url: "https://great-grandfather-bakery.netlify.app/",
    siteName: "Great Grandfather Bakery",
    locale: "en_US",
    type: "website",
    images: {
      url: "/gallery/bread1",
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Bakery",
            name: "Great Grandfather Bakery",
            image: "https://yourdomain.com/logo.png",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bahrain",
              addressCountry: "BH",
            },
            telephone: "+973XXXXXXXX",
            url: "https://yourdomain.com",
          }),
        }}
      />

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-WGZXTPVXQY"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-WGZXTPVXQY');
      </script>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
