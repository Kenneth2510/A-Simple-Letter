import { motion } from "framer-motion";

export const EndingPage = () => {
  return (
    <motion.div
      className="bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 text-white min-h-screen relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Falling snow effect */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`snow-${i}`}
          className="absolute w-2 h-2 bg-white rounded-full opacity-70"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-5%`
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.sin(i) * 30],
            opacity: [0.7, 0.3, 0.7]
          }}
          transition={{
            duration: 8 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        />
      ))}

      {/* Christmas decorations - ornaments and trees */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`deco-${i}`}
          className="absolute text-4xl opacity-20"
          style={{
            left: `${5 + i * 18}%`,
            top: `${10 + (i % 3) * 30}%`
          }}
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 4 + i * 0.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: i * 0.4
          }}
        >
          {i % 3 === 0 ? '🎄' : i % 3 === 1 ? '⭐' : '🎁'}
        </motion.div>
      ))}

      {/* Twinkling stars */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ 
            duration: 2 + Math.random() * 2, 
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}

      <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <div className="w-full max-w-lg text-center space-y-8">
          <motion.h1
            className="text-3xl md:text-4xl font-extralight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            That's all.
          </motion.h1>

          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
          >
            <p className="text-white/80 text-lg font-light">Thank you for staying until the end.</p>
            <p className="text-white/60 text-base font-light">It means more than you think.</p>
          </motion.div>

          <motion.div
            className="pt-12"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-white/40 text-xs tracking-widest">SCROLL</p>
            <p className="text-white/30 text-xl mt-1">↓</p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-40 relative z-10">
        <div className="max-w-lg mx-auto space-y-16">
          {[
            "This part can be as long as you want. A quiet ending doesn't mean a short one. Sometimes, the longest thoughts are the ones that need the most space.",
            "There's no rush to leave this page. You can stop scrolling. You can reread a line. You can just sit here for a moment and let everything settle."
          ].map((text, i) => (
            <motion.p
              key={i}
              className="leading-loose text-white/80 text-base font-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
            >
              {text}
            </motion.p>
          ))}

          {/* Christmas-themed image placeholder */}
          <motion.div
            className="w-full max-w-sm mx-auto aspect-[4/3] rounded-2xl bg-white/10 border-2 border-white/20 backdrop-blur-md flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center space-y-3 p-8">
              <div className="text-6xl">🎄✨🎁</div>
              <p className="text-white/60 text-sm font-light">Christmas memory or photo here</p>
            </div>
          </motion.div>

          <motion.p
            className="leading-loose text-white/80 text-base font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
          >
            Whatever this message meant to you — whether it made you smile, think, or feel something quietly — that's enough.
          </motion.p>

          <motion.div
            className="pt-28 text-center space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <p className="text-white/50 italic text-sm font-light tracking-wide">
              With all my heart,
            </p>
            <p className="text-white text-lg font-light tracking-wide">
              — Your Name
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};
