"use client";

import { useState } from "react";
import {
  FaCar,
  FaPlus,
  FaEdit,
  FaTrash,
  FaSearch,
} from "react-icons/fa";

const vehiclesData = [
  {
    id: 1,
    marca: "Toyota",
    modelo: "Corolla XEI",
    anio: 2022,
    precio: "$28.500.000",
    estado: "Disponible",
  },
  {
    id: 2,
    marca: "Volkswagen",
    modelo: "Amarok V6",
    anio: 2023,
    precio: "$52.000.000",
    estado: "Reservado",
  },
  {
    id: 3,
    marca: "Ford",
    modelo: "Ranger Limited",
    anio: 2021,
    precio: "$39.900.000",
    estado: "Vendido",
  },
];

export default function VehiclesPage() {
  const [search, setSearch] = useState("");

  const vehicles = vehiclesData.filter((v) =>
    `${v.marca} ${v.modelo}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold flex items-center gap-3">
          <FaCar />
          Vehículos
        </h1>

        <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg text-white flex items-center gap-2">
          <FaPlus />
          Nuevo Vehículo
        </button>

      </div>

      <div className="relative mb-8">

        <FaSearch className="absolute left-4 top-4 text-gray-400" />

        <input
          type="text"
          placeholder="Buscar vehículo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-gray-300 pl-12 pr-4 py-3"
        />

      </div>

      <div className="grid gap-5">

        {vehicles.map((vehicle) => (

          <div
            key={vehicle.id}
            className="bg-white rounded-xl shadow-md p-6 flex justify-between items-center"
          >

            <div>

              <h2 className="text-xl font-bold">
                {vehicle.marca} {vehicle.modelo}
              </h2>

              <p className="text-gray-600">
                Año: {vehicle.anio}
              </p>

              <p className="text-green-700 font-bold text-lg">
                {vehicle.precio}
              </p>

              <span
                className={`inline-block mt-3 px-3 py-1 rounded-full text-sm text-white
                  ${
                    vehicle.estado === "Disponible"
                      ? "bg-green-600"
                      : vehicle.estado === "Reservado"
                      ? "bg-yellow-500"
                      : "bg-red-600"
                  }`}
              >
                {vehicle.estado}
              </span>

            </div>

            <div className="flex gap-3">

              <button className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-lg">
                <FaEdit />
              </button>

              <button className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg">
                <FaTrash />
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}