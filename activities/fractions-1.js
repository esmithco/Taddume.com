const buttonOptions = document.querySelectorAll('.button-options');
const circle = document.querySelector('.circle');

buttonOptions.forEach((buttonOption) => {
  buttonOption.addEventListener('click', divideCircle);
});

function divideCircle(event) {
  const clickedButton = event.target;
  const parts = parseFloat(clickedButton.value);

  if (parts === 4) {
    circle.classList.toggle('blue-color');
    circle.classList.remove('yellow-color');
    circle.classList.remove('purple-color');
    circle.classList.remove('black-color');
  } else if (parts === 5) {
    circle.classList.remove('blue-color');
    circle.classList.toggle('yellow-color');
    circle.classList.remove('purple-color');
    circle.classList.remove('black-color');
  } else if (parts === 1) {
    circle.classList.remove('blue-color');
    circle.classList.remove('yellow-color');
    circle.classList.toggle('purple-color');
    circle.classList.remove('black-color');
  } else if (parts === 2) {
    circle.classList.remove('blue-color');
    circle.classList.remove('yellow-color');
    circle.classList.remove('purple-color');
    circle.classList.toggle('black-color');
  } 
}