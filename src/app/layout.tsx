
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";
import "./app.css"
import { Analytics } from "@vercel/analytics/next"
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
    "Holistic mental health Mumbai",
    "How to find the best psychiatrist in Mumbai",
    "Online counseling with psychiatrist in Kandivali",
    "Best doctor for anxiety and depression in Mumbai",
    "Psychiatrist for men’s mental health in Mumbai",
    "Affordable psychiatric consultation in Mumbai",
    "Psychiatrist in Kandivali East",
    "Psychiatrist in Kandivali West",
    "Best Psychiatrist near Goregaon",
    "Sexologist near Borivali",
    "Psychiatrist near Malad",
    "Cognitive Behavioral Therapy (CBT) Mumbai",
    "Psychotherapy in Kandivali",
    "Sex therapy in Mumbai",
    "Couples counseling in Kandivali",
    "Relationship therapy Mumbai",
    "Mental health counseling Mumbai",
    "Best Psychiatrist in Mumbai",
    "Psychiatrist in Kandivali Mumbai",
 
    "Online Psychiatrist Consultation Mumbai",
    "Psychiatrist near me",
    "Online Psychiatrist Consultation Mumbai",
    "Online Sexologist Consultation Mumbai",
    "Depression doctor in Kandivali",
    "Anxiety treatment psychiatrist Mumbai",
    "Panic attack treatment Mumbai",
    "Sleep disorder psychiatrist near me",
    "Bipolar disorder treatment Kandivali",
    "Dementia specialist doctor in Mumbai",
    "ADHD psychiatrist in Kandivali",
    "Autism therapy Mumbai",
    "De-addiction psychiatrist Mumbai"
  ],
  description:
    "Best psychiatrist and sexologist in Kandivali,  Mumbai, Dr. Abhijeet Holambe, provides personalized mental health and sexual wellness care. Specializing in anxiety, depression, stress, relationship issues, and sexual health disorders, he creates a safe and supportive environment for healing. Offering both online and in-person consultations, Dr. Holambe focuses on holistic well-being, empowering individuals to overcome challenges, build resilience, and improve their mental and emotional health.",
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
      <Analytics/>
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
