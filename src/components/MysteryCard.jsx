import { motion } from "framer-motion";

function MysteryCard({ titulo, meditacao }) {

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 15
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.3
      }}
      className="
        w-full
        max-w-2xl
        bg-white/5
        backdrop-blur-sm
        border
        border-white/10
        rounded-3xl
        p-8
        shadow-xl
      "
    >

      <h2 className="
        text-2xl
        md:text-3xl
        font-bold
        text-yellow-400
        text-center
        mb-6
      ">
        {titulo}
      </h2>

      <div className="
        border-l-4
        border-yellow-400/40
        pl-5
      ">

        <p className="
          text-sm
          uppercase
          tracking-wider
          text-gray-500
          mb-2
        ">
          Contemplação
        </p>

        <p className="
          text-lg
          leading-8
          text-gray-200
        ">
          {meditacao}
        </p>

      </div>

    </motion.div>

  );

}

export default MysteryCard;