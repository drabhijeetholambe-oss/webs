import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Whether you have questions or want to schedule a session, feel free to reach out. 
          We’ll respond as soon as possible.
        </p>

        <form className="grid grid-cols-1 gap-6 text-left max-w-2xl mx-auto">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              required
              className="w-full rounded-lg border border-muted bg-white px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-lg border border-muted bg-white px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              placeholder="How can we help you?"
              rows={5}
              required
              className="w-full rounded-lg border border-muted bg-white px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button size="lg" className="px-8 py-6 text-lg bg-blue-400">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
