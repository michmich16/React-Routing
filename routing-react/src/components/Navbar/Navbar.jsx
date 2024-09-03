import s from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


export const Navbar = () => {
    useEffect(() => {
        console.log("Navigation Component has Mounted")
        return (
            () => {
                console.log("Navigation Component has Un-Mounted")
            }
        )
    }, [])

    return (
        

        <nav>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/concept">Concepts</Link>
                <Link to="/contact">Contact Us</Link>
            </ul>
        </nav>

    )
}