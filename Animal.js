
class Animal {
    constructor(attr) {
        this.attr = attr;
        this.createElement();
    }
    //this is the initial function that creates the div which will contain an animal.
    createElement() {
        this.element = document.createElement("div");
        return this.element;
    }
   
}
export default Animal;