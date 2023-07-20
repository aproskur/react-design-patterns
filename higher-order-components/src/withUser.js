import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';


//Higher-order components are used to share behavior between several components or to add extra functionality to an existing component.

//The purpose of the higher-order component called with user is to load a specific user from a server. 
//This allows the original component to behave exactly like the original component,
// except with extra user loading capabilities.

export const withUser = (Component, userId) => {

    return props => {
        const [user, setUser] = useState(null);

        //Load user with useEffect hook
        //The basic goal of the useEffect hook is allow components to specify side effects 
        //that should happen when a component is rendered. 
        //Empty array is passed to avoid firing useEffect each time the component updates
        useEffect(() => {
            (async () => {
                const response = await axios.get(`/users/${userId}`);
                setUser(response.data);
        })();
    }, []);
    //we don't need to clone element as before becouse we pass a component, and not a react element
    return <Component {...props} user = {user}/>
  }
}