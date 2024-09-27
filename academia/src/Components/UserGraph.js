import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Registrar os componentes necessários do Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const UserGraph = ({ users }) => {
  // Configuração dos dados do gráfico
  const data = {
    labels: users.map(user => user.nome), // Certifique-se de que a chave esteja correta (deve ser 'nome')
    datasets: [
      {
        label: 'Idade dos Usuários',
        data: users.map(user => user.idade), // Alterar para 'idade' se necessário
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h2>Gráfico de Idade dos Usuários</h2>
      <Bar data={data} />
    </div>
  );
};

export default UserGraph;
