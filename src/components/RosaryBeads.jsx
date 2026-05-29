function RosaryBeads({
  contaAtual,
  maxContas
}) {

  return (

    <div className="flex gap-2 flex-wrap justify-center">

      {[...Array(maxContas)].map((_, index) => {

        const ativa =
          index < contaAtual;

        return (

          <div
            key={index}
            className={`
              w-4
              h-4
              rounded-full
              transition-all
              duration-300

              ${
                ativa
                  ? "bg-yellow-400 scale-110"
                  : "bg-white/20"
              }
            `}
          />

        );

      })}

    </div>

  );

}

export default RosaryBeads;