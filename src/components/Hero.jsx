import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail, Github, Linkedin, Twitter, Sparkles, Zap, Star } from 'lucide-react'

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden particle-bg">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-slate-400/20 via-gray-300/20 to-slate-200/20 rounded-full blur-3xl glow-effect"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-gray-300/20 via-slate-200/20 to-slate-400/20 rounded-full blur-3xl glow-effect"
        />

        {/* Floating Particles */}
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-slate-300 rounded-full animate-ping"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-3/4 right-1/3 w-1 h-1 bg-gray-300 rounded-full animate-pulse"
        />
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-slate-200 rounded-full animate-bounce"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Enhanced Greeting */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 font-medium flex items-center justify-center space-x-2"
          >

            <span>Hello, I'm</span>
            {/* <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" /> */}
          </motion.div>

          {/* Enhanced Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-shadow-strong"
          >
            <span className="gradient-text floating-animation">Mohit Shaw</span>
          </motion.h1>

          {/* Enhanced Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-1xl md:text-3xl lg:text-4xl text-gray-300 font-light"
          >
            <span className="text-shadow">Full Stack Developer</span>
            <span className="text-slate-300 mx-4">•</span>
            <span className="text-shadow">ML Enthusiast</span>
          </motion.div>

          {/* Enhanced Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-6xl mx-auto leading-relaxed"
          >
            I build <span className="text-slate-300 font-semibold">intelligent full-stack applications</span> that combine
          <span className="text-gray-300 font-semibold"> clean design</span> with
          <span className="text-slate-200 font-semibold"> smart machine learning</span>.
          Passionate about solving real-world problems with scalable systems and efficient algorithms.

          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="/Mohit's Resume.pdf"
              download
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary shimmer-effect flex items-center space-x-3"
            >
              <Download className="w-6 h-6" />
              <span>Download CV</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary shimmer-effect flex items-center space-x-3"
            >
              <Mail className="w-6 h-6" />
              <span>Get In Touch</span>
            </motion.button>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center space-x-8 pt-12"
          >
            {[
              { icon: <Linkedin className="w-7 h-7" />, href: "https://www.linkedin.com/in/mohitfrbatman", label: "LinkedIn" },
              { icon: <Github className="w-7 h-7" />, href: "https://github.com/MohitShaw181104", label: "GitHub" },
              { icon: <Twitter className="w-7 h-7" />, href: "https://x.com/mohitfrbatman", label: "Twitter" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-all duration-300 p-4 rounded-full hover:bg-white/10 glow-effect"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 hover:text-white transition-colors duration-300 p-4 rounded-full hover:bg-white/10 glow-effect"
        >
          <ChevronDown className="w-10 h-10" />
        </motion.button>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-slate-300 rounded-full animate-ping opacity-50" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-gray-300 rounded-full animate-pulse opacity-50" />
      <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-slate-200 rounded-full animate-bounce opacity-50" />
    </section>
  )
}

export default Hero 