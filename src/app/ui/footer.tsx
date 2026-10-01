import { Heart, Phone, Mail, MessageCircle } from "lucide-react";
import * as Info from "../config/constants/info";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#102f2e] py-14 text-[#f7f5ef] sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-[1fr_auto] md:items-start">
          <div className="max-w-lg">
            <h3 className="flex items-center gap-3 font-serif text-2xl font-medium">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/[0.06]" aria-hidden="true">
                <Heart className="h-4 w-4 text-[#b5deca]" />
              </span>
              {Info.NAME}
            </h3>
            <p className="mt-5 leading-7 text-white/65">
              Psychiatric consultations in Mumbai. Appointments by prior booking; please contact the practice to confirm availability and the current clinic location.
            </p>
            <address className="mt-4 max-w-md not-italic text-sm leading-6 text-white/55">
              {Info.ADDRESS}
            </address>
          </div>
          <div className="space-y-4 text-sm text-white/75">
            <a href={`tel:${Info.PHONE.replace(/[^+\d]/g, "")}`} className="flex items-center gap-3 transition hover:text-white">
              <Phone className="h-4 w-4 text-[#b5deca]" />{Info.PHONE}
            </a>
            <a href={`https://wa.me/${Info.PHONE.replace(/\D/g, "")}`} className="flex items-center gap-3 transition hover:text-white" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4 text-[#b5deca]" />WhatsApp the practice
            </a>
            <a href={`mailto:${Info.EMAIL}`} className="flex items-center gap-3 transition hover:text-white">
              <Mail className="h-4 w-4 text-[#b5deca]" />{Info.EMAIL}
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {Info.NAME}</span>
          <span>For appointment enquiries · Mumbai, Maharashtra</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
