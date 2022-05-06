rotulo.innerHTML = "Ingrese la posición de llegada del competidor: ";

let dato = document.getElementById("dato");
let btnverif = document.getElementById("btnverif");

btnverif.addEventListener("click", () => {
  let posicionLlegada: number = Number(dato.value);
  switch (posicionLlegada) {
    case 1:
      posicionLlegada === 1;
      console.log("Entregar medalla de oro");
      break;
    case 2:
      posicionLlegada === 2;
      console.log("Entregar medalla de plata");
      break;
    case 3:
      posicionLlegada === 3;
      console.log("Entregar medalla de bronce");
      break;
    default:
      console.log("Entregar mención de participación");
  }
});
