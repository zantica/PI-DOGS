import './Dog.css';
import { Link } from 'react-router-dom';

export default function Dog ({name, image, weight_min, weight_max, temperament}) {
    return (
        <div className="dog_card">
                <div className="dog_card_details">
                        <h3>{name}</h3>
                        <img src={image} alt="dog_image" className="dog_image" />
                        <h5>Peso minimo: {weight_min}kg</h5>
                        <h5>Peso maximo: {weight_max}kg</h5>
                        <h6>{temperament}</h6>
                        <Link to='/details'>
                            <button className="button_details">Detalles</button>
                        </Link>
                </div>
        </div>
    )
}