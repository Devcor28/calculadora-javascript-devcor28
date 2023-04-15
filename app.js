const botones = document.getElementsByClassName('btn');
const btn = Array.from(document.querySelectorAll('.btn'));
const display = document.querySelector('.display');

btn.forEach((botones)=> {
    botones.addEventListener('click',() => {
        general(display, botones);
    })
});

function general(display, botones) {
    switch (botones.innerHTML) {
        case 'C':
        borrar(display);
        break;
        case '=':
        calcular(display);
        break;
        default: actualizar(display, botones);
    }
}

function actualizar(display, botones) {
    if(display.innerHTML == 0) { 
        display.innerHTML ="";
    }
    display.innerHTML += botones.innerHTML;
    console.log(display.innerHTML);
}

function borrar(display) {
    if (display.innerHTML != 0) {
        display.innerHTML = 0;
    }
}
function calcular(display) {
    display.innerHTML = eval(display.innerHTML);
}