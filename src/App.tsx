import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Login Page - Refined minimalist design
interface LoginPageProps {
  onLogin: () => void;
}

interface PageProps {
  onNext: () => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const validPasswords = ["ChocoBanana1025", "nethhh25"];

  const handleSubmit = () => {
    if (validPasswords.includes(password)) {
      setError(false);
      onLogin();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setTimeout(() => setPassword(""), 300);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <motion.div
      className="min-h-screen w-full bg-black flex items-center justify-center px-6 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent opacity-30" />
    
      <motion.div
        className="w-full max-w-sm flex flex-col items-center space-y-10 relative z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {/* Avatar with elegant ring */}
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-white/10 to-white/5 p-0.5">
            <div className="w-full h-full rounded-full bg-black p-1">
              <div className="w-full h-full rounded-full overflow-hidden border border-white/20">
                <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center text-white/40 text-xs">
                  <img src='/images/avatar_1.jpeg' alt="Avatar" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          <motion.div
            className="absolute inset-0 rounded-full border border-white/10"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Hint text */}
        <motion.p
          className="text-white/50 text-sm tracking-wide text-center font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Yung username nung nakikihike sa mountains hahaha.
        </motion.p>

        {/* Input and button */}
        <div className="w-full space-y-5 mt-2">
          <motion.div
            animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.4 }}
          >
            <input
              type="password"
              placeholder="•••••••••"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              onKeyPress={handleKeyPress}
              className="w-full px-6 py-4 bg-white/5 border border-white/10
                         rounded-xl text-white text-center text-base tracking-widest
                         placeholder-white/20 backdrop-blur-sm
                         focus:outline-none focus:border-white/30 focus:bg-white/8
                         transition-all duration-300"
              autoComplete="off"
            />
          </motion.div>

          <AnimatePresence mode="wait">
            {error && (
              <motion.p
                className="text-red-400/80 text-xs text-center font-light tracking-wide"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                That's not it.
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            onClick={handleSubmit}
            className="w-full py-4 border border-white/20 text-white/80 text-sm
                       rounded-xl font-light tracking-wider backdrop-blur-sm
                       hover:bg-white hover:text-black hover:border-white
                       transition-all duration-300 ease-out"
            whileTap={{ scale: 0.98 }}
          >
            ENTER
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Intro Page - Enhanced typography and spacing
const IntroPage = ({ onNext }: PageProps) => {
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
            "This is where the emotional weight slowly builds. No loud visuals yet. No bright colors. Just words, space, and a quiet black background.",
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

// Pikachu Page - Vibrant energy
const PikachuPage = ({ onNext }: PageProps) => {
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
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
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
            top: `${40 + i * 15}%`,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 4 + i * 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
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
            <p className="text-yellow-800 text-lg">
              This part feels energetic.
            </p>
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
              {/* <div className="text-7xl">⚡</div> */}
              <p className="text-yellow-800/60 text-sm font-light">
                <img src='/images/pikachu_1.jpeg' alt="Pikachu" className="mx-auto" />
              </p>
            </div>
          </motion.div>

          {[
            "This is where the long message starts. Think of this as the part where everything feels lighter. Like laughter that comes easily, or moments that don't need explanation. The kind of energy that just exists.",
            "Even if the message gets long, the colors and motion keep it from feeling heavy. Each paragraph arrives with a bit of life — nothing jumps out aggressively, but nothing feels dull either.",
            "This page is meant to feel like warmth. Like sunlight. Like something that gives energy instead of taking it away.",
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

// Tulips Page - Gentle elegance
const TulipsPage = ({ onNext }: PageProps) => {
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
            top: `${15 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [0, -12, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
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
            <p className="text-pink-700/80 text-lg font-light">
              This part is quieter.
            </p>
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
            "Tulips don't bloom all at once. They take time. And this section is meant to feel like that — something that grows quietly, without pressure, without noise.",
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
              {/* <div className="text-7xl">🌷</div> */}
              <p className="text-pink-700/60 text-sm font-light">
                <img src='/images/pink_tulips_bg.jpeg' alt="Tulips" className="mx-auto" />
              </p>
            </div>
          </motion.div>

          {[
            "The spacing here matters. The pauses between paragraphs matter. It's okay to stop scrolling for a moment. Nothing disappears. Everything stays.",
            "This section is about comfort. About calm presence. About being there, even in silence.",
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

// Pink Page - Emotional core
const PinkPage = ({ onNext }: PageProps) => {
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

// Ending Page - Peaceful closure with Christmas vibes
const EndingPage = () => {
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
            top: `-5%`,
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, Math.sin(i) * 30],
            opacity: [0.7, 0.3, 0.7],
          }}
          transition={{
            duration: 8 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
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
            top: `${10 + (i % 3) * 30}%`,
          }}
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        >
          {i % 3 === 0 ? "🎄" : i % 3 === 1 ? "⭐" : "🎁"}
        </motion.div>
      ))}

      {/* Twinkling stars */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
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
            <p className="text-white/80 text-lg font-light">
              Thank you for staying until the end.
            </p>
            <p className="text-white/60 text-base font-light">
              It means more than you think.
            </p>
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
            "There's no rush to leave this page. You can stop scrolling. You can reread a line. You can just sit here for a moment and let everything settle.",
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
              <p className="text-white/60 text-sm font-light">
                Christmas memory or photo here
              </p>
            </div>
          </motion.div>

          <motion.p
            className="leading-loose text-white/80 text-base font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
          >
            Whatever this message meant to you — whether it made you smile,
            think, or feel something quietly — that's enough.
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

// Main App
export default function App() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <AnimatePresence mode="wait">
        {page === 0 && <LoginPage key="login" onLogin={() => setPage(1)} />}
        {page === 1 && <IntroPage key="intro" onNext={() => setPage(2)} />}
        {page === 2 && <PikachuPage key="pikachu" onNext={() => setPage(3)} />}
        {page === 3 && <TulipsPage key="tulips" onNext={() => setPage(4)} />}
        {page === 4 && <PinkPage key="pink" onNext={() => setPage(5)} />}
        {page === 5 && <EndingPage key="ending" />}
      </AnimatePresence>
    </div>
  );
}
