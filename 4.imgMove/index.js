alert("This Project contains the Mousemove, Mouseenter & Mouseleave Event from Javascript :) ");

// //  For testing the header element 
// const elem = document.querySelector('#elem1');
// const image = document.querySelector('#elem1 img');

// elem.addEventListener('mousemove', function (val) {
//     image.style.left = val.x + 'px';
//     image.style.top = val.y + 'px';
// });

// elem.addEventListener('mouseenter', function (val) {
//     image.style.opacity = 1;
// })

// elem.addEventListener('mouseleave', function (val) {
//     image.style.opacity = 0;
// });




// for all the elements

let elems = document.querySelectorAll('.elem');
let image = document.querySelectorAll('.elem img')
/*
 querySelectorAll se elements nodeLists(array) me milege phir apan foreach laga k each element ko access kr sakte h
 */
// elems.forEach((val) => console.log(val));


elems.forEach((eachElem) => {
    // console.log(eachElem.childNodes);      // isme data alternate me milta h yahi 1st me h2  to  2nd me img
    // console.log(eachElem.childNodes[1]);   // we will get h2 tags from eachElem
    // console.log(eachElem.childNodes[3]);   // we will get the images from eachElem

    eachElem.addEventListener('mousemove', function (val) {
        // console.log(val.x, val.y);
        eachElem.childNodes[3].style.left = val.x + 'px';    // img k baat hori h 
        eachElem.childNodes[3].style.top = val.y + 'px';     // img k baat hori h 
    });

    eachElem.addEventListener('mouseenter', function () {
        // console.log('entered');
        eachElem.childNodes[3].style.opacity = 1;           // img k baat hori h 
    });

    eachElem.addEventListener('mouseleave', function () {
        // console.log('leaved');
        eachElem.childNodes[3].style.opacity = 0;           // img k baat hori h  
    });

});

