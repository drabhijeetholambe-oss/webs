"use client"
import { Heart, Phone, Mail, Loader2 } from "lucide-react";
import * as Info from "../config/constants/info";
import { Button } from "@/components/ui/button";

import nodemailer from "nodemailer";
import { sendContactMail } from "../server/actions";
import { useState } from "react";
const Footer =() => {
  const [status,setStatus] = useState(false);
  async function handleSubmit(formData: FormData) {
if(!status)
{
   try {
    setStatus(true);
      await sendContactMail(formData);
     
    } catch (err) {
      setStatus(false);

    }
    finally{
      setStatus(false)
    }
}
 
  }
  return (
    <footer id="footer" className="bg-navy-blue/95 text-pure-white pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid: Contact Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* --- Left: Contact Form --- */}
          <div className="bg-white/5 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
            <h3 className="text-2xl font-serif mb-4">Get in Touch</h3>
            <p className="text-sm text-pure-white/70 mb-6">
              Have questions or want to book a session? Fill out the form and we'll get back to you.
            </p>
            <form action={handleSubmit} className="space-y-4">
              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full rounded-lg border border-pure-white/20 bg-transparent px-4 py-3 text-pure-white placeholder-pure-white/50 focus:outline-none focus:ring-2 focus:ring-calming-blue focus:scale-[1.02]  focus:ring-black transition-all duration-300"
                required
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-pure-white/20 bg-transparent px-4 py-3 text-pure-white placeholder-pure-white/50 focus:outline-none focus:ring-2 focus:ring-calming-blue focus:scale-[1.02]  focus:ring-black transition-all duration-300"
                required
              />

              {/* Message */}
              <textarea
                placeholder="Your Message"
                rows={4}
                name="message"
                className="w-full rounded-lg border border-pure-white/20 bg-transparent px-4 py-3 text-pure-white placeholder-pure-white/50 focus:outline-none focus:ring-2 focus:ring-calming-blue focus:scale-[1.02]  focus:ring-black transition-all duration-300 resize-none"
                required
              />

              <Button disabled={status} className="w-full bg-calming-blue hover:bg-calming-blue/90 text-white bg-black cursor-pointer">
                {!status?"Send Message" : <span className="flex items-center gap-1"> Sending Message <Loader2 className="animate-spin"/></span>}
              </Button>
            </form>
          </div>

          {/* --- Right: Practice Info --- */}
          <div className="flex flex-col justify-center text-center lg:text-left space-y-6">
            <h3 className="text-xl font-light flex items-center justify-center lg:justify-start gap-2">
              <Heart className="h-5 w-5 text-calming-blue" />
              {Info.NAME}
            </h3>
            <p className="text-pure-white/60 leading-relaxed font-light max-w-md mx-auto lg:mx-0">
             Trusted Psychiatrist and Sexologist providing compassionate care in a peaceful environment.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex flex-col gap-3 text-sm text-pure-white/70">
                <span className="flex items-center justify-center lg:justify-start gap-2">
                  <Phone className="h-4 w-4 text-calming-blue" />
                  {Info.PHONE}
                </span>
                <span className="flex items-center justify-center lg:justify-start gap-2">
                  <Mail className="h-4 w-4 text-calming-blue" />
                  {Info.EMAIL}
                </span>
              </div>
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
