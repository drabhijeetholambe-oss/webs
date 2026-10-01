
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";
import "./app.css";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/sonner";
import WhatsappButton from "@/components/whatsapp-button";
import GoogleMapsButton from "@/components/google-maps-button";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

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
      "name": "Psychiatrist in Malad West, Mumbai | Dr. Abhijeet Holambe",
      "isPartOf": { "@id": "https://www.drabhijeetholambe.com/#website" },
      "about": { "@id": "https://www.drabhijeetholambe.com/#physician" },
      "inLanguage": "en-IN"
    },
    {
      "@type": "MedicalClinic",
      "@id": "https://www.drabhijeetholambe.com/#clinic",
      "name": "Psychiatry consultations with Dr. Abhijeet Holambe",
      "url": "https://www.drabhijeetholambe.com/",
      "telephone": "+91 8169065210",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Excel House, No. 6, B. J. Patel Road",
        "addressLocality": "Malad West, Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400064",
        "addressCountry": "IN"
      },
      "areaServed": [
        { "@type": "City", "name": "Mumbai" },
        { "@type": "Place", "name": "Malad West" }
      ],
      "hasMap": "https://share.google/ZsC1gdVb6fxq6Vq69"
    },
    {
      "@type": "Person",
      "@id": "https://www.drabhijeetholambe.com/#physician",
      "name": "Dr. Abhijeet Holambe",
      "url": "https://www.drabhijeetholambe.com",
      "image": "https://www.drabhijeetholambe.com/dr-abhijeet-holambe-brain-model.jpg",
      "telephone": "+91 8169065210",
      "email": "drabhijeetholambe@gmail.com",
      "jobTitle": "Psychiatrist",
      "medicalSpecialty": "Psychiatric",
      "sameAs": [
        "https://www.practo.com/mumbai/doctor/abhijeet-holambe-psychiatrist-1"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "worksFor": { "@id": "https://www.drabhijeetholambe.com/#clinic" },
      "knowsLanguage": ["English", "Marathi", "Hindi"],
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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drabhijeetholambe.com"),
  title: {
    default: "Dr. Abhijeet Holambe | Psychiatrist in Malad West, Mumbai",
    template: "%s | Dr. Abhijeet Holambe",
  },
  description:
    "Dr. Abhijeet Holambe is a psychiatrist in Malad West, Mumbai, offering consultations for anxiety, depression, sleep disorders, sexual health, substance use, OCD, bipolar disorder, and other mental health concerns. Online consultations are also available.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.drabhijeetholambe.com",
    siteName: "Dr. Abhijeet Holambe",
    title: "Dr. Abhijeet Holambe | Psychiatrist in Malad West, Mumbai",
    description: "Psychiatric consultations in Malad West, Mumbai for anxiety, depression, sleep, sexual health, substance use, OCD, bipolar disorder and related concerns. Online consultation options are available.",
    images: [{ url: "/dr-abhijeet-holambe-brain-model.jpg", width: 1600, height: 2844, alt: "Dr. Abhijeet Holambe holding a brain model" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Abhijeet Holambe | Psychiatrist in Malad West, Mumbai",
    description: "Psychiatric consultations in Malad West, Mumbai for anxiety, depression, sleep, sexual health, substance use, OCD, bipolar disorder and related concerns. Online consultation options are available.",
    images: ["/dr-abhijeet-holambe-brain-model.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json">{JSON.stringify(siteStructuredData)}</script>
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
