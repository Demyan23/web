import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import "./singlePage.css";
import Loader from "../../components/loader/Loader";
import { useDispatch } from "react-redux"
import { addToCart } from "../../features/cartSlice";


function SinglePage() {
    let { id } = useParams();

    const [loading, setloading] = useState(true)
    useEffect(() => { setTimeout(() => { setloading(false) }, 1000) }, [])

    const [medicine, setMedicine] = useState({ id: 1, name: "not found", price: 0, image: " ", description: " " })
    useEffect(() => { axios.get(`http://localhost:8080/catalog/${id}`).then(res => setMedicine(res.data)) }, [id])


    const dispatch = useDispatch();

    const handleAddToCart = (medicine) => {
        dispatch(addToCart(medicine))
    };

    return (
        <>
            {loading ?
                <Loader />
                :
                <div className="drug">
                    <div className="page">
                        <div className="image"><img src={medicine.image} /></div>
                        <div className="content-drug">
                            <h1>{medicine.name}</h1>
                            <p>{medicine.description}</p>
                        </div>
                    </div>
                    <div className="footer-page">
                        <h3>price: {medicine.price}$</h3>
                        <Link className="go-back" to='/catalog'><button>Go back</button></Link>
                        <button className="add-to-cart" onClick={() => handleAddToCart(medicine)}>Add to cart</button>
                    </div>
                </div >
            }
        </>
    )
}

export default SinglePage;