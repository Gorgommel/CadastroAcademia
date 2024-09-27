import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditableTable = ({ users }) => {
  const [filtros, setFiltros] = useState({
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

  // Função para aplicar os filtros
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
          </tr>
        </thead>
        <tbody>
          {aplicarFiltros().map((user, index) => (
            <tr key={index}>
              <td>{user.nome}</td>
              <td>{user.idade}</td>
              <td>{user.peso}</td>
              <td>{user.altura}</td>
              <td>{user.tempoTreino}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditableTable;
