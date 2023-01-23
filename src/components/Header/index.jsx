import Link from 'next/link';
import { useState } from 'react';
import styles from './header.module.scss';

export default function Header(){
    const [activeMenu, setActiveMenu] = useState(false);
    const handleToggle = () =>{
        setActiveMenu(!activeMenu);
    }

    return (
        <header className={styles.header}>
            <Link href="/">
                <span>
                    <img className={styles.logo} src="/images/fidentiaLogo.svg" alt="logomarca fidentia" />
                </span> 
            </Link>
          <nav className={styles.nav}>
            <button className={styles.button_mobile} onClick={()=>handleToggle()}>
                <img src="/images/hamburguerLogo.svg" alt="hamburguer logo" />
            </button>
            <ul className={activeMenu ? styles.active : styles.menu}>
                {activeMenu ? (
                    <figure>
                        <img className={styles.logo_menu} src="/images/fidentiaLogoMenu.svg" alt="logomarca fidentia" />
                    </figure>
                ) : null}
                <Link href="/">
                    <li>Home</li>
                </Link>
                <Link href="/">
                    <li>Soluções</li>
                </Link>
                <Link href="/">
                    <li>Fale conosco</li>
                </Link>
                <Link href="/">
                    <li>Cote agora</li>
                </Link>
                <Link href="/">
                    <li>A fidentia</li>
                </Link>
                {activeMenu ? (
                    <section className={styles.social_medias_logos}>
                        <figure>
                            <img src="/images/instagramLogo.svg" alt="instagram logo" />
                        </figure>
                        <figure>
                            <img src="/images/facebookLogo.svg" alt="facebook logo" />
                        </figure>
                        <figure>
                            <img src="/images/linkedinLogo.svg" alt="linkedin logo" />
                        </figure>
                        <figure>
                            <img src="/images/youtubeLogo.svg" alt="youtube logo" />
                        </figure>
                    </section>
                ) : null}
            </ul>
          </nav>
        </header>
    )
}