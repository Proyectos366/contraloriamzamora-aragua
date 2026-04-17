

export function Parrafos({ texto, className }) {
  const clasePorDefecto = `text-justify indent-5`;
    const nuevaClase = className ? `${clasePorDefecto} ${className}` : clasePorDefecto;

  return (
    <p className={nuevaClase}>{texto}</p>
  )
}