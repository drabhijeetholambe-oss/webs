
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";
import "./app.css"
import { Toaster } from "@/components/ui/sonner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Abhijeet Holambe | Psychiatrist & Sexologist in Mumbai",
  keywords:["psychiatrist","sexologist","psychiatrist in mumbai","psychiatrist near me","psychiatrist online","sexologist in mumbai","sexologist online",
     "Dr. Abhijeet Holambe",
    "Psychiatrist in Mumbai",
    "Sexologist in Mumbai",
    "Mental health care",
    "Sexual health counseling",
    "Anxiety treatment",
    "Depression therapy",
    "Relationship counseling",
    "Sexual wellness",
    "STI counseling",
    "Psychiatry consultation online",
    "Sexologist consultation online",
    "Performance issues therapy",
    "Holistic mental health Mumbai"
  ],
  description:
    "Dr. Abhijeet Holambe, a leading Psychiatrist and Sexologist in Mumbai, provides personalized mental health and sexual wellness care. Specializing in anxiety, depression, stress, relationship issues, and sexual health disorders, he creates a safe and supportive environment for healing. Offering both online and in-person consultations, Dr. Holambe focuses on holistic well-being, empowering individuals to overcome challenges, build resilience, and improve their mental and emotional health.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <main>
           {children}
        </main>
        <Toaster />
        <Footer/>
      </body>
    </html>
  );
}
