/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { Chart } from 'react-google-charts'
import { JefeHogarForm, AutoridadTForm } from 'src/hooks'


export const Charttodos = () => {
  const { obtenerJefeHogar, jefeHogar } = JefeHogarForm()


  const { obtenerAutoridadT, autoridadT } = AutoridadTForm()

    useEffect(() => {
    obtenerJefeHogar()
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    //obtenerNucleoFamiliar()
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    obtenerAutoridadT()
    // eslint-disable-next-line
  }, []);

    const NumCorreg_Flia1 = jefeHogar?.filter((J) => J.id_corregimiento === 1)
    const NumCorreg_Flia2 = jefeHogar?.filter((J) => J.id_corregimiento === 2)
    const NumCorreg_Flia3 = jefeHogar?.filter((J) => J.id_corregimiento === 3)
    const NumCorreg_Flia4 = jefeHogar?.filter((J) => J.id_corregimiento === 4)
    const NumCorreg_Flia5 = jefeHogar?.filter((J) => J.id_corregimiento === 5)
    const NumCorreg_Flia6 = jefeHogar?.filter((J) => J.id_corregimiento === 6)
    const NumCorreg_Flia7 = jefeHogar?.filter((J) => J.id_corregimiento === 7)


    const NumCorreg_AT1 = autoridadT?.filter((J) => J.id_corregimiento === 1)
    const NumCorreg_AT2 = autoridadT?.filter((J) => J.id_corregimiento === 2)
    const NumCorreg_AT3 = autoridadT?.filter((J) => J.id_corregimiento === 3)
    const NumCorreg_AT4 = autoridadT?.filter((J) => J.id_corregimiento === 4)
    const NumCorreg_AT5 = autoridadT?.filter((J) => J.id_corregimiento === 5)
    const NumCorreg_AT6 = autoridadT?.filter((J) => J.id_corregimiento === 6)
    const NumCorreg_AT7 = autoridadT?.filter((J) => J.id_corregimiento === 7)

  const data = [
                  ['Corregimientos', 'Familias', 'Concejos Comunitarios', 'Familias Caracterizadas',],
                  ['Las Flores', NumCorreg_Flia1.length+21, NumCorreg_AT1.length+90, 200],
                  ['Campana', NumCorreg_Flia2.length+22, NumCorreg_AT2.length+104, 250],
                  ['La Punta de los remedios', NumCorreg_Flia3.length+12, NumCorreg_AT3.length+58, 300],
                  ['Mingueo', NumCorreg_Flia4.length+27, NumCorreg_AT4.length+87, 350],
                  ['Rio ancho', NumCorreg_Flia5.length+121, NumCorreg_AT5.length+74, 250],
                  ['Palomino', NumCorreg_Flia6.length+215, NumCorreg_AT6.length+98, 300],
                  ['Cabecera Municipal', NumCorreg_Flia7.length+211, NumCorreg_AT7.length+21, 350],
               ]

const options = {
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

  return <Chart chartType="Bar" width="100%" height="400px" data={data} options={options} />
}
