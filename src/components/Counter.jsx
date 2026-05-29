import { motion, AnimatePresence } from "framer-motion";

function Counter({
  contaAtual,
  maxContas
}) {

  return (

    <div className="flex flex-col items-center gap-3">

      <h3 className="text-2xl font-semibold">

        Ave-Marias:
        {" "}

        <AnimatePresence mode="wait">

          <motion.span
            key={contaAtual}
            initial={{
              scale: 0.7,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            exit={{
              scale: 1.3,
              opacity: 0
            }}
            transition={{
              duration: 0.2
            }}
            className="inline-block text-yellow-400"
          >

            {contaAtual}/{maxContas}

          </motion.span>

        </AnimatePresence>

      </h3>

    </div>

  );

}

export default Counter;