import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Entrada.module.css";

const Entrada = ({ entrada }) => {
  const { titulo, resumen, contenido, imagen, published_at, id } = entrada;

  return (
    <article>
      <div className={styles.entrada_img_container}>
        <Image
          layout="fill"
          objectFit="cover"
          src={imagen}
          alt={`imagen blog ${titulo}`}
        />
      </div>
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{published_at}</p>
        <p className={styles.resumen}>{resumen}</p>
        <Link href={`/blog/${id}`}>
          <a className={styles.enlace}>Ver que incluye</a>
        </Link>
      </div>
    </article>
  );
};

export default Entrada;
