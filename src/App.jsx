import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

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
    <Router>           
            <Navbar />
            <Routes>
                <Route path='/' element={<itemListContainer greeting='saludo desde app, bienvenidos' /> } /> 
                <Route path='/category/:cid' element={<itemListContainer greeting='saludo desde app, bienvenidos' /> } /> 
                <Route path='/detail/:pid' element={<itemDetaliContainer /> } />
               

                <Route path='*' element={<Navigate to='/' />} />                  
            </Routes>
        </Router>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
      <tituloapp titulo={titulo} subtitulo={subtitulo} />

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