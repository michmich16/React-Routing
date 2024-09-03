import { Navbar } from "../components/Navbar/Navbar";
import style from './MainLayout.module.scss';
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";

export const MainLayout = () =>{

    return(
        <main>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </main>
    )
}