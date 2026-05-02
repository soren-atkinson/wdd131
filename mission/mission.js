let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
const wrapper = document.querySelector('body');
let para = document.querySelector('p');
let header = document.querySelector('h1');
let list_head = document.querySelector('h3');
let list = document.querySelector('ol');
let text = document.querySelector('h2');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        wrapper.style.backgroundColor = 'black';
        logo.setAttribute('src', 'images/BYUI-dark.png');
        header.style.color = 'white';
        list_head.style.color = 'white';
        list.style.color = 'white';
        text.style.color = 'white';
        para.style.color = 'blue';
    } else {
        wrapper.style.backgroundColor = 'white';
        logo.setAttribute('src', 'images/BYUI.webp');
        header.style.color = 'black';
        list_head.style.color = 'black';
        list.style.color = 'black';
        text.style.color = 'black';
        para.style.color = '#0194d3';
    }



    
}           
                    