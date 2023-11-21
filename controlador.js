const divCaso = document.querySelector("#idCaso")
divCaso.innerHTML = registro.map(({ nomeCaso, data, id }) => card({
    nomeCaso: nomeCaso,
    data: data,
    id: id,
}))
document.querySelectorAll(".card").forEach((card) => card.addEventListener("click", () => getPai(card.id)))


function getPai(id) {
    console.log(id)
      window.location.href = "page.html";
    
  
}