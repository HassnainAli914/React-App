import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../utils/Theme";
function Navbar() {
    const {toggleTheme} = useContext(ThemeContext);
    return (
        <nav style={{
            display: 'flex',
            position: 'sticky',
            top: 5,
            boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.2)',
            margin: '5px',
            border: '2px solid black',
            borderRadius: '10px',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'lightblue',
            padding: '10px',
            height: '8vh'
        }}>
            <div><p>My App</p></div>
            <ul style={{
                display: 'flex',
                alignItems: "center",
                listStyleType: 'none',
                gap: '20px'
            }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li onClick={toggleTheme} 
                style={{
                    cursor: 'pointer',
                    padding: '5px',
                    boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.2)',
                    border: '2px solid black',
                    borderRadius: '10px'
                }}
                >Theme Change</li>
            </ul>
        </nav>
    );
}
export default Navbar;