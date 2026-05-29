import { Link } from "react-router-dom";

import { misterios } from "../data/misterios";

import { TIPOS_ORACAO } from "../constants/tiposOracao";
import { ESTADO_INICIAL } from "../constants/estadoInicial";

import useLocalStorage from "../hooks/useLocalStorage";

import { advanceTerco } from "../utils/advanceTerco";
import { getMysteriesByDay } from "../utils/getMysteriesByDay";
import { vibrateByPrayer } from "../utils/vibrate";

import PrayerContent from "../components/PrayerContent";
import MysteryCard from "../components/MysteryCard";
import Counter from "../components/Counter";
import PrayerButton from "../components/PrayerButton";
import RosaryProgress from "../components/RosaryProgress";
import OverallProgress from "../components/OverallProgress";
import FinishScreen from "../components/FinishScreen";

function Terco() {

  const [estado, setEstado] = useLocalStorage(
    "progressoTerco",
    ESTADO_INICIAL
  );

  const {
    contaAtual,
    misterioAtual,
    tipoOracao,
    faseInicial,
    finalizado
  } = estado;

  const tipoMisterio = getMysteriesByDay();

  const misteriosDoDia =
    misterios[tipoMisterio];

  function resetarTerco() {

    setEstado(ESTADO_INICIAL);

    localStorage.removeItem("progressoTerco");

  }

  function voltarConta() {

    if (
      tipoOracao === TIPOS_ORACAO.AVE_MARIA &&
      contaAtual > 1
    ) {

      setEstado({
        ...estado,
        contaAtual: contaAtual - 1
      });

    }

  }

  function avancarConta() {

    vibrateByPrayer(tipoOracao);

    setEstado(
      advanceTerco(estado)
    );

  }

  if (finalizado) {

    return (
      <FinishScreen
        mensagem="Você concluiu o Terço."
        onReset={resetarTerco}
      />
    );

  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center gap-6 p-6">

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
            active:scale-95
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

      <PrayerContent tipoOracao={tipoOracao} />

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
          active:scale-95
          transition

          ${tipoOracao === TIPOS_ORACAO.AVE_MARIA &&
              contaAtual > 1
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-gray-800 opacity-40 cursor-not-allowed"
            }
        `}
        >
          Voltar
        </button>

        <PrayerButton onAdvance={avancarConta} className="flex-1" />

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
              active:scale-95
              transition
            "
        >
          Recomeçar
        </button>

      </div>

    </div>
  );
}


export default Terco;