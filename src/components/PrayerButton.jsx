function PrayerButton({ onAdvance }) {

  return (
    <button
      onClick={onAdvance}
      className="
        bg-yellow-400
        text-black
        px-6
        py-3
        rounded-2xl
        font-bold
        hover:scale-105
        transition
      "
    >
      Próxima Oração
    </button>
  );
}

export default PrayerButton;