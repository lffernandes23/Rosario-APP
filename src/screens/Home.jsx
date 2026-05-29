import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Church, Cross, Sparkles, BookOpen } from "lucide-react";

function Home() {

  return (

    <motion.div
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
        min-h-screen
        bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.15),transparent_40%),linear-gradient(to_bottom,#111827,#000)]
        text-white
        flex
        flex-col
        items-center
        justify-center
        p-6
      "
    >

      <div
        className="
          w-full
          max-w-md
          bg-white/5
          backdrop-blur-sm
          border
          border-white/10
          rounded-3xl
          p-8
          flex
          flex-col
          items-center
          gap-6
          shadow-2xl
        "
      >

        <motion.h1
          animate={{
            y: [0, -5, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 3
          }}
          className="
            text-5xl
            md:text-6xl
            font-bold
            tracking-tight
            text-center
          "
        >
          📿 Rosário App
        </motion.h1>

        <p className="text-gray-300 text-center max-w-md">
          Um aplicativo para auxiliar sua oração diária.
        </p>

        <div className="flex flex-col gap-4 w-full">

          <Link
            to="/terco"
            className="
              bg-yellow-400
              shadow-lg
              shadow-yellow-500/30
              text-black
              py-4
              rounded-2xl
              text-center
              font-bold
              hover:scale-105
              active:scale-95
              transition
            "
          >
            <div className="flex items-center justify-center gap-2">
              <Church size={20} />
              Rezar Terço
            </div>
          </Link>

          <Link
            to="/rosario"
            className="
              bg-white/10
              backdrop-blur-md
              border
              border-white/10
              py-4
              rounded-2xl
              text-center
              font-bold
              hover:bg-white/20
              active:scale-95
              transition
            "
          >
            <div className="flex items-center justify-center gap-2">
              <Sparkles size={20} />
              Rezar Rosário
            </div>
          </Link>

          <Link
            to="/guia"
            className="
              bg-white/10
              backdrop-blur-md
              border
              border-white/10
              py-4
              rounded-2xl
              text-center
              font-bold
              hover:bg-white/20
              active:scale-95
              transition
            "
          >

            <div className="flex items-center justify-center gap-2">
              <BookOpen size={20} />
              Guia Completo
            </div>

          </Link>

        </div>

      </div>

    </motion.div>

  );

}

export default Home;