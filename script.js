let menuClass = document.getElementsByClassName('menu-item'),
    menu = document.querySelector('.menu'),
    body = document.querySelector('body'),
    title = document.getElementById('title'),
    column = document.getElementsByClassName('column'),
    adv = document.getElementsByClassName('column')[1].getElementsByClassName('adv'), pr = document.getElementById('prompt');


menu.insertBefore(menuClass[2], menuClass[1]);

body.style.backgroundImage = 'url(img/apple_true.jpg)';


title.innerHTML = 'Мы продаем только подлиную технику Apple';

console.log(column[1]);
column[1].removeChild(adv[0]);
var question = prompt('Какое у Вас отношение к технике Apple?', '');

pr.innerHTML = question;



