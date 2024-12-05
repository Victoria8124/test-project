import React from 'react';

const CargoItem = ({ cargo, updateStatus }) => {
  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    updateStatus(cargo.id, newStatus);
  };

  // Цвет статуса
  const statusColor = cargo.status === 'Ожидает отправки' ? 'yellow' :
                      cargo.status === 'В пути' ? 'blue' : 'green';

  return (
    <tr>
      <td>{cargo.id}</td>
      <td>{cargo.name}</td>
      <td>
        <select
          value={cargo.status}
          onChange={handleStatusChange}
          style={{ backgroundColor: statusColor }}
          className="form-select"
        >
          <option value="Ожидает отправки">Ожидает отправки</option>
          <option value="В пути">В пути</option>
          <option value="Доставлен">Доставлен</option>
        </select>
      </td>
      <td>{cargo.origin}</td>
      <td>{cargo.destination}</td>
      <td>{cargo.departureDate}</td>
    </tr>
  );
};

export default CargoItem;





