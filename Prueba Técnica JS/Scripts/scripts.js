
let aLBoton = document.querySelector(".mainIndex__button");
aLBoton.addEventListener("click", añadirALista);

function añadirALista() {
    const inputContenido = document.querySelector(".mainIndex__input").value;

    const lista = document.querySelector(".mainIndex__list");

    const listaItem = document.createElement(`li`);
    listaItem.className += "mainIndex__list__li";
    listaItemCont = `
        ${inputContenido}<button class="mainIndex__list__li__button">X</button>
    `;
    
    listaItem.innerHTML = listaItemCont;

    lista.append(listaItem);
    listaItem.querySelector(".mainIndex__list__li__button").addEventListener("click", eliminarDeLista);
}

function eliminarDeLista(event) {
    let eliminarBoton = event.target;
    eliminarBoton.closest(".mainIndex__list__li").remove();
}