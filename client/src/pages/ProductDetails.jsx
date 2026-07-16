import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function ProductDetails() {

    const { id } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {

        const fetchProduct = async () => {

            try {

                const res = await API.get(`/products/${id}`);

                setProduct(res.data);

            } catch (err) {

                console.log(err);

            }

        };

        fetchProduct();

    }, [id]);

    if (!product) {

        return <h2 style={{ padding: "30px" }}>Loading...</h2>;

    }

    return (

        <div style={{ padding: "30px" }}>

            <img
                src={product.image}
                alt={product.name}
                style={{
                    width: "300px",
                    borderRadius: "10px"
                }}
            />

            <h1>{product.name}</h1>

            <h3>₹{product.price}</h3>

            <p>{product.category}</p>

            <p>{product.description}</p>

            <p>Stock : {product.stock}</p>

        </div>

    );

}

export default ProductDetails;