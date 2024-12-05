import React from "react";
import CargoItem from "./CargoItem";

const CargoList = ({ cargoList, updateStatus }) => {
  return (
    <div>
      <h2>Список грузов</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Номер груза</th>
            <th>Название груза</th>
            <th>Статус</th>
            <th>Пункт отправления</th>
            <th>Пункт назначения</th>
            <th>Дата отправления</th>
          </tr>
        </thead>
        <tbody>
          {cargoList.map((cargo) => (
            <CargoItem
              key={cargo.id}
              cargo={cargo}
              updateStatus={updateStatus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CargoList;
