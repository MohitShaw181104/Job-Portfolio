import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye, Code, Globe, Smartphone, Star, Zap, Sparkles } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', name: 'All Projects', },
    // icon: <Sparkles className="w-4 h-4" /> 
    { id: 'web', name: 'Web Apps', icon: <Globe className="w-4 h-4" /> },
    { id: 'mobile', name: 'Mobile Apps', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'design', name: 'CLI Tools', icon: <Code className="w-4 h-4" />, },
  ]

  const projects = [
    {
      id: 1,
      title: "Cyvox",
      description: "It is a web application designed to help users register complaints about scammer calls. The platform allows users to submit details about suspicious calls, automatically generating a ticket for each complaint to facilitate tracking and resolution.",
      image: "/cyvox.png",
      category: "design",
      technologies: ["React", "Tailwind", "Python", "PyAnnote", "Resemblyzer", "MongoDB"],
      liveUrl: "https://github.com/MohitShaw181104/Cyvox",
      githubUrl: "https://github.com/MohitShaw181104/Cyvox",
      featured: true,
    },
    {
      id: 2,
      title: "Stock Market Predictor",
      description: "This project implements an Enhanced Gaussian Mixture Model (GMM) for clustering and trend analysis of financial data. The project uses historical S&P 500 data to demonstrate the model's capabilities and aims to use an unsupervised learning approach.",
      image: "/smp.png",
      category: "web"&& "design",
      technologies: ["Python", "Scikit-learn", "Gaussian Mixture Models", "Matplotlib" ],
      liveUrl: "https://github.com/MohitShaw181104/Stock-Market-Predictor",
      githubUrl: "https://github.com/MohitShaw181104/Stock-Market-Predictor",
      featured: true,
    },
        {
      id: 3,
      title: "HiredFolk",
      description: "HiredFolk is job platform that connects job seekers with recruiters. Users can search for jobs, upload resumes, and track application status from their profiles. HRs can view applicants’ resumes, accept or reject candidates, and manage company listings.",
      image: "/hf.png",
      category: "web",
      technologies: ["React", "Tailwind", "ShadCn", "ExpressJS", "MongoDB", "NodeJS", "Gemini API"],
      liveUrl: "#",
      githubUrl: "https://github.com/MohitShaw181104/Hired-Folk",
      featured: true,
    },
    {
      id: 4,
      title: "Samaya",
      description: "A user friendly web application that detects the grievance lodged by the user and assign the associated department with approx 80% accuracy it also provides an unique token id for every grivance in th format of department first three letters and an random id for easy identification.",
      category: "web",
      image: "/samaya.png",
      technologies: ["React", "Tailwind", "Python", "Transformers", "MongoDB", "JavaScript"],
      liveUrl: "https://github.com/MohitShaw181104/SAMAYA",
      githubUrl: "https://github.com/MohitShaw181104/SAMAYA",
      featured: false,
      // rating: 4
    },
    {
      id: 5,
      title: "Schooler",
      description: "It is a web-based application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It aims to streamline school management, class organization, and facilitate communication between students, teachers, and administrators. It also Streamline school management, class organization, and add students and faculty and Seamlessly track attendance, assess performance, and provide feedback.",
      image: "/cw.png",
      category: "web",
      technologies: ["React", "MongoDb", "Tailwind CSS", "ExpressJS", "NodeJS"],
      liveUrl: "https://realschoolmanagementsystem.netlify.app/",
      githubUrl: "https://github.com/MohitShaw181104/Classroom-website",
      featured: false,
      rating: 5
    },
    {
      id: 6,
      title: "AniBud",
      description: "It is an Flutter App dedicated to create an environment for preservation and protection of wildlife. We believe that all animals have the right to live and thrive in their natural habitats, free from harm and exploitation.",
      image: "/a.png",
      category: "mobile",
      technologies: ["Flutter", "Dart", "Google Maps API"],
      liveUrl: "https://github.com/MohitShaw181104/AniBud-1",
      githubUrl: "https://github.com/MohitShaw181104/AniBud-1",
      featured: false,
      rating: 5
    }
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 relative particle-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="gradient-text text-shadow-strong">My Projects</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Here are some of the <span className="text-blue-400 font-semibold">amazing projects</span> I've worked on.
            Each one solves a real world problem and provides a <span className="text-purple-400 font-semibold">User friendly easy digital solution of it</span>.
          </p>
        </motion.div>

        {/* Enhanced Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-28"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-8 py-4 rounded-xl font-bold transition-all duration-500 flex items-center space-x-2 ${activeFilter === filter.id
                ? 'bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white shadow-2xl glow-effect'
                : 'glass-effect text-gray-300 hover:text-white hover:bg-white/10 shimmer-effect'
                }`}
            >
              {filter.icon}
              <span>{filter.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -15 }}
                className={`group relative${index === 3 ? ' mt-8' : ''}`}
              >
                <div className="relative group flex flex-col items-center">
                  {/* Floating Project Image with blurred gradient bg */}
                  <div className="relative w-full flex justify-center mt z-20">
                    <div className="absolute -inset-2 rounded-4xl blur-2xl bg-gradient-to-br from-blue-500/20 via-purple-600/20 to-pink-500/20 z-0" />
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.06 }}
                      className="w-90 h-80 object-contain bg-slate-900 rounded-2xl shadow-2xl glass-effect-strong border-4 border-white/10 z-10 transition-transform duration-500"
                      style={{ boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)' }}
                    />
                    {/* Hover Overlay with Action Buttons */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-8 rounded-4xl z-20">
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 glow-effect"
                      >
                        <ExternalLink className="w-7 h-7" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 glow-effect"
                      >
                        <Github className="w-7 h-7" />
                      </motion.a>
                    </div>
                  </div>
                  {/* Card Content */}
                  <div className="glass-effect-strong rounded-2xl overflow-hidden card-hover mt-4 w-full flex-1 flex flex-col justify-between transition-all duration-500">
                    {/* Enhanced Project Content */}
                    <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white text-shadow">{project.title}</h3>
                        <div className="text-blue-400 glow-effect">
                          {project.category === 'web' && <Globe className="w-5 h-5" />}
                          {project.category === 'mobile' && <Smartphone className="w-5 h-5" />}
                          {project.category === 'design' && <Code className="w-5 h-5" />}
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-slate-700/20 to-gray-500/20 text-slate-300 text-xs rounded-full font-bold border border-slate-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Action Buttons */}
                    <div className="flex space-x-4 p-4 pt-0">
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl text-xs font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 glow-effect"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Live Demo</span>
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border-2 border-slate-600 text-slate-300 rounded-xl text-xs font-bold hover:bg-slate-700 hover:text-white transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 mb-8 text-lg">
            Interested in working together? Let's discuss your next <span className="text-blue-400 font-semibold">amazing project</span>!
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary shimmer-effect flex items-center space-x-3 mx-auto"
          >
            <span>Start a Project</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 