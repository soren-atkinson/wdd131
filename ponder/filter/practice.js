nums = [12, 10, 8, 3];

console.log(nums.sort(comparen));

function comparen(a, b) {
    if (a < b) {
        return -1
    } else if (a > b) {
        return 1
    }
    return 0
    
}


const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];
                
function compareFn(a,b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
   return 0;
  }

                  
console.log(simpleList.sort(compareFn));

let lowerList = simpleList.map(function(fruit) {
    return fruit.toLowerCase();
})

console.log(lowerList.sort(compareFn));

let lowerSort = lowerList.sort();

let searchTerm = 'an';

let filterFruit = lowerSort.filter(searchFruit);

function searchFruit(item) {
    return item.includes(searchTerm);
};

console.log(filterFruit);
                


const products = [
    {
      productName: "Wireless Mouse",
      price: 29.99
    },
    {
      productName: "Bluetooth Keyboard",
      price: 49.99
    },
    {
      productName: "Laptop Stand",
      price: 39.99
    }
  ];

let productsSort = products.sort(compare);

function compare(a,b) {
    if (a.productName < b.productName) {
      return -1;
    } else if (a.productName > b.productName) {
      return 1;
    }
   return 0;
  }

  console.log(productsSort);



const animals = [
    {
      name: "Lion",
      traits: ["brave", "strong", "fierce", "wild"]
    },
    {
      name: "Elephant",
      traits: ["large", "gentle", "smart", "wild"]
    },
    {
      name: "Fox",
      traits: ["sly", "quick", "clever", "wild"]
    },
    {
      name: "Dog",
      traits: ["loyal", "friendly", "playful", "cuddly"]
    },
    {
      name: "Cat",
      traits: ["quiet", "independent", "curious", "cuddly"]
    }
  ];
              
  
let query = 'ox';

let filteredList = animals.filter(search);

function search(item) {
    return item.name.toLowerCase().includes(query.toLowerCase());
}

console.log(filteredList);

let queryTrait = 'cuddly';

let filteredTrait = animals.filter(searchTrait);

function searchTrait(item) {
    return item.traits.find((trait) =>
        trait.toLowerCase().includes(queryTrait.toLowerCase()))
}
                  
console.log(filteredTrait);