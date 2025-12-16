import { motion } from "framer-motion";

type PinkPageProps = {
  onNext: () => void;
};

export const PinkPage = ({ onNext }: PinkPageProps) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-pink-500 via-rose-400 to-pink-300 text-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-lg text-center space-y-8">
          <motion.h1
            className="text-4xl md:text-5xl font-semibold tracking-tight"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          >
            Pink
          </motion.h1>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <p className="text-white/95 text-lg">This part is honest.</p>
            <p className="text-white/95 text-lg">No disguises.</p>
            <p className="text-white/95 text-lg">No holding back.</p>
          </motion.div>

          <motion.div
            className="pt-12"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-white/60 text-xs tracking-widest">SCROLL</p>
            <p className="text-white/50 text-xl mt-1">↓</p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-lg mx-auto space-y-16">
          <motion.p
            className="leading-relaxed text-white/95 text-base"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            This is where the message becomes personal. Not in a dramatic way,
            but in a real one. The kind of honesty that doesn't need to be loud
            to be felt.
          </motion.p>

          {/* Image placeholder for Pink page - could be hearts, abstract art, or meaningful photo */}
          <motion.div
            className="w-full max-w-sm mx-auto aspect-square rounded-2xl bg-white/20 border-2 border-white/30 backdrop-blur-sm flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-center space-y-3 p-8">
              <div className="text-7xl">💗</div>
              <p className="text-white/70 text-sm font-light">
                Meaningful image here
              </p>
            </div>
          </motion.div>

          <motion.p
            className="leading-relaxed text-white/95 text-base"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            These paragraphs are just placeholders for now, but imagine them
            carrying the words you've been meaning to say. The kind of thoughts
            that sit quietly until the right moment.
          </motion.p>

          <motion.div
            className="py-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-center text-xl md:text-2xl font-light text-white leading-relaxed">
              Some things are easier to write than to say.
            </p>
          </motion.div>

          <motion.p
            className="leading-relaxed text-white/95 text-base"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            That's why this page exists. To hold the words gently, without
            pressure. To let them breathe. To let them be read at your pace, not
            rushed, not skimmed.
          </motion.p>

          <motion.p
            className="leading-relaxed text-white/95 text-base"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            This is the emotional center of everything you've read so far. After
            this, things will begin to settle.
          </motion.p>

          <motion.div
            className="pt-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={onNext}
              className="w-full py-4 bg-white/95 text-pink-600 rounded-xl font-medium
                         hover:bg-white hover:shadow-xl
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
