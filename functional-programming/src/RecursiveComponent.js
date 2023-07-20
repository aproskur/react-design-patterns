const isObject = x => typeof x === 'object' && x !== null;


//Recursive components are used to traverse very nested data structures
//this component takes data and displays all keys and values that it containes
export const RecursiveComponent = ({data})=> {
    //stopping condition
    if (!isObject(data)) {
        return (
            <li>{data}</li>
        );
    }

    const pairs = Object.entries(data); 

    return (
        <>
        {pairs.map(([key, value]) => (
            <li>
                {key} :
                <ul>
                    <RecursiveComponent data={value} />
                </ul>
            </li>
        ))}
        </>

    );
}


