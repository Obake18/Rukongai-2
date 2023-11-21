const divCaso = document.querySelector("#idCaso")
divCaso.innerHTML = registro.map(({ nomeCaso, data,id }) => card({
    nomeCaso: nomeCaso,
    data: data,
    id : id,
}))
document.querySelectorAll(".card").forEach((card) => card.addEventListener("click", (card) => console.log(card.target)))
console.log(divCaso)