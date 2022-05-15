class Receptive {
    constructor(
        paddingOne,
        paddingTwo,
        paddingThree
    ) {
        this._paddingOne = paddingOne;
        this._paddingTwo = paddingTwo;
        this._paddingThree = paddingThree;
    }
    static set paddingOne(x)    { this._paddingOne = x;         }
    static get paddingOne()     { return this._paddingOne;      }
    static set paddingTwo(x)    { this._paddingTwo = x;         }
    static get paddingTwo()     { return this._paddingTwo;      }
    static set paddingThree(x)  { this._paddingThree = x;       }
    static get paddingThree()   { return this._paddingThree;    }
    
    static
    value(not, yes, res) {
        if(not === yes) { return res; } 
        else { return yes; }
    }
    static
    valueOptionTwo(not, yes, res, value) {
        if(not === yes) { return res; } 
        else { return value; }
    }
    static
    back() {
        window.history.back();
    }
    static
    forward() {
        window.history.forward();
    }
    static
    capitalize(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
}

module.exports = Receptive;