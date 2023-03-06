import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";

export default function CarrouselText({arrayContent}) {
  const carouselRef = useRef(null);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 820) {
        setItemsPerPage(1);
      }else {
        setItemsPerPage(2);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 3 },
    { width: 1800, itemsToShow: 3 },
  ];

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <img
          src="/images/arrowLeft.png"
          className={styles.arrowIcon}
          alt="Ícone de seta para esquerda"
        />
      ) : (
        <img
          src="/images/arrowRight.png"
          className={styles.arrowIcon}
          alt="Ícone de seta para direita"
        />
      );
    return (
      <button
        onClick={onClick}
        disabled={isEdge}
      >
        {pointer}
      </button>
    );
  };
  return (
    <Carousel
      ref={carouselRef}
      itemsToShow={itemsPerPage}
      breakPoints={breakPoints}
      showArrows={false}
      className={styles.container}
      enableAutoPlay
      autoPlaySpeed={5000}
      onNextEnd={({ index }) => {
        const totalPages = Math.ceil(arrayContent.length / itemsPerPage);
        let resetTimeout;

        clearTimeout(resetTimeout);
        resetTimeout = setTimeout(() => {
          if (index === totalPages) {
            carouselRef.current?.goTo(0);
          } else carouselRef.current?.goTo(index + 1);
        }, 5000);
      }}
    >
      {arrayContent.map((content) => (
        
          <div className={styles.deposition} key={content.title}>
            <div className={styles.info}>
            <article className={styles.text}>
              <h3>{content.title}</h3>
              <p>{content.description}</p>
            </article>
            </div>
          </div>
      ))}
    </Carousel>
  );
}
