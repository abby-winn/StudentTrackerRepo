import React, {useState} from 'react';
import Adduser from './components/user/AddUser';
import UsersList from './components/user/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  function addUserHandler(username, age) {
    const newUser = {
      name: username,
      age: age,
      id: Math.random().toString()
    };
    setUsersList((prevUsersList) => {
      return [...prevUsersList, newUser];
    })
  }
  

  return (
    <div>
        <Adduser onAddUser={addUserHandler}></Adduser>
        <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
