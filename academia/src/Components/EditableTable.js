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
  
  const [editIndex, setEditIndex] = useState(-1);
  const [newUserData, setNewUserData] = useState({
    nome: '',
    idade: '',
    peso: '',
    altura: '',
    tempoTreino: '',
  });

  const handleFiltroChange = (e) => {
    const { name, value } = e.target;
    setFiltros({ ...filtros, [name]: value });
  };

  const aplicarFiltros = () => {
    return users.filter(user => {
      return (
        (!filtros.nome || user.nome.toLowerCase().includes(filtros.nome.toLowerCase())) &&
        (!filtros.idade || user.idade.toString().includes(filtros.idade)) &&
        (!filtros.peso || user.peso.toString().includes(filtros.peso)) &&
        (!filtros.altura || user.altura.toString().includes(filtros.altura)) &&
        (!filtros.tempoTreino || user.tempoTreino.toString().includes(filtros.tempoTreino))
      );
    });
  };

  const handleEdit = (index) => {
    const userToEdit = users[index];
    setNewUserData(userToEdit);
    setEditIndex(index);
  };

  const handleSave = () => {
    const updatedUsers = [...users];
    updatedUsers[editIndex] = newUserData;
    setUsers(updatedUsers);
    setEditIndex(-1);
    setNewUserData({ nome: '', idade: '', peso: '', altura: '', tempoTreino: '' });
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

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
          type="text"
          name="tempoTreino"
          placeholder="Filtrar por tempo de treino"
          className="form-control mb-2"
          value={filtros.tempoTreino}
          onChange={handleFiltroChange}
        />
      </div>
      <button className="btn btn-primary mb-3" onClick={aplicarFiltros}>Aplicar Filtros</button>
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
          {aplicarFiltros().map((user, index) => (
            <tr key={index}>
              <td>{editIndex === index ? (
                <input
                  type="text"
                  value={newUserData.nome}
                  onChange={(e) => setNewUserData({ ...newUserData, nome: e.target.value })}
                />
              ) : user.nome}</td>
              <td>{editIndex === index ? (
                <input
                  type="number"
                  value={newUserData.idade}
                  onChange={(e) => setNewUserData({ ...newUserData, idade: e.target.value })}
                />
              ) : user.idade}</td>
              <td>{editIndex === index ? (
                <input
                  type="number"
                  value={newUserData.peso}
                  onChange={(e) => setNewUserData({ ...newUserData, peso: e.target.value })}
                />
              ) : user.peso}</td>
              <td>{editIndex === index ? (
                <input
                  type="number"
                  value={newUserData.altura}
                  onChange={(e) => setNewUserData({ ...newUserData, altura: e.target.value })}
                />
              ) : user.altura}</td>
              <td>{editIndex === index ? (
                <input
                  type="text"
                  value={newUserData.tempoTreino}
                  onChange={(e) => setNewUserData({ ...newUserData, tempoTreino: e.target.value })}
                />
              ) : user.tempoTreino}</td>
              <td>
                {editIndex === index ? (
                  <button className="btn btn-success" onClick={handleSave}>Salvar</button>
                ) : (
                  <>
                    <button className="btn btn-warning" onClick={() => handleEdit(index)}>Editar</button>
                    <button className="btn btn-danger" onClick={() => handleDelete(index)}>Excluir</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditableTable;
