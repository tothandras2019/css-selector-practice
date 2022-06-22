/** @format */

async function loadEvent() {
    console.log(`Loaded`);
    let rootElement = document.getElementById(`root`);

    rootElement.innerHTML = `<button>Press Start </button>`;
    console.log(document.querySelector(`button`));
}

console.log(document.querySelector(`button`));

const flexChilds = document.querySelectorAll(`.flex-child`);
// console.log(...flexChilds);

window.addEventListener(`load`, loadEvent);

//#region CALLBACK
function thisIsCallBack() {
    console.log(`I am called`);
}

function callThisFirst(anyCallbackFunction) {
    anyCallbackFunction();
}

callThisFirst(thisIsCallBack);
//#endregion