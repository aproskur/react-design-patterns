import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

//Higher-order components are used to share behavior between several components or to add extra functionality to an existing component.

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);


export const withEditableResource = (Component, resourcePath, resourceName) => {
    return props => {

        //represents data on the serverside
        const [originalData, setOriginalData] = useState(null);
        const [data, setData] =useState(null);


        //The basic goal of the useEffect hook is allow components to specify side effects 
        //that should happen when a component is rendered. 
        useEffect(() => {
            (async () => {
                const response = await axios.get(resourcePath);
                setOriginalData(response.data);
                setData(response.data);
            })(); //calling async function like that by putting empty parenthesys;
        }, []);

        const onChange = changes => {
            setData({...data, ...changes});
        }

        const onSave = async () => {
            const response = await axios.post(resourcePath, { [resourceName] : data });
            setOriginalData(response.data)
            setData(response.data);
        }

        const onReset = () => {
            setData(originalData);
        }

        const resourceProps = {
            [resourceName]:data,
            [`onChange${capitalize(resourceName)}`]: onChange,
            [`onSave${capitalize(resourceName)}`]: onSave,
            [`onReset${capitalize(resourceName)}`]: onReset,

        }

        return <Component {...props} {...resourceProps}/> 
    }
}