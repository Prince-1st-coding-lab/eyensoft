import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";
import { Download, MapPin, Calendar, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const stats = [
    { icon: Calendar, label: "Years Experience", value: "5+" },
    { icon: Briefcase, label: "Projects Completed", value: "50+" },
    { icon: MapPin, label: "Based In", value: "Worldwide" },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image/Avatar Side */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background decoration */}
              <motion.div
                className="absolute inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden bg-secondary border border-border aspect-square">
                <img 
                  src={profilePhoto} 
                  alt="Profile photo" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating accent */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-primary/20 backdrop-blur-xl border border-primary/30"
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div variants={containerVariants} className="space-y-8">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Passionate about creating{" "}
                <span className="gradient-text">impactful solutions</span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I'm a developer and engineer with a deep passion for building digital 
              products that make a difference. With expertise in modern web technologies, 
              I specialize in creating responsive, performant, and user-friendly applications.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community. I believe in continuous learning and pushing 
              the boundaries of what's possible.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 py-8 border-y border-border"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-2xl md:text-3xl font-display font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button size="lg" className="rounded-full gap-2">
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
