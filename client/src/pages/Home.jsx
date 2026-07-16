import { useEffect, useState } from "react";

import API from "../services/api";

import ProductCard from "../components/ProductCard";

function Home() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {

            try {

                const res = await API.get("/products");

                setProducts(res.data);

            } catch (err) {

                console.log(err);

            }

        };

        fetchProducts();

    }, []);

    return (

        <div style={{ padding: "30px" }}>

            <h1>Featured Products</h1>

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap",
                    marginTop: "20px"
                }}
            >

                {
                    products.map(product => (

                        <ProductCard

                            key={product._id}

                            product={product}

                        />

                    ))
                }

            </div>

        </div>

    );

}

export default Home;