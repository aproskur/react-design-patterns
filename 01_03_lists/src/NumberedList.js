export const NumberedList = ({
    items, 
    resourceName,
    itemComponent: ItemConponent,
}) => {

    return(
    
        <>
         { items.map((item, i) => (
            <>
                <h3>{i + 1}</h3>
                <ItemConponent key={i} {...{ [resourceName]: item}}/>
            </>
            
         ))}          
        </>
       

    );
}