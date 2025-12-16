import { motion } from "framer-motion";

type PikachuPageProps = {
  onNext: () => void;
};

export const PikachuPage = ({ onNext }: PikachuPageProps) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-yellow-300 via-yellow-200 to-amber-100 text-yellow-900 min-h-screen relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated lightning bolts */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl opacity-20"
          style={{
            left: `${15 + i * 20}%`,
            top: `${20 + (i % 3) * 25}%`
          }}
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 3 + i * 0.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: i * 0.3
          }}
        >
          ⚡
        </motion.div>
      ))}

      {/* Floating Pikachu emojis */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`pika-${i}`}
          className="absolute text-6xl opacity-30"
          style={{
            right: `${10 + i * 30}%`,
            top: `${40 + i * 15}%`
          }}
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 4 + i * 0.7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: i * 0.5
          }}
        >
          ⚡🐭
        </motion.div>
      ))}

      <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <div className="w-full max-w-lg text-center space-y-8">
          <motion.h1
            className="text-4xl md:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          >
            Pikachu
          </motion.h1>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-yellow-800 text-lg">This part feels energetic.</p>
            <p className="text-yellow-800 text-lg">Bright.</p>
            <p className="text-yellow-800 text-lg">Hard to ignore.</p>
          </motion.div>

          <motion.div
            className="pt-12"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <p className="text-yellow-700/60 text-xs tracking-widest">SCROLL</p>
            <p className="text-yellow-700/40 text-xl mt-1">↓</p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-32 relative z-10">
        <div className="max-w-lg mx-auto space-y-14">
          {/* Image placeholder for Pikachu */}
          <motion.div
            className="w-full max-w-xs mx-auto aspect-square rounded-2xl bg-yellow-400/30 border-2 border-yellow-500/40 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center space-y-3 p-8">
              <div className="text-7xl">⚡</div>
              <p className="text-yellow-800/60 text-sm font-light">Pikachu image here</p>
            </div>
          </motion.div>

          {[
            "This is where the long message starts. Think of this as the part where everything feels lighter. Like laughter that comes easily, or moments that don't need explanation. The kind of energy that just exists.",
            "Even if the message gets long, the colors and motion keep it from feeling heavy. Each paragraph arrives with a bit of life — nothing jumps out aggressively, but nothing feels dull either.",
            "This page is meant to feel like warmth. Like sunlight. Like something that gives energy instead of taking it away."
          ].map((text, i) => (
            <motion.p
              key={i}
              className="leading-relaxed text-yellow-900/90 text-base"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {text}
            </motion.p>
          ))}

          <motion.div
            className="pt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={onNext}
              className="w-full py-4 bg-yellow-400/80 text-yellow-900 rounded-xl font-medium
                         hover:bg-yellow-400 hover:shadow-lg
                         transition-all duration-300 text-sm tracking-wide"
            >
              CONTINUE
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};
