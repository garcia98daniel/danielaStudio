import styles from "../styles/Curso.module.css";
import Image from "next/image";
import Link from "next/link";
import cursos_bg from "../public/img/damaynovias.png";

const Curso = () => {
  return (
    <section>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className={"heading"}>Más Acerca de Daniela Adarraga Studio</h2>
          <p className={styles.texto}>
          Daniela Adarraga Studio es el hogar del arte del maquillaje en Colombia. Nuestro compromiso es realzar la belleza de cada mujer, llevando la perfección a cada trazo. Contamos con un talentoso equipo de maquilladoras altamente capacitadas, ubicadas estratégicamente en las principales ciudades del país, listas para hacer realidad tus sueños de belleza. En Daniela Adarraga Studio, transformamos cada ocasión en una experiencia única y memorable. ¡Déjanos ser parte de tu historia de belleza!
          </p>
          <Link  href="/nosotros">
            <div className={styles.enlace} >
              ¿Quien es Daniela Adarraga?
            </div>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          section {
            padding: 10rem 0;
            margin-top: 10rem;
            background-image: linear-gradient(
                to right,
                rgb(0 0 0/ 0.65),
                rgb(0 0 0 /0.7)
              ),
              url(${cursos_bg.src});
            background-size: cover;
            background-position: center;
          }
        `}
      </style>
    </section>
  );
};

export default Curso;
