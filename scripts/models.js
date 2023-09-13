class angle {
    value;
    simplifiedValue;

    constructor(value) {
        this.value = value;
        this.simplifiedValue = simplify(value);
    }
}

class Dot {
    index;
    simplifiedValue;
    sin;
    cos;
    tg;
    constructor(value){
        
    }
}

class Equation {
    text;
    dots;
    constructor(text,dots){
        this.text = text;
        this.dots = dots;
    }
}