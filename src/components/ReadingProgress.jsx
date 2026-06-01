import { useEffect, useState } from "react";

function ReadingProgress() {

  const [progress, setProgress] = useState(0);

  useEffect(() => {

    function handleScroll() {

      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const current =
        window.scrollY;

      setProgress(
        (current / total) * 100
      );

    }

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (

    <div
      className="
        fixed
        top-0
        left-0
        h-1
        bg-yellow-400
        z-50
      "
      style={{
        width: `${progress}%`
      }}
    />

  );

}

export default ReadingProgress;