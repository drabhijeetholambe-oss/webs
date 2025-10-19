import { Heart, Phone, Mail, MessageCircle } from "lucide-react";
import * as Info from "../config/constants/info";

const Footer = () => {
  return (
    <footer id="footer" className="bg-navy-blue/95 text-pure-white pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Practice Info */}
        <div className="flex flex-col justify-center items-center text-center space-y-6">
          <h3 className="text-xl font-light flex items-center gap-2">
            <Heart className="h-5 w-5 text-calming-blue" />
            {Info.NAME}
          </h3>
          <p className="text-pure-white/60 leading-relaxed font-light max-w-md">
            Trusted Psychiatrist and Sexologist providing compassionate care in a peaceful environment.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex flex-col gap-3 text-sm text-pure-white/70">
              <span className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4 text-calming-blue" />
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                {Info.PHONE}
              </span>
              <span className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4 text-calming-blue" />
                {Info.EMAIL}
              </span>
            </div>
          </div>
        </div>

        {/* --- Bottom --- */}
        <div className="pt-8 mt-12 border-t border-pure-white/10 text-center">
          <p className="text-pure-white/40 text-sm font-light">
            © 2025 {Info.NAME}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
