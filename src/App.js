import './App.css';
import { useState } from 'react';
import Template from './Template';
import Paginado from './Paginado';
import Pelicula from './Pelicula';
import peliculasJson from './peliculas.json';

function App() {

  const [paginaActual, setPaginaActual] = useState(1);
  const totalPorPagina = 7;

  let peliculas = peliculasJson;

  const cargarPeliculas = () => {peliculas = peliculas.slice((paginaActual - 1) * totalPorPagina, paginaActual * totalPorPagina);}

  const getTotalPaginas = () => {
    let cantidadTotalDePeliculas = peliculasJson.length;
    return Math.ceil(cantidadTotalDePeliculas / totalPorPagina);
  }

  cargarPeliculas();

  return (
    <Template>

      {peliculas.map(pelicula =>

        <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion}
          director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion}
          img={pelicula.img} apta={pelicula.apta} descripcion={pelicula.descripcion}>
          
        </Pelicula>
      )}

      <Paginado pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
        setPaginaActual(pagina)
      }} />

    </Template>
  );
}

export default App;
