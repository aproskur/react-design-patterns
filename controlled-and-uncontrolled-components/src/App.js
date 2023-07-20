import { UncontrolledForm } from './UncontrolledForm';
import { ControlledForm } from './ControlledForm';
import { UncontrolledModal } from './UncontrolledModal';
import { ControlledModal } from './ControlledModal';
import { useState } from 'react';
import { ControlledOnboardingFlow } from './ControlledOnboardingFlow';
import './App.css';

const StepOne = ({goToNext}) => {
  return (
  <>
    <h1>Step 1</h1>
    <button onClick = {()=>goToNext({name: 'Jon Doe'})}>Next</button>
  </>
  );
}
      
const StepTwo = ({goToNext}) => {
  return(
    <>
    <h1>Step 2</h1>
    <button onClick = {()=>goToNext({age: 30})}>Next</button>
  </>
  );
}

const StepThree = ({goToNext}) => {
  return(  <>
    <h1>COngrats you are eligible for our discount</h1>
    <button onClick = {()=>goToNext({})}>Next</button>
  </>
  );
}

const StepFour = ({goToNext}) => {
  return(  <>
    <h1>Step 4</h1>
    <button onClick = {()=>goToNext({hairColor: 'brown'})}>Next</button>
  </>
  );
}
  

function App() {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnboardingData({...onboardingData, ...stepData});
    setCurrentIndex(currentIndex+1);
}


  return (
    
    <div className="App">
      <ControlledOnboardingFlow 
        currentIndex={currentIndex}
        onNext={onNext}
        >
        <StepOne />
        <StepTwo />      
        {onboardingData.age >= 62 && <StepThree />}
        <StepFour />
      </ControlledOnboardingFlow>
    </div>
  );
}

export default App;

/*

  const [shouldShowModal, setShouldShowModal] = useState(false);
        <ControlledModal 
          shouldShow = {shouldShowModal}
          onRequestClose={()=>{
            alert("are you sure?")
            setShouldShowModal(false)}}>
              <h1>Controlled Modal</h1>
          </ControlledModal>
        <UncontrolledForm />
        <ControlledForm />
        <button onClick={() => setShouldShowModal(!shouldShowModal)}>{ shouldShowModal ? 'hide modal' : 'show modal'}</button>
*/