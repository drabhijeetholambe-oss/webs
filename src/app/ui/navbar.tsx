"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import * as Info from "@/app/config/constants/info";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Areas of care", href: "/#services" },
  { label: "How visits work", href: "/#first-visit" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#143936]/95 text-[#fbfaf7] shadow-sm backdrop-blur-lg">
      <nav aria-label="Main navigation" className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="font-serif text-lg font-medium tracking-tight sm:text-xl" onClick={() => setOpen(false)}>{Info.NAME}</Link>
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => <Link key={link.href} href={link.href} prefetch={false} className="text-sm text-white/75 transition hover:text-white">{link.label}</Link>)}
          <div className="flex items-center gap-2"><Link href="/hi" className="text-xs font-semibold text-white/70 hover:text-white">HI</Link><span className="text-white/30">|</span><Link href="/mr" className="text-xs font-semibold text-white/70 hover:text-white">MR</Link><a href={Info.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#b5deca] px-5 py-2.5 text-sm font-semibold text-[#143936] transition hover:bg-white">Book an appointment</a></div>
        </div>
        <button type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full border border-white/20 transition hover:bg-white/10 lg:hidden">
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </nav>
      {open && <div className="border-t border-white/10 bg-[#143936] px-5 py-3 lg:hidden">
        <div className="mx-auto flex max-w-7xl flex-col">
          {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm text-white/85 transition hover:bg-white/10 hover:text-white">{link.label}</Link>)}
          <div className="mt-2 flex items-center justify-center gap-3 py-2"><Link href="/hi" onClick={() => setOpen(false)} className="text-xs font-semibold text-white/75">Hindi</Link><span className="text-white/30">|</span><Link href="/mr" onClick={() => setOpen(false)} className="text-xs font-semibold text-white/75">Marathi</Link></div><a href={Info.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="rounded-full bg-[#b5deca] px-5 py-3 text-center text-sm font-semibold text-[#143936]">Book on WhatsApp</a>
        </div>
      </div>}
    </header>
  );
}
