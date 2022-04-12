
import '../hojas-de-estilo/Testimonio.css'

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        const nombreI = {props.imagen}
        var nameCapitalized ={`${nombreI.charAt(0).toUpperCase()} + ${nombreI}.slice(1)`}
        alt ={`Imagen de ${nameCapitalized}`} />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> in {props.pais}</p>
        <p className= 'cargo-testimonio'>
          {props.cargo} at <strong>{props.empresa}</strong></p>
        <p className= 'texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}


export default Testimonio;