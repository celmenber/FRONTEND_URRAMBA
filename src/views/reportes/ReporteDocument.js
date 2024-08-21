/* eslint-disable no-array-constructor */
import React from 'react'
import { Document, Page, Text, View, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer'
import avatar from 'src/assets/images/avatars/logo.png'
import barrapie from 'src/assets/images/avatars/barrapie1.jpg'
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    color: '000',
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: '100%', //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Times-Roman',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 14,
    marginLeft: 12,
    fontFamily: 'Times-Roman',
  },
  subtitle2: {
    fontSize: 10,
    marginLeft: 12,
    color: 'grey',
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },
  text2: {
    fontSize: 14,
    marginTop: 80,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },
  image: {
    marginVertical: 1,
    marginHorizontal: 1,
    width: 500,
    textAlign: 'center',
  },
  footerimage: {
    marginVertical: 1,
    marginHorizontal: 1,
    width: 450,
    height: 250,
    textAlign: 'center',
  },
  headerImage: {
    textAlign: 'center',
    fontSize: 64,
    marginLeft: 100,
  },
  header: {
    fontSize: 12,
    marginTop: -12,
    textAlign: 'center',
    color: 'grey',
  },
  footer: {
    position: 'absolute',
    marginBottom: -80,
    fontSize: 12,
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
  footerImage: {
    marginVertical: 1,
    marginHorizontal: 1,
    width: 540,
    height: 250,
    textAlign: 'center',
  },
  footerImg: {
    position: 'absolute',
    marginBottom: -300,
    marginLeft: 0,
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: 'center',
  },
})

const ReporteDocument = (Props) => {
  const { DataJH, DataMH, DataAS, Item, ID } = Props

  const Dato =
    Item !== 0
      ? DataMH.filter((X) => parseInt(X.ID) === parseInt(Item))
      : DataJH.filter((X) => parseInt(X.ID) === parseInt(ID))

  var meses = new Array(
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  )
  var f = new Date()
  var fechoy = f.getDate() + ' del mes de ' + meses[f.getMonth()] + ' del año ' + f.getFullYear()

  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.headerImage}>
              <Image style={styles.image} src={avatar} />
            </Text>
            <Text style={styles.header}>900812074-4</Text>
          </View>
          <View style={[styles.section, styles.text]}>
            <Text style={styles.title}>LA ASOCIACION DE AFRODESCENDIENTES URRAMBA</Text>
            <Text style={styles.title}> CERTIFICA</Text>
            <Text style={styles.text}>
              Que: {`${Dato[0]?.nombres.toUpperCase()} ${Dato[0]?.apellidos.toUpperCase()}`}{' '}
              identificado con la {`${Dato[0]?.Tipo_documento}`} No.{`${Dato[0]?.documentos}`}, se
              auto reconoce como afrocolombiano y es miembro activo de la ASOCIACION DE
              AFRODESCENDIENTE URRAMBA “AFROURRAMBA” con una trayectoria de trabajo bastante amplia
              en todo el territorio por inscripción y auto reconocimiento en esta entidad con el
              cumplimiento de los principios éticos, morales y civiles.
            </Text>

            <Text style={styles.text}>
              {' '}
              La presente se expide a solicitud del interesado para fines personales el dia{' '}
              {`${fechoy}`} en, Dibulla - La Guajira.
            </Text>
          </View>
          <View style={[styles.section, styles.text]}>
            <Text style={styles.subtitle}>Atentamente.</Text>
            <Text style={styles.subtitle}>Representante Legal</Text>
          </View>
          <View style={[styles.section, styles.text2]}>
            <Text style={styles.subtitle}>__________________________________</Text>
            <Text style={styles.subtitle}>{DataAS[0]?.nom_rep_leg}</Text>
            <Text style={styles.subtitle2}>C.C.{DataAS[0]?.documento}</Text>
          </View>
          <View style={[styles.section]}>
            <Text style={styles.footerImg}>
              {' '}
              <Image style={styles.footerImage} src={barrapie} />
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}
export default ReporteDocument
