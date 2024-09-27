import React, { useState, useEffect } from 'react';

const UserForm = ({ user, onSubmit }) => {
    const [formData, setFormData] = useState({
        nome: '',
        idade: '',
        peso: '',
        altura: '',
        tempoTreino: '',
    });

    useEffect(() => {
        if (user) {
            setFormData({ ...user });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ nome: '', idade: '', peso: '', altura: '', tempoTreino: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Nome"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="idade">Idade:</label>
                <input
                    type="number"
                    id="idade"
                    name="idade"
                    value={formData.idade}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Idade"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="peso">Peso (kg):</label>
                <input
                    type="number"
                    id="peso"
                    name="peso"
                    value={formData.peso}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Peso"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="altura">Altura (cm):</label>
                <input
                    type="number"
                    id="altura"
                    name="altura"
                    value={formData.altura}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Altura"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="tempoTreino">Tempo de Treino (meses):</label>
                <input
                    type="number"
                    id="tempoTreino"
                    name="tempoTreino"
                    value={formData.tempoTreino}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Tempo de Treino"
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Adicionar Usuário</button>
        </form>
    );
};

export default UserForm;