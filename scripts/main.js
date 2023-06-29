const keyApi = "bc8c1f24c2de68fd706c66e59058eb51"
let botaoBuscar = document.querySelector(".buscar__cidade")
let titulo = document.querySelector(".titulo__cidade")
let temperatura = document.querySelector(".temperatura")
let imgIcon = document.querySelector(".icone__tempo")
let nuvens = document.querySelector(".nuvens")
let umidade = document.querySelector(".umidade")

let cidade = null

botaoBuscar.addEventListener("click", () => {
  let dados = document.querySelector(".input__cidade").value
  cidade = dados
  buscarCidade()

})

// Toda vez que acessar um servidor deve usar async e await para esperar até que o servidor responda
async function buscarCidade() {
  let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${keyApi}&lang=pt_br&units=metric`).then(resposta => resposta.json())
  titulo.innerHTML = "Tempo em " + dados.name
  temperatura.innerHTML = Math.round(dados.main.temp) + "ºC"
  imgIcon.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
  nuvens.innerHTML = dados.weather[0].description
  umidade.innerHTML = "Umidade: " + dados.main.humidity + "%"
}