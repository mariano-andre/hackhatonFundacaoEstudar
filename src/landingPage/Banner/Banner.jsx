import styles from "./Banner.module.css";
import primaryBanner from "../../img/banner-1.png";
import secondaryBanner from "../../img/banner-2.jpeg";

function Banner ({title, img}) {
    return (
        <div className={styles.banner}>
            <img src={img} alt="Imagem do Banner" /> {/* Deixar o z-index menor do que o h1, e diminuir levemente a opacidade*/}
            <h1>{title}</h1>
        </div>
    )
}

export default Banner;
export { primaryBanner, secondaryBanner };