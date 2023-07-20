
import { useState, useEffect } from "react"
import axios from 'axios';

//Custom hooks are just functions that call other hooks
//   the result when you combine hooks into newer hooks using useState and useEffect
//Custom hooks basically result when, instead of just using the basic hooks that React provides, 
//such as useState and useEffect, you actually combine these hooks into your own new hooks. 


//The useResource custom hook allows to quickly and easily load any server-side resource inside any component.
//This means you can easily load data from your database into our React components without writing a lot of code. 
export const useResource = (resourceUrl) => {
    const [resource, setResource] = useState(null);

// useEffect for actually loading a user, passing an array with Id as the second argument - this effect will refresh
//ans reload the user if the ID of the user changes

    useEffect(() => {
        (async () => {
            const response = await axios.get(resourceUrl);
            setResource(response.data);
        })(); //() <- calls this asynchronous function
    }, [resourceUrl])

    return resource;

}