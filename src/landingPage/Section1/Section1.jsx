import styles from "./Section1.module.css";
import imgSection1 from "../../img/img-sec1.png";
import img2Section1 from "../../img/img2-sec1.png"
import img3Section1 from "../../img/img3-sec1.png"

function Section1 ({title, textContent, image}) {
    return (
        <section className={styles.section1}>
            <div className={styles.text}>
                <h2>{title}</h2>
                <p>{textContent}</p>
            </div>
            {image && (
                <div className={styles.img}>
                    <img className={styles.imgContent} src={image} alt="Imagem da Sessão" />
                </div>
            )}
        </section>
    )
}  

export default Section1;
export {imgSection1, img2Section1, img3Section1};
