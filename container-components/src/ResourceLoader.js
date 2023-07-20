import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Takes care to load data for current user for from the server
// Has basic react loader logic

// You can load various types of resources from a server with the resourceLoader component.


// This component component allows you to load different types of resources from a server. 
//You can specify the resource URL and the resource name, and the component will fetch the data and pass it 
//to the child component. 

export const ResourceLoader = ({resourceUrl, resourceName, children}) => {
    const [state, setState] = useState(null);

// to load data from the server useEffect hook is used
//empty array as a 2nd argument to make sure that it executes when the first rendered   
// array with resourceURL parameter as 2nd argument make sure it runs when url is changed
    useEffect(() => {
        (async () => {
            const response = await axios.get(resourceUrl);
            setState(response.data);
        })();
    }, [resourceUrl])
    return (
        <>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)){
                    console.log({[resourceName]: state})
                    return React.cloneElement(child, { [resourceName]: state })
                }

                return child;
            })}
        </>
    );
}