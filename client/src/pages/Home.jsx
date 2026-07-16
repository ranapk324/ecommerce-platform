import ProductCard from "../components/ProductCard";

const products = [
    {
        id: 1,
        name: "iPhone 16 Pro",
        category: "Mobiles",
        price: 109999,
        image: "https://picsum.photos/300/300?random=1",
    },
    {
        id: 2,
        name: "MacBook Pro",
        category: "Laptops",
        price: 189999,
        image: "https://picsum.photos/300/300?random=2",
    },
    {
        id: 3,
        name: "AirPods Pro",
        category: "Accessories",
        price: 24999,
        image: "https://picsum.photos/300/300?random=3",
    },
    {
        id: 4,
        name: "Samsung S25",
        category: "Mobiles",
        price: 89999,
        image: "https://picsum.photos/300/300?random=4",
    }
];

function Home() {
    return (
        <div style={{ padding: "30px" }}>

            <h1>Featured Products</h1>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    marginTop: "30px",
                }}
            >
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>

        </div>
    );
}

export default Home;