import styles from "./styles.module.scss";
import * as S from "./styles";
import Link from "next/link";
import { useEffect, useState } from "react";
import Carousel, { consts } from 'react-elastic-carousel';


export default function Carrousel(){
    const [itemsPerPage, setItemsPerPage] = useState(2);
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 820) {
            setItemsPerPage(1);
          }else{
            setItemsPerPage(2);
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        handleResize();
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      const breakPoints = [
        {width: 500, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 1200, itemsToShow: 2},
        {width: 1500, itemsToShow: 2},
        {width: 1800, itemsToShow: 2}
      ]

      const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? <img src="/images/arrowLeft.png" className={styles.arrowIcon} /> : <img src="/images/arrowRight.png" className={styles.arrowIcon} />
        return (
          <button onClick={onClick} disabled={isEdge} className={styles.button_pagination}>
            {pointer}
          </button>
        )
      }
    return(
        <Carousel 
          itemsToShow={itemsPerPage} 
          breakPoints={breakPoints} 
          renderArrow={myArrow}
        >
                <S.Card>

                    <h3>Investigador principal</h3>
                      <p>Blinde e amplie o relacionamento com seus patrocinadores, proteja-se por desvios de protocolo e muito mais para você que está na fronte do desenvolvimento científico</p>
                    <button>Saiba mais</button>
                </S.Card>
                <S.Card>
                    <h3>Centros de Pesquisa</h3>
                      <p>Cubra automaticamente todos os ensaios conduzidos em seu centro e amplie a oferta de serviços aos patrocinadores. Descubra tudo o que o seu seguro pode oferecer.</p>
                    <button>Saiba mais</button>
                </S.Card>
                <S.Card>
                    <h3>Patrocinador</h3>
                      <p>Diminua os custos com despesas médicas, amplie a previsibilidade de seus projetos e previna-se contra atrasos, suspenções ou cancelamento de seus projetos.</p>
                    <button>Saiba mais</button>
                </S.Card>
                <S.Card>
                    <h3>ORPC</h3>
                      <p>Cubra as lacunas nos MSAs/CTAs, projeta-se contra falhas profissionais e amplie a oferta de serviços aos patrocinadores. Veja o que mais seu seguro pode fazer</p>
                    <button>Saiba mais</button>
                </S.Card>
                <S.Card>
                    <h3>Intermediadores de Seguro</h3>
                      <p>Conquiste mais clientes, amplie a sua carteira e alavanque as suas vendas num mercado sólido e em expansão no Brasil</p>
                    <button>Saiba mais</button>
                </S.Card>
                <S.Card>
                    <h3>Cias Seguradoras & Resseguradoras</h3>
                      <p>Melhore os resultados de subscrição e amplie sua atuação no ramo de Responsabilidade Civil com subscrição técnica e especializada.</p>
                    <button>Saiba mais</button>
                </S.Card>
        </Carousel>
    )
}