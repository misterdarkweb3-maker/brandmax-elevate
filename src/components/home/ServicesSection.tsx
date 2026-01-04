import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Palette,
  Printer,
  Video,
  Share2,
  TrendingUp,
  Globe,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Graphics Design",
    description:
      "Stunning logos, brand identities, marketing materials, and visual designs that capture your brand essence.",
    features: ["Logo Design", "Brand Identity", "Marketing Materials"],
  },
  {
    icon: Printer,
    title: "Printing Solutions",
    description:
      "High-quality printing services for business cards, banners, brochures, packaging, and promotional materials.",
    features: ["Business Cards", "Banners & Signage", "Packaging Design"],
  },
  {
    icon: Video,
    title: "Video Editing",
    description:
      "Professional video editing, motion graphics, and animations that bring your stories to life.",
    features: ["Promo Videos", "Motion Graphics", "Social Media Content"],
  },
  {
    icon: Share2,
    title: "Social Media",
    description:
      "Complete social media management including content creation, scheduling, and community engagement.",
    features: ["Content Strategy", "Community Management", "Analytics"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies including SEO, PPC, email marketing, and conversion optimization.",
    features: ["SEO Optimization", "PPC Campaigns", "Email Marketing"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with cutting-edge technologies.",
    features: ["Custom Websites", "E-commerce", "Web Applications"],
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground) / 0.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
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
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive <span className="gradient-text">Creative Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to execution, we offer a full spectrum of creative and
            digital services to elevate your brand and accelerate growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl border border-border p-6 lg:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 tilt-card">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border hover:border-primary/50 transition-colors font-medium"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
