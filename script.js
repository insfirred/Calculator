input = document.getElementById('input');

clear = document.getElementsByClassName('clear');

document.querySelector(".clear").addEventListener('click', function() {
    input.innerText = '';
});
document.querySelector(".n1").addEventListener('click', function() {
    input.innerText += 1;
});
document.querySelector(".n2").addEventListener('click', function() {
    input.innerText += 2;
});
document.querySelector(".n3").addEventListener('click', function() {
    input.innerText += 3;
});
document.querySelector(".n4").addEventListener('click', function() {
    input.innerText += 4;
});
document.querySelector(".n5").addEventListener('click', function() {
    input.innerText += 5;
});
document.querySelector(".n6").addEventListener('click', function() {
    input.innerText += 6;
});
document.querySelector(".n7").addEventListener('click', function() {
    input.innerText += 7;
});
document.querySelector(".n8").addEventListener('click', function() {
    input.innerText += 8;
});
document.querySelector(".n9").addEventListener('click', function() {
    input.innerText += 9;
});
document.querySelector(".plus").addEventListener('click', function() {
    input.innerText += '+';
});
document.querySelector(".minus").addEventListener('click', function() {
    input.innerText += '-';
});
document.querySelector(".multiply").addEventListener('click', function() {
    input.innerText += '*';
});
document.querySelector(".devide").addEventListener('click', function() {
    input.innerText += '/';
});
document.querySelector(".decimal").addEventListener('click', function() {
    input.innerText += '.';
});
document.querySelector(".n0").addEventListener('click', function() {
    input.innerText += 0;
});
document.querySelector(".equals").addEventListener('click', function() {
    input.innerText = eval(input.innerText);
});


document.querySelector(".searchbar").addEventListener('keyup', function(event) {
    if (event.key == "Enter") {
        input.innerText = eval(input.innerText);
    }
})