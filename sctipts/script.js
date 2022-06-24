/** @format */

let buttonElement;

async function loadEvent(button) {
    await new Promise((resolve, reject) => {
            let rootElement = document.getElementById(`root`);

            rootElement.innerHTML = `<button>Press Start </button>`;
            //button = document.querySelector(`button`);
            console.log(button);
            if (!button) {
                console.log(button);
                reject(rootElement, `Cannot find button`);
            }
            resolve(button);
        })
        .then((res) => {
            console.log(res, 2);
        })
        .catch((rej, msg) => {
            console.log(rej, msg);
            rej.innerHTML = `<button>${msg}</button>`;
        });
}

const flexChilds = document.querySelectorAll(`.flex-child`);

async function windowEvent() {
    await window.addEventListener(`load`, loadEvent(buttonElement));
}

windowEvent();

//#region CALLBACK
function thisIsCallBack() {
    console.log(`I am called`);
}

function callThisFirst(anyCallbackFunction) {
    anyCallbackFunction();
}

// callThisFirst(thisIsCallBack);
//#endregion