import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "This template saved us weeks of development time. The role-based authentication system is exactly what we needed.",
    author: "Sarah Chen",
    role: "CTO at TechFlow",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    quote:
      "Clean code, great documentation, and excellent support. It's the perfect starting point for any Next.js project.",
    author: "Michael Ross",
    role: "Lead Developer",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    quote:
      "The modern UI components and authentication system are top-notch. Highly recommended!",
    author: "Emily Parker",
    role: "Product Manager",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900/50 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Developers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See what other developers are saying about our template
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-gray-800"
            >
              <div className="flex items-center space-x-4 mb-6">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
