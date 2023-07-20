import React from'react';


//The main problem with an uncontrolled modal is that none of the other components can control it. 
//For example, if there is another button on the page that should display the modal, 
//the parent component has no way to make the modal display itself.
export const UncontrolledForm = () => {
    //to get values from the form to create rectRefs is needed
    const nameInput = React.createRef();
    const ageInput = React.createRef();
    const hairColorInput= React.createRef();

    const handleSubmit = (e) => {
        console.log(nameInput.current.value);
        console.log(ageInput.current.value);
        console.log(hairColorInput.current.value);
        e.preventDefault();
    }
        
    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Name" ref={nameInput}/>
            <input name="age" type="number" placeholder="Age" ref={ageInput}/>
            <input name="hairColor" type="text" placeholder="Hair color" ref={hairColorInput}/>
            <input type="submit" value="Submit" />
        </form>
    )
}