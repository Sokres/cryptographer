let inputCeaser = document.querySelector('.inputCaesar');
let keyCaesar = document.querySelector('.keyCaesar');
let encryptionBtn = document.querySelector('.inputCaesar--encryption');
let decryptionBtn = document.querySelector('.inputCaesar--decryption');
let textCaesar = document.querySelector('.textCaesar');
let arr = [];

encryptionBtn.addEventListener('click', () => {
    encryptionCeaser(inputCeaser.value, Number(keyCaesar.value))
})
decryptionBtn.addEventListener('click', () => {
    decryptionCeaser(inputCeaser.value, Number(keyCaesar.value))
})

function encryptionCeaser(array, keyCeaser) {
    arr = [];
    if (array == ''){
        textCaesar.innerHTML = 'Введите Фразу';
    }
    else if (keyCeaser == ''){
        textCaesar.innerHTML = 'Введите Ключ';
    }
    else{
        for (let i = 0; i < array.length; i++) {
            if (array[i] != undefined) {
                let arrayPlus = array[i].charCodeAt() + keyCeaser;
                let arrayForm = String.fromCharCode(arrayPlus);
                arr += arrayForm;
                textCaesar.innerHTML = arr;
            }
        }
    }

}
function decryptionCeaser(array, keyCeaser) {
    arr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] != undefined) {
            let arrayPlus = array[i].charCodeAt() - keyCeaser;
            let arrayForm = String.fromCharCode(arrayPlus);
            arr += arrayForm;
            textCaesar.innerHTML = arr;
        }
    }
}

let inputXor = document.querySelector('.inputXor');
let keyXor = document.querySelector('.keyXor');
let encryptXotBtn = document.querySelector('.inputXor--encryption');
let decryptXotBtn = document.querySelector('.inputXor--decryption');
let textXor = document.querySelector('.textXor');
let arrXor = []

encryptXotBtn.addEventListener('click', () => {
    encryptionXor(inputXor.value, keyXor.value)
})
// decryptXotBtn.addEventListener('click', () => {
//     decryptionXor(inputXor.value, Number(keyXor.value))
// })
//Необходмо дробить сообщение на части равные ключу
function encryptionXor(array, keyCeaser) {
    arrXor = ''
    if (array == ''){
        textXor.innerHTML = 'Введите Фразу';
    }
    else if (keyCeaser == ''){
        textXor.innerHTML = 'Введите Ключ';
    }
    else{
        for (let i = 0; i < array.length; i++) {
            if (array[i] != undefined && keyCeaser[i] != undefined) {
                console.log(array[i].charCodeAt() ^ keyCeaser[i].charCodeAt())
                let arrayPlus = array[i].charCodeAt() ^ keyCeaser[i].charCodeAt();
                let arrayForm = String.fromCharCode(arrayPlus);
                console.log(arrayForm)
                arrXor += arrayForm;
                textXor.innerHTML =  arrXor;
            }
        }
    }

}
// function decryptionXor(array, keyCeaser) {
//     arr = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] != undefined) {
//             let arrayPlus = array[i].charCodeAt() - keyCeaser;
//             let arrayForm = String.fromCharCode(arrayPlus);
//             arr += arrayForm;
//             textCaesar.innerHTML = arr;
//         }
//     }
// }