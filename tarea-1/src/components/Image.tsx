const Image = ({image}: { image: string }) => {
  return (
    <div className="card-image-wrapper">
      <img src={image} alt="Book Image" />
    </div>
  )
}

export default Image
