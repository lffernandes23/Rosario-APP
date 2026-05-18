function MysteryCard({ titulo, meditacao }) {

  return (
    <div className="bg-gray-800 p-6 rounded-2xl w-full max-w-md text-center shadow-lg">

      <h2 className="text-2xl font-bold mb-4">
        {titulo}
      </h2>

      <p className="text-gray-300">
        {meditacao}
      </p>

    </div>
  );
}

export default MysteryCard;