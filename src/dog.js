import Animal from "./animal.js";

export default class Dog extends Animal {

    constructor(name, speed, sound){
        super(name, speed); //voláme construktor nadřazené třídy a předáváme vstupní parametry
    
        this.sound = sound;
    }

    bark(){
        console.log(`${this.name} štěká: ${this.sound}!`);
    }
}