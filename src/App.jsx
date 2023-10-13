import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componentsNav/Navbar/Navbar';
import ItemListContainer from './componentsNav/Navbar/ItemListContainer';

function App() {
  const [count, setCount] = useState(0);

  const tituloapp = (props) => {
    return (
      <div>
        <h1>{props.titulo}</h1>
        <h2>{props.subtitulo}</h2>
      </div>
    );
  }

  const titulo = 'este es mi titulo';
  const subtitulo = 'este es mi subtitulo';

  return (
    <>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
      <tituloapp titulo={titulo} subtitulo={subtitulo} />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hola Mundo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;