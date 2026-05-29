function PrayerDisplay({ titulo, texto }) {

  return (

    <div className="max-w-lg text-center leading-8">

      <h3 className="text-2xl font-semibold mb-4">
        {titulo}
      </h3>

      <p className="text-gray-300 whitespace-pre-line">
        {texto}
      </p>

    </div>

  );

}

export default PrayerDisplay;