import { Link } from "react-router-dom";

function FinishScreen({
  titulo,
  mensagem,
  onReset
}) {

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
          bg-yellow-400
          text-black
          px-6
          py-3
          rounded-2xl
          font-bold
        "
      >
        Voltar ao início
      </Link>

    </div>

  );

}

export default FinishScreen;