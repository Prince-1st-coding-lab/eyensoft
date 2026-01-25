import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Globe, 
  Palette, 
  Server, 
  Smartphone,
  Terminal,
  Wrench
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Python", "Express", "FastAPI", "GraphQL"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Prisma"],
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["React Native", "Flutter", "iOS", "Android", "Expo"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "DevOps & Tools",
    icon: Terminal,
    skills: ["Docker", "AWS", "Git", "CI/CD", "Linux"],
    color: "from-red-500 to-rose-500",
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    skills: ["Figma", "Adobe XD", "Framer", "Prototyping", "Design Systems"],
    color: "from-indigo-500 to-violet-500",
  },
];

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Building responsive, performant websites and web applications using modern frameworks and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Creating cross-platform mobile applications that provide native-like experiences on iOS and Android.",
  },
  {
    icon: Server,
    title: "Backend Systems",
    description: "Designing and implementing scalable APIs, microservices, and backend infrastructure.",
  },
  {
    icon: Wrench,
    title: "Technical Consulting",
    description: "Providing expert guidance on architecture decisions, technology choices, and development strategies.",
  },
];

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-32">
      <div className="container mx-auto px-6">
        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display font-semibold text-lg">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.05 }}
                        className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services to help bring your vision to reality.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <motion.div
                    className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="h-8 w-8" />
                  </motion.div>
                  <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
