import "../styles/Puntos.css";

const Puntos = (props: {valor: number}) => {
    return (
        <div className="puntos-tenis">
        {props.valor}
    </div>
    );    
}

export default Puntos;