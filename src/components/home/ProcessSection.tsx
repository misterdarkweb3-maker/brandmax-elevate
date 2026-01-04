import { motion } from "framer-motion";
import { Search, PenTool, RefreshCw, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We dive deep into understanding your brand, goals, target audience, and competitive landscape to develop a winning strategy.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design & Development",
    description:
      "Our creative team transforms strategy into stunning visuals and functional solutions that resonate with your audience.",
  },
  {
    icon: RefreshCw,
    number: "03",
    title: "Review & Refine",
    description:
      "We collaborate closely with you through iterative feedback cycles to ensure every detail meets your expectations.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Support",
    description:
      "We ensure a smooth launch and provide ongoing support to help your brand continue to grow and evolve.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[150px]"
        />
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
            <span className="text-sm font-medium text-primary">Our Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How We <span className="gradient-text">Bring Ideas to Life</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our proven 4-step process ensures exceptional results, from initial
            concept to final delivery and beyond.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative bg-card rounded-2xl border border-border p-6 lg:p-8 text-center hover:border-primary/50 transition-all duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-brand rounded-full">
                    <span className="text-sm font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto rounded-xl bg-muted/50 flex items-center justify-center mb-6 mt-4 group-hover:bg-primary/10 transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Desktop (between cards) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.15 }}
                      className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center"
                    >
                      <div className="w-2 h-2 border-t-2 border-r-2 border-primary rotate-45" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
