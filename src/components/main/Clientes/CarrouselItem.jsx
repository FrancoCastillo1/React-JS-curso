function CarrouselItem({person , img , palabras}){
    return(
        <div className="carrouselItem">
            <img src={img} alt={person} />
            <h2>{person}</h2>
            <p>{palabras} </p>
        </div>
    )
}
export default CarrouselItem