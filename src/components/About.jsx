import { motion } from 'framer-motion'
import { User, Code, Palette, Zap, Award, Users } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: <Code className="w-6 h-6" />, value: "800+", label: "DSA Problems Solved", color: "text-blue-400" },
    { icon: <Users className="w-6 h-6" />, value: "10+", label: "Projects", color: "text-pink-400" },
    { icon: <Award className="w-6 h-6" />, value: "6+", label: "Hackathons", color: "text-yellow-400" },
  ]

  return (
    <section id="about" className="py-20 bg-charcoal text-lightText">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-black gradient-text">About Me</h2>
        </motion.div>

        {/* Main Flex Layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT: Image + Stats */}
          <div className="flex flex-col items-center lg:items-center gap-8 lg:w-1/3">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="w-64 h-64 rounded-3xl overflow-hidden shadow-lg border-4 border-white/10">
                <img
                  src="/1.png"
                  alt="Mohit Shaw"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full space-y-4"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 bg-white/5 rounded-xl p-4 shadow-md"
                >
                  <div className={`p-2 rounded-xl ${stat.color} bg-white/10`}>
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-xl font-bold">{stat.value}</div>
                    <div className="text-sm text-mutedText">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Journey + What I Value */}
          <div className="flex flex-col gap-10 lg:w-2/3">
            {/* Journey */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative bg-white/5 p-8 rounded-2xl shadow-xl"
            >
              <div className="absolute -left-2 top-4 h-3/4 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full" />
              <h3 className="text-3xl font-bold flex items-center mb-4">
                <User className="w-7 h-7 text-blue-400 mr-2" />
                My Journey
              </h3>
              <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                <p>
                  I’m currently in my Final year of B.Tech in Electronics and Communication Engineering at
                  <span className="text-blue-400 font-semibold"> IIIT Kalyani</span>. My journey has been filled with learning through hands-on development,
                  building scalable tech, and contributing to open-source communities.
                </p>
                <p>
                  I was a finalist at the <span className="text-pink-400 font-semibold">Smart India Hackathon 2023</span> and
                  the winner of the <span className="text-purple-400 font-semibold">MLH StatusCode0 Hackathon</span>.
                  I’ve built fraud detection systems, stock predictors, and multilingual chatbots.
                </p>
                <p>
                  I actively contribute to the <span className="text-blue-400 font-semibold">FOSS United Kolkata</span> community,
                  organize events like <span className="text-purple-300 font-semibold">StatusCode1</span>, and solved
                  <span className="text-green-400 font-semibold"> 800+ DSA problems</span> across platforms.
                </p>
              </div>
            </motion.div>

            {/* What I Value */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold">What I Value</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Innovation", desc: "Always exploring new technologies and approaches" },
                  { title: "Quality", desc: "Writing clean, efficient, and maintainable code" },
                  { title: "Collaboration", desc: "Working together to achieve amazing results" },
                  { title: "Learning", desc: "Continuously improving and expanding my skills" },
                ].map((val, index) => (
                  <div key={val.title} className="bg-white/5 rounded-xl p-4 hover:scale-105 transition transform shadow-md">
                    <h4 className="text-lg font-bold mb-1">{val.title}</h4>
                    <p className="text-mutedText text-sm">{val.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 mb-8 text-lg">
            Let’s create something <span className="text-purple-400 font-semibold">amazing together</span>!
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary shimmer-effect px-8 py-4 rounded-xl font-bold"
          >
            Let’s Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default About
