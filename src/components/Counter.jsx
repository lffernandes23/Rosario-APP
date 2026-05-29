import { motion } from "framer-motion";

function Counter({
  contaAtual,
  maxContas
}) {

  return (

    <div className="
      flex
      flex-col
      items-center
      gap-2
    ">

      <p className="text-gray-400">
        Conta atual
      </p>

      <motion.div
        key={contaAtual}
        initial={{
          scale: 0.7,
          opacity: 0
        }}
        animate={{
          scale: 1,
          opacity: 1
        }}
        transition={{
          duration: 0.2
        }}
        className="
          text-6xl
          font-bold
          text-yellow-400
        "
      >
        {contaAtual}/{maxContas}
      </motion.div>

    </div>

  );

}

export default Counter;