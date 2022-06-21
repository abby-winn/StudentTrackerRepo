import React, {useState} from 'react';
import Adduser from './components/user/AddUser';
import UsersList from './components/user/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  function deleteUserHandler(userId) {
    const userIndex = usersList.findIndex(user => user.id === userId);
    const updatedUsers = [...usersList];
    updatedUsers[userIndex].active = false;
    setUsersList(updatedUsers);
  }

  function addUserHandler(username, age) {
    const newUser = {
      name: username,
      age: age,
      id: Math.random().toString(),
      active: true
    };
    setUsersList((prevUsersList) => {
      return [...prevUsersList, newUser];
    })
  }
  

  return (
    <div>
        <Adduser onAddUser={addUserHandler}></Adduser>
        <UsersList users={usersList} deleteUser={deleteUserHandler}></UsersList>
    </div>
  );
}

export default App;
