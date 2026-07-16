import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px",
                background: "#222",
            }}
        >
            <h2 style={{ color: "white" }}>E-Commerce</h2>

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                }}
            >
                <Link to="/">Home</Link>

                <Link to="/products">Products</Link>
            </div>
        </nav>
    );
}

export default Navbar;