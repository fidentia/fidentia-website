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
                
                    <h3>Centros de pesquisa clínica</h3>
                    <p>Além de blindar o relacionamento com seus patrocinadores, cobre automaticamente todos os ensaios clínicos realizados no seu centro</p>
                    <button><Link href="/insurance">Saiba mais</Link></button>
                
                </S.Card>
                <S.Card>
                    <h3>Médicos e profissionais investigadores</h3>
                    <p>Protege por erros de seu time na execução dos em saios clínicos </p>
                    <button>Saiba mais</button>
                </S.Card>
                <S.Card>
                    <h3>Centros de pesquisa clínica</h3>
                    <p>Protege por erros de seu time na execução dos em saios clínicos </p>
                    <button>Saiba mais</button>
                </S.Card>
                <S.Card>
                    <h3>Médicos e profissionais investigadores</h3>
                    <p>Protege por erros de seu time na execução dos em saios clínicos </p>
                    <button>Saiba mais</button>
                </S.Card>
                <S.Card>
                    <h3>Centros de pesquisa clínica</h3>
                    <p>Protege por erros de seu time na execução dos em saios clínicos </p>
                    <button>Saiba mais</button>
                </S.Card>
        </Carousel>
    )
}