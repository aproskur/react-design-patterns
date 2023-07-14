//The purpose of the RegularList component is to take an items array and a resource name, and then 
//use the provided item component to display each item in the array. 
//This allows for greater flexibility in terms of what kind of list items can be displayed. 
//For example, a single RegularList component could be used to display a list of people, products, 
//or anything else. 

export const RegularList = ({
    items, 
    resourceName,
    itemComponent: ItemConponent,
}) => {

    return(
        <>
         { items.map((item, i) => (
            <ItemConponent key={i} {...{ [resourceName]: item}}/>
         ))}          
        </>

    );
}