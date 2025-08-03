import ServicesCard from "@/components/services-cards";
import { Heart, Brain, Smile } from "lucide-react"; // Using cute icons from lucide-react

const Services = () => {
  const services = [
    {
      title: "Anxiety & Stress Relief",
      description:
        "Learn effective tools to manage anxiety, reduce stress, and regain a sense of calm.",
      icon: <Brain className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Relationship Counseling",
      description:
        "Strengthen connections, resolve conflicts, and build healthier relationships.",
      icon: <Heart className="w-8 h-8 text-pink-500" />,
    },
    {
      title: "Mindfulness Therapy",
      description:
        "Develop mindfulness skills to stay grounded and improve emotional balance.",
      icon: <Smile className="w-8 h-8 text-green-500" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-serif font-light text-gray-900 mb-12">
          Services I Offer
        </h2>

       <ServicesCard/>
      </div>
    </section>
  );
};

export default Services;
