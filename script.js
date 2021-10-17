const billInput = document.querySelector('#billInput')
const percentButtons = document.querySelectorAll('.percentButton')
const customInput = document.querySelector('#customInput')
const numberOfPeopleInput = document.querySelector('#numberOfPeopleInput')
const resetButton = document.querySelector('#resetButton')
const tipAmount = document.querySelector('.tipNumber')
const totalAmount = document.querySelector('.amountNumber')

let tipPercent

percentButtons.forEach (button => {
    button.addEventListener('click', () => {
        percentButtonClear()
        button.classList.toggle('active')
        customInput.value = ""

        switch (button.id) {
            case '5P':
                tipPercent = 0.05
                break
            case '10P':
                tipPercent = 0.1
                break
            case '15P':
                tipPercent = 0.15
                break
            case '25P':
                tipPercent = 0.25
                break
            case '50P':
                tipPercent = 0.5
                break
        }

        calculateStuff()
    })
})

billInput.addEventListener('input', () => {
    calculateStuff()
})

customInput.addEventListener('input', () => {
    percentButtonClear()
    tipPercent = customInput.value/100
    calculateStuff()
})

numberOfPeopleInput.addEventListener('input', () => {
    calculateStuff()
})

resetButton.addEventListener('click', () => {
    percentButtonClear()
    billInput.value = ''
    customInput.value = ''
    numberOfPeopleInput.value = ''
    calculateStuff()
})

function percentButtonClear() {
    Array.from(percentButtons).forEach(percBut => {
        percBut.classList.remove('active')
    })
}

function calculateStuff() {
    if (tipPercent != '' &&
        billInput.value != '' &&
        numberOfPeopleInput.value != '' &&
        numberOfPeopleInput.value > 0) {
            tipAmount.innerText = '$' + (billInput.value * tipPercent).toFixed(2)
            totalAmount.innerText = '$' + ((parseInt(billInput.value) + (billInput.value * tipPercent)) / numberOfPeopleInput.value).toFixed(2)
        } else {
            tipAmount.innerText = ''
            totalAmount.innerText = ''
        }
}