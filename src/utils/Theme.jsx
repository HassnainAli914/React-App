import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext("Light");
function Theme({children}) {

const [theme, setTheme] = useState("Light");

const toggleTheme = () => {
    if (theme === "Light") {
        setTheme("Dark");
        console.log(theme);
    }
    else if (theme === "Dark") {
        setTheme("Light");
        console.log(theme);
    }
};

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>

    );
}
export default Theme;