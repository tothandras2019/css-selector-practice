/** @format */

let buttonElement = "1";

async function loadEvent() {
    console.log(`Loaded`);
    let rootElement = document.getElementById(`root`);

    rootElement.innerHTML = `<button>Press Start </button>`;
    buttonElement = await document.querySelector(`button`);
    console.log(buttonElement);
}

const flexChilds = document.querySelectorAll(`.flex-child`);
// console.log(...flexChilds);

window.addEventListener(`load`, loadEvent.bind(buttonElement));
console.log(buttonElement);

//#region CALLBACK
function thisIsCallBack() {
    console.log(`I am called`);
}

function callThisFirst(anyCallbackFunction) {
    anyCallbackFunction();
}

// callThisFirst(thisIsCallBack);
//#endregion