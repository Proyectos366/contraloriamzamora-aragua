import { Link } from "react-router-dom";

export function EnlacesHeader({ indice, vista }) {
  return (
    <ul
      className={`${
        indice === 1
          ? "hidden sm:flex sm:flex-row sm:justify-between w-full"
          : "flex flex-col sm:hidden  space-y-5"
      } text-white`}
    >
      <li
        className={`${indice === 0 ? "border-b" : ""} ${
          vista === "inicio" ? "font-medium text-lg" : "text-md"
        }`}
      >
        <Link to={"/"}>Inicio</Link>
      </li>
      <li className={`${indice === 0 ? "border-b" : ""}  ${
          vista === "cgr" ? "font-medium text-lg" : "text-md"
        } `}>
        <Link to={"https://www.cgr.gob.ve/"} target="_blank">CGR</Link>
      </li>
      <li className={`${indice === 0 ? "border-b" : ""}  ${
          vista === "declaracion" ? "font-medium text-lg" : "text-md"
        } `}>
        <Link to={"https://www.cgr.gob.ve/contenido/047"} target="_blank">Declaración jurada</Link>
      </li>
      <li className={`${indice === 0 ? "border-b" : ""}  ${
          vista === "mision" ? "font-medium text-lg" : "text-md"
        } `}>
        <Link to={"/mision-vision"}>Misión y visión</Link>
      </li>
      <li className={`${indice === 0 ? "border-b" : ""}  ${
          vista === "contactos" ? "font-medium text-lg" : "text-md"
        } `}>
        <Link to={"/contactos"}>Contactos</Link>
      </li>
    </ul>
  );
}
