function OverallProgress({
  atual,
  total
}) {

    const porcentagem =
    ((atual - 1) / total) * 100;

  return (

    <div className="w-full max-w-2xl px-4">

      <div className="
        flex
        justify-between
        mb-2
        text-sm
        text-gray-300
      ">

        <span>
          Mistério {atual} de {total}
        </span>

        <span>
          {Math.floor(porcentagem)}%
        </span>

      </div>

      <div className="
        w-full
        h-4
        bg-gray-700
        rounded-full
        overflow-hidden
      ">

        <div
          className="
            h-full
            bg-yellow-400
            transition-all
            duration-500
          "
          style={{
            width: `${porcentagem}%`
          }}
        />

      </div>

    </div>

  );

}

export default OverallProgress;