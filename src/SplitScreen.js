import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`;

//make left and right pane to take equal amount of space
const Pane = styled.div`
    flex: ${props => props.weight};
`;

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