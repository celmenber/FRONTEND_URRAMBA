/* eslint-disable prettier/prettier */
import { CChart } from '@coreui/react-chartjs'
import React from 'react'
import { getStyle } from '@coreui/utils'
import { CCardBody } from '@coreui/react'
const WidgetBarChart = () => {
  return (
    <>
      <CCardBody>
        <CChart
          type="bar"
          data={{
            labels: [
              'Afrocolombiano',
              'Negro',
              'Indigena',
              'Palenquero',
              'No reconoce',
              'Raizal',
              'Rom/Gitano',
            ],
            datasets: [
              {
                label: 'Como se autorreconoce?',
                backgroundColor: '#3399ff',
                data: [8212, 268, 40, 18, 12, 8, 5],
              },
            ],
          }}
          labels="months"
          options={{
            plugins: {
              legend: {
                labels: {
                  color: getStyle('--cui-body-color'),
                },
              },
            },
            scales: {
              x: {
                grid: {
                  color: getStyle('--cui-border-color-translucent'),
                },
                ticks: {
                  color: getStyle('--cui-body-color'),
                },
              },
              y: {
                grid: {
                  color: getStyle('--cui-border-color-translucent'),
                },
                ticks: {
                  color: getStyle('--cui-body-color'),
                },
              },
            },
          }}
        />
      </CCardBody>
      <CCardBody>
        <CChart
          type="bar"
          data={{
            labels: ['', 'Mujer', '', 'Hombre', ''],
            datasets: [
              {
                label: 'Sexo',
                backgroundColor: '#2eb85c',
                data: [0, 4420, 0, 4143, 0],
              },
            ],
          }}
          labels="months"
          options={{
            plugins: {
              legend: {
                labels: {
                  color: getStyle('--cui-body-color'),
                },
              },
            },
            scales: {
              x: {
                grid: {
                  color: getStyle('--cui-border-color-translucent'),
                },
                ticks: {
                  color: getStyle('--cui-body-color'),
                },
              },
              y: {
                grid: {
                  color: getStyle('--cui-border-color-translucent'),
                },
                ticks: {
                  color: getStyle('--cui-body-color'),
                },
              },
            },
          }}
        />
      </CCardBody>
      <CCardBody>
        <CChart
          type="bar"
          data={{
            labels: ['Femenino', 'Masculino', 'Trans', 'Hombre', ''],
            datasets: [
              {
                label: 'Genero',
                backgroundColor: '#9da5b1',
                data: [2464, 2218, 4, 0],
              },
            ],
          }}
          labels="months"
          options={{
            plugins: {
              legend: {
                labels: {
                  color: getStyle('--cui-body-color'),
                },
              },
            },
            scales: {
              x: {
                grid: {
                  color: getStyle('--cui-border-color-translucent'),
                },
                ticks: {
                  color: getStyle('--cui-body-color'),
                },
              },
              y: {
                grid: {
                  color: getStyle('--cui-border-color-translucent'),
                },
                ticks: {
                  color: getStyle('--cui-body-color'),
                },
              },
            },
          }}
        />
      </CCardBody>
      <CCardBody>
        <CChart
          type="bar"
          data={{
            labels: ['Heterosexual', 'No deseo responder', 'Bisexual', 'Homosexual', 'en blanco'],
            datasets: [
              {
                label: 'Orientación Sexual',
                backgroundColor: '#f9b115',
                data: [4028, 541, 112, 5, 0],
              },
            ],
          }}
          labels="months"
          options={{
            plugins: {
              legend: {
                labels: {
                  color: getStyle('--cui-body-color'),
                },
              },
            },
            scales: {
              x: {
                grid: {
                  color: getStyle('--cui-border-color-translucent'),
                },
                ticks: {
                  color: getStyle('--cui-body-color'),
                },
              },
              y: {
                grid: {
                  color: getStyle('--cui-border-color-translucent'),
                },
                ticks: {
                  color: getStyle('--cui-body-color'),
                },
              },
            },
          }}
        />
      </CCardBody>
      <CCardBody>
        <CChart
          type="bar"
          data={{
            labels: ['', 'No', '', 'Si', ''],
            datasets: [
              {
                label: 'Ha sido sentido discriminado por ser Afrocolombiano?',
                backgroundColor: '#3399ff',
                data: [0, 7982, 0, 581, 0],
              },
            ],
          }}
          labels="months"
          options={{
            plugins: {
              legend: {
                labels: {
                  color: getStyle('--cui-body-color'),
                },
              },
            },
            scales: {
              x: {
                grid: {
                  color: getStyle('--cui-border-color-translucent'),
                },
                ticks: {
                  color: getStyle('--cui-body-color'),
                },
              },
              y: {
                grid: {
                  color: getStyle('--cui-border-color-translucent'),
                },
                ticks: {
                  color: getStyle('--cui-body-color'),
                },
              },
            },
          }}
        />
      </CCardBody>
    </>
  )
}
export default WidgetBarChart
