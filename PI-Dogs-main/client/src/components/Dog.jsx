import './Dog.css'

export default function Dog ({name, image, weight_min, weight_max, temperament}) {
    return (
        <div className="dog_card">
            <div className="dog_card_details">
            <h4>{name}</h4>
            <img src={image} alt="dog_image" className="dog_image" />
            <h5>Peso minimo: {weight_min}kg</h5>
            <h5>Peso maximo: {weight_max}kg</h5>
            <h6>{temperament}</h6>
            </div>
        </div>
    )
}