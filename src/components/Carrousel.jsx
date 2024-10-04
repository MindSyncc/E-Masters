import { useState, useEffect } from "react";

const Carrousel = ({ slideArr, delay }) => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      goNext();
    }, delay);

    // Limpar o intervalo ao desmontar o componente
    return () => clearInterval(timer);
  }, [slide, delay]);

  const goNext = () => {
    setSlide(slide + 1);
    if (slide === slideArr.length - 1) {
      setSlide(0);
    }
  };

  return (
    <div className="slider padding-bottom-300">
      {slideArr.map((slideImage, i) => (
        <div key={i} className={i === slide ? "active carrousel" : "carrousel"}>
          <img src={slideImage} />
        </div>
      ))}
    </div>
  );
};

export default Carrousel;
