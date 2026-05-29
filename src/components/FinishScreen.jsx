import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function FinishScreen({
  titulo,
  mensagem,
  onReset
}) {

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
          duration: 0.5
        }}
        className="
      min-h-screen
      bg-gradient-to-b from-gray-900 to-black
      text-white
      flex
      flex-col
      items-center
      justify-center
      gap-6
      p-6
    ">

      <h1 className="text-5xl font-bold">
        🙏 Parabéns
      </h1>

      <p className="
        text-xl
        md:text-2xl
        text-center
        text-gray-300
      ">
        {mensagem}
      </p>

      <p className="text-yellow-400">
        Que Nossa Senhora interceda por você 🙏
      </p>

      <Link
        to="/"
        onClick={onReset}
        className="
          bg-yellow-400 shadow-lg shadow-yellow-500/20
          text-black
          px-6
          py-3
          rounded-2xl
          font-bold
        "
      >
        Voltar ao início
      </Link>

    </motion.div>

  );

}

export default FinishScreen;