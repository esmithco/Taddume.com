const buttonOptions = document.querySelectorAll('.button-options');
const circle = document.querySelector('.circle');
const circle2 = document.querySelector('.circle-2');

let b1 = 0;
let b2 = 0;
let b3= 0;
let b4 = 0;
let b5 = 0;

/*para circulos */

const button4 = document.getElementById('button-4');
button4.addEventListener('click', circle4);
const button5 = document.getElementById('button-5');
button5.addEventListener('click', circle5);
const button1 = document.getElementById('button-1');
button1.addEventListener('click', circle1);
const button2 = document.getElementById('button-2');
button2.addEventListener('click', circle_2);

let isCircle4Visible = false;
let isCircle5Visible = false;
let isCircle1Visible = false;
let isCircle2Visible = false;


const mostrarPopUpButton = document.getElementById("pop-up");
const popUp = document.getElementById("popUp");
const popUp2 = document.getElementById("popUp2");
const diaSiguienteButton = document.getElementById("diaSiguiente");
const vervideoButton = document.getElementById("vervideo");
const cerrarPopUpButton = document.getElementById("cerrarPopUp");
const cerrarPopUpButton2 = document.getElementById("cerrarPopUp2");

mostrarPopUpButton.addEventListener("click", () => {
    if(b1+b2+b3+b4+b5 === 4) {
      popUp.classList.toggle('popdis');
    } else {
      popUp2.classList.toggle('popdis');
    }
    
});

cerrarPopUpButton.addEventListener("click", () => {
  popUp.classList.remove('popdis');
});

cerrarPopUpButton2.addEventListener("click", () => {
  popUp2.classList.remove('popdis');
});

function changeColor(id) {
  const cono = document.getElementById(id);
  cono.classList.toggle('color-cono');

  switch (id) {
    case 'c-uno':
      b1 = cono.classList.contains('color-cono') ? 1 : 0;
      break;
    case 'c-dos':
      b2 = cono.classList.contains('color-cono') ? 1 : 0;
      break;
    case 'c-tres':
      b3 = cono.classList.contains('color-cono') ? 1 : 0;
      break;
    case 'c-cuatro':
      b4 = cono.classList.contains('color-cono') ? 1 : 0;
      break;
    case 'c-cinco':
      b5 = cono.classList.contains('color-cono') ? 1 : 0;
      break;
    default:
      b1 = 0;
      b2 = 0;
      b3 = 0;
      b4 = 0;
      b5 = 0;
  }
}


function changeColorC(clas) {
  const boton = document.querySelector(clas);
  boton.classList.toggle('color-white');
  boton.classList.toggle('color-yellow');
}

function circle4() {
  b1 = 0;
  b2 = 0;
  b3 = 0;
  b4 = 0;
  b5 = 0;
  if (isCircle4Visible) {
    clearCircle();
    circle2.classList.remove('c-none');
    isCircle4Visible = false;
  } else {
    clearCircle();
    circle2.classList.add('c-none')
    
    const cono1 = document.createElement('div');
    cono1.classList.add('cono-4');
    cono1.classList.add('uno-4');
    cono1.setAttribute('id', 'uno');


    const cono2 = document.createElement('div');
    cono2.classList.add('cono-4');
    cono2.classList.add('dos-4');
    cono2.setAttribute('id', 'dos');
    cono2.addEventListener('click', () => {
      changeColor('dos');
    });

    const cono3 = document.createElement('div');
    cono3.classList.add('cono-4');
    cono3.classList.add('tres-4');
    cono3.setAttribute('id', 'tres');
    cono3.addEventListener('click', () => {
      changeColor('tres');
    });

    const cono4 = document.createElement('div');
    cono4.classList.add('cono-4');
    cono4.classList.add('cuatro-4');
    cono4.setAttribute('id', 'cuatro');
    cono4.addEventListener('click', () => {
      changeColor('cuatro');
    });

    const button1 = document.createElement('button');
    button1.classList.add('button-4');
    button1.classList.add('b4-uno');
    button1.addEventListener('click', () => {
      changeColor('uno');
    });

    const button2 = document.createElement('button');
    button2.classList.add('button-4');
    button2.classList.add('b4-dos');
    button2.addEventListener('click', () => {
      changeColor('dos');
    });

    const button3 = document.createElement('button');
    button3.classList.add('button-4');
    button3.classList.add('b4-tres');
    button3.addEventListener('click', () => {
      changeColor('tres');
    });

    const button4 = document.createElement('button');
    button4.classList.add('button-4');
    button4.classList.add('b4-cuatro');
    button4.addEventListener('click', () => {
      changeColor('cuatro');
    });

    const line1 = document.createElement('div');
    line1.classList.add('line');
    line1.classList.add('l4-1');

    const line2 = document.createElement('div');
    line2.classList.add('line');
    line2.classList.add('l4-2');

    const line3 = document.createElement('div');
    line3.classList.add('line');
    line3.classList.add('l4-3');

    const line4 = document.createElement('div');
    line4.classList.add('line');
    line4.classList.add('l4-4');

    circle.appendChild(cono1);
    circle.appendChild(cono2);
    circle.appendChild(cono3);
    circle.appendChild(cono4);

    circle.appendChild(button1);
    circle.appendChild(button2);
    circle.appendChild(button3);
    circle.appendChild(button4);

    circle.appendChild(line1);
    circle.appendChild(line2);
    circle.appendChild(line3);
    circle.appendChild(line4);

    isCircle4Visible = true;
    isCircle5Visible = false;
    isCircle1Visible = false;
    isCircle2Visible = false;
  }
}

function circle5() {
  b1 = 0;
  b2 = 0;
  b3 = 0;
  b4 = 0;
  b5 = 0;
  if (isCircle5Visible) {
    clearCircle();
    circle2.classList.remove('c-none');
    isCircle5Visible = false;
  } else {
    clearCircle();
    circle2.classList.add('c-none');

    const cono1 = document.createElement('div');
    cono1.classList.add('cono-5');
    cono1.classList.add('uno-5');
    cono1.setAttribute('id', 'c-uno');


    const cono2 = document.createElement('div');
    cono2.classList.add('cono-5');
    cono2.classList.add('dos-5');
    cono2.setAttribute('id', 'c-dos');

    const cono3 = document.createElement('div');
    cono3.classList.add('cono-5');
    cono3.classList.add('tres-5');
    cono3.setAttribute('id', 'c-tres');

    const cono4 = document.createElement('div');
    cono4.classList.add('cono-5');
    cono4.classList.add('cuatro-5');
    cono4.setAttribute('id', 'c-cuatro');

    const cono5 = document.createElement('div');
    cono5.classList.add('cono-5');
    cono5.classList.add('cinco-5');
    cono5.setAttribute('id', 'c-cinco');

    const button1 = document.createElement('button');
    button1.classList.add('button-5');
    button1.classList.add('b5-uno');
    button1.addEventListener('click', () => {
      changeColor('c-uno');
    });

    const button2 = document.createElement('button');
    button2.classList.add('button-5');
    button2.classList.add('b5-dos');
    button2.addEventListener('click', () => {
      changeColor('c-dos');
    });

    const button3 = document.createElement('button');
    button3.classList.add('button-5');
    button3.classList.add('b5-tres');
    button3.addEventListener('click', () => {
      changeColor('c-tres');
    });

    const button4 = document.createElement('button');
    button4.classList.add('button-5');
    button4.classList.add('b5-cuatro');
    button4.addEventListener('click', () => {
      changeColor('c-cuatro');
    });

    const button5 = document.createElement('button');
    button5.classList.add('button-5');
    button5.classList.add('b5-cinco');
    button5.addEventListener('click', () => {
      changeColor('c-cinco');
    });

    const line1 = document.createElement('div');
    line1.classList.add('line');
    line1.classList.add('l5-1');

    const line2 = document.createElement('div');
    line2.classList.add('line');
    line2.classList.add('l5-2');

    const line3 = document.createElement('div');
    line3.classList.add('line');
    line3.classList.add('l5-3');

    const line4 = document.createElement('div');
    line4.classList.add('line');
    line4.classList.add('l5-4');

    const line5 = document.createElement('div');
    line5.classList.add('line');
    line5.classList.add('l5-5');

    circle.appendChild(cono1);
    circle.appendChild(cono2);
    circle.appendChild(cono3);
    circle.appendChild(cono4);
    circle.appendChild(cono5);

    circle.appendChild(button1);
    circle.appendChild(button2);
    circle.appendChild(button3);
    circle.appendChild(button4);
    circle.appendChild(button5);

    circle.appendChild(line1);
    circle.appendChild(line2);
    circle.appendChild(line3);
    circle.appendChild(line4);
    circle.appendChild(line5);

    isCircle4Visible = false;
    isCircle5Visible = true;
    isCircle1Visible = false;
    isCircle2Visible = false;
  }
}

function circle1() {
  b1 = 0;
  b2 = 0;
  b3 = 0;
  b4 = 0;
  b5 = 0;
  if (isCircle1Visible) {
    clearCircle();
    circle2.classList.remove('c-none');
    isCircle1Visible = false;
  } else {
    clearCircle();
    circle2.classList.add('c-none')
    
    const button1 = document.createElement('button');
    button1.classList.add('b1-uno');
    button1.classList.add('color-white');

    button1.addEventListener('click', () => {
      changeColorC('.b1-uno');
    });


    circle.appendChild(button1);

    isCircle4Visible = false;
    isCircle5Visible = false;
    isCircle1Visible = true;
    isCircle2Visible = false;
  }
}

function circle_2() {
  b1 = 0;
  b2 = 0;
  b3 = 0;
  b4 = 0;
  b5 = 0;
  if (isCircle2Visible) {
    clearCircle();
    circle2.classList.remove('c-none');
    isCircle2Visible = false;
  } else {
    clearCircle();
    circle2.classList.add('c-none')
    
    const button1 = document.createElement('button');
    button1.classList.add('bottom-2');
    button1.classList.add('b-1d');
    button1.classList.add('color-white');
    button1.addEventListener('click', () => {
      changeColorC('.b-1d');
    });

    const button2 = document.createElement('button');
    button2.classList.add('bottom-2');
    button2.classList.add('b-2d');
    button2.classList.add('color-white');
    button2.addEventListener('click', () => {
      changeColorC('.b-2d');
    });

    const line1 = document.createElement('div');
    line1.classList.add('line');
    line1.classList.add('l2');

    circle.appendChild(button1);
    circle.appendChild(button2);
    circle.appendChild(line1);

    isCircle4Visible = false;
    isCircle5Visible = false;
    isCircle1Visible = false;
    isCircle2Visible = true;
  }
}

function clearCircle() {
  while (circle.firstChild) {
    circle.removeChild(circle.firstChild);
  }
}