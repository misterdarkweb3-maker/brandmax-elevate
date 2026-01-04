import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSnapshot() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Crafting Digital Excellence Since{" "}
              <span className="gradient-text">2016</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              BrandMax Studio is a full-service creative agency passionate about 
              transforming ideas into impactful brand experiences. We combine 
              strategy, design, and technology to help businesses thrive in 
              the digital age.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              From startups to established enterprises, we've partnered with 
              diverse clients across industries, delivering solutions that 
              not only look stunning but drive real business results.
            </p>

            <Button asChild className="magnetic-hover group">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative bg-card rounded-2xl border border-border p-8 lg:p-10">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-brand rounded-xl opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/30 rounded-full blur-2xl" />

              <div className="relative space-y-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "8+", label: "Years of Excellence" },
                    { value: "500+", label: "Projects Delivered" },
                    { value: "200+", label: "Satisfied Clients" },
                    { value: "15+", label: "Team Experts" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="text-center p-4 rounded-xl bg-muted/50"
                    >
                      <div className="text-2xl md:text-3xl font-bold gradient-text">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Trust Badge */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Trusted by Industry Leaders</div>
                    <div className="text-sm text-muted-foreground">
                      Partnered with 200+ brands worldwide
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
