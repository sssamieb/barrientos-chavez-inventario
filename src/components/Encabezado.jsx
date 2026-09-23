function Encabezado({ titulo, subtitulo }) {
  return (
    <header className="text-center mb-4 mt-4">
      <h1>{titulo}</h1>
      <h4 className="text-muted">{subtitulo}</h4>
    </header>
  );
}

export default Encabezado;