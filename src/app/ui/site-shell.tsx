import type { Metadata } from "next";
import Script from "next/script";
import { Cardo, Cormorant_Garamond, Noto_Serif_Devanagari } from "next/font/google";
import "@/app/globals.css";
import Navbar from "./navbar";
import Footer from "./footer";
import { Analytics } from "@vercel/analytics/next";
import WhatsappButton from "@/components/whatsapp-button";
import GoogleMapsButton from "@/components/google-maps-button";
import MobileContactBar from "@/components/mobile-contact-bar";
import * as Info from "@/app/config/constants/info";

const headingFont = Cormorant_Garamond({ variable: "--font-heading", subsets: ["latin"], weight: ["400","500","600"], display: "swap" });
const bodyFont = Cardo({ variable: "--font-body", subsets: ["latin"], weight: ["400", "700"], display: "swap" });
// Cardo and Cormorant have no Devanagari letters, so Hindi and Marathi text falls through to this font
const devanagariFont = Noto_Serif_Devanagari({ variable: "--font-devanagari", subsets: ["devanagari"], weight: ["400", "500", "600"], display: "swap", preload: false });

const siteUrl = "https://www.drabhijeetholambe.com";
const socialProfiles = [Info.GOOGLE_MAPS, Info.PRACTO, Info.INSTAGRAM, Info.YOUTUBE, Info.LINKEDIN];
const weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const openingHours = weekdays.map((day) => ({
  "@type": "OpeningHoursSpecification",
  dayOfWeek: "https://schema.org/" + day,
  opens: "11:00",
  closes: "16:00",
}));
const serviceAreas = ["Malad West, Mumbai", "Kandivali, Mumbai", "Goregaon, Mumbai", "Borivali, Mumbai", "Mumbai, Maharashtra, India"].map((name) => ({ "@type": "Place", name }));
const clinicAddress = {
  "@type": "PostalAddress",
  streetAddress: "Excel House, No. 6, B. J. Patel Road, opposite SNDT College, near Liberty Garden, Kanchpada",
  addressLocality: "Malad West, Mumbai",
  addressRegion: "Maharashtra",
  postalCode: "400064",
  addressCountry: "IN",
};
const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": siteUrl + "/#website",
      url: siteUrl + "/",
      name: "Dr. Abhijeet Holambe",
      publisher: { "@id": siteUrl + "/#person" },
      inLanguage: "en-IN",
    },
    {
      "@type": "Person",
      "@id": siteUrl + "/#person",
      name: "Dr. Abhijeet Holambe",
      url: siteUrl + "/about",
      image: siteUrl + "/dr-abhijeet-holambe-brain-model.jpg",
      jobTitle: "Psychiatrist and sexologist",
      telephone: Info.PHONE,
      email: Info.EMAIL,
      knowsLanguage: ["Hindi", "Marathi", "English"],
      sameAs: socialProfiles,
      worksFor: { "@id": siteUrl + "/#physician" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Seth GS Medical College and KEM Hospital" },
        { "@type": "CollegeOrUniversity", name: "Grant Medical College and JJ Hospital, Mumbai" },
      ],
      knowsAbout: ["Psychiatry", "Sexual health", "Anxiety", "Depression", "Sleep disorders", "Substance use and de-addiction"],
    },
    {
      "@type": "MedicalClinic",
      "@id": siteUrl + "/#clinic",
      name: "Sun Multispeciality Hospital — Dr. Abhijeet Holambe",
      url: siteUrl + "/",
      image: siteUrl + "/dr-abhijeet-holambe-clinic.jpg",
      telephone: Info.PHONE,
      email: Info.EMAIL,
      address: clinicAddress,
      geo: { "@type": "GeoCoordinates", latitude: 19.1902295, longitude: 72.8418623 },
      openingHoursSpecification: openingHours,
      medicalSpecialty: "https://schema.org/Psychiatric",
      areaServed: serviceAreas,
      priceRange: "INR 1500-1800",
      hasMap: Info.GOOGLE_MAPS,
      sameAs: socialProfiles,
      employee: { "@id": siteUrl + "/#person" },
    },
    {
      "@type": "Physician",
      "@id": siteUrl + "/#physician",
      name: "Dr. Abhijeet Holambe",
      url: siteUrl + "/about",
      image: siteUrl + "/dr-abhijeet-holambe-brain-model.jpg",
      telephone: Info.PHONE,
      email: Info.EMAIL,
      address: clinicAddress,
      geo: { "@type": "GeoCoordinates", latitude: 19.1902295, longitude: 72.8418623 },
      openingHoursSpecification: openingHours,
      medicalSpecialty: "https://schema.org/Psychiatric",
      areaServed: serviceAreas,
      priceRange: "INR 1500-1800",
      sameAs: socialProfiles,
      parentOrganization: { "@id": siteUrl + "/#clinic" },
      employee: { "@id": siteUrl + "/#person" },
    },
  ],
};

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Dr. Abhijeet Holambe | Psychiatrist, De-addiction Specialist and Sexologist in Malad West, Mumbai", template: "%s | Dr. Abhijeet Holambe" },
  description: "Dr. Abhijeet Holambe is a psychiatrist and sexologist in Malad West, Mumbai, with 6 years of clinical experience. Consultations cover mental health, sexual health and de-addiction.",
  alternates: { canonical: "/", languages: { "en-IN": "/", "hi-IN": "/hi", "mr-IN": "/mr" } },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Dr. Abhijeet Holambe",
    title: "Dr. Abhijeet Holambe | Psychiatrist, De-addiction Specialist and Sexologist in Malad West, Mumbai",
    description: "Psychiatrist and sexologist in Malad West, Mumbai, with 6 years of clinical experience. Consultations in Hindi, Marathi and English.",
    images: [Info.OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title: "Dr. Abhijeet Holambe | Psychiatrist, De-addiction Specialist and Sexologist in Malad West, Mumbai", description: "Psychiatrist and sexologist in Malad West, Mumbai, with 6 years of clinical experience.", images: [Info.OG_IMAGE.url] },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export default function SiteShell({ lang, children }: Readonly<{ lang: string; children: React.ReactNode }>) {
  return (
    <html lang={lang}>
      <head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteStructuredData) }} /></head>
      <body className={headingFont.variable + " " + bodyFont.variable + " " + devanagariFont.variable + " antialiased"}>
        <Analytics />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZZRKLK5GYS" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-ZZRKLK5GYS');" }} />
        <Navbar locale={lang.slice(0, 2)} />
        <main id="main-content">{children}</main>
        <GoogleMapsButton />
        <WhatsappButton />
        <MobileContactBar />
        <Footer />
      </body>
    </html>
  );
}
