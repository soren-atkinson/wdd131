// variables vs contant

const PI = 3.14;
let radius = 3;

let area = radius * radius * PI;

console.log(area);

radius = 20;
area = radius * radius * PI;
console.log(area);

radius = 30;
area = radius * radius * PI;
console.log(area);

// type coersion

const one = 1;
const two = '2';
let result = one * two;
console.log(result);

result = one + Number(two);
console.log(result)




let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
                
                    