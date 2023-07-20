import { useState, useEffect } from "react"
import axios from 'axios';

//Custom hooks are just functions that call other hooks
export const useUser = userId => {
    const [user, setUser] = useState(null);

// useEffect for actually loading a user, passing an array with Id as the second argument - this effect will refresh
//ans reload the user if the ID of the user changes

    useEffect(() => {
        (async () => {
            const response = await axios.get(`/users/${userId}`);
            setUser(response.data);
        })(); //() <- calls this asynchronous function
    }, [userId])

    return user;
}