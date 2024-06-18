/* eslint-disable prettier/prettier */
import React from 'react'
import { Chart } from 'react-google-charts'

export const data = [
  ['Corregimientos', 'Familias', 'Miembros Hogar', 'Concejos Comunitarios'],
  ['Las Flores', 1000, 400, 200],
  ['Campana', 1170, 460, 250],
  ['La Punta', 660, 1120, 300],
  ['Mingueo', 1030, 540, 350],
  ['Rio ancho', 1170, 460, 250],
  ['Palomino', 660, 1120, 300],
  ['Cabecera Municipal', 1030, 540, 350],
]

/* export const options = {
  chart: {
    title: 'Company Performance',
    subtitle: 'Sales, Expenses, and Profit: 2014-2017',
  },
} */

export const options = {
  title: "Population of Largest U.S. Cities",
  chartArea: { width: "100%" },
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
};

export const Charttodos = () => {
  return <Chart chartType="Bar" width="100%" height="400px" data={data} options={options} />
}
