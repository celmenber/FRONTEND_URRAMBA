/* eslint-disable prettier/prettier */
const dimensionIMG = ({ setValidadimension, FileLg, ancho, altura }) => {
  var Imagen = FileLg.files[0];

  if (FileLg.files.length === 0 || !(/\.(jpeg|jpg|png|JPEG|JPG|PNG)$/i).test(Imagen.name)) {

    setValidadimension(false)
    localStorage.setItem('testExt', false)

  } else {

    var img = new Image();
    img.onload = function () {
      
      if (this.width.toFixed(0) != ancho && this.height.toFixed(0) != altura) {
        setValidadimension(false)
      } else {
        setValidadimension(true)
      }
    };

    img.src = URL.createObjectURL(Imagen);

  }
}
export default dimensionIMG


export const dimensionICO = ({ setValidadimensionIco, FileLg, ancho, altura }) => {
  var Imagen = FileLg.files[0];

  if (FileLg.files.length === 0 || !(/\.(jpeg|jpg|png|JPEG|JPG|PNG)$/i).test(Imagen.name)) {

    setValidadimensionIco(false)
    localStorage.setItem('testExt', false)

  } else {

    var img = new Image();
    img.onload = function () {

      if (this.width.toFixed(0) != ancho && this.height.toFixed(0) != altura) {
        setValidadimensionIco(false)
      } else {
        setValidadimensionIco(true)
      }
    };

    img.src = URL.createObjectURL(Imagen);

  }
}
