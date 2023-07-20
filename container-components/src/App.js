import logo from './logo.svg';
import './App.css';
import { CurrentUserLoader } from './CurrentUserLoader';
import { UserInfo }  from './UserInfo';
import { UserLoader } from './UserLoader';
import { ResourceLoader } from './ResourceLoader';
import { ProductInfo } from './ProductInfo'
import { DataSource } from './DataSource';
import axios from 'axios';


//DESIGN PATTERN - CONTAINER COMPONENTS
//CONTAINER COMPNENTS - React components that take care of all of the data loading and other data management 
//for their child components
//Container components are React components that take care of all of the data loading 
//and other data management for their child components. This allows child components
// to share logic and makes it so they don't need to know where their data is coming from or how to manage it. 



const getServerData = url => async () => {
  const response = await axios.get(url);
  return response.data;
}

const getLocalStorageData = key => () => {
  return localStorage.getItem(key);
}

const Text = ({message}) =>  <h1>{message}</h1>

const ids = ['123', '234', '345'];

function App() {
  
 return (
  <>
    <DataSource getDataFunc = { getServerData('/users/123') } resourceName="user">
        <UserInfo/>
    </DataSource>
    <DataSource getDataFunc={getLocalStorageData('message')} resourceName="message">
      <Text />
    </DataSource>
  </>
 );
}

export default App;

/*
   ids.map((id) => {
       return (
       <UserLoader userId={id}>
         <UserInfo />
       </UserLoader>
       )
     });
     */

     /*
         <ResourceLoader resourceUrl="/users/123" resourceName="user">
      <UserInfo />
    </ResourceLoader>
    <ResourceLoader resourceUrl="/products/1234" resourceName="product">
      <ProductInfo />
    </ResourceLoader>

     */