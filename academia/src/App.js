import React, { useState } from 'react';
import UserForm from './Components/UserForm.js';
import EditableTable from './Components/EditableTable.js';
import UserGraph from './Components/UserGraph.js';
import { Container } from 'react-bootstrap';

const App = () => {
  const [users, setUsers] = useState([]);

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <Container>
      <h1>Cadastro de Usuários da Academia</h1>
      <UserForm onSubmit={handleAddUser} />
      <EditableTable users={users} setUsers={setUsers} />
      <UserGraph users={users} />
    </Container>
  );
};

export default App;