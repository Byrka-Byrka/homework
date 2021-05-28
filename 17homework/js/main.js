'use strict'

class Australopithecus {
    constructor(name, skills, brain) {
        this._name = name
        this.skills = skills
        this.brain = brain
        this.age = Math.floor(Math.random() * 30) + 1;
        this.maxAge = Math.floor(Math.random() * 30 + 1);
    }
    get name() {
        return this._name;
    }
    // set name(value){
    //     this._name = value;
    // }
    static isAllive (instance) {
        if (instance instanceof Australopithecus){
        if (instance.age < instance.maxAge) return true
        return false
        }return console.error('wrong instance !');
    }
};

class AustralopithecusBuilder {
    setName(value) {
        this.name = value
        return this
    }
    setSkills(value) {
        this.skills = value
        return this
    }
    setBrain(value) {
        this.brain = value
        return this
    }
    build() {
        return new Australopithecus(this.name, this.skills, this.brain)
    }
};

const aaa = new AustralopithecusBuilder()
.setName('aaa')
.setSkills(['upright posture', 'primitive tools (sticks, stones, bones)', 'gregariousness'])
.setBrain('500g')
.build()
console.log(aaa);
console.log(Australopithecus.isAllive(aaa));

class Neoanthropes extends Australopithecus{
    constructor(name, skills, brain) {
        super(name, skills, brain)
        super.age = Math.floor(Math.random() * 50) + 1;
        super.maxAge = Math.floor(Math.random() * 50) + 1;
    }
    get name() {
        return this._name;
    }
    set name(value){
        this._name = value;
    }
    static isAllive (instance) {
        if (instance instanceof Australopithecus){
        if (instance.age < instance.maxAge) return true
        return false
        }
        console.error('wrong instance !');
        return false
    }
    sayHello(){
        return 'Hi'
    }
    domestication(obj){
        let chance = Math.floor(Math.random() * 100) + 1;
        if (chance > 70) {
            obj.domestication = true;
            return obj
        }
        console.log('try again!')
        return obj
    }
};

class NeoanthropesBuilder {
    setName(value) {
        this.name = value
        return this
    }
    setSkills(value) {
        this.skills = value
        return this
    }
    setBrain(value) {
        this.brain = value
        return this
    }
    build() {
        return new Neoanthropes(this.name, this.skills, this.brain)
    }
};

let dog = {
    legs: 4,
    mouth: 1
};

const joh = new NeoanthropesBuilder()
.setName('Joh')
.setSkills(['articulate speech', 'social labor', 'domestication of plants and animals', 'rites'])
.setBrain('1500g')
.build()
console.log(joh)
console.log(joh.domestication(dog))
console.log(Neoanthropes.isAllive(joh))
console.log(Australopithecus.isAllive(dog));
joh.sayHello();

class CroMagnon extends Neoanthropes{
    constructor(name, skills, brain) {
        super(name, skills, brain)
        super.age = Math.floor(Math.random() * 70) + 1;
        super.maxAge = Math.floor(Math.random() * 70 + 1);
    }
    static isAllive (instance) {
        if (instance instanceof Australopithecus){
        if (instance.age < instance.maxAge) return true;
        return false;
        }return console.error('wrong instance !');
    }
    sayName(){
        if(CroMagnon.isAllive(this)){
            return `${super.sayHello()}, my name ${this.name}` ; 
        } else {
            return console.error('instance is ded');
        }
    }
};

class CroMagnonBuilder {
    setName(value) {
        this.name = value
        return this
    }
    setSkills(value) {
        this.skills = value
        return this
    }
    setBrain(value) {
        this.brain = value
        return this
    }
    build() {
        return new CroMagnon(this.name, this.skills, this.brain)
    }
};

const john = new CroMagnonBuilder()
.setName('John D')
.setSkills(['articulate speech', 'social labor', 'domestication of plants and animals', 'rites'])
.setBrain('1500g')
.build()

console.log(john)
console.log(john.sayName())

class  ModernMan extends Neoanthropes{
    constructor(name, skills) {
        super(name, skills)
        super.brain = 750 + (Math.floor(Math.random() * 750) + 1)
        super.age = Math.floor(Math.random() * 100) + 1;
        super.maxAge = Math.floor(Math.random() * 100 + 1);
    }
    static isAllive (instance) {
        if (instance instanceof Neoanthropes){
        if (instance.age < instance.maxAge) return true;
        return false;
        }return console.error('wrong instance !');
    }
    sayName(){
        if(CroMagnon.isAllive(this) && this.brain > 1100){
            return `${super.sayHello()}, my name ${this.name}` ; 
        } else if(this.brain < 1100){
            return ('поп ит симпл димпл сквиш');
        } else {
            return console.error('instance is ded');
        } 
    }
};

class ModernManBuilder {
    setName(value) {
        this.name = value
        return this
    }
    setSkills(value) {
        this.skills = value
        return this
    }
    build() {
        return new ModernMan(this.name, this.skills)
    }
};

const johnDoe = new ModernManBuilder()
.setName('John Doe')
.setSkills(['articulate speech', 'social labor', 'domestication of plants and animals', 'rites'])
.build()

console.log(johnDoe);
console.log(johnDoe.sayName());