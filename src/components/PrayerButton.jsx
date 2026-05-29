import { motion } from "framer-motion";

function PrayerButton({
  onAdvance,
  className = ""
}) {

  return (

    <button
      onClick={onAdvance}
      className={`
        ${className}
        bg-yellow-400
        text-black
        px-5
        py-3
        rounded-2xl
        font-bold
        hover:bg-yellow-300
        active:scale-95
        transition
      `}
    >
      Próxima oração
    </button>

  );

}

export default PrayerButton;