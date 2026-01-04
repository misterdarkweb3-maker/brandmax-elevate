import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "TechFlow Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    description: "Complete brand identity for a SaaS startup",
  },
  {
    id: 2,
    title: "Artisan Coffee Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    description: "E-commerce website with custom ordering system",
  },
  {
    id: 3,
    title: "Fitness App Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    description: "Multi-channel marketing campaign launch",
  },
  {
    id: 4,
    title: "Luxury Real Estate",
    category: "Video Production",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    description: "Property showcase video series",
  },
  {
    id: 5,
    title: "Organic Foods Packaging",
    category: "Print Design",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
    description: "Sustainable packaging design system",
  },
  {
    id: 6,
    title: "Fashion Brand Launch",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    description: "Complete social media strategy and launch",
  },
];

export function PortfolioSection() {
  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">Our Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-xl">
              Explore some of our recent work that showcases our creative
              capabilities and client success stories.
            </p>
          </div>
          <Button asChild variant="outline" className="magnetic-hover self-start md:self-auto">
            <Link to="/services">
              View All Projects
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                    {project.description}
                  </p>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
