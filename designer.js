function card (props) {
    return ` <div
    class="card" id = '${props.id}'>
      <img src="imagens/teketeke.png" />
  
      <div class="div-titulo">
        <h1 class="titulo">${props.nomeCaso}</h1>
  
      </div>
  
      <div class="div-descricao">
        <h2 class="descricao">${props.data}</h2>
      </div>
    </div> `
}