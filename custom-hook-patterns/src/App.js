import logo from './logo.svg';
import './App.css';
import { UserInfo } from './UserInfo';
import { ProductInfo } from './ProductInfo';

function App() {
  return (
    <div className="App">
      <ProductInfo productId="1234" />
    </div>
  );
}

export default App;
/*
      <UserInfo userId ='123'/>
      <UserInfo userId ='234'/>
      <UserInfo userId ='345'/>
      */