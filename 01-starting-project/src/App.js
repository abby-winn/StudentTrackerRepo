import React, {useState} from 'react';
import AddUser from "./components/users/AddUser.js"
import UsersList from "./components/users/UsersList.js"


function App() {
const [usersList, setUsersList] = useState([]);

function deleteUserHandler(userId) {
  const userIndex = usersList.findIndex(user =>
    user.id === userId);
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
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList} deleteUser={deleteUserHandler}></UsersList>
    </div>
  );
}


export default App;
