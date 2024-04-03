// Recuperando dados do LocalStorage
const total = localStorage.getItem("vTotal");
const qTotal = localStorage.getItem("qtotal");
const vIngresso = localStorage.getItem("vIngresso");
const qIngresso = localStorage.getItem("qIngresso");
const vPipoca = localStorage.getItem("vPipoca");
const qPipoca = localStorage.getItem("qPipoca");
const vRefri = localStorage.getItem("vRefri");
const qRefri = localStorage.getItem("qRefri");
const assentos = localStorage.getItem("assentos");
const selecionado = localStorage.getItem("selecionado");
const celulasTd = document.getElementsByTagName("td");

console.log(selecionado);

//pegando tag
const quantAssento = document.getElementById("n-ingressos");
const precoIngresso = document.getElementById("valor-ingressos");
const qPipocas = document.getElementById("n-pipocas");
const pPipocas = document.getElementById("valor-pipocas");
const qRefris = document.getElementById("n-refris");
const pRefris = document.getElementById("valor-refris");
const nTotal = document.getElementById("n-total");
const vTotal = document.getElementById("valor-total");
const assentosTag = document.getElementById("assentos");
const imagem = document.getElementById("imagem");
const pix = document.getElementById("pix");
const feito = document.getElementById("feito");

//adicionando no html

qPipocas.textContent = qPipoca;
pPipocas.textContent = "R$" + vPipoca + ",00";

qRefris.textContent = qRefri;
pRefris.textContent = "R$" + vRefri + ",00";

quantAssento.textContent = qIngresso;
precoIngresso.textContent = "R$" + vIngresso + ",00";

vTotal.textContent = "R$" + total + ",00";
nTotal.textContent = qTotal;
assentosTag.textContent = assentos;

//inserindo imagem apartir do click
pix.addEventListener("click", function () {
  if (imagem.style.display === "none") {
    imagem.style.display = "block";
    imagem.src = "./qrcode.jpg";
    imagem.alt = " QrCode para efetuar o pix";
  } else {
    imagem.style.display = "none";
  }
});

feito.addEventListener("click", () =>{
    window.location.href = "index.html";
}


)
