import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../utils/Theme";

function Data() {
    const {theme} = useContext(ThemeContext);
    const themeStyle ={
      backgroundColor: theme === "Light" ? "white" : "black",
      color: theme === "Light" ? "black" : "white",
    }
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            setData(res.data);
        });
    }, []);
    return (
        <div style={{...themeStyle
            
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }}>
                <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
                    <h1>Data using Axios</h1>
                    <p>Here is all the Data fetched using Axios from the Internet.</p>
                    <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>
                        Go to Home Page
                    </Link>
                </div>
                <div>
                    <img style={{ width: "400px", height: "400px" }} src="https://img.freepik.com/free-vector/house-home-building-cartoon-vector-icon-illustration-building-landmark-icon-isolated-flat_138676-15023.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                </div>
            </div>
            <ul style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '20px',
                listStyleType: 'none',
                margin: '0',
                padding: '0'
            }}>
                {data.map((item) => (
                    <li key={item.id} style={{
                        backgroundColor: 'lightblue',
                        padding: '20px',
                        boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.2)',
                        border: '2px solid black',
                        borderRadius: '10px'
                    }}>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Data;