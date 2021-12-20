import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {
   const [userList, setUserList] = useState([{ name: 'sanjeev', age: 15 }]);
   const addUserHandler = (uName, uAge) => {
      setUserList((prevState) => {
         return [...prevState, { name: uName, age: uAge }];
      });
   };
   return (
      <React.Fragment>
         <AddUser onAddUser={addUserHandler} />
         <UsersList users={userList} />
      </React.Fragment>
   );
}

export default App;
