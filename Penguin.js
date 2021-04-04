import Animal from './Animal.js';
class Penguin extends Animal {
    constructor(attr) {
        super(attr);
        this.createElement();
    }
    //creates the penguin animal with his specific attributes(specific image,swimSpeed ) attached
    //to its place in the div that were inherited from the parent class (Animal) function.
    createElement() {
        super.createElement().classList.add("anyAnimal", "penguin");
        let atext = document.createElement("p");
        atext.innerHTML = "The Penguin Swim Speed is:" + this.attr + "kmph";
        let aImage = document.createElement("img");
        aImage.src = "./images/img03.jpg";
        this.element.appendChild(aImage);
        this.element.appendChild(atext);
        return this.element;
    }
}
export default Penguin;