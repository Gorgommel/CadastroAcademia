import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditableTable = ({ users, setUsers }) => {
  const [filtros, setFiltros] = useState({
    nome: '',
    idade: '',
    peso: '',
    altura: '',
    tempoTreino: '',
  });

  // Função para atualizar o usuário editado
  const handleEditUser = (index, field, value) => {
    const updatedUsers = users.map((user, i) => 
      i === index ? { ...user, [field]: value } : user
    );
    setUsers(updatedUsers);
  };

  // Função para excluir um usuário
  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const handleFiltroChange = (e) => {
    const { name, value } = e.target;
    setFiltros({ ...filtros, [name]: value });
  };

  const filteredUsers = users.filter(user => {
    return (
      user.nome.toLowerCase().includes(filtros.nome.toLowerCase()) &&
      user.idade.toString().includes(filtros.idade) &&
      user.peso.toString().includes(filtros.peso) &&
      user.altura.toString().includes(filtros.altura) &&
      user.tempoTreino.toString().includes(filtros.tempoTreino)
    );
  });

  return (
    <div className="container mt-4">
      <h2>Usuários Cadastrados</h2>
      <div className="mb-3">
        <input
          type="text"
          name="nome"
          placeholder="Filtrar por nome"
          className="form-control mb-2"
          value={filtros.nome}
          onChange={handleFiltroChange}
        />
        <input
          type="number"
          name="idade"
          placeholder="Filtrar por idade"
          className="form-control mb-2"
          value={filtros.idade}
          onChange={handleFiltroChange}
        />
        <input
          type="number"
          name="peso"
          placeholder="Filtrar por peso"
          className="form-control mb-2"
          value={filtros.peso}
          onChange={handleFiltroChange}
        />
        <input
          type="number"
          name="altura"
          placeholder="Filtrar por altura"
          className="form-control mb-2"
          value={filtros.altura}
          onChange={handleFiltroChange}
        />
        <input
          type="number"
          name="tempoTreino"
          placeholder="Filtrar por tempo de treino"
          className="form-control mb-2"
          value={filtros.tempoTreino}
          onChange={handleFiltroChange}
        />
      </div>

      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Peso</th>
            <th>Altura</th>
            <th>Tempo de Treino</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.nome}</td>
              <td>{user.idade}</td>
              <td>
                <input
                  type="number"
                  value={user.peso}
                  onChange={(e) => handleEditUser(index, 'peso', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={user.altura}
                  onChange={(e) => handleEditUser(index, 'altura', e.target.value)}
                />
              </td>
              <td>{user.tempoTreino}</td>
              <td>
                <button onClick={() => handleDeleteUser(index)} className="btn btn-danger">
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditableTable;
