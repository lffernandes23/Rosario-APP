import { motion, AnimatePresence } from "framer-motion";

import { getPrayerTitle } from "../utils/getPrayerTitle";
import { getPrayerText } from "../utils/getPrayerText";

function PrayerContent({ tipoOracao }) {

  return (

    <AnimatePresence mode="wait">

      <motion.div
        key={tipoOracao}
        initial={{
          opacity: 0,
          y: 15
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        exit={{
          opacity: 0,
          y: -15
        }}
        transition={{
          duration: 0.25
        }}
        className="
          max-w-lg
          text-center
          leading-8
        "
      >

        <h3 className="
          text-2xl
          font-semibold
          mb-4
        ">
          {getPrayerTitle(tipoOracao)}
        </h3>

        <p className="
          text-gray-300
          whitespace-pre-line
        ">
          {getPrayerText(tipoOracao)}
        </p>

      </motion.div>

    </AnimatePresence>

  );

}

export default PrayerContent;