import React from 'react'
import { Chart } from 'react-google-charts'

export function Caracterizados() {
  const data = [
    ['', 'Caracterizados', { role: 'style' }],
    ['Caracterizados', 8175, '#FF7F3E'],
    ['Sin Caracterizar', 3792, '#402E7A'],
  ]

  const options = {
    title: 'Familias Caracterizadas',
    chartArea: { width: '80%' },
    hAxis: {
      title: 'Total Caracterizados',
      minValue: 1,
    },
  }

  return <Chart chartType="BarChart" width="100%" height="400px" data={data} options={options} />
}
