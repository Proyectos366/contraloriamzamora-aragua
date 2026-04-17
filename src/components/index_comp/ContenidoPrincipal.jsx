import { Parrafos } from "../Parrafos"
import { Titulos } from "../Titulo"


export function ContenidoPrincipal({ imagen1, imagen2, imagen3, open }) {

  
  return (
    <>
      <section className="flex flex-col sm:flex-row sm:gap-10">
        <div className="w-[100%] sm:w-[60%] space-y-4 flex flex-col border-b border-[#999696] pb-1 rounded-b-md">
          <Titulos
            className={`text-3xl text-justify`}
            indice={1}
            nombre={`Este Martes 12 de diciembre la Contralora del
            Municipio Zamora Lcda. Neyla Morales, sostuvo una reunion con
            la Directora del (CEET)`}
          />
          <Parrafos
            className={`${!open ? 'opacity-60' : ''}`}
            texto={`Lcda. Neyla Morales sostuvo una reunión con la Directora
            del Centro de Encuentros para la Educacion y de Trabajo (CEET), Lcda.
            Leoreky Camargo, para socializar sobre los expedientes de los funcionarios
            y funcionarias con opcion a ser acreditados y certificados por medio del
            Plan de Formacion.`}
          />

          <img className="rounded-md flex-1" src={imagen1} alt="Imagen principal" />
        </div>

        <div className="w-[100%] sm:w-[40%] flex flex-col space-y-4 flex-1">
          <div className="flex-col space-y-2 border-b border-[#999696] pb-1 rounded-b-md">
            <Titulos
              className={`text-xl text-center px-5 sm:px-0`}
              indice={2}
              nombre={`Dando cumpliemiento a las orientaciones del
            Contralor General de la Republica Dr. Jhosnel Peraza`}
            />

            <img className="rounded-md" src={imagen2} alt="Imagen secundaria" />
          </div>

          <div className="flex-col space-y-2 border-b border-[#999696] pb-1 rounded-b-md">
            <Titulos
              className={`text-xl text-center px-5 sm:px-0`}
              indice={2}
              nombre={`En el marco de la celebración de las Misa de Aguinaldo
            y Navidad, la Coral de la Contraloria del Municipio Zamora`}
            />

            <img className="rounded-md" src={imagen3} alt="Imagen secundaria" />
          </div>
        </div>
      </section>
    </>
  );
}