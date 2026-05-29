import { Link } from "react-router-dom";

import { oracoes } from "../data/oracoes";
import { misterios } from "../data/misterios";

import GuideSection from "../components/GuideSection";

import { getMysteriesByDay } from "../utils/getMysteriesByDay";

function Guia() {

  const tipoMisterio = getMysteriesByDay();

  const misteriosDoDia =
    misterios[tipoMisterio];

  const diaSemana =
    new Date().toLocaleDateString("pt-BR", {
      weekday: "long"
    });

  return (

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

          <h1 className="text-5xl font-bold">
            📿 Guia Completo do Terço
          </h1>

          <p className="text-gray-300">
            Aprenda como rezar o Santo Terço.
          </p>

        </div>

        {/* Sinal da Cruz */}

        <GuideSection
          titulo="Sinal da Cruz"
          emoji="✝️"
        >

          <p className="text-gray-300 whitespace-pre-line">
            Em nome do Pai, do Filho e do Espírito Santo. Amém.
          </p>

        </GuideSection>

        {/* Credo */}

        <GuideSection
          titulo="Credo"
          emoji="✝️"
        >

          <p className="text-gray-300 whitespace-pre-line">
            {oracoes.credo}
          </p>

        </GuideSection>

        {/* Pai Nosso */}

        <GuideSection
          titulo="Pai Nosso"
          emoji="🙏"
        >

          <p className="text-gray-300 whitespace-pre-line">
            {oracoes.paiNosso}
          </p>

        </GuideSection>

        {/* Ave Maria */}

        <GuideSection
          titulo="Ave Maria"
          emoji="🌹"
        >

          <p className="text-gray-300 whitespace-pre-line">
            {oracoes.aveMaria}
          </p>

        </GuideSection>

        {/* Gloria */}

        <GuideSection
          titulo="Glória ao Pai"
          emoji="✨"
        >

          <p className="text-gray-300 whitespace-pre-line">
            {oracoes.gloria}
          </p>

        </GuideSection>

        {/* Fatima */}

        <GuideSection
          titulo="Oração de Fátima"
          emoji="🔥"
        >

          <p className="text-gray-300 whitespace-pre-line">
            {oracoes.oracaoDeFatima}
          </p>

        </GuideSection>

        {/* Estrutura */}

        <section className="space-y-4">

          <h2 className="text-3xl font-bold text-yellow-400">
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

        {/* Mistérios do Dia */}

        <section className="space-y-6">

          <div className="text-center space-y-3">

            <h2 className="text-3xl font-bold text-yellow-400">
              📿 Mistérios do Dia
            </h2>

            <p className="text-gray-400 capitalize">
              {diaSemana}
            </p>

            <p className="text-gray-300">
              Hoje contemplamos os{" "}
              <span className="text-yellow-400 font-semibold">
                {tipoMisterio}
              </span>
            </p>

          </div>

          <div className="space-y-4">

            {misteriosDoDia.map((misterio, index) => (

              <div
                key={index}
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  p-6
                  backdrop-blur-sm
                  hover:border-yellow-400/30
                  hover:bg-white/10
                  transition
                "
              >

                <h3 className="text-2xl font-semibold mb-3">
                  {misterio.titulo}
                </h3>

                <p className="text-gray-300 leading-7">
                  👉 {misterio.meditacao}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* Salve Rainha */}

        <GuideSection
          titulo="Salve Rainha"
          emoji="🙏"
        >

          <p className="text-gray-300 whitespace-pre-line">
            {oracoes.salveRainha}
          </p>

        </GuideSection>

        {/* Oração Final */}

        <GuideSection
          titulo="Oração Final"
          emoji="✨"
        >

          <p className="text-gray-300 whitespace-pre-line">
            {oracoes.oracaoFinal}
          </p>

        </GuideSection>

      </div>

    </div>

  );

}

export default Guia;