const Titulo = (props: { texto: string; subtitulo: string }) => {
    return (
        <>
            <div className="titulo">{props.texto}</div>
            <div className="subtitulo">{props.subtitulo}</div>
        </>
    );
}

export default Titulo;