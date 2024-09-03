import { Navbar } from "../components/Navbar/Navbar";
import style from './MainLayout.module.scss';
import { Outlet } from "react-router-dom";

export const MainLayout = () =>{

    return(
        <main>
            <Navbar/>
            <Outlet/>
        </main>
    )
}