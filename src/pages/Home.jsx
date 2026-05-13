import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../utils/Theme';

function Home() {
  const { theme } = useContext(ThemeContext);
  const themeStyle = {
    backgroundColor: theme === "Light" ? "white" : "black",
    color: theme === "Light" ? "black" : "white",
  }
  return (
    <div style={{...themeStyle,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    }}>
      <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
        <h1>Home Page</h1>
        <p>Welcome to our demo react app assignment by Sir Ibrahim Khan.</p>
        <Link to="/about" style={{ color: 'blue', textDecoration: 'underline' }}>
          Go to About Page
        </Link>
      </div>
      <div>
        <img style={{ width: "400px", height: "400px" }} src="https://img.freepik.com/free-vector/house-home-building-cartoon-vector-icon-illustration-building-landmark-icon-isolated-flat_138676-15023.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
      </div>
    </div>
  );
}
export default Home;