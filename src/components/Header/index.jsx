import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './header.module.scss';

export default function Header(){
    const [activeMenu, setActiveMenu] = useState(false);
    const handleToggle = () =>{
        setActiveMenu(!activeMenu);
    }
    const handleClose = () =>{
        setActiveMenu(false);
    }

    return (
        <header className={styles.header}>
            <Link href="/">
                <figure className={styles.logo}>
                    <Image 
                        src={`/images/fidentiaLogo.svg`} 
                        width={150}
                        height={100}
                        alt="background image"
                    />
                </figure>
            </Link>
          <nav className={styles.nav}>
            <button className={styles.button_mobile} onClick={()=>handleToggle()}>
                <img src="/images/hamburguerLogo.svg" alt="hamburguer logo" />
            </button>
            <ul className={activeMenu ? styles.active : styles.menu}>
                {activeMenu ? (
                    <div className={styles.icons_menu}>
                        <figure>
                            <img className={styles.logo_menu} src="/images/fidentiaLogoMenu.svg" alt="logomarca fidentia" />
                        </figure>
                        <span onClick={()=>handleClose()}>
                            <img src="/images/closeIcon.svg" alt="ícone para fechar menu" title='Fechar menu' />
                        </span>
                    </div>
                ) : null}
                <Link href="/#home">
                    <li>início</li>
                </Link>
                <Link href="/#solucoes">
                    <li>soluções</li>
                </Link>
                <Link href="/">
                    <li>fale conosco</li>
                </Link>
                <Link href="/">
                    <li>cote agora</li>
                </Link>
                <Link href="/">
                    <li>a fidentia</li>
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
                    </section>
                ) : null}
            </ul>
          </nav>
        </header>
    )
}