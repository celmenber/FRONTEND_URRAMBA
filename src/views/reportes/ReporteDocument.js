import React, { useEffect, useState } from 'react'
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer'
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
  text: {
    fontSize: 12,
  },
})

const ReporteDocument = (Props) => {
  //const [datos, setDatos] = useState([])
  const { DataJH, DataMH, Item, ID } = Props
  //console.log(DataMH)
  //console.log(DataMH.filter((X) => parseInt(X.ID) === parseInt(Item)))

  const Dato =
    Item !== 0
      ? DataMH.filter((X) => parseInt(X.ID) === parseInt(Item))
      : DataJH.filter((X) => parseInt(X.ID) === parseInt(ID))

  //DataJH.filter((X) => parseInt(X.ID) === parseInt(ID))

  /* useEffect(() => {
    setDatos(
      Item !== 0
        ? DataMH.filter((X) => parseInt(X.ID) === parseInt(Item))
        : DataJH.filter((X) => parseInt(X.ID) === parseInt(ID)),
    ) */

  //const Dato = datos
  // eslint-disable-next-line
 // }, [Item,ID])


  //console.log(Dato)

  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Hello {`${Dato[0]?.nombres} ${Dato[0]?.apellidos}`} </Text>
          </View>
          <View style={[styles.section, styles.text]}>
            <Text>
              This will produce a PDF document with a single page. Inside, two different blocks,
              each of them rendering a different text. These are not the only valid primitives you
              can use. Please refer to the Components or Examples sections for more information.
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}
export default ReporteDocument
