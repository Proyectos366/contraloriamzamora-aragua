import { useState } from "react";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Titulos } from "../components/Titulo";
import { Parrafos } from "../components/Parrafos";

export function MisionVision() {
  const [open, setOpen] = useState(false);

  const toggleMenuHamburguesa = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <>
      <Header
        vista={"mision"}
        open={open}
        setOpen={setOpen}
        toggleMenuHamburguesa={toggleMenuHamburguesa}
      />
      <Main>
        <div className="space-y-10 px-10">
          <section className="flex flex-col space-y-3">
            <Titulos nombre={"Misión"} indice={2} />
            <Parrafos
              texto={`Somos un ente público dedicado a ejercer el control externo,
              a través de la vigilancia, control, inspección y fiscalización
              sobre la administración y manejo de los ingresos, gastos,
              inversiones en obras públicas y bienes aportados por el municipio,
              mediante el cabal cumplimiento de las normas, procedimientos y
              bases legales vigentes en la promoción de la eficiencia, eficacia,
              economía y calidad de sus operaciones con fundamentos en índices
              de gestión de rendimiento y participación ciudadana`}
            />
          </section>

          <section className="flex flex-col space-y-3">
            <Titulos nombre={"Visión"} indice={2} />
            <Parrafos
              texto={`Consolidarnos como un organismo referente con funcionarios y
              funcionarias de  altos niveles de ética y profesionalismo en materia
              de control fiscal con una comprobada formación para el fortalecimiento
              de los procesos contemplados en la ley de la Contraloría General de
              la República y todo el Sistema Nacional de Control Fiscal, con fuerza
              y referencia moral en el Municipio Zamora del estado Aragua y de la
              República, con fundamento en la Constitución de la República Bolivariana
              de Venezuela con la firme intención de fortalecer el estado democrático,
              social, participativo, de derecho y Justicia social`}
            />
          </section>
        </div>
      </Main>

      <Footer open={open} />
    </>
  );
}
