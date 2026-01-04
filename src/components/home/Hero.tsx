import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCharacter from "@/assets/hero-character.png";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Gradient Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/40 via-primary/20 to-transparent rounded-full blur-[100px]"
        />
        
        {/* Floating star decoration */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-32 left-[45%] text-primary text-2xl"
        >
          ✦
        </motion.div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
            >
              Grow Your{" "}
              <span className="inline-flex items-center gap-3">
                <span className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden inline-block">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&h=100&fit=crop" 
                    alt="Team" 
                    className="w-full h-full object-cover"
                  />
                </span>
                <span className="gradient-text">Business,</span>
              </span>
              <br />
              With Us.
            </motion.h1>

            {/* Stats Row */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-8 mb-6"
            >
              <div className="flex items-center gap-3">
                <span className="text-4xl md:text-5xl font-bold gradient-text">10+</span>
                <div className="text-xs text-muted-foreground leading-tight max-w-[80px]">
                  Successful brands scaled through strategic marketing.
                </div>
              </div>
              
              {/* Rotating Badge */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative w-16 h-16 flex items-center justify-center"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    id="textPath"
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[10px] fill-muted-foreground uppercase tracking-widest">
                    <textPath href="#textPath">
                      • BUSINESS GROWTH AGENCY • BRANDMAX STUDIO
                    </textPath>
                  </text>
                </svg>
                <div className="absolute w-3 h-3 bg-primary rounded-full" />
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-muted-foreground mb-8 max-w-md"
            >
              We help businesses establish a strong digital identity, 
              attract the right customers, and convert them into 
              long-term growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="magnetic-hover glow-orange text-base px-6 h-12 gap-2"
              >
                <Link to="/contact">
                  <Calendar className="w-4 h-4" />
                  Schedule Meeting
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="magnetic-hover text-base px-6 h-12 border-primary text-primary hover:bg-primary/10"
              >
                <Link to="/services">
                  View Success Stories
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Character */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Discover More Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute top-8 right-4 lg:right-16 z-20"
            >
              <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm border border-border rounded-full px-4 py-2 shadow-lg">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium">Discover More</span>
              </div>
            </motion.div>

            {/* Main Character Image */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <img
                src={heroCharacter}
                alt="Business professional"
                className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Floating Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute bottom-8 right-0 lg:right-8 z-20"
            >
              <div className="bg-background/95 backdrop-blur-sm border border-border rounded-2xl p-4 shadow-xl max-w-[250px]">
                <h4 className="font-semibold text-sm mb-1">We Help You Scale Efficiently</h4>
                <p className="text-xs text-muted-foreground mb-3">
                  Smart strategy. Strong execution. Real, measurable business growth.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-muted-foreground mb-1">Clients</p>
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-7 h-7 rounded-full border-2 border-background bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center"
                        >
                          <Users className="w-3 h-3 text-white" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
