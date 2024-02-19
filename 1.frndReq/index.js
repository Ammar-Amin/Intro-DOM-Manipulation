let h2 = document.querySelector('h2');
// const add = document.getElementById('add');
// const remove = document.getElementById('remove');

// add.addEventListener('click', function () {
//     h2.innerHTML = 'Friend';
//     h2.style.color = 'green';
// })

// remove.addEventListener('click', function () {
//     h2.innerHTML = 'Stranger';
//     h2.style.color = 'red';
// });


let oneBtn = document.getElementById('oneBtn');
var check = 0;

oneBtn.addEventListener('click', function () {
    if (check === 0) {
        h2.innerHTML = 'Friend';
        h2.style.color = 'green';
        oneBtn.innerHTML = 'Remove Friend';
        check = 1;
    }
    else {
        h2.innerHTML = 'Stranger';
        h2.style.color = 'red';
        oneBtn.innerHTML = 'Add Friend';
        check = 0;

    }
});