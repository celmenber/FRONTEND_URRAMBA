import React, { useEffect, useState } from 'react'
import { Document, Page, Text, View, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer'
import avatar from 'src/assets/images/avatars/logo.png'
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
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald',
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald',
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },
  image: {
    marginVertical: 1,
    marginHorizontal: 1,
    width: 524,
  },
  headerImage: {
    marginTop: -15,
    textAlign: 'left',
    fontSize: 24,
  },
  header: {
    fontSize: 14,
    textAlign: 'center',
    color: 'grey',
  },
})

const ReporteDocument = (Props) => {
  //const [datos, setDatos] = useState([])
  const { DataJH, DataMH, Item, ID } = Props

  const Dato =
    Item !== 0
      ? DataMH.filter((X) => parseInt(X.ID) === parseInt(Item))
      : DataJH.filter((X) => parseInt(X.ID) === parseInt(ID))

  //console.log(Dato)

  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.header}>Certificado comunidades Afro</Text>
            <Text style={styles.headerImage}>
              <Image style={styles.image} src={avatar} />
            </Text>

            <Text>Hello {`${Dato[0]?.nombres} ${Dato[0]?.apellidos}`}</Text>
          </View>
          <View style={[styles.section, styles.text]}>
            <Text style={styles.text}>
              En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que
              vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo
              corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y
              quebrantos los sábados, lentejas los viernes, algún palomino de añadidura los
              domingos, consumían las tres partes de su hacienda. El resto della concluían sayo de
              velarte, calzas de velludo para las fiestas con sus pantuflos de lo mismo, los días de
              entre semana se honraba con su vellori de lo más fino. Tenía en su casa una ama que
              pasaba de los cuarenta, y una sobrina que no llegaba a los veinte, y un mozo de campo
              y plaza, que así ensillaba el rocín como tomaba la podadera. Frisaba la edad de
              nuestro hidalgo con los cincuenta años, era de complexión recia, seco de carnes,
              enjuto de rostro; gran madrugador y amigo de la caza. Quieren decir que tenía el
              sobrenombre de Quijada o Quesada (que en esto hay alguna diferencia en los autores que
              deste caso escriben), aunque por conjeturas verosímiles se deja entender que se llama
              Quijana; pero esto importa poco a nuestro cuento; basta que en la narración dél no se
              salga un punto de la verdad
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}
export default ReporteDocument
