import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="
      min-h-screen
      bg-gray-900
      text-white
      flex
      flex-col
      items-center
      justify-center
      gap-6
      p-6
    ">

      <h1 className="text-5xl font-bold">
        📿 Rosário App
      </h1>

      <p className="text-gray-300 text-center max-w-md">
        Um aplicativo para auxiliar sua oração diária.
      </p>

      <div className="flex flex-col gap-4 w-full max-w-xs">

        <Link
          to="/terco"
          className="
            bg-yellow-400
            text-black
            py-4
            rounded-2xl
            text-center
            font-bold
            hover:scale-105
            transition
          "
        >
          Rezar Terço
        </Link>

        <Link
          to="/rosario"
          className="
            bg-gray-800
            py-4
            rounded-2xl
            text-center
            font-bold
            hover:bg-gray-700
            transition
          "
        >
          Rezar Rosário
        </Link>

      </div>

    </div>

  );
}

export default Home;