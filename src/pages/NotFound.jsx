import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../utils/Theme";

function NotFound() {
    const { theme } = useContext(ThemeContext);
    const themeStyle = {
        backgroundColor: theme === "Light" ? "white" : "black",
        color: theme === "Light" ? "black" : "white",
    }
    return (
        <div style={themeStyle}>
            <h1>404</h1>
            <p>Not Found</p>
            <Link to="/">Go to Home</Link>
        </div>
    );
}
export default NotFound;