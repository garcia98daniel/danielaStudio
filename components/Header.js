import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

const Header = ({ blogs }) => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <Link href="/">
            <a  className={styles.logo_container}>
              <Image
                src="/img/logo.jpeg"
                layout="fill"
                objectFit="contain"
                alt="Page logo"
              />
            </a>
          </Link>
          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
            <Link href="/carrito">
              <a href="">
                <Image
                  layout="fixed"
                  width={30}
                  height={25}
                  src={"/img/carrito.png"}
                  alt="Imagen carrito"
                />
              </a>
            </Link>
          </nav>
        </div>
        {blogs && (
          <div className={styles.modelo}>
            <h2>{blogs.titulo}</h2>
            <p>{blogs.resumen}</p>
            <h1>Desde</h1> 
            <p className={styles.precio}>{blogs.precio} COP</p>
            <Link href={`/blog/${blogs.id}`}>
              <a className={styles.enlace}>Ver que incluye</a>
            </Link>
          </div>
        )}
      </div>
      {router.pathname === "/" && (
        <div className={styles.guitarra}>
          <Image
            src="/img/novia4-rb.png"
            alt="Header guitarra"
            layout="fixed"
            width={447}
            height={559}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
