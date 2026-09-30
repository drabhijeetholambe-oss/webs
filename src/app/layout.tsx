
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
  "@type": "WebSite",
  "name": "Dr. Abhijeet Holambe",
  "url": "https://www.drabhijeetholambe.com",
};

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drabhijeetholambe.com"),
  title: {
    default: "Dr. Abhijeet Holambe | Psychiatrist in Kandivali, Mumbai",
    template: "%s | Dr. Abhijeet Holambe",
  },
  description:
    "Dr. Abhijeet Holambe provides confidential mental health and related consultation services in Mumbai, with online consultation options.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.drabhijeetholambe.com",
    siteName: "Dr. Abhijeet Holambe",
    title: "Dr. Abhijeet Holambe | Psychiatrist in Kandivali, Mumbai",
    description: "Confidential consultation services in Mumbai, with online consultation options.",
    images: [{ url: "/img.jpeg", width: 459, height: 459, alt: "Dr. Abhijeet Holambe" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Abhijeet Holambe | Psychiatrist in Kandivali, Mumbai",
    description: "Confidential consultation services in Mumbai, with online consultation options.",
    images: ["/img.jpeg"],
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