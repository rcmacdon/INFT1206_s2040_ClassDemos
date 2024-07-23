
var changeTime = 0;
var rndBut;

function onL() {
    rndBut = document.getElementById('btnBodyColour');
      
    if (rndBut) {
        rndBut.style.color = 'red';

        rndBut.addEventListener('click', (e) => {
            const r = randomValue(255);
            const g = randomValue(255);
            const b = randomValue(255);

            document.getElementById('cr').innerText = r;
            document.getElementById('cg').innerText = g;
            document.getElementById('cb').innerText = b;

            body = document.querySelector('body');
            body.style = 'background-color: rgb(' + r +', ' + g + ', ' + b + ');'; 
        });
    }
}
 


function randomValue(maxVal){
    return Math.floor(Math.random()*maxVal);
}



function changeMainHeading() {
    var mh = document.getElementById('MainHeading');
    switch (changeTime) {
        case 0:
            mh.innerText = 'This was changed';
            mh.style = 'color: red;';
            changeTime = 1;
            break;
        case 1:
            mh.innerText = 'Second Change';
            mh.style = 'color: blue; background-color: black;';
            changeTime = 2;
            break;
        default:
            mh.innerText = 'Main Heading';
            mh.style = 'color: black; background-color: white;';
            changeTime = 0;
            break;
    }
    
}

function maths(symbol) {
    var n1 = document.getElementById('num1');
    var n2 = document.getElementById('num2');
    var a = document.getElementById('answer');
    switch (symbol) {
        case 'plus':
            a.innerText = Number(n1.value) + Number(n2.value);
            break;
        case 'minus':
            a.innerText = n1.value - n2.value;
            break;
        case 'divide':
            a.innerText = n1.value / n2.value;
            break;
        case 'multiply':
            a.innerText = n1.value * n2.value;
            break;

    }
}