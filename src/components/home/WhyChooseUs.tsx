import { motion } from "framer-motion";
import {
  Award,
  Clock,
  Users,
  Zap,
  Shield,
  HeartHandshake,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Creative Excellence",
    description:
      "Award-winning designs that set industry benchmarks and make your brand unforgettable.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description:
      "Fast delivery without compromising quality. We understand deadlines matter.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description:
      "A team of passionate experts committed to bringing your vision to life.",
  },
  {
    icon: Zap,
    title: "Results-Driven",
    description:
      "Every project is designed to deliver measurable impact and ROI for your business.",
  },
  {
    icon: Shield,
    title: "Reliable Partner",
    description:
      "Transparent communication, consistent quality, and long-term partnership approach.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Centric",
    description:
      "Your success is our priority. We go above and beyond to exceed expectations.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Why BrandMax</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're more than just a creative agency. We're your strategic partner
            in building a brand that stands the test of time.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
