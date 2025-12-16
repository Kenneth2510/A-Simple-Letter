import { motion } from "framer-motion";

type IntroPageProps = {
  onNext: () => void;
};

export const IntroPage = ({ onNext }: IntroPageProps) => {
  return (
    <motion.div
      className="bg-black text-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-lg text-center space-y-8">
          <motion.h1
            className="text-3xl md:text-4xl font-extralight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hey.
          </motion.h1>

          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-white/60 leading-relaxed text-lg font-light">
              I made something for you.
            </p>
            <p className="text-white/40 text-sm font-light">
              Take your time with this.
            </p>
          </motion.div>

          <motion.div
            className="pt-12"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-white/30 text-xs tracking-widest">SCROLL</p>
            <p className="text-white/20 text-xl mt-1">↓</p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-lg mx-auto space-y-16">
          {[
            "This is just filler text for now, but imagine this being the start of a long message. Something you don't rush through. Something you read slowly, maybe while scrolling with one hand, taking pauses in between.",
            "The idea here is that the page doesn't feel heavy. Even if the message is long, the spacing, pacing, and motion make it feel light. Each paragraph appears as you reach it, almost like the letter is revealing itself little by little.",
            "You can add as many paragraphs as you want here. The layout is designed to handle long messages without feeling overwhelming. The user scrolls, reads, pauses, and continues at their own pace.",
            "This is where the emotional weight slowly builds. No loud visuals yet. No bright colors. Just words, space, and a quiet black background."
          ].map((text, i) => (
            <motion.p
              key={i}
              className="text-white/70 leading-loose text-base font-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
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
              className="w-full py-4 border border-white/20 text-white/70 rounded-xl
                         hover:bg-white hover:text-black hover:border-white
                         transition-all duration-300 text-sm tracking-wider font-light"
            >
              CONTINUE
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};
