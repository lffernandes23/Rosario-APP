import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { oracoes } from "../data/oracoes";
import { buildRosario } from "../utils/buildRosario";
import { advanceRosario } from "../utils/advanceRosario";

import MysteryCard from "../components/MysteryCard";
import Counter from "../components/Counter";
import PrayerButton from "../components/PrayerButton";
import RosaryProgress from "../components/RosaryProgress";
import OverallProgress from "../components/OverallProgress";
import { TIPOS_ORACAO } from "../constants/tiposOracao";

function Rosario() {

  const rosarioCompleto = buildRosario();

  const [faseInicial, setFaseInicial] = useState(() => {

    const progressoSalvo =
      localStorage.getItem("progressoRosario");

    if (progressoSalvo) {
      return JSON.parse(progressoSalvo).faseInicial;
    }

    return true;

  });

  const [contaAtual, setContaAtual] = useState(() => {

    const progressoSalvo =
      localStorage.getItem("progressoRosario");

    if (progressoSalvo) {
      return JSON.parse(progressoSalvo).contaAtual;
    }

    return 0;

  });

  const [misterioAtual, setMisterioAtual] = useState(() => {

    const progressoSalvo =
      localStorage.getItem("progressoRosario");

    if (progressoSalvo) {
      return JSON.parse(progressoSalvo).misterioAtual;
    }

    return 0;

  });

  const [tipoOracao, setTipoOracao] = useState(() => {

    const progressoSalvo =
      localStorage.getItem("progressoRosario");

    if (progressoSalvo) {
      return JSON.parse(progressoSalvo).tipoOracao;
    }

    return TIPOS_ORACAO.CREDO;

  });

  const [finalizado, setFinalizado] = useState(() => {

    const progressoSalvo =
      localStorage.getItem("progressoRosario");

    if (progressoSalvo) {
      return JSON.parse(progressoSalvo).finalizado;
    }

    return false;

  });

  useEffect(() => {

    const progresso = {
      contaAtual,
      misterioAtual,
      tipoOracao,
      faseInicial,
      finalizado
    };

    localStorage.setItem(
      "progressoRosario",
      JSON.stringify(progresso)
    );

  }, [
    contaAtual,
    misterioAtual,
    tipoOracao,
    faseInicial,
    finalizado
  ]);

  function resetarRosario() {

    setContaAtual(0);

    setMisterioAtual(0);

    setFaseInicial(true);

    setTipoOracao(TIPOS_ORACAO.CREDO);

    setFinalizado(false);

    localStorage.removeItem("progressoRosario");

  }

  function voltarConta() {

    if (
      tipoOracao === TIPOS_ORACAO.AVE_MARIA && 
      contaAtual > 1
    ) {

      setContaAtual(contaAtual - 1);

    }

  }

  function avancarConta() {

    advanceRosario({
      tipoOracao,
      faseInicial,
      contaAtual,
      misterioAtual,
      setTipoOracao,
      setContaAtual,
      setMisterioAtual,
      setFaseInicial,
      setFinalizado
    });

  }

  if (finalizado) {

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

        <p className="text-2xl text-center">
          Você concluiu o Rosário.
        </p>

        <p className="text-yellow-400">
          Que Nossa Senhora interceda por você 🙏
        </p>

        <Link
          to="/"
          onClick={resetarRosario}
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

      <h1 className="text-3xl md:text-4xl font-bold">
        📿 Rosário Completo
      </h1>

      <div className="w-full max-w-4xl flex justify-start">

        <Link
          to="/"
          className="
            bg-gray-800
            px-4
            py-2
            rounded-xl
            hover:bg-gray-700
            transition
          "
        >
          ← Início
        </Link>

      </div>

       {!faseInicial && (

        <MysteryCard
          titulo={rosarioCompleto[misterioAtual].titulo}
          meditacao={rosarioCompleto[misterioAtual].meditacao}
        />

      )}

      {!faseInicial && (

        <OverallProgress
          atual={misterioAtual + 1}
          total={20}
        />

      )}

      {tipoOracao === TIPOS_ORACAO.AVE_MARIA && (

        <>

          <Counter
            contaAtual={contaAtual}
            maxContas={faseInicial ? 3 : 10}
          />

          <RosaryProgress
            contaAtual={contaAtual}
            maxContas={faseInicial ? 3 : 10}
          />

        </>

      )}

      <div className="
        max-w-lg
        text-center
        leading-8
      ">

        <h3 className="
          text-2xl
          font-semibold
          mb-4
        ">

          {tipoOracao === TIPOS_ORACAO.CREDO && "Credo"}

          {tipoOracao === TIPOS_ORACAO.PAI_NOSSO &&  "Pai Nosso"}

          {tipoOracao === TIPOS_ORACAO.AVE_MARIA && "Ave Maria"}

          {tipoOracao === TIPOS_ORACAO.GLORIA && "Glória ao Pai"}

          {tipoOracao === TIPOS_ORACAO.FATIMA && "Oração de Fátima"}

          {tipoOracao === TIPOS_ORACAO.SALVE_RAINHA && "Salve Rainha"}

          {tipoOracao === TIPOS_ORACAO.ORACAO_FINAL && "Oração Final"}

        </h3>

        <p className="
          text-gray-300
          whitespace-pre-line
        ">

          {tipoOracao === TIPOS_ORACAO.CREDO && oracoes.credo}

          {tipoOracao === TIPOS_ORACAO.PAI_NOSSO && oracoes.paiNosso}

          {tipoOracao === TIPOS_ORACAO.AVE_MARIA && oracoes.aveMaria}

          {tipoOracao === TIPOS_ORACAO.GLORIA && oracoes.gloria}

          {tipoOracao === TIPOS_ORACAO.FATIMA && oracoes.oracaoDeFatima}

            {tipoOracao === TIPOS_ORACAO.SALVE_RAINHA && oracoes.salveRainha}

            {tipoOracao === TIPOS_ORACAO.ORACAO_FINAL && oracoes.oracaoFinal}

        </p>

      </div>

      <div className="
          flex
          flex-col
          sm:flex-row
          gap-4
          w-full
          max-w-md
        ">

          <button
            onClick={voltarConta}
            disabled={
              tipoOracao !== TIPOS_ORACAO.AVE_MARIA ||
              contaAtual <= 1
            }
            className={`
              flex-1
              px-5
              py-3
              rounded-2xl
              font-bold
              transition

              ${
                tipoOracao === TIPOS_ORACAO.AVE_MARIA &&
                contaAtual > 1
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-800 opacity-40 cursor-not-allowed"
              }
            `}
          >
            Voltar
          </button>

        <PrayerButton
          onAdvance={avancarConta}
          className="flex-1"
        />

        <button
          onClick={resetarRosario}
          className="
            flex-1
            bg-red-500
            px-5
            py-3
            rounded-2xl
            font-bold
            hover:bg-red-400
            transition
          "
        >
          Recomeçar
        </button>

      </div>

    </div>

  );
}

export default Rosario;