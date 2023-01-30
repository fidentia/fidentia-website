import styles from "./styles.module.scss";
import Carousel from 'react-elastic-carousel'
import * as S from "./styles";


export default function Carrousel(){
   const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
   ]

    return(
        <Carousel itemsToShow={2} itemPadding={[10, 50]}>
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