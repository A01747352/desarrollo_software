import "../styles/Titulo.css";

const Titulo = (props: {texto: string}) => {
  return (
    <div className="titulo-tenis">
      {props.texto}
    </div>
  )
}

export default Titulo;