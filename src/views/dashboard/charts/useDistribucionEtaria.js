import React from 'react'
import { Chart } from 'react-google-charts'

export const data = [
  ['Años', 'Hombres', 'Mujeres'],
  ['0 a 6', 1000, 400],
  ['7 a 12', 1170, 460],
  ['13 a 17', 660, 1120],
  ['18 a 28', 1030, 540],
  ['29 a 59', 660, 1120],
  ['60  o mas', 1030, 540],
]

export const options = {
  chart: {
    title: 'Company Performance',
    subtitle: 'Sales, Expenses, and Profit: 2014-2017',
  },
}

export function DistribucionEtaria() {
  return <Chart chartType="Bar" width="100%" height="400px" data={data} options={options} />
}
