import React from 'react';
import { Table, Button } from 'react-bootstrap';

const EditableTable = ({ users, setUsers }) => {
  const handleEdit = (index, key, value) => {
    const newUsers = [...users];
    newUsers[index][key] = value;
    setUsers(newUsers);
  };

  const handleRemove = (index) => {
    const newUsers = users.filter((_, i) => i !== index);
    setUsers(newUsers);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Dias Cadastrado</th>
          <th>Ativo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>
              <input value={user.nome} onChange={(e) => handleEdit(index, "nome", e.target.value)} />
            </td>
            <td>
              <input value={user.idade} type="number" onChange={(e) => handleEdit(index, "idade", e.target.value)} />
            </td>
            <td>
              <input value={user.diasCadastrado} type="number" onChange={(e) => handleEdit(index, "diasCadastrado", e.target.value)} />
            </td>
            <td>
              <input type="checkbox" checked={user.ativo} onChange={(e) => handleEdit(index, "ativo", e.target.checked)} />
            </td>
            <td>
              <Button variant="danger" onClick={() => handleRemove(index)}>Remover</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default EditableTable;
