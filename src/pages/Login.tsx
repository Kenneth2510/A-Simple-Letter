import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type LoginPageProps = {
  onLogin: () => void;
};

export const LoginPage = ({ onLogin }: LoginPageProps) => {
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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <motion.div
      className="min-h-screen w-full bg-black flex items-center justify-center px-6 relative overflow-hidden space-y-10"
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
          transition={{ delay: 0.5, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-white/10 to-white/5 p-0.5">
            <div className="w-full h-full rounded-full bg-black p-1">
              <div className="w-full h-full rounded-full overflow-hidden border border-white/20">
                <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center text-white/40 text-xs">
                  avatar
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
          className="text-white/50 text-sm py-5 tracking-wide text-center font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          You already know what to do.
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
