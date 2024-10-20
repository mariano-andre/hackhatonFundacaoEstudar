import styles from "./Section2.module.css";
import imgSection2 from "../../img/img-sec2.png";
import img2Section2 from "../../img/img2-sec2.png";

function Section2 ({title, textContent, image}) {
    return (
        <section className={styles.section2}>
            <div className={styles.img}>
                <img className={styles.imgContent} src={image} alt="Imagem da Sessão" />
            </div>
            <div className={styles.text}>
                <h2>{title}</h2>
                <p>{textContent}</p>
            </div>
        </section>
    )
}  

export default Section2;
export {imgSection2, img2Section2};