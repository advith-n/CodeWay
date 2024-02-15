let degree = false;
let hyper = false;
let inverse = false;
let fix = 9;

let a_funcs = 'a';
let hyp_funcs = 'h';

const compute = () => {
    let exp = document.getElementById('display').value;
    let result = eval(exp).toFixed(fix);
    if (!isNaN(result))
        document.getElementById('display').value = result ;
    else
        document.getElementById('display').value = "Math Error";
}


// Mode Buttons

const handleDegree = () => { degree = !degree; handleMode(); }
const handleHyper = () => { hyper = !hyper; handleMode(); }
const handleInverse = () => { inverse = !inverse; handleMode(); }

// Mode Handler

const handleMode = () => {
    let mode_string = '    ';
    
    if (degree === true) {
        mode_string += 'DEG   ';
    }else{
        mode_string += 'RAD   ';
    }

    if (hyper === true) {
        mode_string += 'HYP   ';
    }else{
        mode_string += 'CIR   ';
    }

    if (inverse === true) {
        mode_string += 'INV ';
    }else{
        mode_string += 'NORM ';
    }

    let Modes = document.getElementById('modes');
    Modes.value = mode_string;
}

// Decimal Point Fix

const handleFix = () => {
    let fix_value = document.getElementById('display').value;

    if (!isNaN(fix_value) && fix_value < 9) {
        fix = parseInt(fix_value);
        document.getElementById('display').value = '';
    }else{
        document.getElementById('display').value = "Error";
    }
}    

// Trigonometric functions

const handleTrigonometric = (trigon_fun) => {
    let exp = document.getElementById('display');
    let selected_trigon_fun = '';
    
    if (hyper === true && inverse === true) {
        selected_trigon_fun = 'a' + trigon_fun + 'h(';
    } else if (hyper === true) {
        selected_trigon_fun = trigon_fun + 'h(';
    } else if (inverse === true) {
        selected_trigon_fun = 'a' + trigon_fun + '(';
    } else {
        selected_trigon_fun = trigon_fun + '(';
    }
    
    exp.value += selected_trigon_fun;
} 

const RadtoDegree = (num) => {
    if (degree === true)
        num = num * (Math.PI / 180);
    return num;
}

const DegtoRadian = (num) => {
    if (degree === true)
        num = num * (180 / Math.PI);
    return num;
}

const sin = (num) => {
    num = RadtoDegree(num);
    return Math.sin(num);
}
const cos = (num) => {
    num = RadtoDegree(num);
    return Math.cos(num);
}
const tan = (num) => {
    num = RadtoDegree(num);
    return Math.tan(num);
}

const asin = (num) => {
    ans = Math.asin(num);
    return DegtoRadian(ans)
}
const acos = (num) => {
    ans = Math.acos(num);
    return DegtoRadian(ans)
}
const atan = (num) => {
    ans = Math.atan(num);
    return DegtoRadian(ans)
}

const sinh = (num) => {
    num = RadtoDegree(num);
    return Math.sinh(num);
}
const cosh = (num) => {
    num = RadtoDegree(num);
    return Math.cosh(num);
}
const tanh = (num) => {
    num = RadtoDegree(num);
    return Math.tanh(num);
}

const asinh = (num) => {
    ans = Math.asinh(num);
    return DegtoRadian(ans)
}
const acosh = (num) => {
    ans = Math.acosh(num);
    return DegtoRadian(ans)
}
const atanh = (num) => {
    ans = Math.atanh(num);
    return DegtoRadian(ans)
}

// Other Mathematical Functions

const log = (num) => {
    return Math.log10(num);
}

const ln = (num) => {
    return Math.log(num);
}

const fact = (num) => {
    if (num < 0) 
        return NaN;

    let f = 1;
    for (let i = num; i > 1; i--)
        f *= i;

    return f;
}

const C = (n, r) => {
    return fact(n) / (fact(n - r) * fact(r));
}

const P = (n, r) => {
    return fact(n) / fact(n - r);
}