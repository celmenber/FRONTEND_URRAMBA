/* eslint-disable no-array-constructor */
/* eslint-disable prettier/prettier */

import * as moment from 'moment'
export const FormatoFecha = (fech) => {
 const fecha = moment(fech).format('DD/MM/YYYY')
  return fecha
}

export const FormatoHora = (hora) => {
      var strTime = moment(hora, 'H:m').format('h:mm a');
    return strTime
}

export const FormatoHoy = () => {
  var strTime = moment(new Date()).format('YYYY-MM-DD');
  return strTime
}
export const FormatoLargaHoy = () => {
  var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
  var f=new Date();
  var fechoy= f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
  return fechoy
 }

export const getEdad = (dateString) => {
      let hoy = new Date()
      let fechaNacimiento = new Date(dateString)
      let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
      let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
      if (
        diferenciaMeses < 0 ||
        (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
      ) {
        edad--
      }
      return edad
}
