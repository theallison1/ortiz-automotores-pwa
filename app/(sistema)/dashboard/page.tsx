"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  FaCar, 
  FaUsers, 
  FaFileInvoiceDollar, 
  FaChartLine, 
  FaPlus, 
  FaClock 
} from "react-icons/fa";

// Datos simulados para el Dashboard
const stats = [
  { id: 1, name: "Vehículos Totales", value: "24", icon: FaCar, color: "bg-blue-500" },
  { id: 2, name: "Reservados", value: "5", icon: FaClock, color: "bg-yellow-500" },
  { id: 3, name: "Clientes Activos", value: "128", icon: FaUsers, color: "bg-green-500" },
  { id: 4, name: "Ventas del Mes", value: "$120.400.000", icon: FaFileInvoiceDollar, color: "bg-purple-500" },
];

const recentVehicles = [
  { id: 1, modelo: "Toyota Corolla XEI", anio: 2022, precio: "$28.500.000", estado: "Disponible" },
  { id: 2, modelo: "Volkswagen Amarok V6", anio: 2023, precio: "$52.000.000", estado: "Reservado" },
  { id: 3, modelo: "Ford Ranger Limited", anio: 2021, precio: "$39.900.000", estado: "Vendido" },
];

export default function DashboardPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <FaChartLine className="text-blue-600" /> ¡Hola de nuevo!
          </h1>
          <p className="text-gray-500 mt-1">Este es el estado actual de tu concesionaria hoy.</p>
        </div>
        
        <Link href="/vehicles">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-medium flex items-center gap-2 transition-all shadow-md shadow-blue-200">
            <FaPlus /> Gestionar Vehículos
          </button>
        </Link>
      </div>

      {/* Grid de Reportes Rápidos (KPIs) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-800 mt-2">{stat.value}</p>
              </div>
              <div className={`p-4 rounded-xl text-white ${stat.color}`}>
                <Icon size={24} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Contenido Principal: Últimos Ingresos */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <FaCar className="text-gray-400" /> Últimos Vehículos Añadidos
          </h2>
          <Link href="/vehicles" className="text-blue-600 hover:underline text-sm font-medium">
            Ver todos
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-gray-400 text-sm uppercase font-semibold">
                <th className="py-3 px-4">Modelo</th>
                <th className="py-3 px-4">Año</th>
                <th className="py-3 px-4">Precio</th>
                <th className="py-3 px-4 text-center">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-gray-700">
              {recentVehicles.map((vehicle) => (
                <tr key={vehicle.id} className="hover:bg-gray-50/70 transition-colors">
                  <td className="py-4 px-4 font-medium text-gray-900">{vehicle.modelo}</td>
                  <td className="py-4 px-4 text-gray-500">{vehicle.anio}</td>
                  <td className="py-4 px-4 font-semibold text-gray-900">{vehicle.precio}</td>
                  <td className="py-4 px-4 text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold
                      ${
                        vehicle.estado === "Disponible" ? "bg-green-100 text-green-700" :
                        vehicle.estado === "Reservado" ? "bg-yellow-100 text-yellow-700" : 
                        "bg-red-100 text-red-700"
                      }`}
                    >
                      {vehicle.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}