alert('Double click to Like the Image :) ')

const image = document.querySelector('img');
let heart = document.querySelector('.ri-heart-3-fill');

let comment = document.querySelector('h3');  // by me 

image.addEventListener('dblclick', function () {
    heart.style.transform = 'translate(-50%, -50%) scale(1)'
    heart.style.opacity = 0.8;

    setTimeout(() => {
        heart.style.transform = 'translate(-50%, -50%) scale(0)'
        heart.style.opacity = 0;
    }, 750);

    // by me 
    comment.style.visibility = 'visible';
    setTimeout(() => {
        comment.style.visibility = 'hidden';
    }, 1000);
})

