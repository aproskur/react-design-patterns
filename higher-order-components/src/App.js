import './App.css';
import { printProps } from './printProps';
import { UserInfo } from './UserInfo';
import { withUser } from './withUser';
import { UserInfoForm } from './UserInfoForm';


const UserInfoWithLoader = withUser(UserInfo, '234')

function App() {
  return (
    <div className="App">
      <UserInfoForm/>
    </div>
  );
}

export default App;
