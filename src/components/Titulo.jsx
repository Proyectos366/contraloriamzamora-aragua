
export function Titulos({ indice, nombre, className, color }) {

    const clasePorDefecto = `font-semibold`;
    const nuevaClase = className ? `${clasePorDefecto} ${className}` : clasePorDefecto;
    
    return (
        <>
        {indice === 1 && (
            <h1 className={nuevaClase}>{nombre}</h1>
        )}
        {indice === 2 && (
            <h2 className={nuevaClase}>{nombre}</h2>
        )}

        {indice === 6 && (
            <h6 className={nuevaClase}>{nombre}</h6>
        )}
        </>
    )
}