import { useState, useEffect } from "react"
import axios from 'axios';

//Custom hooks are just functions that call other hooks
//The useCurrentUser hook allows a component to load the current user from the server 
//so that they have access to that information.
export const useCurrentUser = () => {
    const [user, setUser] = useState(null);

// useEffect for actually loading a user, empty array as a 2ns argument to avoid call it each time 
//the component that using this custom hook updates
    useEffect(() => {
        (async () => {
            const response = await axios.get('/current-user');
            setUser(response.data);
        })(); //() <- calls this asynchronous function
    }, [])

    return user;
}

