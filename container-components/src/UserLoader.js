import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Takes care to load data for current user for from the server
// Has basic react loader logic

export const UserLoader = ({userId, children}) => {
    const [user, setUser] = useState(null);

// to load data from the server useEffect hook is used
//empty array as a 2nd argument to make sure that it executes when the first rendered   
// array with user Id parameter as 2nd argument make sure it runs when userId is changed
    useEffect(() => {
        (async () => {
            const response = await axios.get(`/users/${userId}`);
            setUser(response.data);
        })();
    }, [userId])
    return (
        <>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)){
                    return React.cloneElement(child, { user })
                }

                return child;
            })}
        </>
    );
}