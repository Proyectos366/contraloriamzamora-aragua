import { useState } from "react";
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { Footer } from "../components/Footer"

export function Contactos() {

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
        vista={"contactos"}
        open={open}
        setOpen={setOpen}
        toggleMenuHamburguesa={toggleMenuHamburguesa}
      />

        <Main>
          <h2>Contactos</h2>
          <div>
            <span>Nombre</span>
            <b>0414 335.10.54</b>
          </div>
        </Main>
        <Footer open={open} />
      </>
    );
}