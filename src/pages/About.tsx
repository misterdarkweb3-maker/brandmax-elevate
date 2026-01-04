import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Target,
  Eye,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "200+", label: "Happy Clients" },
  { value: "15+", label: "Team Members" },
];

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To empower businesses with creative solutions that drive growth, build lasting connections, and create memorable brand experiences.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be the leading creative agency known for transforming businesses through innovative design and strategic marketing.",
  },
];

const achievements = [
  "Award-winning design agency",
  "Served clients across 15+ countries",
  "100% client satisfaction rate",
  "Featured in top design publications",
  "Certified Google Partner",
  "Meta Business Partner",
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
          </div>

          <div className="container-custom relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-sm font-medium text-primary">About Us</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                We Are <span className="gradient-text">BrandMax</span> Studio
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A passionate team of creatives, strategists, and technologists
                dedicated to transforming brands and driving business success
                through innovative solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our <span className="gradient-text">Story</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2016, BrandMax Studio began with a simple mission:
                    to help businesses stand out in an increasingly crowded
                    marketplace. What started as a small design studio has grown
                    into a full-service creative agency.
                  </p>
                  <p>
                    Over the years, we've had the privilege of working with
                    startups, established enterprises, and everything in between.
                    Each project has taught us something new and helped us refine
                    our approach to creative problem-solving.
                  </p>
                  <p>
                    Today, we're a team of 15+ passionate professionals—designers,
                    developers, marketers, and strategists—all united by a shared
                    commitment to excellence and innovation.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-brand flex items-center justify-center mb-6">
                      <span className="text-white font-bold text-4xl">B</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">BrandMax Studio</h3>
                    <p className="text-muted-foreground">
                      Creating brands that stand out since 2016
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Purpose</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl border border-border p-8"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    Achievements
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Recognition & <span className="gradient-text">Excellence</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our commitment to quality and innovation has earned us
                  recognition from industry leaders and publications worldwide.
                </p>

                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={achievement}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                      <Users className="w-16 h-16 text-primary" />
                    </div>
                    <div className="aspect-video rounded-2xl bg-muted/50 border border-border" />
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="aspect-video rounded-2xl bg-muted/50 border border-border" />
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <Award className="w-16 h-16 text-primary" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
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
                Ready to Work <span className="gradient-text">Together?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss your project and see how we can help you achieve
                your goals.
              </p>
              <Button asChild size="lg" className="magnetic-hover glow-orange">
                <Link to="/contact">
                  Get in Touch
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

export default About;
