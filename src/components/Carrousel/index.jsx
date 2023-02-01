import styles from "./styles.module.scss";
import Carousel from 'react-elastic-carousel'
import * as S from "./styles";
import { useEffect, useState } from "react";


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

      const handleChange = (index) => {
        // setCurrentIndex(index);
        console.log(`Moved to card with index: ${index}`);
      };

    return(
        <Carousel 
          itemsToShow={itemsPerPage} 
          breakPoints={breakPoints} 
          onChange={(currentItem, pageIndex) =>
            console.log(currentItem)
          }
          showArrows={false}
        >
                <S.Card>
                
                    <h3>Centros de pesquisa clínica</h3>
                    <p>Além de blindar o relacionamento com seus patrocinadores, cobre automaticamente todos os ensaios clínicos realizados no seu centro</p>
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