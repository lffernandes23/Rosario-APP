import { motion } from "framer-motion";

function MysteryCard({ titulo, meditacao }) {

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 0.3
      }}
      className="
        bg-gray-800
        rounded-2xl
        p-6
        max-w-xl
        shadow-lg
      "
    >

      <h2 className="text-2xl font-bold mb-4">
        {titulo}
      </h2>

      <p className="text-gray-300">
        {meditacao}
      </p>

    </motion.div>
  );
}

export default MysteryCard;