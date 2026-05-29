import { motion, AnimatePresence } from "framer-motion";

function PrayerContent({ tipoOracao }) {

  return (

    <AnimatePresence mode="wait">

      <motion.div
        key={tipoOracao}
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        exit={{
          opacity: 0,
          y: -20
        }}
        transition={{
          duration: 0.3
        }}
        className="
          max-w-lg
          text-center
          leading-8
        "
      >

        {/* conteúdo */}

      </motion.div>

    </AnimatePresence>

  );

}

export default PrayerContent;