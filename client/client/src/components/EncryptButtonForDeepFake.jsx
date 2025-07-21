import { useRef, useState } from "react";
import { FiLock } from "react-icons/fi";
import { motion } from "framer-motion";

const TARGET_TEXT = "DOWNLOAD DEEPFAKE";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?@#$%";

const EncryptButton = ({gender}) => {
  const handleDownload=()=>{
    const fileName= gender.toLowerCase() ==='male'
    ? "DeepFake_with_Male_Voice.mp4"
    : "DeepFake-with-Female-Voice.mp4";

    const link= document.createElement("a");
    link.href=`/${fileName}`;
    link.download=fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const intervalRef = useRef(null);
  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("").map((char, index) => {
        if (pos / CYCLES_PER_LETTER > index) return char;
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join("");
      setText(scrambled);
      pos++;
      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) stopScramble();
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setText(TARGET_TEXT);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.025 }}
      onClick={handleDownload}
      whileTap={{ scale: 0.975 }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="group relative overflow-hidden rounded-md border border-black bg-black px-6 py-3 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-[#40ffaa]"
    >
      <div className="relative z-10 flex items-center gap-2">
        <FiLock />
        <span>{text}</span>
      </div>
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};

export default EncryptButton;
