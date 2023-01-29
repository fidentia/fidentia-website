import styles from "./styles.module.scss";
import Slider from "react-slick";


export default function Carrousel(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

    return(

        <Slider className={styles.cards} {...settings}>
                <div className={styles.card}>
                    <h3>Centros de pesquisa clínica</h3>
                    <p>Além de blindar o relacionamento com seus patrocinadores, cobre automaticamente todos os ensaios clínicos realizados no seu centro</p>
                    <button>Saiba mais</button>
                </div>
                <div className={styles.card}>
                    <h3>Médicos e profissionais investigadores</h3>
                    <p>Protege por erros de seu time na execução dos em saios clínicos </p>
                    <button>Saiba mais</button>
                </div>
                <div className={styles.card}>
                    <h3>Centros de pesquisa clínica</h3>
                    <p>Protege por erros de seu time na execução dos em saios clínicos </p>
                    <button>Saiba mais</button>
                </div>
                <div className={styles.card}>
                    <h3>Médicos e profissionais investigadores</h3>
                    <p>Protege por erros de seu time na execução dos em saios clínicos </p>
                    <button>Saiba mais</button>
                </div>
                <div className={styles.card}>
                    <h3>Centros de pesquisa clínica</h3>
                    <p>Protege por erros de seu time na execução dos em saios clínicos </p>
                    <button>Saiba mais</button>
                </div>
        </Slider>

    )
}