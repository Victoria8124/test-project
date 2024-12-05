import React, { useState } from 'react';

const AddCargo = ({ addCargo }) => {
  const [cargo, setCargo] = useState({
    id: '',
    name: '',
    status: 'Ожидает отправки',
    origin: '',
    destination: '',
    departureDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCargo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      cargo.name &&
      cargo.origin &&
      cargo.destination &&
      cargo.departureDate
    ) {
      addCargo({
        ...cargo,
        id: `CARGO${Math.floor(Math.random() * 1000)}`,
      });
      setCargo({
        id: '',
        name: '',
        status: 'Ожидает отправки',
        origin: '',
        destination: '',
        departureDate: '',
      });
    } else {
      alert('Пожалуйста, заполните все поля!');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Добавить новый груз</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Название груза
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={cargo.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="origin" className="form-label">
            Пункт отправления
          </label>
          <input
            type="text"
            className="form-control"
            id="origin"
            name="origin"
            value={cargo.origin}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="destination" className="form-label">
            Пункт назначения
          </label>
          <input
            type="text"
            className="form-control"
            id="destination"
            name="destination"
            value={cargo.destination}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="departureDate" className="form-label">
            Дата отправления
          </label>
          <input
            type="date"
            className="form-control"
            id="departureDate"
            name="departureDate"
            value={cargo.departureDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-12">
          <button type="submit" className="btn btn-primary">
            Добавить груз
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCargo;


