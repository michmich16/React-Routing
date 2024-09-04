import React, { useState, useEffect } from 'react'; 
import style from './Style.module.scss';

export const Contact = () => {
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState("");
    const [userError, setUserError] = useState(""); 

    useEffect(() => {
        let error = "";
        if (name.length < 6) {
            error = "You need to enter at least 6 characters";
        } else if (!name.match(/[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/)) {
            error = "You need at least 1 special character";
        } else if (!email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)){
            error = "email is invalid??"
        } 
        setUserError(error); 
    }, [name, email]);

    return (
        <div>
            <h1>Contact us page</h1>
            <b>{userError}</b>
            <form>
                <label htmlFor="name">
                    Username:
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name} // Correct value binding for name input
                        type="text"
                        name="name"
                    />
                </label>

                <label htmlFor="email">
                    Email:
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} // Correct value binding for email input
                        type="email"
                        name="email"
                    />
                </label>
            </form>
        </div>
    )
}
