import { Outlet } from "react-router-dom"
import { BigSidebar, Navbar, SmallSidebar } from "../components"
import Wrapper from '../assets/wrappers/Dashboard'
import { createContext, useContext, useEffect, useState } from "react"
import { checkDefaultTheme } from "../App"

const DashboardContext = createContext();


const DashboardLayout = () => {
    //temp
    const user = { name: 'john' }
    const [showSidebar, setShowSidebar] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        document.body.classList.toggle('dark-theme', newDarkTheme);
        localStorage.setItem('darkTheme',newDarkTheme);
    }

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar)
        console.log(showSidebar);
    }

    const logoutUser = async () => {
        console.log('logout user');
    }

    return (
        <DashboardContext.Provider value={{ user,
         showSidebar, 
         isDarkTheme, 
         setIsDarkTheme,
         toggleDarkTheme, 
         toggleSidebar, 
         logoutUser 
         }}
         >
            <Wrapper>
                <main className="dashboard">
                    <SmallSidebar />
                    <BigSidebar />
                    <div>
                        <Navbar />
                        <div className="dashboard-page">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </Wrapper>
        </DashboardContext.Provider>
    )
}
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout