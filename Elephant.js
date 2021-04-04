import Animal from './Animal.js';
class Elephant extends Animal {
    constructor(attr) {
        super(attr);
        this.createElement();
    }
    //creates the elephant animal with his specific attributes(specific image,and weight ) attached
    //to its place in the div that were inherited from the parent class (Animal) function.
    createElement() {
        super.createElement().classList.add("anyAnimal");
        let atext = document.createElement("p");
        atext.innerHTML = "The Elephant Weight is:" + this.attr + "kg";
        let aImage = document.createElement("img");
        aImage.src = "./images/img01.jpg";
        this.element.appendChild(aImage);
        this.element.appendChild(atext);
        return this.element;
    } 
}
export default Elephant;