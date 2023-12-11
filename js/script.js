// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")

const mpTitle = document.querySelector("#multiplication-title span")

const multiplicationTable = document.querySelector("#multiplication-operations")

// Funçôes
const createTable = (number, multiplicatorNumber)=> {

    console.log(number, multiplicatorNumber)

    multiplicationTable.innerHTML = "";

    for(let i = 1; i <= multiplicatorNumber; i++){
        const resul = number * i
        console.log(resul)

        const template = `<div class="row">
            <div class="opetation"> ${number} x ${i} = </div>
            <div class="resul">${resul}</div>
            </div>`;

            const parser = new DOMParser()
            const htmlTemplate = parser.parseFromString(template,"text/html")

            const row = htmlTemplate.querySelector(".row")

            multiplicationTable.appendChild(row)

    }

    mpTitle.innerText = number;
}

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicatorNumber)return
    
    createTable(multiplicationNumber,multiplicatorNumber)
})