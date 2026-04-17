import ReactDOM from 'react-dom/client'
import { Rutas } from './router/router.jsx'; 
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <BrowserRouter>
      <Rutas />
    </BrowserRouter>
  );
} else {
  console.error('No se encontró el elemento con ID "root"');
}