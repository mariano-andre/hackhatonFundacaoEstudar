import logoHeader from "../../img/header-icon.png";
import styles from "./Header.module.css";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <img src={logoHeader} alt="Logo Fome Zero"/>
                <h1>Zero Fome</h1>
            </div>
            <div className={styles.headerRight}>
                <ul>
                    <li>Sustentabilidade</li>
                    <li>Receitas</li>
                    <li>Utilidades</li>
                </ul>
            </div>
        </header>
    )
}