//variaveis com informação do html

const celulasTd = document.getElementsByTagName("td");
const assentos = document.getElementById("assentos");
const celulaAdd = document.getElementsByClassName("adicionar");
const celulaRemover = document.getElementsByClassName("retirar");
const quantAssento = document.getElementById("n-ingressos");
const precoIngresso = document.getElementById("valor-ingressos");
const qPipocas = document.getElementById("n-pipocas");
const pPipocas = document.getElementById("valor-pipocas");
const qRefris = document.getElementById("n-refris");
const pRefris = document.getElementById("valor-refris");
const nTotal = document.getElementById("n-total");
const vTotal = document.getElementById("valor-total");
const finalizar = document.getElementById("finalizar");

//variaveis globais
const vazio = [];
const ocupado = [];
const selecionado = [];
let salvo = null;
let pipocaQuant = 0;
let pipocaPreco = 0;
let refriQuant = 0;
let refriPreco = 0;
let total = 0;
let qTotal = 0;
let valorIngresso = 0;
let quantIngresso = 0;

let ocupadoSalvo = localStorage.getItem("ocupado");
if (ocupadoSalvo !== null) {
  const getSelecionado = localStorage.getItem("ocupado");
  if (getSelecionado != null && getSelecionado != "") {
    const arraySelecionado = getSelecionado.split(", ");
    for (let i = 0; i < celulasTd.length - 13; i++) {
      for (let s = 0; s < arraySelecionado.length; s++) {
        if (celulasTd[i].textContent == arraySelecionado[s]) {
          celulasTd[i].innerHTML = "<s>" + arraySelecionado[s] + "</s>";
          console.log(celulasTd[i].innerHTML);
          console.log(arraySelecionado);
        }
      }
    }
  }
}

//adicionando as classes do css no html
// e fazendo a escolha do assento
// if (ocupadoSalvo == "") {
//   for (let i = 0; i < ocupadoSalvo.length; i++) {
//     if (ocupadoSalvo[i].innerHTML.includes("<s>")) {
//       celulasTd[i].innerHTML = celulasTd[i].textContent;
//       ocupado.push(celulasTd[i]);
//       celulasTd[i].classList.add("ocupado");
//     }
//   }
// }

for (let i = 0; i < celulasTd.length - 13; i++) {
  if (celulasTd[i].textContent == "") {
    vazio.push(celulasTd[i]);
    celulasTd[i].classList.add("vazio");
  } else if (celulasTd[i].innerHTML.includes("<s>")) {
    celulasTd[i].innerHTML = celulasTd[i].textContent;
    ocupado.push(celulasTd[i]);
    celulasTd[i].classList.add("ocupado");
  } else {
    celulasTd[i].classList.add("disponivel");
    celulasTd[i].addEventListener("click", () => {
      celulasTd[i].classList.toggle("disponivel");

      valorIngresso = 0;
      quantIngresso = 0;
      assentos.textContent = "";
      for (let i = 0; i < 120; i++) {
        if (celulasTd[i].classList.value == "") {
          assentos.textContent += celulasTd[i].textContent + ", ";
          quantIngresso++;
          valorIngresso += 15;
        }
        quantAssento.textContent = quantIngresso;
        precoIngresso.textContent = "R$" + valorIngresso + ",00";
        total = valorIngresso;
        qTotal = quantIngresso;
        vTotal.textContent = "R$" + total + ",00";
        nTotal.textContent = qTotal;
      }
    });
  }
}

//pegar so os elementos com pipoca e bebida

celulaAdd[0].addEventListener("click", () => {
  pipocaQuant++;
  pipocaPreco += 10;
  total += 10;
  qTotal++;
  qPipocas.innerText = pipocaQuant;
  pPipocas.innerText = "R$" + pipocaPreco + ",00";
  vTotal.textContent = "R$" + total + ",00";
  nTotal.textContent = qTotal;
});

celulaAdd[1].addEventListener("click", () => {
  refriQuant++;
  refriPreco += 4;
  total += 4;
  qTotal++;
  qRefris.innerText = refriQuant;
  pRefris.innerText = "R$" + refriPreco + ",00";
  vTotal.textContent = "R$" + total + ",00";
  nTotal.textContent = qTotal;
});

celulaRemover[0].addEventListener("click", () => {
  if (pipocaQuant - 1 >= 0) {
    pipocaQuant--;
    pipocaPreco -= 10;
    total -= 10;
    qTotal--;
    qPipocas.innerText = pipocaQuant;
    pPipocas.innerText = "R$" + pipocaPreco + ",00";
    vTotal.textContent = "R$" + total + ",00";
    nTotal.textContent = qTotal;
  }
});

celulaRemover[1].addEventListener("click", () => {
  if (refriQuant - 1 >= 0) {
    refriQuant--;
    refriPreco -= 4;
    total -= 4;
    qTotal;
    qRefris.innerText = refriQuant;
    pRefris.innerText = "R$" + refriPreco + ",00";
    vTotal.textContent = "R$" + total + ",00";
    nTotal.textContent = qTotal;
  }
});

//salvar informação no site
finalizar.addEventListener("click", () => {
  if (ocupadoSalvo !== null) {
    ocupadoSalvo += assentos.textContent;
    console.log("1");
  } else {
    ocupadoSalvo = assentos.textContent;
    console.log("2");
  }
  localStorage.setItem("ocupado", ocupadoSalvo);
  localStorage.setItem("vTotal", total);
  localStorage.setItem("qtotal", qTotal);
  localStorage.setItem("qIngresso", quantIngresso);
  localStorage.setItem("vIngresso", valorIngresso);
  localStorage.setItem("assentos", assentos.textContent);
  localStorage.setItem("qRefri", refriQuant);
  localStorage.setItem("vRefri", refriPreco);
  localStorage.setItem("qPipoca", pipocaQuant);
  localStorage.setItem("vPipoca", pipocaPreco);
  window.location.href = "finalizar.html";
});

function assentosSelecionados() {
  for (let i = 0; i < celulasTd.length - 13; i++) {
    if (celulasTd[i].classList.value == "") {
      selecionado.push(celulasTd[i].innerText);
      console.log(celulasTd[i].innerText);
    }
  }
  return selecionado;
}

// // funcao menu
// function menu() {
//   const escolha = window.prompt(`
//     Bem vindo ao 🍿CineTech🍿. Escolha uma das opções abaixo:
//     [1] - Comprar ingresso - R$ 35,00;
//     [2] - Comprar refrigerante - R$ 12,00;
//     [3] - Comprar pipoca - R$ 15,00;
//     [4] - Finalizar compra;
//     `);

//   if (escolha == 1) {
//     assento();
//     setTimeout(() => {
//       menu();
//     }, 500);
//   } else if (escolha == 2) {
//     refri();
//     setTimeout(() => {
//       menu();
//     }, 500);
//   } else if (escolha == 3) {
//     pipoca();
//     setTimeout(() => {
//       menu();
//     }, 500);
//   } else if (escolha == 4) {
//     finalizar();
//     setTimeout(() => {
//       menu();
//     }, 500);
//   }
// }

// //listas
// let ListaAssento = ["a", "b", "c", "d", "e", "f"];
// const ListaNumeroA = [];
// const ListaNumeroB = [];
// const ListaNumeroC = [];
// const ListaNumeroD = [];
// const ListaNumeroE = [];
// const ListaNumeroF = [];
// const tableAssento = document.getElementsByTagName("table")[0];

// console.log(tableAssento);
// const colunaLetra = "a";
// const linhaNumero = "1";
// // if (tableAssento.children[0].children[1].children[6].children[0] != "") {sss
// //   console.log(tableAssento.children[0].children[2].children[6].innerText);
// // }

// function assento() {
//   const s = document.getElementsByTagName("s");
//   //assendo
//   let assento = window.prompt("Qual assendo você deseja comprar");
//   let assentoPosicao = ListaAssento.indexOf(assento.toLowerCase());
//   while (assentoPosicao < 0) {
//     window.alert("Insira apenas assentos que existe");
//     assento = window.prompt("Qual assendo você deseja comprar");
//     assentoPosicao = ListaAssento.indexOf(assento.toLowerCase());
//   }
//   //numero
//   let numero = window.prompt("Qual numero você deseja comprar");
//   if (assentoPosicao == 0) {
//     while (numero < 0 || numero > 6) {
//       window.alert("Insira apenas numero que existe");
//       numero = window.prompt("Qual numero você deseja comprar");
//     }
//   } else if (assentoPosicao == 1) {
//     while (numero < 0 || numero > 12) {
//       window.alert("Insira apenas numero que existe");
//       numero = window.prompt("Qual numero você deseja comprar");
//     }
//   } else if (assentoPosicao == 2) {
//     while (numero < 0 || numero > 16) {
//       window.alert("Insira apenas numero que existe");
//       numero = window.prompt("Qual numero você deseja comprar");
//     }
//   } else if (assentoPosicao == 3) {
//     while (numero < 0 || numero > 18) {
//       window.alert("Insira apenas numero que existe");
//       numero = window.prompt("Qual numero você deseja comprar");
//     }
//   } else if (assentoPosicao == 4) {
//     while (numero < 0 || numero > 20) {
//       window.alert("Insira apenas numero que existe");
//       numero = window.prompt("Qual numero você deseja comprar");
//     }
//   } else if (assentoPosicao == 5) {
//     while (numero < 0 || numero > 20) {
//       window.alert("Insira apenas numero que existe");
//       numero = window.prompt("Qual numero você deseja comprar");
//     }
//   }
//   for (let i = 0; i < s.length; i++) {
//     const texto =
//       tableAssento.children[0].children[assentoPosicao++].children[numero]
//         .innerText;
//     if (
//       tableAssento.children[0].children[assentoPosicao].children[numero] !=
//         "" ||
//       texto == s[i]
//     ) {
//       const s = document.createElement("s");
//       s.innerText = texto;
//       tableAssento.children[0].children[assentoPosicao].children[
//         numero
//       ].innerText = null;
//       tableAssento.children[0].children[assentoPosicao].children[
//         numero
//       ].appendChild(s);
//     } else {
//       console.log("erro");
//     }
//   }
// }

// // descomentar para realizar a chamada da funcao
// // setTimeout(() => {
// //   menu();
// // }, 500);
// menu();
