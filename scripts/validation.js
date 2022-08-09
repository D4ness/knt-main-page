const isModifierKey = (event) => {
    const key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36) || // Разрешает использовать Shift, Home, End
        (key === 8 || key === 9 || key === 13 || key === 46) || // Backspace, Tab, Enter, Delete
        (key > 36 && key < 41) || // left, up, right, down
        (
            (event.ctrlKey === true || event.metaKey === true) &&            // Ctrl/Win/Command + A,C,V,X,Z
            (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
        )
};
const isNumericInput = (e) => {
    const key = e.keyCode;
    return ((key >= 48 && key <= 57) ||
        (key >= 96 && key <= 105) // Numpad
    );
};
const isLatinLetterInput = (e) => {
    const key = e.keyCode;
    return ((key >= 65 && key <= 90));
}
const deleteWrongNumberSymbols = (e) => {
    const key = e.keyCode;
    if (!isNumericInput(e) &&
        !((key === 8 || key === 9 || key === 13 || key === 46) ||
            (key > 36 && key < 41))) {
        e.preventDefault();
    }
};
const deleteWrongPassSymbols = (e) => {
    if (!isLatinLetterInput(e) && !isNumericInput(e) && !isModifierKey(e)) {
        e.preventDefault();
    } else if (e.key.match(/^[а-яеЁА-Я]$/)) {
        e.preventDefault();
        const alertPass = document.querySelector('.alert_pass');
        alertPass.classList.add('active');
        setTimeout(() => {
            alertPass.classList.remove('active')
        }, 4000)
    }
}
const deleteWrongNameSymbols = (e) => {
    const alertName = document.querySelector('.alert_name');
    if (!e.key.match(/^[а-яеЁА-Я ]$/) && !isModifierKey(e)) {
        e.preventDefault();
        alertName.classList.add('active');
        setTimeout(() => {
            alertName.classList.remove('active')
        }, 4000)
    }
};


const formatToPhone = (event) => {
    if (isModifierKey(event)) {
        return;
    }
    const input = event.target.value.replace('7', '').replace(/\D/g, '').substring(0, 11); // First ten digits of input only
    const code = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last1 = input.substring(6, 8);
    const last2 = input.substring(8, 10);
    if (input.length > 8) {
        event.target.value = `+7(${code}) ${middle}-${last1}-${last2}`;
    } else if (input.length > 6) {
        event.target.value = `+7(${code}) ${middle}-${last1}`;
    } else if (input.length > 3) {
        event.target.value = `+7(${code}) ${middle}`;
    } else if (input.length > 0) {
        event.target.value = `+7(${code}`;
    }
};

const number1 = document.getElementsByClassName('recruit__input')[0];
number1.addEventListener('keydown', deleteWrongNumberSymbols);
number1.addEventListener('keyup', formatToPhone);
const number2 = document.getElementsByClassName('check__input')[0];
number2.addEventListener('keydown', deleteWrongNumberSymbols);
number2.addEventListener('keyup', formatToPhone);
const number3 = document.getElementsByClassName('questions__tel')[1];
number3.addEventListener('keydown', deleteWrongNumberSymbols);
number3.addEventListener('keyup', formatToPhone);
const numberModal = document.getElementsByClassName('questions__tel')[0];
numberModal.addEventListener('keydown', deleteWrongNumberSymbols);
numberModal.addEventListener('keyup', formatToPhone);

// const inputPass = document.querySelector('.login__pass_pass');
// inputPass.addEventListener('keydown', deleteWrongPassSymbols);
//
// const inputName = document.querySelector('.login__pass_name');
// inputName.addEventListener('keydown', deleteWrongNameSymbols);



