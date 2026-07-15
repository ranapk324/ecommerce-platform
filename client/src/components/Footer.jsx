import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav
            style={{
                padding: "20px",
                display: "flex",
                gap: "20px",
                background: "#222",
            }}
        >
            <Link to="/">Home</Link>

            <Link to="/products">Products</Link>
        </nav>
    );
}

export default Navbar;