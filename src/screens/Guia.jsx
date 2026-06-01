import { Link } from "react-router-dom";

import { oracoes } from "../data/oracoes";
import { misterios } from "../data/misterios";

import GuideSection from "../components/GuideSection";
import BackToTopButton from "../components/BackToTopButton";
import ReadingProgress from "../components/ReadingProgress";

import { getMysteriesByDay } from "../utils/getMysteriesByDay";

function Guia() {
  const tipoMisterio = getMysteriesByDay();

  const misteriosDoDia = misterios[tipoMisterio];

  const diaSemana = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
  });

  return (
    <>
  <ReadingProgress />

  <div className="
    min-h-screen
    bg-gradient-to-b
    from-gray-900
    to-black
    text-white
    p-6
  ">
      <div className="max-w-4xl mx-auto space-y-10">
        <Link
          to="/"
          className="
            inline-block
            bg-gray-800
            px-4
            py-2
            rounded-xl
            hover:bg-gray-700
            transition
          "
        >
          ← Voltar
        </Link>

        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            📿 Guia Completo do Terço
          </h1>

          <p className="text-gray-300">
            Aprenda como rezar o Santo Terço.
          </p>
        </div>

        <div
          className="
            sticky
            top-2 
            md:top-4
            z-50

            flex
            flex-wrap
            justify-center
            gap-3

            bg-gray-900/80
            backdrop-blur-md

            p-3
            rounded-2xl
            border
            border-white/10

            shadow-lg
          "
        >

  <a
    href="#credo"
    className="
      bg-yellow-400
      text-black
      px-4
      py-2
      rounded-xl
      font-semibold
      hover:scale-105
      transition
    "
  >
    ✝️ Credo
  </a>

  <a
    href="#misterios"
    className="
      bg-white/10
      border
      border-white/10
      px-4
      py-2
      rounded-xl
      hover:bg-white/20
      transition
    "
  >
    📿 Mistérios
  </a>

  <a
    href="#salve-rainha"
    className="
      bg-white/10
      border
      border-white/10
      px-4
      py-2
      rounded-xl
      hover:bg-white/20
      transition
    "
  >
    🙏 Salve Rainha
  </a>

  <a
    href="#oracao-final"
    className="
      bg-white/10
      border
      border-white/10
      px-4
      py-2
      rounded-xl
      hover:bg-white/20
      transition
    "
  >
    ✨ Oração Final
  </a>

</div>

        <GuideSection titulo="Sinal da Cruz" emoji="✝️">
          Em nome do Pai, do Filho e do Espírito Santo. Amém.
        </GuideSection>

        <GuideSection id="credo" titulo="Credo" emoji="✝️">
          {oracoes.credo}
        </GuideSection>

        <GuideSection titulo="Pai Nosso" emoji="🙏">
          {oracoes.paiNosso}
        </GuideSection>

        <GuideSection titulo="Ave Maria" emoji="🌹">
          {oracoes.aveMaria}
        </GuideSection>

        <GuideSection titulo="Glória ao Pai" emoji="✨">
          {oracoes.gloria}
        </GuideSection>

        <GuideSection titulo="Oração de Fátima" emoji="🔥">
          {oracoes.oracaoDeFatima}
        </GuideSection>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-yellow-400 text-center">
            📿 Estrutura do Terço
          </h2>

          <div className="
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-6
            space-y-2
            hover:border-yellow-400/30
            hover:bg-white/10
            transition
            text-center
          ">
            <p>✝️ Sinal da Cruz</p>
            <p>✝️ Credo</p>
            <p>🙏 1 Pai Nosso</p>
            <p>🌹 3 Ave-Marias</p>
            <p>✨ 1 Glória ao Pai</p>
            <p>📿 Anunciar o Mistério</p>
            <p>🙏 1 Pai Nosso</p>
            <p>🌹 10 Ave-Marias</p>
            <p>✨ 1 Glória ao Pai</p>
            <p>🔥 Oração de Fátima</p>
            <p>🔁 Repetir por 5 dezenas</p>
            <p>🙏 Salve Rainha</p>
            <p>✨ Oração Final</p>
          </div>
        </section>

        <section id="misterios" className="space-y-6">
          <div
            className="
              bg-yellow-400/10
              border
              border-yellow-400/20
              rounded-2xl
              p-5
              mt-4
            "
          >
            <h2 className="text-3xl font-bold text-yellow-400 mb-2 text-center">
              📿 Mistérios do Dia
            </h2>

            <p className="text-gray-300 text-lg text-center">
              Hoje é{" "}
              <span className="capitalize font-semibold">
                {diaSemana}
              </span>
            </p>

            <p className="mt-2 text-xl font-bold text-yellow-400 text-center">
              Contemplamos os {tipoMisterio}
            </p>

            <p className="mt-2 text-gray-400 text-center">
              Reserve alguns instantes para meditar cada mistério antes
              de iniciar sua oração.
            </p>
          </div>

          <div className="space-y-5">
            {misteriosDoDia.map((misterio, index) => (
              <div
                key={index}
                className="
                  bg-white/5
                  backdrop-blur-sm
                  border
                  border-white/10
                  rounded-2xl
                  p-6
                  hover:border-yellow-400/30
                  hover:bg-white/10
                  transition
                "
              >
                <h3 className="
                  text-xl
                  md:text-2xl
                  font-bold
                  text-yellow-400
                  mb-4
                ">
                  {misterio.titulo}
                </h3>

                <div className="
                  border-l-4
                  border-yellow-400/40
                  pl-4
                ">
                  <p className="
                    text-sm
                    uppercase
                    tracking-wider
                    text-gray-500
                    mb-2
                  ">
                    Contemplação
                  </p>

                  <p className="
                    text-gray-200
                    leading-8
                  ">
                    {misterio.meditacao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <GuideSection id="salve-rainha" titulo="Salve Rainha" emoji="🙏">
          {oracoes.salveRainha}
        </GuideSection>

        <GuideSection id="oracao-final" titulo="Oração Final" emoji="✨">
          {oracoes.oracaoFinal}
        </GuideSection>

        <section className="
          text-center
          py-8
          border-t
          border-white/10
        ">
          <h2 className="
            text-2xl
            font-bold
            text-yellow-400
            mb-4
          ">
            ✝️ Encerramento
          </h2>

          <p className="text-gray-300">
            Em nome do Pai, do Filho e do Espírito Santo. Amém.
          </p>
        </section>
      </div>

      <BackToTopButton />
    </div>
    </>
  );
}

export default Guia;