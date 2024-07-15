
const key = "5b100fe42853aeb6ca1103c5b270dc3f"

function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".tempo").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".text-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
   // document.querySelector(".icon-do-tempo").scr = `${dados.weather[0].icon}.png`
   // mudança de imagem conforme o tempo for mudando também porém minha imagem ta cagada então não funciona 
}

//esse async pra baixo junto com await e o fetch são para buscas em API 
async function buscarCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`). then( response => response.json())

    colocarDadosNaTela(dados)
}

function clickNoBotao(){
    const cidade = document.querySelector(".input-cidade"). value

    buscarCidade(cidade)
}