/*******************************************
* Title:   INFT1206 - 05 Week 11 Class Demo
* Author:  Clint MacDonald
* Date:    July 23, 2024
* Purpose: JavaScript Continued 
*******************************************/

var changeTime = 0;
var rndBut;

function onL() {
    rndBut = document.getElementById('btnBodyColour');
    //document.getElementById('cr').innerText = 'Page was loaded';
    
    rndBut.addEventListener('click', () => {
            const r = randomValue(255);
            const g = randomValue(255);
            const b = randomValue(255);

            document.getElementById('cr').innerText = r;
            document.getElementById('cg').innerText = g;
            document.getElementById('cb').innerText = b;

            body = document.querySelector('body');
            body.style = 'background-color: rgb(' + r + ', ' + g + ', ' + b +');';
        }
    );
}



function randomValue(maxVal){
    return Math.floor(Math.random()*(maxVal+1));
}

function changeMainHeading() {
    var mh = document.getElementById('MainHeading');
    //mh.innerText = "clint was here";
    switch (changeTime) {
        case 0:
            mh.innerText = "Change 1";
            mh.style = 'color: red;';
            changeTime++;
            break;
        case 1:
            mh.innerText = "Another Change 2";
            mh.style = 'color: blue; background-color: black;';
            changeTime++;
            break;
        default:
            mh.innerText = "Main Heading";
            mh.style = 'color: black; background-color: white;';
            changeTime = 0;
            break;
    }
}

function maths(symbol) {
    var n1 = document.getElementById('num1');
    var n2 = document.getElementById('num2');
    var a = document.getElementById('answer');
    switch(symbol) {
        case 'plus':
            a.innerHTML = '<strong style="color: orange;">' + (Number(n1.value) + Number(n2.value)) + '</strong>';
            break;
        case 'minus':
            a.innerHTML = '<strong>' + (n1.value - n2.value) + '</strong>';
            break;
        case 'divide':
            a.innerHTML = '<strong>' + (n1.value / n2.value) + '</strong>';
            break;
        case 'multiply':
            a.innerHTML = '<strong>' + (n1.value * n2.value) + '</strong>';
            break;

    }
}