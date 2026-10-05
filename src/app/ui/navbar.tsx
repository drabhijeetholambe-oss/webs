"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import * as Info from "@/app/config/constants/info";

type NavCopy = {
  links: { label: string; href: string }[];
  languages: { short: string; label: string; href: string }[];
  book: string;
  bookMobile: string;
  open: string;
  close: string;
};

const copy: Record<string, NavCopy> = {
  en: {
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Areas of care", href: "/#services" },
      { label: "How visits work", href: "/#first-visit" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
    languages: [{ short: "HI", label: "Hindi", href: "/hi" }, { short: "MR", label: "Marathi", href: "/mr" }],
    book: "Book an appointment",
    bookMobile: "Book on WhatsApp",
    open: "Open navigation menu",
    close: "Close navigation menu",
  },
  hi: {
    links: [
      { label: "होम", href: "/hi" },
      { label: "डॉक्टर के बारे में", href: "/hi/about" },
      { label: "चिंता", href: "/hi/services/anxiety-panic-disorder" },
      { label: "डिप्रेशन", href: "/hi/services/depression" },
      { label: "यौन स्वास्थ्य", href: "/hi/services/sexual-health" },
      { label: "संपर्क", href: "/contact" },
    ],
    languages: [{ short: "EN", label: "English", href: "/" }, { short: "MR", label: "मराठी", href: "/mr" }],
    book: "अपॉइंटमेंट बुक करें",
    bookMobile: "WhatsApp पर बुक करें",
    open: "मेनू खोलें",
    close: "मेनू बंद करें",
  },
  mr: {
    links: [
      { label: "मुख्यपृष्ठ", href: "/mr" },
      { label: "डॉक्टरांविषयी", href: "/mr/about" },
      { label: "चिंता", href: "/mr/services/anxiety-panic-disorder" },
      { label: "नैराश्य", href: "/mr/services/depression" },
      { label: "लैंगिक आरोग्य", href: "/mr/services/sexual-health" },
      { label: "संपर्क", href: "/contact" },
    ],
    languages: [{ short: "EN", label: "English", href: "/" }, { short: "HI", label: "हिंदी", href: "/hi" }],
    book: "अपॉइंटमेंट बुक करा",
    bookMobile: "WhatsApp वर बुक करा",
    open: "मेनू उघडा",
    close: "मेनू बंद करा",
  },
};

export default function Navbar({ locale = "en" }: { locale?: string }) {
  const [open, setOpen] = useState(false);
  const t = copy[locale] ?? copy.en;
  const home = t.links[0].href;
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-porcelain/90 text-ink shadow-sm backdrop-blur-lg">
      <nav aria-label="Main navigation" className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href={home} className="whitespace-nowrap font-serif text-xl font-medium tracking-tight sm:text-2xl" onClick={() => setOpen(false)}>{Info.NAME}</Link>
        <div className="hidden items-center gap-6 xl:flex">
          {t.links.map((link) => <Link key={link.href} href={link.href} prefetch={false} className="whitespace-nowrap text-sm text-body transition hover:text-ink">{link.label}</Link>)}
          <div className="flex items-center gap-2">{t.languages.map((language, index) => <span key={language.href} className="flex items-center gap-2">{index > 0 && <span aria-hidden="true" className="text-line-strong">|</span>}<Link href={language.href} aria-label={language.label} className="text-xs font-semibold text-body hover:text-ink">{language.short}</Link></span>)}<a href={Info.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="ml-2 whitespace-nowrap rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-porcelain transition hover:bg-brand-soft">{t.book}</a></div>
        </div>
        <button type="button" aria-label={open ? t.close : t.open} aria-expanded={open} onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full border border-line transition hover:bg-cloud xl:hidden">
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </nav>
      {open && <div className="border-t border-line bg-mist px-5 py-3 xl:hidden">
        <div className="mx-auto flex max-w-7xl flex-col">
          {t.links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-base text-body transition hover:bg-cloud hover:text-ink">{link.label}</Link>)}
          <div className="mt-2 flex items-center justify-center gap-3 py-2">{t.languages.map((language, index) => <span key={language.href} className="flex items-center gap-3">{index > 0 && <span aria-hidden="true" className="text-line-strong">|</span>}<Link href={language.href} onClick={() => setOpen(false)} className="text-sm font-semibold text-body">{language.label}</Link></span>)}</div><a href={Info.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="rounded-full bg-brand px-5 py-3 text-center text-sm font-semibold text-porcelain">{t.bookMobile}</a>
        </div>
      </div>}
    </header>
  );
}
