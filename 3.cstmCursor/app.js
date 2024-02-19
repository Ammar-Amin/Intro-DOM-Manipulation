let body = document.querySelector('body');
let ourDot = document.getElementById('dot');

body.addEventListener('mousemove', function (details) {
    // console.log('hey');
    // console.log(details);                // obj containing info about mouse move.
    // console.log(details.x, details.y);   // x and y coordinates of mouse move. 

    ourDot.style.left = details.x + 'px';
    ourDot.style.top = details.y + 'px';
})