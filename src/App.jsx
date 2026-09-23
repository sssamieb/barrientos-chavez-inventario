import { useState } from "react";
import Encabezado from "./components/Encabezado";
import FormularioEquipo from "./components/FormularioEquipo";
import Equipo from "./components/Equipo";

function App() {
  const [equipos, setEquipos] = useState([]);

  const agregarEquipo = (nuevoEquipo) => {
    setEquipos([...equipos, nuevoEquipo]);
  };

  return (
    <div className="container mt-4">
      <Encabezado 
        titulo="Inventario Tecnológico" 
        subtitulo="Control de equipos disponibles" 
      />
      
      <FormularioEquipo agregarEquipo={agregarEquipo} />

      <h3 className="mb-3">Equipos Registrados</h3>
      
      {equipos.length === 0 ? (
        <div className="alert alert-info text-center">
          No existen equipos registrados.
        </div>
      ) : (
        <div className="row">
          {equipos.map((equipo) => (
            <div className="col-md-6" key={equipo.id}>
              <Equipo 
                nombre={equipo.nombre}
                marca={equipo.marca}
                categoria={equipo.categoria}
                precio={equipo.precio}
                stock={equipo.stock}
                estado={equipo.estado}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;