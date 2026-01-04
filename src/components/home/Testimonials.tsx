import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechFlow Inc",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    content:
      "BrandMax transformed our brand identity completely. Their strategic approach and creative execution exceeded our expectations. The team's dedication and professionalism made the entire process seamless.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, Artisan Coffee",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    content:
      "Working with BrandMax on our e-commerce website was a game-changer. They delivered a beautiful, functional site that has significantly increased our online sales. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, FitLife",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    content:
      "The digital marketing campaign BrandMax created for us drove remarkable results. Our engagement rates tripled and we saw a 200% increase in conversions. They truly understand digital marketing.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Park",
    role: "Owner, Luxury Estates",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    content:
      "The video content BrandMax produced for our properties is absolutely stunning. They captured the essence of luxury living perfectly. Our client inquiries have doubled since the launch.",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
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
            <span className="text-sm font-medium text-primary">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say
            about working with BrandMax Studio.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-2xl border border-border p-8 md:p-12"
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <p className="text-lg md:text-xl leading-relaxed mb-8 text-foreground/90">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                  {/* Rating Stars */}
                  <div className="ml-auto hidden sm:flex gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
