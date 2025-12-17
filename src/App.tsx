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
                  <img
                    src="/images/avatar_1.jpeg"
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
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
            "Usually di ako nagawa ng letters para sa ibang tao, pero right now, I feel na gusto ko magsulat ngayon hahaha. This letter was supposedly na for Christmas greetings lang, pero might as well make this as my way of showing gratitude before the year ends. At this point of time, many events has been experienced, was able to meet many people, and many memories has been many. Truly, I am feeling grateful to be part of those pieces that made significant changes to my current self.",
            "Might as well take the opportunity to say my apologies if ever that I have become a hassle, or cause any discomforts sayo. There was a time ata na nasagi ata kita non then di na ako nakapag sorry or what, which ended with me feeling so guilty that I cannot even look at people non.",
            "Anyways, intro pa lang naman to so eme eme lang muna hahahah. By the way, if you are wondering na bakit website and hindi handwritten, maraming factors kase yon haha. First ayaw ko pumatay ng maraming puno every time na gagamit ako ng paper, then if ever na magsulat man me, kung pede lang magsalita yung ballpen baka ma mura na ren ako non sa panget na sulat ko hahaha",
            "Then yung mga kasama don sa bag, feel free kung ano gusto mo gawin don hahaha, no need to return it ok? if don't want it, simply throw it away or pamigay mo na langs sa ibaa. If ever you did wonder kung andami ko nanaman ba ginastos dyan, don't worry I was able to take the majority at discounted price or libre kaya no worries HAHAHAH",
            "This is based on my perspective, on my side, on how did I see those things so please take it with a grain of salt hahaha. Also, this is not meant to be a formal letter, so please expect na may mga parts na medyo corny hahaha. Just go with the flow lang hahaha.",
            "So game next page tara? lezzgoo!",
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
          ⚡
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
            Uy Yellow! parang Pikachu nga noh?
          </motion.h1>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-yellow-800 text-lg">
              Or Zenitsu? Thunder den naman.
            </p>
            <p className="text-yellow-800 text-lg">Ewan.</p>
            <p className="text-yellow-800 text-lg">Basta yon hahah.</p>
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
                <img
                  src="/images/pikachu_1.jpeg"
                  alt="Pikachu"
                  className="mx-auto"
                />
              </p>
            </div>
          </motion.div>

          {[
            "First of all, I want to say thank you to meet you even though we are both new employees sa work. I do remember nung onboarding, nakikita ko kayo ni Stacey na nagdadaldalan during that time, and it so happen na don den kami puwesto nung kawork ko na yon halos recently ko lang den nakilala hahaha. Then, alam mo ba, napag tripan ako non nila Sir Philip nong time na nag add friend kami sa fb, after nung isang day during onboarding ata, inano phone ko tapos kung sino sino ni add friend nya, nakaka hiya pero ganon nangyare non XD.",
            "That was the time also, na still at shock with the new environment, and still on the personality na super loner, unlike ngayon hahaha. And that time so busy ren non na kase nag sabay sabay application ko sa tatlo, work, masters, and as part time instructor. Di ko alam kung pano ko napag kasya but I guess I'm still alive pa naman hahaha. I remember na bigla lang u nag reply ata sa story ko non na nababaliw ng madaling araw then yon na yung una nating convo non hahaha. Tapos yung content, about chismis hay nako talaga ohhh HAHAHAHAHAH. Also don ko ren nalaman na fan ka ng pokemon, or more likely kay Pikachu, kaya yon yung design neto",
            "Actually nung dumaan me sa One Ayala, bigla lang den sya bumungad don so na intriga na ako don hahaha. Nagdadalawang isip pa nga ako nyan kung bibilhin ko kasi di ko sure kung safe lang ba yon or makakapag trigger ng allergy gawa ng mga lints. Anyways nabili ko na so I guess late na para pag isipan pa muli",
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
            className="w-full max-w-xs mx-auto aspect-square rounded-2xl bg-yellow-400/30 border-2 border-yellow-500/40 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center space-y-3 p-8">
              {/* <div className="text-7xl">⚡</div> */}
              <p className="text-yellow-800/60 text-sm font-light">
                <img
                  src="/images/fa40169f-eba7-42d7-a676-227a6b5e2252 (1).jpeg"
                  alt="Pikachu"
                  className="mx-auto"
                />
              </p>
            </div>
          </motion.div>

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
              Yung color pink daw hahaha.
            </p>
            <p className="text-pink-700/80 text-lg font-light">
              Ilan ba petals non? di ko sure.
            </p>
            <p className="text-pink-700/80 text-lg font-light">hahahaha.</p>
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
            "Next interaction, was during don sa month ng performers month ba yon, basta yung sayaw sayaw hahaha. Nagulat nga ako kasi nandon ka ren non, ang nasa isip ko na lang non naboboringan ako sa task ko sa LSD so mag liliw aliw muna ako hahaha. Hoy baka di mo pa nadedelete yung nivideo mo ko don ahh hahaha, nakakahiyaaa hahahah. Then guess what? nag kwentuhan nanaman tayo about another chismis ulet, so niceee HAHAHAHHAHA, sana di pa tayo minumura ng mga tao naging biktima ng chismis hahahah.",
            "Then yon na nag tuloy tuloy na, nagulat pa nga ako non kasi kala ko nag jojoke ka lang na manlilibre ka hahahah ehh si go naman den ako kaya ayon ahahah. Ang awkward ko non, sorri na hahaha wala akong sense of focus hahaha not sure pero what if nasa mental spectrum pala ako kasama ng mga may ADHD? sana wala di ren ako sure ehh hahaha",
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
                <img
                  src="/images/3adf211f-8582-408b-8fec-bb4cfb4ea625.jpeg"
                  alt="Tulips"
                  className="mx-auto"
                />
              </p>
            </div>
          </motion.div>

          {[
            "Then sunod is yung nanood ng Demon Slayer (tagal ng next part hayst haha), sa Esplanade foodtrip hahaha, then sa museum tapos nag patakot sa conjuring XD, tapos yung mga hiking sa roblox at 99 nights na di natin maabot yung one thousandth day HAHAHAHAHAH, and most memorable sakin yung nag Boogie Bounce. For someone like me, never ko talaga nicecelebrate yung birthday ko and prefer ko na unahin na lang yung sa kapatid ko, so literally that was a first for me, and super nag enjoy talaga me nung time na yon.",
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
                <img
                  src="/images/4bcbec9e-9232-4522-bee4-d353579c85db.jpeg"
                  alt="Tulips"
                  className="mx-auto"
                />
              </p>
            </div>
          </motion.div>

          {[
            "Yon den yung time na may arts event dibaa? naiinggit ren ako non kasi may pa arts arts kayo na ginagawa non, so gumawa na lang den ako ng pansarili ko, hahaha ew loner mindset XD pero satisfied naman ako sa gawa ko non hahaha.",
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
                <img
                  src="/images/39431d02-5f9c-4081-812e-00f881872357.jpeg"
                  alt="Tulips"
                  className="mx-auto"
                />
              </p>
            </div>
          </motion.div>

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
            But really, I am really grateful for those memories, I never did
            expected na magiging ganon ako ka active for this year. I was
            supposedly to be a silent, loner-type, cold-hearted, person who does
            not even know how to express any feelings or emotions. Yeah, never
            den naman ako lumaki sa environment na may mga ganon, but it does
            not mean na ma stuck na lang ako sa ganon, I want to change, I guess
            hindi ko nabigo yung sarili ko as right now, I can see changes on my
            self, wala pa don sa fully expressive pero still trying me best.
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
                <img
                  src="/images/501c6afc-5186-4109-84c4-2e3694726412.jpeg"
                  alt="Tulips"
                  className="mx-auto"
                />
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
            From a dark, pessimist perspective, I can see now other colors
            blending with that color black, and actually it works for me. I now
            see a different perspective unlike my selfish self from the old
            days. It was totally new, and I do not want to reject it but rather
            embrace it.
          </motion.p>

          <motion.div
            className="py-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-center text-xl md:text-2xl font-light text-white leading-relaxed">
              Tatawanan mo ba ako pag sinabi kong gusto kita? HAHAHAHA
            </p>
          </motion.div>

          <motion.p
            className="leading-relaxed text-white/95 text-base"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            But really, it does not limit into romantic perspective, since it
            can be as a friend, as a coworker, and others. But either way, no
            need for you to reply ok? It was my attempt to express those words,
            and I'm not really asking for a response. reading this message of
            mine makes me cringe already, but my hands and brain do not
            collaborately work together na HAHAHHAHA
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
                <img
                  src="/images/07e78d05-c8df-4c88-9423-c28b1f89eb5e.jpeg"
                  alt="Tulips"
                  className="mx-auto"
                />
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
            It just that I had just grown attached to those memories I have
            experienced, to those little chats an so on. Feel ko pinagtatabuyan
            mo na ako kasi soafer OA naman netung ferson na to hahaha. With
            that, I want to say sorry to those sides of me, I am guilty beyond
            reason for those cases hahahah. Promise di ko na gagawen yon hahaha.
            Actually, kaya di rin me nag chchat lately kase ginawa ko na way to
            atone those is to wait for message na lang instead of initiating,
            kase feel ko nagiging uncomfy na yung mga tao sakin. Well hopefully
            di pa naman Malala hahah.
          </motion.p>

          <motion.p
            className="leading-relaxed text-white/95 text-base"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            If ever that at this point you are now getting uncomfy with it, feel
            free to not message me anymore, I will total understand and respect
            it.
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
            "But then again nga, supposedly this letter is for Christmas Greeting hahahah. But actually nag dadalawang isip pa rin ako kasi di ako sure whether nag papractice ba sa religion mo ng Christmas kasi, baka makapag cause ako ng insult or ano, which I hope hindi. By the way, if you are wondering, although Roman Catholic ako, I am more like in a Cultural Catholicism (not sure pero I think dito ako belong hahaha).",
            "I guess this letter is reaching its end. As the year ends, I would like to greet you a Merry Christmas and Advance Cheers for the New Year. This year has been a worthwhile year for me and sana sa iyo rin, and hoping for a more wonderful 2026 next year!",
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
            Chat lang u if mag set u ng gala or ano ahh, G lang si ako dejok
            hahahahah. Anyways, I guess this is a bye bye naaa! Adios!!!
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
              — Kinit Meh
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
