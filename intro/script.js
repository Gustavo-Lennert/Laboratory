const button = document.querySelector('button');
const left  = document.querySelector('.left');
const right = document.querySelector('.right');

button.addEventListener('click', () => {

    console.log(button, left, right);
    left.classList.add('animation-l');
    right.classList.add('animation-r');
    setTimeout(() => {
        left.style.opacity ='0';
        right.style.opacity ='0';
        button.style.opacity ='0';
    }, 1500);
    setTimeout(() => {
        button.style.opacity ='0';
    }, 100);
});