import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const UserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    ativo: false,
    diasCadastrado: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, idade, diasCadastrado } = formData;

    // Validação de formulário
    if (!nome || !idade || !diasCadastrado) {
      setError('Todos os campos são obrigatórios!');
      return;
    }

    // Limpar erro e enviar dados
    setError('');
    onSubmit(formData);
    setFormData({ nome: '', idade: '', ativo: false, diasCadastrado: '' }); // Limpar formulário
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}

      <Form.Group>
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Digite seu nome"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Idade</Form.Label>
        <Form.Control
          type="number"
          name="idade"
          value={formData.idade}
          onChange={handleChange}
          placeholder="Digite sua idade"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Dias Cadastrado</Form.Label>
        <Form.Control
          type="number"
          name="diasCadastrado"
          value={formData.diasCadastrado}
          onChange={handleChange}
          placeholder="Digite a quantidade de dias"
        />
      </Form.Group>

      <Form.Group>
        <Form.Check
          type="checkbox"
          name="ativo"
          label="Membro Ativo"
          checked={formData.ativo}
          onChange={handleChange}
        />
      </Form.Group>

      <Button type="submit">Adicionar Usuário</Button>
    </Form>
  );
};

export default UserForm;
