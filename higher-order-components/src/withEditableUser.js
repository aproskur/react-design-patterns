import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


//Higher-order components are used to share behavior between several components or to add extra functionality to an existing component.

export const withEditableUser = (Component, userId) => {
    return props => {

        //represents data on the serverside
        const [originalUser, setOriginalUser] = useState(null);
        const [user, setUser] =useState(null);

        //The basic goal of the useEffect hook is allow components to specify side effects 
        //that should happen when a component is rendered. 
        useEffect(() => {
            (async () => {
                const response = await axios.get(`/users/${userId}`);
                setOriginalUser(response.data);
                setUser(response.data);
            })(); //calling async function like that by putting empty parenthesys;
        }, []);

        const onChangeUser = changes => {
            setUser({...user, ...changes});
        }

        const onSaveUser = async () => {
            const response = await axios.post(`/users/${userId}`, { user });
            setUser(response.data);
        }

        const onResetUser = () => {
            setUser(originalUser);
        }

        return <Component {...props} 
            user={user}
            onChangeUser={onChangeUser}
            onSaveUser = {onSaveUser}
            onResetUser ={onResetUser}
            /> 
    }
}