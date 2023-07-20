import { useState } from "react";
import { useEffect } from "react";



// A controlled form keeps track of values for inputs while an uncontrolled form does not.
// A controlled form keeps track of values for each input using a useState hook, while an uncontrolled form does not.
// Additionally, each input in a controlled form has an onChange handler that updates the corresponding state variable when the user changes the value in the input. 
export const ControlledForm = () => {

    const [nameInputError, setNameInputError] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState();
    const [hairColor, setHairColor] = useState('');

    useEffect(() => {
        if(name.length < 2){
            setNameInputError("name must be 2 or more characters");
        } else {
            setNameInputError('');
        }
    }, [name])

    return(
        
        <form>
            {nameInputError && <p>{nameInputError}</p>}
            <input 
                name="name" 
                type="text" 
                placeholeder="Name" 
                value={name} 
                onChange={e=>setName(e.target.value)}
            />
            <input 
                name="age" 
                type="number" 
                placeholeder="Age" 
                value={age} 
                onChange={e=>setAge(e.target.value)}
            />
            <input 
                name="hairColor" 
                type="text" 
                placeholeder="Hair color" 
                value={hairColor} 
                onChange={e=>setHairColor(e.target.value)}
            />
            <button>Submit</button>
        </form>
    );
}
