const select = document.querySelector('select');
const s1 = document.querySelector('span#one');
const s2 = document.querySelector('span#two');
const b1 = document.querySelector('button#one');
const b2 = document.querySelector('button#two');
const b3 = document.querySelector('button#reset');

let score1 = 0;
let score2 = 0;
let to = 3;


if (score1 >= to) s1.style.color = 'blue';

select.addEventListener('input', function (e) {
    to = select.value;
});


b1.addEventListener('click', function (a) {
    score1++;
    s1.innerText = score1;
    win();
});

b2.addEventListener('click', function (a) {
    score2++;
    s2.innerText = score2;
    win();
});

b3.addEventListener('click', function (a) {
    score1 = 0;
    score2 = 0;
    s1.innerText = score1;
    s2.innerText = score2;
    b1.disabled = false;
    b2.disabled = false;
    s1.style.color = 'black';
    s2.style.color = 'black';
});

function win() {
    if (score1 == to) {
        s1.style.color = 'green';
        s2.style.color = 'red';
        b1.disabled = true;
        b2.disabled = true;
    }
    if (score2 == to) {
        s2.style.color = 'green';
        s1.style.color = 'red';
        b1.disabled = true;
        b2.disabled = true;
    }
}

