const form = document.getElementById("novoItem")
// escutando a interação com o formulario e apos a ação submit, execute a função
form.addEventListener("submit", (evento) => {
  // Previnindo o evento padrão do formulario
  evento.preventDefault()
  criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value )
})

function criaElemento(nome,quantidade){
  console.log(nome)
  console.log(quantidade)

  //criar um novo item.
  const novoItem = document.createElement('li')
  novoItem.classList.add("item")

  const numeroItem = createElement('strong')
  numeroItem.innerHTML = quantidade
// para adicionar um elemento dentro de outro
  novoItem.appendChild(numeroItem)
  novoItem.innerHTML += nome
 console.log(novoItem)
}