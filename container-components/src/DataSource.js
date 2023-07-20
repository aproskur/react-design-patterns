import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Takes care to load data for current user for from the server
// Has basic react loader logic

export const DataSource = ({getDataFunc = () => {}, resourceName, children}) => {
    const [state, setState] = useState(null);

// to load data from the server useEffect hook is used
//empty array as a 2nd argument to make sure that it executes when the first rendered   
// array with resourceURL parameter as 2nd argument make sure it runs when url is changed
    useEffect(() => {
        (async () => {
            const data = await getDataFunc();
            setState(data);
        })();
    }, [getDataFunc])
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