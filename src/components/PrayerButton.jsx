import { motion } from "framer-motion";

function PrayerButton({
  onAdvance,
  className
}) {

  return (

    <motion.button
      whileTap={{
        scale: 0.92
      }}
      whileHover={{
        scale: 1.03
      }}
      transition={{
        type: "spring",
        stiffness: 300
      }}
      onClick={onAdvance}
      className={`
        bg-yellow-400
        text-black
        px-5
        py-3
        rounded-2xl
        font-bold
        shadow-lg
        shadow-yellow-500/30
        ${className}
      `}
    >
      Avançar
    </motion.button>

  );

}

export default PrayerButton;