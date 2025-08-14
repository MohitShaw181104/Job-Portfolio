import { motion } from 'framer-motion'
import { Sparkles, Zap, Star, Heart, Code, Palette, Database, Cloud } from 'lucide-react'

const LoadingScreen = ({ isLoading }) => {
  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-slate-400/20 via-gray-300/20 to-slate-200/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-gray-300/20 via-slate-200/20 to-slate-400/20 rounded-full blur-3xl"
        />

        {/* Floating Particles */}
        <motion.div
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0
          }}
          className="absolute top-1/4 left-1/4 w-3 h-3 bg-slate-300 rounded-full animate-ping"
        />

        <motion.div
          animate={{
            y: [0, 100, 0],
            x: [0, -50, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-3/4 right-1/3 w-2 h-2 bg-gray-300 rounded-full animate-pulse"
        />

        <motion.div
          animate={{
            y: [0, -80, 0],
            x: [0, 30, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 left-1/2 w-2.5 h-2.5 bg-slate-200 rounded-full animate-bounce"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center space-y-12">
        {/* Enhanced Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex items-center justify-center space-x-4 mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-slate-600 via-gray-500 to-slate-700 rounded-2xl flex items-center justify-center shadow-2xl">
              <Code className="w-10 h-10 text-white" />
            </div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-4 border-slate-400 rounded-2xl opacity-30"
            />
          </motion.div>

          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-6xl font-black bg-gradient-to-r from-slate-300 via-gray-200 to-slate-100 bg-clip-text text-transparent"
            >
              Hello, I'm Mohit
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center justify-center space-x-2 mt-2"
            >

              <span className="text-gray-400 text-sm font-medium">Welcome to my portfolio</span>
              {/* <Zap className="w-5 h-5 text-yellow-400 animate-pulse" /> */}
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Loading Animation */}
        <div className="space-y-8">
          {/* Skill Icons Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center space-x-8"
          >
            {[
              { icon: <Code className="w-8 h-8" />, color: "text-slate-300", delay: 0 },
              { icon: <Palette className="w-8 h-8" />, color: "text-gray-300", delay: 0.2 },
              { icon: <Database className="w-8 h-8" />, color: "text-slate-200", delay: 0.4 },
              { icon: <Cloud className="w-8 h-8" />, color: "text-slate-400", delay: 0.6 },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.5 + skill.delay, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                className={`${skill.color} p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 glow-effect`}
              >
                {skill.icon}
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Progress Bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="max-w-md mx-auto space-y-4"
          >
            <div className="flex justify-between text-sm text-gray-400">
              <span>Loading Experience</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.5 }}
              >
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Please wait...
                </motion.span>
              </motion.span>
            </div>

            <div className="relative h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 2.2, duration: 3, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-slate-500 via-gray-400 to-slate-300 rounded-full relative overflow-hidden"
              >
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Loading Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="flex justify-center space-x-2"
          >
            {[0, 1, 2].map((dot) => (
              <motion.div
                key={dot}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: dot * 0.2,
                  ease: "easeInOut"
                }}
                className="w-3 h-3 bg-gradient-to-r from-slate-400 to-gray-300 rounded-full"
              />
            ))}
          </motion.div>
        </div>

        {/* Loading Messages
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="space-y-4"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-gray-400 text-lg font-medium"
          >
            Preparing your amazing experience...
          </motion.div> */}


        {/*           
        </motion.div> */}
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-slate-400 rounded-tl-2xl opacity-30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-gray-400 rounded-tr-2xl opacity-30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-slate-300 rounded-bl-2xl opacity-30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-slate-500 rounded-br-2xl opacity-30" />
    </motion.div>
  )
}

export default LoadingScreen 