import { useState } from "react";

function FormularioEquipo({ agregarEquipo }) {
  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [estado, setEstado] = useState(true);

  const [error, setError] = useState(false);
  const [exito, setExito] = useState(false);

  const procesarFormulario = (e) => {
    e.preventDefault();

    if (!nombre.trim() || !marca.trim() || !categoria) {
      setError(true);
      setExito(false);
      return;
    }
    if (Number(precio) <= 0 || Number(stock) < 0) {
      setError(true);
      setExito(false);
      return;
    }

    const nuevoEquipo = {
      id: Date.now(),
      nombre,
      marca,
      categoria,
      precio: Number(precio),
      stock: Number(stock),
      estado
    };

    agregarEquipo(nuevoEquipo);

    setError(false);
    setExito(true);
    setNombre("");
    setMarca("");
    setCategoria("");
    setPrecio("");
    setStock("");
    setEstado(true);

    setTimeout(() => setExito(false), 3000);
  };

  return (
    <div className="card mb-4 shadow">
      <div className="card-body">
        <h4 className="card-title mb-4">Registrar Equipo</h4>
        
        {error && <div className="alert alert-danger">Complete correctamente los campos obligatorios.</div>}
        {exito && <div className="alert alert-success">Equipo registrado correctamente.</div>}

        <form onSubmit={procesarFormulario}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Nombre *</label>
              <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className="col-md-6 mb-3">
              <label>Marca *</label>
              <input type="text" className="form-control" value={marca} onChange={(e) => setMarca(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-3">
              <label>Categoría *</label>
              <select className="form-select" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                <option value="">Seleccione...</option>
                <option value="Laptop">Laptop</option>
                <option value="Monitor">Monitor</option>
                <option value="Periférico">Periférico</option>
                <option value="Impresora">Impresora</option>
                <option value="Red">Red</option>
                <option value="Otros">Otros</option>
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label>Precio *</label>
              <input type="number" className="form-control" value={precio} onChange={(e) => setPrecio(e.target.value)} />
            </div>
            <div className="col-md-4 mb-3">
              <label>Stock *</label>
              <input type="number" className="form-control" value={stock} onChange={(e) => setStock(e.target.value)} />
            </div>
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" checked={estado} onChange={(e) => setEstado(e.target.checked)} />
            <label className="form-check-label">Equipo Disponible</label>
          </div>

          <button type="submit" className="btn btn-primary w-100">Registrar equipo</button>
        </form>
      </div>
    </div>
  );
}

export default FormularioEquipo;