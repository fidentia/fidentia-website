import Link from "next/link";
import styles from "./styles.module.scss";

export default function Posts(){
    return(
        <main className={styles.container}>
            <div className={styles.posts}>
                <div>
                    <p>Alta no desenvolvimento de pesquisas de remédios</p>
                </div>
                <div>
                    <button>Ver artigo</button>
                </div>
            </div>
        </main>
    )
}