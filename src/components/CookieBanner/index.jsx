import Link from "next/link"
import { useEffect, useState } from "react"
import styles from "./styles.module.scss"

export default function CookieBanner(){
    const [showBanner, setShowBanner] = useState(false)
    useEffect(() => {
        const acceptedCookies = localStorage.getItem('acceptedCookies')
        if (!acceptedCookies) {
        setShowBanner(true)
        }
    }, [])

    const handleAcceptCookies = () => {
        localStorage.setItem('acceptedCookies', 'true')
        setShowBanner(false)
    }
    return(
        showBanner && (
            <div className={styles.cookie_banner}>
              <div className={styles.logo}>
                <img src="/images/favicon.jpeg" alt="logo fidentia" />
              </div>
              <div>
                <span>
                Este é um aviso sobre <Link href="/politics#politica-privacidade">cookies</Link> usados neste site para melhorar a navegação e fornecer informações aos proprietários. Ao continuar navegando, você concorda com o uso de cookies.
                </span>
              </div>
              <button onClick={handleAcceptCookies}>Aceitar cookies</button>
            </div>
          )
    )
}