import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { misterios } from "../data/misterios";
import { getMysteriesByDay } from "../utils/getMysteriesByDay";
import { oracoes } from "../data/oracoes";

import MysteryCard from "../components/MysteryCard";
import Counter from "../components/Counter";
import PrayerButton from "../components/PrayerButton";
import RosaryProgress from "../components/RosaryProgress";
import OverallProgress from "../components/OverallProgress";

function Terco() {

const [faseInicial, setFaseInicial] = useState(() => {

  const progressoSalvo =
    localStorage.getItem("progressoTerco");

  if (progressoSalvo) {
    return JSON.parse(progressoSalvo).faseInicial;
  }

  return true;

});

const [contaAtual, setContaAtual] = useState(() => {

  const progressoSalvo =
    localStorage.getItem("progressoTerco");

  if (progressoSalvo) {
    return JSON.parse(progressoSalvo).contaAtual;
  }

  return 0;
});

const [misterioAtual, setMisterioAtual] = useState(() => {

  const progressoSalvo =
    localStorage.getItem("progressoTerco");

  if (progressoSalvo) {
    return JSON.parse(progressoSalvo).misterioAtual;
  }

  return 0;
});

const [tipoOracao, setTipoOracao] = useState(() => {

  const progressoSalvo =
    localStorage.getItem("progressoTerco");

  if (progressoSalvo) {
    return JSON.parse(progressoSalvo).tipoOracao;
  }

  return "credo";
});

const tipoMisterio = getMysteriesByDay();

const misteriosDoDia =
  misterios[tipoMisterio];

const [finalizado, setFinalizado] = useState(() => {

  const progressoSalvo =
    localStorage.getItem("progressoTerco");

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
    "progressoTerco",
    JSON.stringify(progresso)
  );

}, [contaAtual, misterioAtual, tipoOracao, faseInicial, finalizado]);


function resetarTerco() {

  setContaAtual(0);

  setMisterioAtual(0);

  setFaseInicial(true);

  setTipoOracao("credo");

  setFinalizado(false);

  localStorage.removeItem("progressoTerco");

}

function voltarConta() {

  if (
    tipoOracao === "aveMaria" &&
    contaAtual > 1
  ) {

    setContaAtual (contaAtual - 1);

  }

}

function avancarConta() {
  if (tipoOracao === "credo") {
    setTipoOracao("paiNosso");
    return;
  }

  if (tipoOracao === "paiNosso") {
    setTipoOracao("aveMaria");
    return;
  }

  if (tipoOracao === "aveMaria") {

    if (faseInicial
          ? contaAtual < 3
          : contaAtual < 10
    ) {
      setContaAtual(contaAtual + 1);

    } else {
      setTipoOracao("gloria");
    }

    return;
  }

  if (tipoOracao === "gloria") {

    setTipoOracao("oracaoDeFatima");

    return;
  }

  if (tipoOracao === "oracaoDeFatima") {

    if (faseInicial) {

      setFaseInicial(false);

      setContaAtual(1);

      setTipoOracao("paiNosso");

      return;

    }

    if (misterioAtual < 4) {

      setMisterioAtual(misterioAtual + 1);

      setContaAtual(1);

      setTipoOracao("paiNosso");

      return;

    }

    setTipoOracao("salveRainha");

    return;

  }

  if (tipoOracao === "salveRainha") {

    setTipoOracao("oracaoFinal");

    return;

  }

  if (tipoOracao === "oracaoFinal") {

    setFinalizado(true);

    localStorage.removeItem("progressoTerco");

    return;

  }

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

      <p className="
        text-xl
        md:text-2xl
        text-center
        text-gray-300
      ">
        Você concluiu o Terço.
      </p>

      <p className="text-yellow-400">
        Que Nossa Senhora interceda por você 🙏
      </p>

      <Link
        to="/"
        onClick={resetarTerco}
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
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-6 p-6">

      <h1 className="text-3xl md:text-4xl font-bold">
        📿 Rosário App
      </h1>

      <p className="text-yellow-400 font-semibold uppercase">
        Mistérios do dia
      </p>

      {!faseInicial && (

        <OverallProgress
          atual={misterioAtual + 1}
          total={5}
        />

      )}

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
          titulo={misteriosDoDia[misterioAtual].titulo}
          meditacao={misteriosDoDia[misterioAtual].meditacao}
        />

      )}

      {tipoOracao === "aveMaria" && (

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

      <div className="max-w-lg text-center leading-8">

        <h3 className="text-2xl font-semibold mb-4">
          {tipoOracao === "credo" && "Credo"}

          {tipoOracao === "paiNosso" && "Pai Nosso"}

          {tipoOracao === "aveMaria" && "Ave Maria"}

          {tipoOracao === "gloria" && "Glória ao Pai"}

          {tipoOracao === "oracaoDeFatima" && "Oração de Fátima"}

          {tipoOracao === "salveRainha" && "Salve Rainha"}

          {tipoOracao === "oracaoFinal" && "Oração Final"}

        </h3>

        <p className="text-gray-300 whitespace-pre-line">
          {tipoOracao === "credo" && oracoes.credo}

          {tipoOracao === "paiNosso" && oracoes.paiNosso}

          {tipoOracao === "aveMaria" && oracoes.aveMaria}

          {tipoOracao === "gloria" && oracoes.gloria}

          {tipoOracao === "oracaoDeFatima" && oracoes.oracaoDeFatima}

          {tipoOracao === "salveRainha" && oracoes.salveRainha}

          {tipoOracao === "oracaoFinal" && oracoes.oracaoFinal}

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
          tipoOracao !== "aveMaria" ||
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
            tipoOracao === "aveMaria" &&
            contaAtual > 1
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-gray-800 opacity-40 cursor-not-allowed"
          }
        `}
      >
        Voltar
      </button>

  <PrayerButton onAdvance={avancarConta} className="flex-1"/>

        <button
          onClick={resetarTerco}
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
          Resetar
        </button>

    </div>

    </div>
  );
}


export default Terco;