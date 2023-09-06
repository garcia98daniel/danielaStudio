import { v4 as uuidv4 } from "uuid";
import guitarra_01 from "../public/img/guitarra_01.jpg";
import guitarra_02 from "../public/img/guitarra_02.jpg";
import guitarra_03 from "../public/img/guitarra_03.jpg";


export const guitarras = [
  {
    id: uuidv4(),
    nombre: "Cobain",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum perspiciatis distinctio consequatur recusandae quaerat soluta nemo ullam earum animi debitis molestias, asperiores similique corporis quas!",
    precio: 359,
    imagen: guitarra_01,
  },
  {
    id: uuidv4(),
    nombre: "Dale",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum perspiciatis distinctio consequatur recusandae quaerat soluta nemo ullam earum animi debitis molestias, asperiores similique corporis quas!",
    precio: 349,
    imagen: guitarra_02,
  },
  {
    id: uuidv4(),
    nombre: "Borland",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum perspiciatis distinctio consequatur recusandae quaerat soluta nemo ullam earum animi debitis molestias, asperiores similique corporis quas!",
    precio: 259,
    imagen: guitarra_03,
  },
];
