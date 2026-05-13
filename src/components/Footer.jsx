import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../utils/Theme';

function Footer() {
    const {theme} = useContext(ThemeContext);
    const themeStyle ={
      backgroundColor: theme === "Light" ? "lightblue" : "darkblue",
      color: theme === "Light" ? "black" : "white",
    }
    return (
        <div style={{
            ...themeStyle,
            display: 'flex',
            position: 'relative',
            margin: '5px',
            border: '2px solid black',
            borderRadius: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            height: '20vh',
        }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h1><b>Footer</b></h1>
                <ul style={{
                    display: 'flex',
                    listStyleType: 'none',
                    gap: '20px',
                    margin: '0',
                    padding: '0'
                }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>
            </div>
        </div>
    );
}
export default Footer;