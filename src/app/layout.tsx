
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";
import "./app.css"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner";
import WhatsappButton from "@/components/whatsapp-button";
import GoogleMapsButton from "@/components/google-maps-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.drabhijeetholambe.com/#website",
      "url": "https://www.drabhijeetholambe.com",
      "name": "Dr. Abhijeet Holambe",
      "publisher": { "@id": "https://www.drabhijeetholambe.com/#physician" },
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.drabhijeetholambe.com/#webpage",
      "url": "https://www.drabhijeetholambe.com",
      "name": "Psychiatrist in Kandivali and Mumbai | Dr. Abhijeet Holambe",
      "isPartOf": { "@id": "https://www.drabhijeetholambe.com/#website" },
      "about": { "@id": "https://www.drabhijeetholambe.com/#physician" },
      "inLanguage": "en-IN"
    },
    {
      "@type": "Physician",
      "@id": "https://www.drabhijeetholambe.com/#physician",
      "name": "Dr. Abhijeet Holambe",
      "url": "https://www.drabhijeetholambe.com",
      "image": "https://www.drabhijeetholambe.com/dr-abhijeet-holambe.jpeg",
      "telephone": "+91 8169065210",
      "email": "drabhijeetholambe@gmail.com",
      "medicalSpecialty": "https://schema.org/Psychiatric",
      "sameAs": [
        "https://www.practo.com/mumbai/doctor/abhijeet-holambe-psychiatrist-1"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "United Multispeciality Hospital, New Link Road, near Hyundai Showroom, Mahavir Nagar, Kandivali West",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400067",
        "addressCountry": "IN"
      },
      "areaServed": [
        { "@type": "City", "name": "Mumbai" },
        { "@type": "Place", "name": "Kandivali West" },
        { "@type": "Place", "name": "Malad" }
      ],
      "knowsAbout": [
        "Psychiatry",
        "Anxiety",
        "Depression",
        "Sleep disorders",
        "Sexual health",
        "Substance use"
      ]
    }
  ]
};

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drabhijeetholambe.com"),
  title: {
    default: "Dr. Abhijeet Holambe | Psychiatrist in Kandivali & Malad, Mumbai",
    template: "%s | Dr. Abhijeet Holambe",
  },
  description:
    "Dr. Abhijeet Holambe offers psychiatric consultations in Kandivali West, Malad, and Mumbai for concerns including anxiety, depression, sleep, sexual health, and substance use. Online consultation options are also available.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.drabhijeetholambe.com",
    siteName: "Dr. Abhijeet Holambe",
    title: "Dr. Abhijeet Holambe | Psychiatrist in Kandivali, Mumbai",
    description: "Psychiatric consultations in Kandivali West, Malad, and Mumbai, with online consultation options.",
    images: [{ url: "/dr-abhijeet-holambe.jpeg", width: 459, height: 459, alt: "Dr. Abhijeet Holambe" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Abhijeet Holambe | Psychiatrist in Kandivali, Mumbai",
    description: "Confidential consultation services in Mumbai, with online consultation options.",
    images: ["/dr-abhijeet-holambe.jpeg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>\n        <script type="application/ld+json">{JSON.stringify(siteStructuredData)}</script>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZZRKLK5GYS"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZZRKLK5GYS');
            `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <Navbar />
        <main>{children}</main>
        <Toaster />
        <GoogleMapsButton />
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  );
}