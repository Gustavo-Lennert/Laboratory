const btn = document.querySelector('button');
const modal = document.querySelector('.modal');
const focus = document.querySelector('.focus');
const close = document.querySelector('.close');

const closeButton = [focus, close];

btn.addEventListener('click', () => {
    focus.style.display = 'flex';
    focus.style.animation = 'focus-in .8s ease';

    modal.style.display = 'flex';
    modal.style.animation ='modal-in.8s ease';
});

for(let i = 0; i < closeButton.length; i++) {
    closeButton[i].addEventListener('click', () => {
        focus.style.animation = 'focus-out .8s ease';
        modal.style.animation ='modal-out.8s ease';
        setTimeout(() => {
            modal.style.display = 'none';
            focus.style.display = 'none';
        }, 700);
    });
}

