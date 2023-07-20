//This is higher order component. Its a function that returns a component with props
//NO need to write it from capitall letter

//The print props higher-order component prints out the props that are getting passed into it from the component that is being wrapped.

export const printProps = Component => {
    return (props) => {
        console.log(props);
        return <Component {...props} />
    }
}