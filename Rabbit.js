import Animal from './Animal.js';
class Rabbit extends Animal { 
    constructor(attr) {
        super(attr);
        this.createElement();
    }
    //creates the rabbit animal with his specific attributes(specific image,speed ) attached
    //to its place in the div that were inherited from the parent class (Animal) function.
    createElement() {
        super.createElement().classList.add("anyAnimal");
        let atext = document.createElement("p");
        atext.innerHTML = "The Rabbit Speed is:" + this.attr + "kmph";
        let aImage = document.createElement("img");
        aImage.src = "./images/img02.jpg";
        this.element.appendChild(aImage);
        this.element.appendChild(atext);
        return this.element;
    }
}
export default Rabbit;