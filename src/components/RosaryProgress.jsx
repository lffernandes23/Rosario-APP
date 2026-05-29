function RosaryProgress({
  contaAtual,
  maxContas
}) {

  return (

    <div className="
        flex
        items-center
        justify-center
        gap-2
        flex-wrap
        max-w-sm
    ">

      {[...Array(maxContas)].map((_, index) => (

        <div
          key={index}
          className={`
            rounded-full
            transition-all
            duration-300

            ${
              index < contaAtual
                ? "bg-yellow-400 scale-110 shadow-md shadow-yellow-500/40"
                : "bg-gray-700"
            }
          `}
          style={{
            width: index === 9 ? 18 : 14,
            height: index === 9 ? 18 : 14
          }}
        />

      ))}

    </div>

  );

}

export default RosaryProgress;