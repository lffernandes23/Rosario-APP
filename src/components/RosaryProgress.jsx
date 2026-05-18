function RosaryProgress({
  contaAtual,
  maxContas
}) {

  const contas = Array.from(
    { length: maxContas },
    (_, index) => index + 1
  );

  return (

    <div className="flex gap-3">

      {contas.map((conta) => (

        <div
          key={conta}
          className={`
            w-5
            h-5
            rounded-full
            transition
            ${
              conta <= contaAtual
                ? "bg-yellow-400"
                : "bg-gray-700"
            }
          `}
        />

      ))}

    </div>

  );
}

export default RosaryProgress;