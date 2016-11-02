interface Voice {
    voice(voice: any);
}

abstract class Animal implements Voice {
    private theName;

    abstract voice(voice: string);

    eat(food: string) {
        console.log("eating" + food)
    }

    constructor(theName: string) {
        this.theName = name;
    };
}

class Dog extends Animal {
    public name: string;

    voice(voice: string) {
    };

    eat(food) {
    };

    public constructor(name: string) {
        super(name);
        this.name = name;
    }
}

export {Dog};