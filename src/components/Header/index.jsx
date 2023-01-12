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
                <span><img className={styles.logo} src="/images/fidentia_logo.png" alt="logomarca fidentia" /></span> 
            </Link>
          <nav className={styles.nav}>
            <button className={styles.button_mobile} onClick={()=>handleToggle()}>
                <img src="/images/hamburguer.svg" alt="hamburguer logo" />
            </button>
            <ul className={activeMenu ? styles.active : styles.menu}>
                <Link href="/">
                    <li>Sobre</li>
                </Link>
                <Link href="/">
                    <li>Produtos</li>
                </Link>
                <Link href="/">
                    <li>Portfólio</li>
                </Link>
                <Link href="/">
                    <li>Contato</li>
                </Link>
            </ul>
          </nav>
        </header>
    )
}