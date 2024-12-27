const colorBlock = document.querySelector('.color-block');

function changeColor() {
  colorBlock.style.backgroundColor = '#' + [...Array(6)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
}

document.addEventListener('DOMContentLoaded', changeColor);