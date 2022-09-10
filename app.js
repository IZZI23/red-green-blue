// ----------------RANDOM BOX 
// DISPLAYS RANDOM COLOR WHEN ONCLICK-ED

const random = document.querySelector('#random');

random.onclick = function change(){
    random.style.background = 
    `rgb(
        ${Math.floor(Math.random() * 255 ) + 1},
        ${Math.floor(Math.random() * 255 ) + 1},
        ${Math.floor(Math.random() * 255 ) + 1})`;
        random.innerHTML = ``;
}


// --------------------RGB BOXES 
// DISPLAY DIFFERENT TONES OF RGB WHEN HOVERING OVER BOX

const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');
const result = document.querySelector('#result')
const numbers = document.querySelector('#num');
const box = document.querySelector('.box')



// RED COLOR
first.addEventListener('mousemove', function slide(e){
    first.style.background = `rgb(${e.offsetX},0,0)`;
    first.innerHTML = `<p> ${e.offsetX} </p>`;

    // ADDS PRESICE NUMBER (PIXEL) IN A COUNTER-BOX
    first.onclick=function add(e){
        const str = `<h3> Red:${e.offsetX} </h3>`;
        numbers.insertAdjacentHTML("afterbegin", str);
        result.style.background = `rgb(${e.offsetX},0,0)`;
    };
})



// GREEN COLOR
second.addEventListener('mousemove', function slide(e){
    second.style.background = `rgb(0,${e.offsetX},0)`;
    second.innerHTML = `<p> ${e.offsetX} </p>`;

    // ADDS PRESICE NUMBER (PIXEL) IN A COUNTER-BOX
    second.onclick=function add(e){
        const str = `<h3> Green:${e.offsetX} </h3>`;
        numbers.insertAdjacentHTML("afterbegin", str);
        result.style.background = `rgb(0,${e.offsetX},0)`;
    };
})



// BLUE COLOR
third.addEventListener('mousemove', function slide(e){
    third.style.background = `rgb(0,0,${e.offsetX})`;
    third.innerHTML = `<p> ${e.offsetX} </p>`;

    // ADDS PRESICE NUMBER (PIXEL) IN A COUNTER-BOX
    third.onclick=function add(e){
        const str = `<h3> Blue:${e.offsetX} </h3>`;
        numbers.insertAdjacentHTML("afterbegin", str);
        result.style.background = `rgb(0,0,${e.offsetX})`;
    };
})






