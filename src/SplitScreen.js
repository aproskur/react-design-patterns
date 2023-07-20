import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`;

//make left and right pane to take equal amount of space
//Having an easier way to create a two-column layout can be useful for displaying content side-by-side, 
//such as text and images.
const Pane = styled.div`
    flex: ${props => props.weight};
`;


//The benefits of passing children as props to a layout component include increased readability and the ability 
//to pass props directly to the child components. 
//This is considered more developer friendly than passing props through a parent component. 

export const SplitScreen = ({
    children,
    leftWeight = 1,
    rightWeight = 2,
}) => {
    const [left, right] = children;
    return (
        <Container>
            <Pane weight={leftWeight}>
                { left }
            </Pane>
            <Pane weight={rightWeight}>
                { right }
            </Pane>
        </Container>
    )
}