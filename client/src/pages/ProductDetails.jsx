import { useParams } from "react-router-dom";

function ProductDetails() {

    const { id } = useParams();

    return (
        <div style={{ padding: "30px" }}>

            <h1>Product Details</h1>

            <h2>Product ID: {id}</h2>

        </div>
    );
}

export default ProductDetails;