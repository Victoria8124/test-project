import React, { useState } from "react";
import AddCargo from "./components/AddCargo";
import CargoList from "./components/CargoList";


const App = () => {
  const [cargoList, setCargoList] = useState([
    {
      id: "CARGO001",
      name: "Строительные материалы",
      status: "В пути",
      origin: "Москва",
      destination: "Казань",
      departureDate: "2024-11-24",
    },
    {
      id: "CARGO002",
      name: "Хрупкий груз",
      status: "Ожидает отправки",
      origin: "Санкт-Петербург",
      destination: "Екатеринбург",
      departureDate: "2024-11-26",
    },
  ]);

  const [filterStatus, setFilterStatus] = useState("Все");

  const addCargo = (newCargo) => {
    setCargoList([...cargoList, newCargo]);
  };

  const updateStatus = (id, newStatus) => {
    setCargoList(
      cargoList.map((cargo) =>
        cargo.id === id ? { ...cargo, status: newStatus } : cargo
      )
    );
  };

  // Фильтруем грузов в зависимости от выбранного статуса
  const filteredCargoList =
    filterStatus === "Все"
      ? cargoList
      : cargoList.filter((cargo) => cargo.status === filterStatus);

  return (
    <div className="container">
      <h1>Трекер грузов</h1>
      {/* Форма для добавления нового груза */}
      <AddCargo addCargo={addCargo} />
      {/* Фильтр по статусу */}
      <div className="mt-3">
        <label htmlFor="statusFilter" className="form-label text-muted mb-2">
          <strong>Фильтровать по статусу</strong>
        </label>
        <select
          id="statusFilter"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="form-select"
        >
          <option value="Все">Все</option>
          <option value="Ожидает отправки">Ожидает отправки</option>
          <option value="В пути">В пути</option>
          <option value="Доставлен">Доставлен</option>
        </select>
      </div>
      {/* Список грузов */}
      <CargoList cargoList={filteredCargoList} updateStatus={updateStatus} />
    </div>
  );
};

export default App;
