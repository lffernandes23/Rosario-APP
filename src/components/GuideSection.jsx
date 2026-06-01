function GuideSection({
  id,
  titulo,
  emoji,
  children
}) {
  return (
    <section
      id={id}
      className="
        space-y-3
        scroll-mt-32
      "
    >
      <h2
        className="
          text-3xl
          font-bold
          text-yellow-400
          text-center
        "
      >
        {emoji} {titulo}
      </h2>

      <div
        className="
          bg-white/5
          border
          border-white/10
          rounded-2xl
          p-6

          text-gray-200
          leading-8
          whitespace-pre-line
          text-center
        "
      >
        <div className="max-w-2xl mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
}

export default GuideSection;