import React, {useState} from "react";



//Controlled onboarding flow  It ensures the steps are in proper order, tracks data,
//and is an easy way to reset the onboarding process.
//Some benefits of using a controlled onboarding flow include: 
//1) Ensuring that all steps in the onboarding process are completed in the correct order 
//2) Allowing you to track the data collected from the user at each step and 
//3) Providing an easy way to reset the onboarding process if necessary. 
// A controlled onboarding flow provides more control.
//A controlled onboarding flow allows the app component to have more control over what is displayed,
// while an uncontrolled onboarding flow does not. 
//The controlled onboarding flow gives users much more flexibility over what their onboarding flow looks like and how it changes as they go on. 
//Uncontrolled components are those where the component itself keeps track of its own internal state,
// while controlled components are those where the state is passed through as props from a parent component. 
//Controlled components tend to be more reusable and easier to test.

export const ControlledOnboardingFlow = ({children, onFinish, currentIndex, onNext}) => {
    const goToNext = stepData => {
        onNext(stepData);
    }

    const currentChild = React.Children.toArray(children)[currentIndex];
    if (React.isValidElement(currentChild)){
        return React.cloneElement(currentChild, {goToNext})
    } 

    return currentChild;
 
}