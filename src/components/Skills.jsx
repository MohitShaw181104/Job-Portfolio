import { motion } from 'framer-motion'
import {
  Globe,
  Database,
  Zap,
  Sparkles,
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-7 h-7" />,
      color: "from-blue-400 to-blue-500",
      skills: [
        { name: "React", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 80 },
        { name: "Next.js", level: 70 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="w-7 h-7" />,
      color: "from-green-400 to-[#006A4E]",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "REST API ", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "MySql", level: 80 }
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: <Sparkles className="w-7 h-7" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Python", level: 90 },
        { name: "scikit-learn", level: 85 },
        { name: "NumPy", level: 85 },
        { name: "Transformers (HF)", level: 75 },
        { name: "PyAnnote / Resemblyzer", level: 70 }
      ]
    },
    {
      title: "Productivity & Dev Tools",
      icon: <Zap className="w-7 h-7" />,
      color: "from-yellow-500 to-orange-400",
      skills: [
        { name: "VS Code", level: 98 },
        { name: "Git & Github", level: 95 },
        { name: "Postman", level: 90 },
        { name: "Docker", level: 75 },
        { name: "Linux", level: 60 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 relative particle-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="gradient-text text-shadow-strong">My Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="glass-effect-strong rounded-xl overflow-hidden card-hover p-3"
            >
              <div className={`bg-gradient-to-r ${category.color} p-4 relative overflow-hidden rounded-t-xl`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="text-white glow-effect">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white text-shadow">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <motion.div
                  animate={{ y: [0, -6, 0], x: [0, 3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-2 right-2 w-1.5 h-1.5 bg-white/40 rounded-full"
                />
                <motion.div
                  animate={{ y: [0, 6, 0], x: [0, -3, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-2 left-2 w-1 h-1 bg-white/40 rounded-full"
                />
              </div>
              <div className="p-4 space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                      <span className="text-slate-400 font-bold text-xs">{skill.level}%</span>
                    </div>
                    <div className="skill-bar h-1.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                          duration: 1.2,
                          ease: 'easeOut'
                        }}
                        className={`skill-bar-fill bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 mb-8 text-lg">
            Ready to see these skills in action? Let’s build something
            <span className="text-blue-400 font-semibold"> incredible together</span>!
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary shimmer-effect flex items-center space-x-3 mx-auto"
          >
            <span>View My Work</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
