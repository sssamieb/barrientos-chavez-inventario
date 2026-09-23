function Equipo({ nombre, marca, categoria, precio, stock, estado }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title text-primary">{nombre}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{marca} - {categoria}</h6>
        <p className="mb-1"><strong>Precio:</strong> Bs {precio}</p>
        <p className="mb-1"><strong>Stock:</strong> {stock} unidades</p>
        <p className="mb-0">
          <strong>Estado: </strong> 
          <span className={estado ? "badge bg-success" : "badge bg-danger"}>
            {estado ? "Disponible" : "No disponible"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Equipo;