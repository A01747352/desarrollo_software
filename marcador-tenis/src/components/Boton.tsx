import "../styles/Boton.css";

const Boton = (props: { texto: string; onClick: () => void }) => {
  return (
    <button className="boton-tenis" onClick={props.onClick}>
        {props.texto}
    </button>
  )
}

export default Boton