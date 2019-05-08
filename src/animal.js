export default class Animal {
    constructor (name, speed){
        this.name = name;
        this.speed = speed;
    }

    run(){
        console.log(`Jsem ${this.name} a běžím rychlostí ${this.speed} km/hod.`)
    }
}