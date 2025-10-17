// Funció per a modificar el contingut d'un element HTML
function canviaText() {
  document.getElementById("textExample").innerHTML =
    "El text ha sigut modificat correctament!";
}

function canviaImatge() {
  let imatge = document.getElementById("myImage");
  imatge.setAttribute("src", "assets/img2.png");
  imatge.setAttribute("alt", "Imatge modificada amb JavaScript");
}
