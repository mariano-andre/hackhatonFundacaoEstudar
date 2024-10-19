import styles from "./Section1.module.css";
import imgSection1 from "../../img/img-sec1.png";

function Section1 ({title, textContent, image}) {
    return (
        <section className={styles.section1}>
            <div className="text">
                <h2>{title}</h2>
                <p>{textContent}</p>
            </div>
                <img className={styles.imgContent} src={image} alt="Imagem da Sessão" />
        </section>
    )
}  

export default Section1;
export {imgSection1};
