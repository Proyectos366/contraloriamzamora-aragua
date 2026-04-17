import { Titulos } from "../Titulo";

export function NoticiasRecientes({ imagen, titulo }) {
  
  return (
    <div className="flex flex-col space-y-3">
      <div className="px-5 sm:px-0">
        <Titulos className={'text-xl text-center sm:text-justify sm:px-2'} indice={6} nombre={titulo} />
      </div>
      <div className="border-b border-[#999696] pb-1 rounded-b-md">
        <img className="w-full h-40 rounded-md" src={imagen} alt="Imagen de las noticias recientes" />
      </div>
    </div>
  )
}