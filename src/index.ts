rotulo.innerHTML = "Ingrese la posición de llegada del competidor: ";

let posicionLlegada: number = dato.value;
btnverif.addEventListener("click", () => {
  let posicionLlegada: number = dato.value;
  if (posicionLlegada == 1) {
    console.log("Entregar medalla de oro");
  } else {
    if (posicionLlegada == 2) {
      console.log("Entregar medalla de plata");
    } else {
      if (posicionLlegada == 3) {
        console.log("Entregar medalla de bronce");
      } else {
        console.log("Entregar mención de participación");
      }
    }
  }
});
