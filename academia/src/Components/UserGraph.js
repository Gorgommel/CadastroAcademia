import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registre os componentes necessários para o gráfico
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const UserGraph = ({ users }) => {
  const [showAltura, setShowAltura] = useState(true);
  const [showPeso, setShowPeso] = useState(true);

  const data = {
    labels: users.map(user => user.peso), // Eixo X com peso
    datasets: [
      showAltura && {
        label: 'Altura (cm)',
        data: users.map(user => user.altura),
        borderColor: 'rgba(153, 102, 255, 0.6)',
        fill: false,
      },
      showPeso && {
        label: 'Peso (kg)',
        data: users.map(user => user.peso),
        borderColor: 'rgba(255, 159, 64, 0.6)',
        fill: false,
      }
    ].filter(Boolean), // Filtra datasets booleanos (remove nulos)
  };

  return (
    <div>
      <h2>Gráfico de Altura e Peso</h2>
      <div>
        <label>
          <input type="checkbox" checked={showAltura} onChange={() => setShowAltura(!showAltura)} />
          Mostrar Altura
        </label>
        <label>
          <input type="checkbox" checked={showPeso} onChange={() => setShowPeso(!showPeso)} />
          Mostrar Peso
        </label>
      </div>
      <Line data={data} />
    </div>
  );
};

export default UserGraph;
