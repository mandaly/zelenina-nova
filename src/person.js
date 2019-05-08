export default class Person {

    constructor(name, surname){
        this._name = name; //označíme si _ proměnou, kterou nechceme dávat na venek - pracujeme s tím jen v třídě
        this._surname = surname;
    }

    get name(){
        return `${this._name}`;
    }

    get fullName(){
        return `${this._name} ${this._surname}`;
    }

    set name(newName){
        if (obsahujeJenPismena){
            this.name = newName;
        }
    }

    set fullName(newName){
        let names = newName.split(" ");
        this._name = names[0];
        this._surname = names[1];
    }

    greet() {
        console.log(`Čau, jmenuju se ${this.fullName}.`)
    }

}