import Elephant from './Elephant.js';
import Penguin from './Penguin.js';
import Rabbit from './Rabbit.js';
//function that creates an animal by its type, and giving it also its weight/spees/swimmingSpeed, 
//depends on the anumal type.
function create (type, attr){
    switch (type) {
        case "elephant":
            return new Elephant(attr);
        case "rabbit":
            return new Rabbit(attr);
        case "penguin":
            return new Penguin(attr);
    };

};
export default create;