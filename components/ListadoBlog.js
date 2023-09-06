import Entrada from "../components/Entrada";
import styles from "../styles/Blog.module.css";
import { entradas } from "../API/blogsData.js";

const ListadoBlog = ({ blogs }) => {
  return (
    <>
      <h2 className={styles.heading}>Nuestros Paquetes <br/> Te Harán Lucir Hermosa</h2>
      <div className={styles.blog}>
        {entradas.map((entrada, index) => {
          if (index >= blogs && blogs) {
            return;
          }
          return <Entrada key={entrada.id} entrada={entrada} />;
        })}
      </div>
    </>
  );
};

export default ListadoBlog;
