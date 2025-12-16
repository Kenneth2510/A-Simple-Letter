import { motion } from "framer-motion";

type TulipsPageProps = {
  onNext: () => void;
};

export const TulipsPage = ({ onNext }: TulipsPageProps) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-pink-50 via-rose-50 to-white text-pink-900 min-h-screen relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Floating tulip decorations */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-5xl opacity-20"
          style={{
            left: `${10 + i * 25}%`,
            top: `${15 + (i % 2) * 40}%`
          }}
          animate={{ 
            y: [0, -12, 0],
            rotate: [0, 8, 0]
          }}
          transition={{ 
            duration: 5 + i * 0.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: i * 0.8
          }}
        >
          🌷
        </motion.div>
      ))}

      <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <div className="w-full max-w-lg text-center space-y-8">
          <motion.h1
            className="text-4xl md:text-5xl font-light tracking-tight"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            Tulips
          </motion.h1>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
          >
            <p className="text-pink-700/80 text-lg font-light">This part is quieter.</p>
            <p className="text-pink-700/80 text-lg font-light">Slower.</p>
            <p className="text-pink-700/80 text-lg font-light">Softer.</p>
          </motion.div>

          <motion.div
            className="pt-12"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-pink-600/50 text-xs tracking-widest">SCROLL</p>
            <p className="text-pink-600/30 text-xl mt-1">↓</p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-lg mx-auto space-y-16">
          {[
            "Imagine this part being read slowly. The kind of message that doesn't demand attention, but gently asks for it. Nothing here rushes you. Everything waits until you're ready.",
            "Tulips don't bloom all at once. They take time. And this section is meant to feel like that — something that grows quietly, without pressure, without noise."
          ].map((text, i) => (
            <motion.p
              key={i}
              className="leading-loose text-pink-800/90 text-base font-light"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
            >
              {text}
            </motion.p>
          ))}

          {/* Image placeholder for Tulips */}
          <motion.div
            className="w-full max-w-sm mx-auto aspect-[4/3] rounded-2xl bg-pink-100/60 border-2 border-pink-300/50 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-center space-y-3 p-8">
              <div className="text-7xl">🌷</div>
              <p className="text-pink-700/60 text-sm font-light">Tulips image here</p>
            </div>
          </motion.div>

          {[
            "The spacing here matters. The pauses between paragraphs matter. It's okay to stop scrolling for a moment. Nothing disappears. Everything stays.",
            "This section is about comfort. About calm presence. About being there, even in silence."
          ].map((text, i) => (
            <motion.p
              key={`p2-${i}`}
              className="leading-loose text-pink-800/90 text-base font-light"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
            >
              {text}
            </motion.p>
          ))}

          <motion.div
            className="pt-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={onNext}
              className="w-full py-4 border border-pink-300/60 text-pink-700/80 rounded-xl
                         hover:bg-pink-100 hover:border-pink-400
                         transition-all duration-300 text-sm tracking-wide font-light"
            >
              CONTINUE
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};
