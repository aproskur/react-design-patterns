import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`;

//make left and right pane to take equal amount of space
const Pane = styled.div`
    flex: ${props => props.weight};
`;

export const SplitScreen = ({
    left: Left,
    right: Right,
    leftWeight = 1,
    rightWeight = 2,
    name: infoname,
    message: infomessage
}) => {
    return (
        <Container>
            <Pane weight={leftWeight}>
                <Left name = {infoname}/>
            </Pane>
            <Pane weight={rightWeight}>
                <Right message ={infomessage}/>
            </Pane>
        </Container>
    )
}