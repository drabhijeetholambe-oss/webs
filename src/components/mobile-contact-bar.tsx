export default function MobileContactBar() {
  return <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-[#dce4dc] bg-[#fbfaf7]/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(16,47,46,0.1)] backdrop-blur-md md:hidden">
    <a href="https://wa.me/918169065210" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#183b37] px-4 text-sm font-semibold text-white transition active:scale-[0.98]">WhatsApp</a>
    <a href="tel:+918169065210" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#b5cfc0] bg-white px-4 text-sm font-semibold text-[#183b37] transition active:scale-[0.98]">Call now</a>
  </div>;
}
