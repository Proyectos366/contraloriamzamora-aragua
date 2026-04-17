import { useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Titulos } from "../components/Titulo";
import { BannerIndex } from "../components/index_comp/Banner";
import { ContenidoPrincipal } from "../components/index_comp/ContenidoPrincipal";
import ImgPrincipal from "../../public/img/principal.jpg";
import ImgSecundaria from "../../public/img/secundaria.jpg";
import ImgTerciaria from "../../public/img/terciaria.jpg";
import { NoticiasRecientes } from "../components/index_comp/NoticiasRecientes";

export function Index() {
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
        vista={"inicio"}
        open={open}
        setOpen={setOpen}
        toggleMenuHamburguesa={toggleMenuHamburguesa}
      />
      <Main>
        <BannerIndex />
        <ContenidoPrincipal
          open={open}
          imagen1={ImgPrincipal}
          imagen2={ImgSecundaria}
          imagen3={ImgTerciaria}
        />
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-between sm:space-x-4">
          <div>
            <NoticiasRecientes
              titulo={
                "La Contraloria del Municipio Zamora junto a todo el personal felicita a la Lcda. Neyla Morales."
              }
              imagen={ImgSecundaria}
            />
          </div>
          
          <div>
            <NoticiasRecientes
              titulo={
                "La Contraloria del Municipio Zamora junto a todo el personal felicita a la Lcda. Neyla Morales."
              }
              imagen={ImgSecundaria}
            />
          </div>

          <div>
            <NoticiasRecientes
              titulo={
                "La Contraloria del Municipio Zamora junto a todo el personal felicita a la Lcda. Neyla Morales."
              }
              imagen={ImgSecundaria}
            />
          </div>

          <div>
            <NoticiasRecientes
              titulo={
                "La Contraloria del Municipio Zamora junto a todo el personal felicita a la Lcda. Neyla Morales."
              }
              imagen={ImgSecundaria}
            />
          </div>
        </div>
      </Main>
      <Footer open={open} />
    </>
  );
}
