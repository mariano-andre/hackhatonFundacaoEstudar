import logoHeader from "../../img/header-icon.png";
import styles from "./Header.module.css";
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <img src={logoHeader} alt="Logo Fome Zero"/>
                <Link to="/"><h1>Zero Fome</h1></Link>
            </div>
            <div className={styles.headerRight}>
                <ul>
                    <li>
                        <Link to="/Tabelas">Tabelas</Link>
                    </li>
                    <li>
                        <Link>Sustentabilidade</Link>
                    </li>
                    <li>
                        <Link>Receitas</Link>
                    </li>
                    <li>
                        <Link>Utilidades</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}