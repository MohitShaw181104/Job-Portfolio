import { motion } from 'framer-motion'
import { Heart, ArrowUp, Github, Linkedin, Twitter, Mail, Sparkles, Star, Zap } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative particle-bg overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 via-purple-600/10 to-pink-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-pink-500/10 via-purple-600/10 to-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {/* Elegant Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 rounded-3xl glass-effect-strong shadow-2xl border border-white/10 backdrop-blur-xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex items-center space-x-3">
                {/* <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center glow-effect shadow-xl">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 border-2 border-blue-400 rounded-2xl opacity-30"
                  />
                </div> */}
                <span className="text-2xl font-black gradient-text">Mohit Shaw</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Innovative Full Stack Developer building 
                <span className="text-slate-300 font-semibold"> intelligent applications</span> that blend 
                <span className="text-gray-300 font-semibold"> clean design</span> with 
                <span className="text-slate-200 font-semibold"> smart machine learning algorithms</span>. 
                </p>

              <div className="flex space-x-4 mt-2">
                {[
                  { icon: <Linkedin className="w-7 h-7" />, href: "https://www.linkedin.com/in/mohitfrbatman", label: "LinkedIn" },
                  { icon: <Github className="w-7 h-7" />, href: "https://github.com/MohitShaw181104", label: "GitHub" },
                  { icon: <Twitter className="w-7 h-7" />, href: "https://x.com/mohitfrbatman", label: "Twitter" },
                  { icon: <Mail className="w-6 h-6" />, href: "mailto:mohitjobenquiry@gmail.com", label: "Email" },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -3, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center text-blue-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 glow-effect shadow-md"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-white text-shadow flex items-center space-x-2">
                {/* <Zap className="w-5 h-5 text-blue-400" /> */}
                <span>Quick Links</span>
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "#home" },
                  { name: "About", href: "#about" },
                  { name: "Skills", href: "#skills" },
                  { name: "Projects", href: "#projects" },
                  { name: "Contact", href: "#contact" },
                ].map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span>{link.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Enhanced Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-white text-shadow flex items-center space-x-2">
                <span>Services</span>
              </h3>
              <ul className="space-y-3">
                {[
                  "Web Development",
                  "App Development",
                  "Machine Learning",
                  "UI/UX Design",
                ].map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <div className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Enhanced Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 pt-12 border-t border-white/10"
          >
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-white text-shadow">
                Stay Updated with My Work
              </h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Get notified about new projects, tech insights, and creative ideas delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300 shimmer-effect"
                />
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 glow-effect flex items-center justify-center space-x-2"
                >

                  <span>Subscribe</span>
                  {/* <Sparkles className="w-5 h-5" /> */}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Elegant Bottom Bar */}
        <div className="border-t border-white/10 relative bg-white/5 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm flex items-center space-x-2"
              >
                <span>© {currentYear} Mohit Shaw. All rights reserved.</span>
                <span className="text-blue-400">•</span>
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />

              </motion.div>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 glow-effect shadow-md"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-50" />
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-50" />
      <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-50" />
    </footer>
  )
}

export default Footer 