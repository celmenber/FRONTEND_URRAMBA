/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { Chart } from 'react-google-charts'
import { JefeHogarForm } from 'src/hooks'

export const data = [
  ["Element", "Density", { role: "style" }],
  ["Copper", 8.94, "#b87333"], // RGB value
  ["Silver", 10.49, "silver"], // English color name
  ["Gold", 19.3, "gold"],
  ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
];

export const Nucleofamiliar = () => {
  const { obtenerJefeHogar, jefeHogar } = JefeHogarForm()


    useEffect(() => {
    obtenerJefeHogar()
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    //obtenerNucleoFamiliar()
    // eslint-disable-next-line
  }, []);

    const NumCorreg_Flia1 = jefeHogar?.filter((J) => J.id_corregimiento === 1)
    const NumCorreg_Flia2 = jefeHogar?.filter((J) => J.id_corregimiento === 2)
    const NumCorreg_Flia3 = jefeHogar?.filter((J) => J.id_corregimiento === 3)
    const NumCorreg_Flia4 = jefeHogar?.filter((J) => J.id_corregimiento === 4)
    const NumCorreg_Flia5 = jefeHogar?.filter((J) => J.id_corregimiento === 5)
    const NumCorreg_Flia6 = jefeHogar?.filter((J) => J.id_corregimiento === 6)
    const NumCorreg_Flia7 = jefeHogar?.filter((J) => J.id_corregimiento === 7)


 const data = [
                  ['Corregimientos', 'Familias', {role:'style'}],
                  ['Las Flores', NumCorreg_Flia1.length+21,"#FFF455"],
                  ['Campana', NumCorreg_Flia2.length+22, "#219C90"],
                  ['La Punta de los remedios', NumCorreg_Flia3.length+12, "#102C57"],
                  ['Mingueo', NumCorreg_Flia4.length+27, "#9BEC00"],
                  ['Rio ancho', NumCorreg_Flia5.length+121,'#55AD9B'],
                  ['Palomino', NumCorreg_Flia6.length+215, '#EF9C66'],
                  ['Cabecera Municipal', NumCorreg_Flia7.length+211, '#3572EF'],
               ]

const options = {};

  return <Chart chartType="ColumnChart" width="100%" height="400px" data={data} options={options} />
}
