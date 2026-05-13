import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../utils/Theme';

function About() {
  const {theme} = useContext(ThemeContext);
  const themeStyle ={
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
      <h1>About Page</h1>
      <p>Hello Everyone! I am Hassnain Ali and I am a student of Computer Science and Engineering.</p>
      <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Go to Home Page
      </Link>
    </div>
    <div>
      <img style={{width: "400px", height: "400px"}} src="https://awordjourneytranslation.com/wp-content/uploads/2018/10/certified-translation-services-company.png" alt="" />
    </div>
    </div>
  );
}
export default About;
