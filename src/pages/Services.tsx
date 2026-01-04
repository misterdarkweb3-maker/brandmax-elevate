import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Palette,
  Printer,
  Video,
  Share2,
  TrendingUp,
  Globe,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    id: "graphics",
    icon: Palette,
    title: "Graphics Design",
    description:
      "From logos to complete brand identities, we create visual designs that capture your brand's essence and resonate with your audience.",
    features: [
      "Logo Design & Brand Identity",
      "Marketing Collaterals",
      "Social Media Graphics",
      "Infographics & Illustrations",
      "Presentation Design",
      "UI/UX Design",
    ],
    benefits: [
      "Distinctive brand presence",
      "Consistent visual identity",
      "Professional credibility",
    ],
  },
  {
    id: "printing",
    icon: Printer,
    title: "Printing Solutions",
    description:
      "High-quality printing services for all your business needs. From business cards to large-format banners, we deliver excellence.",
    features: [
      "Business Cards & Stationery",
      "Brochures & Flyers",
      "Banners & Signage",
      "Packaging Design",
      "Product Labels",
      "Promotional Materials",
    ],
    benefits: [
      "Premium print quality",
      "Fast turnaround times",
      "Competitive pricing",
    ],
  },
  {
    id: "video",
    icon: Video,
    title: "Video Editing & Motion Graphics",
    description:
      "Bring your stories to life with professional video editing, animations, and motion graphics that captivate your audience.",
    features: [
      "Promotional Videos",
      "Motion Graphics & Animation",
      "Social Media Video Content",
      "Corporate Videos",
      "Product Demos",
      "Video Ads",
    ],
    benefits: [
      "Engaging visual content",
      "Higher audience retention",
      "Increased conversions",
    ],
  },
  {
    id: "social",
    icon: Share2,
    title: "Social Media Management",
    description:
      "Complete social media solutions from content creation to community management. We help you build and engage your online audience.",
    features: [
      "Content Strategy & Planning",
      "Content Creation & Curation",
      "Community Management",
      "Social Media Advertising",
      "Analytics & Reporting",
      "Influencer Collaboration",
    ],
    benefits: [
      "Increased brand awareness",
      "Engaged community",
      "Consistent brand voice",
    ],
  },
  {
    id: "marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that deliver measurable results. From SEO to PPC, we help you reach and convert your target audience.",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Email Marketing Campaigns",
      "Content Marketing",
      "Conversion Rate Optimization",
      "Marketing Analytics",
    ],
    benefits: [
      "Increased organic traffic",
      "Higher ROI on ad spend",
      "Measurable results",
    ],
  },
  {
    id: "web",
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, responsive websites and web applications built with the latest technologies. We create digital experiences that convert.",
    features: [
      "Custom Website Design",
      "E-commerce Development",
      "Web Applications",
      "Landing Pages",
      "CMS Development",
      "Website Maintenance",
    ],
    benefits: [
      "Mobile-responsive design",
      "Fast loading speeds",
      "SEO-friendly structure",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          </div>

          <div className="container-custom relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-sm font-medium text-primary">
                  Our Services
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Creative <span className="gradient-text">Solutions</span> for
                Modern Brands
              </h1>
              <p className="text-xl text-muted-foreground">
                We offer a comprehensive range of creative and digital services
                designed to elevate your brand and accelerate business growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="pb-20">
          <div className="container-custom">
            <div className="space-y-20">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 rounded-xl bg-gradient-brand flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Benefits */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {service.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className="px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>

                    <Button asChild className="magnetic-hover">
                      <Link to="/contact">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>

                  {/* Visual */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative">
                      <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center p-8">
                            <service.icon className="w-20 h-20 text-primary/30 mx-auto mb-4" />
                            <p className="text-muted-foreground">
                              {service.title}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Decorative Elements */}
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-brand rounded-xl opacity-20 blur-xl" />
                      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/30 rounded-full blur-2xl" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need a Custom <span className="gradient-text">Solution?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every project is unique. Let's discuss your specific needs and
                create a tailored solution that fits your business goals.
              </p>
              <Button asChild size="lg" className="magnetic-hover glow-orange">
                <Link to="/contact">
                  Contact Us Today
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
