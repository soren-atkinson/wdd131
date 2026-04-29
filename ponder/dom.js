// let title = document.querySelector("h1");

// console.log(title);

// title.textContent = 'Web Page Document'

// document.querySelector('#topics').style.color = 'red';

const topics = document.querySelector('#topics');

topics.style.color = 'purple';

const wrapper = document.getElementById('content');

wrapper.style.backgroundColor = 'lightblue';

let list = document.querySelector('.list');

list.style.border = "3px solid black";

let para = document.querySelector('p');

para.style.fontSize = '2em';

para.classList.add('background')

const image = document.querySelector("img")

image.setAttribute('src', 'images/new_logo.png');

let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})




