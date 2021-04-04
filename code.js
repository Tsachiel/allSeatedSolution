import create from './AnimalFactory.js';

let aAnimal1 = create('rabbit', 2);
let aAnimal2 = create('elephant', 100);
let aAnimal3 = create('penguin', 150);
let aAnimal4 = create('rabbit', 200);
let aAnimal5 = create('rabbit', 200);
let aAnimal6 = create('penguin', 150);
let aAnimal7 = create('rabbit', 200);

let aList = document.getElementById("Animals_div");
aList.appendChild(aAnimal1.element);
aList.appendChild(aAnimal2.element);
aList.appendChild(aAnimal3.element);
aList.appendChild(aAnimal4.element);
aList.appendChild(aAnimal5.element);
aList.appendChild(aAnimal6.element);
aList.appendChild(aAnimal7.element);

//I have created this variable to insert to the div (that contains the animals after the buttons 
//and animals pressing) the original animal list.
const bigDiv = document.getElementById("Animals_div");
//a variable that contains the list of animals that were initially appended to the dom
const animalsDivs = document.querySelectorAll(".anyAnimal");
let pengBtn = document.getElementById("penguinBtn");
let allBtn = document.getElementById("allAnimalsBtn");

//an event listener that is activated by pressing an animal from the animals that can be seen on the 
//screen. the function removes the animal that were pressed from the dom.
animalsDivs.forEach(animal => {
    animal.addEventListener("click", () => {
        animal.remove();
    });
});
//appends the original list of animals that were represented in the dom before 
//modifications of the user(buttons and animals pressings), by running over(hope I am using the 
//phrase correctly) the animals that still can be seen on the screen(if there are any left). 
allBtn.addEventListener("click", () => {
    for (let index = 0; index < animalsDivs.length; index++) {
        bigDiv.appendChild(animalsDivs[index])
    }
})
//by the helpl of the static method Array from that javascript provides I have created
// a new, shallow-copied Array that containd in each index of it a div of an animal from the animalsDiv.
//by doing so I am able to iterate over them with the forEach loop and return only the 
//penguins divs because they contain the "penguin" class in addition to the "anyAnimal" class
//that every animal has(this is the purpose of the if statement).
pengBtn.addEventListener("click", () => {
    Array.from(animalsDivs).forEach((animal) => {
        if (animal.className == "anyAnimal") {
            animal.remove()
        }
    })
})
