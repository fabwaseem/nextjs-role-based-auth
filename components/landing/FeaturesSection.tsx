import { motion } from "framer-motion";
import {
  LuShieldCheck,
  LuLayoutDashboard,
  LuUsers,
  LuKey,
} from "react-icons/lu";

const features = [
  {
    icon: <LuShieldCheck className="w-6 h-6" />,
    title: "Secure Authentication",
    description:
      "Built-in JWT authentication with secure session management and password hashing.",
  },
  {
    icon: <LuLayoutDashboard className="w-6 h-6" />,
    title: "Modern Dashboard",
    description:
      "Clean and intuitive dashboard interface with responsive design and dark mode support.",
  },
  {
    icon: <LuUsers className="w-6 h-6" />,
    title: "Role-Based Access",
    description:
      "Granular access control with customizable user roles and permissions.",
  },
  {
    icon: <LuKey className="w-6 h-6" />,
    title: "API Protection",
    description:
      "Protected API routes with middleware for role-based access control.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Powerful Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Everything you need to build secure and scalable web applications
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-gray-800"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
