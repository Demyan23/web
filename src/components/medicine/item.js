import { Link } from "react-router-dom";
import "./../../components/medicine/items.css";

export function Item(props) {
    return (
        <div className="item">
            <img src={props.item.image}/>
            <h2>{props.item.name}</h2>
            <div className="info">
                <b>price: {props.item.price}$</b>
                <Link className="link-button" to={`/drug/${props.item.id}`}><button className="button-medicine">View more</button></Link>
            </div>
        </div>
    )
}

export default Item;