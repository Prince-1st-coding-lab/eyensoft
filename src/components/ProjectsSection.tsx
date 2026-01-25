import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, secure payments, and an intuitive admin dashboard.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "A collaborative project management tool featuring drag-and-drop interfaces, real-time updates, and team collaboration features.",
    image: "/placeholder.svg",
    tags: ["TypeScript", "Next.js", "Prisma", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered content creation tool that helps writers generate high-quality articles, blog posts, and marketing copy.",
    image: "/placeholder.svg",
    tags: ["Python", "OpenAI", "FastAPI", "React"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Analytics Dashboard",
    description: "A real-time analytics dashboard with interactive charts, custom reporting, and data visualization features.",
    image: "/placeholder.svg",
    tags: ["Vue.js", "D3.js", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Mobile Banking App",
    description: "A secure mobile banking application with biometric authentication, transaction history, and budget tracking.",
    image: "/placeholder.svg",
    tags: ["React Native", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Social Media Platform",
    description: "A modern social media platform with real-time messaging, content sharing, and community features.",
    image: "/placeholder.svg",
    tags: ["Next.js", "GraphQL", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my skills in
            building modern, scalable, and user-friendly applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden bg-secondary">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-primary text-primary-foreground"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-secondary text-secondary-foreground"
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Folder className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="rounded-full gap-2">
            <Github className="h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
