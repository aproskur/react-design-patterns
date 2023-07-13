
import './App.css';
import { SplitScreen } from './SplitScreen';

const LeftHandComponent = ({name}) => {
  return <h1 style = {{backgroundColor: 'green'}}>{name}</h1>
}

const RightHandComponent = ({message}) => {
  return <p style = {{backgroundColor: 'red'}}>{message}</p>
}

const [infoname, infomessage] = ["Trigonotarb", "Hi"];

function App() {
  return (
    <SplitScreen 
      left ={ LeftHandComponent}
      right = {RightHandComponent}
      leftWeight={1} 
      rightWeight={3}
      name = {infoname}
      message = {infomessage} 
      />
  );
}

export default App;
