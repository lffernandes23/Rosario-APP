import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function BackToTopButton() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    function handleScroll() {

      setVisible(window.scrollY > 500);

    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  function voltarAoTopo() {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }

  if (!visible) {
    return null;
  }

  return (

    <button
      onClick={voltarAoTopo}
      className="
        fixed
        bottom-6
        right-6
        bg-yellow-400
        text-black
        p-4
        rounded-full
        shadow-lg
        hover:scale-110
        active:scale-95
        transition
        z-50
      "
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={22} />
    </button>

  );

}

export default BackToTopButton;