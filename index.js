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
    value(value, equivalent, res) {
        if(value === equivalent) { return res; } 
        else { return equivalent; }
    }
    static
    valueOrElse(value, equivalent, res, otherwise) {
        if(value === equivalent) { return res; } 
        else { return otherwise; }
    }
    static
    valueOptionTwo(value, equivalent, res, otherwise) {
        if(value === equivalent) { return res; } 
        else { return otherwise; }
    }
    static
    operator(value, operator, equivalent) {
        switch(operator) {
            case "===":
                if(value === equivalent) { return Number(equivalent); } else { return 0; } break;
            case "==":
                if(value == equivalent)  { return Number(equivalent); } else { return 0; } break;
            case "!==":
                if(value !== equivalent) { return Number(equivalent); } else { return 0; } break;
            case "!=":
                if(value != equivalent)  { return Number(equivalent); } else { return 0; } break;
            case ">":
                if(value > equivalent)   { return Number(equivalent); } else { return 0; } break;
            case ">=":
                if(value >= equivalent)  { return Number(equivalent); } else { return 0; } break;
            case "<":
                if(value < equivalent)   { return Number(equivalent); } else { return 0; } break;
            case "<=":
                if(value <= equivalent)  { return Number(equivalent); } else { return 0; } break;
            default:
                return false;
            break;
        }
        
        return false;
    }
    static
    operatorPlus(value, operator, equivalent, res) {
        switch(operator) {
            case "===":
                if(value === equivalent) { return res; } else { return ""; } break;
            case "==":
                if(value == equivalent)  { return res; } else { return ""; } break;
            case "!==":
                if(value !== equivalent) { return res; } else { return ""; } break;
            case "!=":
                if(value != equivalent)  { return res; } else { return ""; } break;
            case ">":
                if(value > equivalent)   { return res; } else { return ""; } break;
            case ">=":
                if(value >= equivalent)  { return res; } else { return ""; } break;
            case "<":
                if(value < equivalent)   { return res; } else { return ""; } break;
            case "<=":
                if(value <= equivalent)  { return res; } else { return ""; } break;
            default:
                return false;
            break;
        }
        
        return false;
    }
    static
    capitalize(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
}

module.exports = Receptive;