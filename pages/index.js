import Layout from "../components/Layout";
import Listado from "../components/Listado";
import Curso from "../components/Curso";
import { guitarras } from "../API/guitarrasData.js";
import { entradas } from "../API/blogsData.js";
import ListadoBlog from "../components/ListadoBlog";
import Link from "next/link";
import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <Layout pagina="Inicio" blogs={entradas[0]}>
      <main className="contenedor">
      <section className="contenedor">
        <ListadoBlog blogs={3} />
      </section>
      </main>
      <Curso />
      <section className="contenedor">
        <h2 className={`heading ${styles.product_section_tittle}`}>Productos Recomendados</h2>
        <div className={styles.all_products_txt}>
          <Link href="/tienda">Ver todo el catálogo</Link>
        </div>
        <Listado guitarras={guitarras} />
      </section>

    </Layout>
  );
}
