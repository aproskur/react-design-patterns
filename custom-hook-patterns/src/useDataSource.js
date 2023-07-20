
import { useState, useEffect } from "react"
import axios from 'axios';


//useDataSource allows to load data from a server or from local storage.
//Insted of url like in useResource hook, passing the function which will define what to do with the data
export const useDataSource = (getResourceFunc) => {
    const [resource, setResource] = useState(null);

// useEffect for actually loading a user, passing an array with Id as the second argument - this effect will refresh
//ans reload the user if the ID of the user changes

    useEffect(() => {
        (async () => {
            const result = await getResourceFunc();
            setResource(result);
        })(); //() <- calls this asynchronous function
    }, [getResourceFunc])

    return resource;

}