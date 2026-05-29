import { Link } from "react-router-dom";

import { buildRosario } from "../utils/buildRosario";
import { advanceRosario } from "../utils/advanceRosario";
import { vibrateByPrayer } from "../utils/vibrate";
import useLocalStorage from "../hooks/useLocalStorage";

import PrayerContent from "../components/PrayerContent";
import MysteryCard from "../components/MysteryCard";
import Counter from "../components/Counter";
import PrayerButton from "../components/PrayerButton";
import RosaryProgress from "../components/RosaryProgress";
import OverallProgress from "../components/OverallProgress";
import FinishScreen from "../components/FinishScreen";

import { TIPOS_ORACAO } from "../constants/tiposOracao";
import { ESTADO_INICIAL } from "../constants/estadoInicial";

function Rosario() {

  const rosarioCompleto = buildRosario();

  const [estado, setEstado] = useLocalStorage(
    "progressoRosario",
    ESTADO_INICIAL
  );

  const {
    contaAtual,
    misterioAtual,
    tipoOracao,
    faseInicial,
    finalizado
  } = estado;

  function resetarRosario() {

    setEstado(ESTADO_INICIAL);

    localStorage.removeItem("progressoRosario");

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

    if ("vibrate" in navigator) {

      switch (tipoOracao) {

        case TIPOS_ORACAO.AVE_MARIA:
          navigator.vibrate(30);
          break;

        case TIPOS_ORACAO.PAI_NOSSO:
          navigator.vibrate([40, 20, 40]);
          break;

        case TIPOS_ORACAO.GLORIA:
          navigator.vibrate([20, 20, 20]);
          break;

        default:
          navigator.vibrate(50);

      }

    }

    setEstado(
      advanceRosario(estado)
    );

  }

  if (finalizado) {

    return (
      <FinishScreen
        mensagem="Você concluiu o Rosário."
        onReset={resetarRosario}
      />
    );

  }

  return (

    <div className="
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
            active:scale-95
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

export default Rosario;