function GuideSection({
  titulo,
  emoji,
  children
}) {

  return (

    <section
      className="
        bg-white/5
        backdrop-blur-sm
        border
        border-white/10
        rounded-3xl
        p-6
        md:p-8
        shadow-xl
        space-y-4
      "
    >

      <h2 className="
        text-2xl
        md:text-3xl
        font-bold
        text-yellow-400
      ">
        {emoji} {titulo}
      </h2>

      <div className="
        text-gray-300
        whitespace-pre-line
        leading-8
      ">
        {children}
      </div>

    </section>

  );

}

export default GuideSection;