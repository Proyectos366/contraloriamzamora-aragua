import { Routes, Route } from "react-router-dom";
//import { Index } from "../view/Index";
import { Index } from "../view/Index";
import { Contactos } from "../view/Contactos";
import { NotFound } from "../view/NotFound";
import { MisionVision } from "../view/MisionVision";
//import { PrivateRoute } from "../components/RutasPrivadas";

export function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/contactos" element={<Contactos />} />
      <Route path="/mision-vision" element={<MisionVision />} />
      <Route path="*" element={<NotFound />} />
      {/* <Route path="/chat" element={
          <PrivateRoute>
            <Chat />
          </PrivateRoute>
        }
      /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
