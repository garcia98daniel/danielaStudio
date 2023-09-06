import Layout from "../components/Layout";
import Listado from "../components/Listado";
import Curso from "../components/Curso";
import { guitarras } from "../API/guitarrasData.js";
import { entradas } from "../API/blogsData.js";
import ListadoBlog from "../components/ListadoBlog";

export default function Home() {
  return (
    <Layout pagina="Inicio" blogs={entradas[0]}>
      <main className="contenedor">
      <section className="contenedor">
        <ListadoBlog blogs={3} />
      </section>
      </main>
      <Curso />
        <h1 className="heading">Nuestra colección</h1>
        <Listado guitarras={guitarras} />
    </Layout>
  );
}
