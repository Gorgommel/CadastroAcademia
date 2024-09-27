import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registre os componentes necessários
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const UserGraph = ({ users }) => {
  const [showIdade, setShowIdade] = useState(true);
  const [showAltura, setShowAltura] = useState(true);
  const [showPeso, setShowPeso] = useState(true);

  // Filtrando os datasets de acordo com os estados dos checkboxes
  const datasets = [];
  if (showIdade) {
    datasets.push({
      label: 'Idade',
      data: users.map(user => user.idade),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    });
  }
  if (showAltura) {
    datasets.push({
      label: 'Altura (cm)',
      data: users.map(user => user.altura),
      backgroundColor: 'rgba(153, 102, 255, 0.6)',
    });
  }
  if (showPeso) {
    datasets.push({
      label: 'Peso (kg)',
      data: users.map(user => user.peso),
      backgroundColor: 'rgba(255, 159, 64, 0.6)',
    });
  }

  const data = {
    labels: users.map(user => user.nome),
    datasets: datasets,
  };

  return (
    <div>
      <h2>Gráfico de Usuários</h2>
      <div>
        <label>
          <input
            type="checkbox"
            checked={showIdade}
            onChange={() => setShowIdade(!showIdade)}
          />
          Mostrar Idade
        </label>
        <label>
          <input
            type="checkbox"
            checked={showAltura}
            onChange={() => setShowAltura(!showAltura)}
          />
          Mostrar Altura
        </label>
        <label>
          <input
            type="checkbox"
            checked={showPeso}
            onChange={() => setShowPeso(!showPeso)}
          />
          Mostrar Peso
        </label>
      </div>
      <Bar data={data} />
    </div>
  );
};

export default UserGraph;
