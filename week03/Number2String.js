function convertNumberToString(num, x=10) {
    let integer = Math.floor(num);
    let fractions = String(num).split('.');
    let fraction = fractions.length > 1 ? fractions[1] : 0;
    let string = '', fstring = '0.', fraction_integer = 0;
    while(integer > 0) {
        string = integer % x + string;
        integer = Math.floor(integer / x);
    }
    while(fraction > 0) {
        fraction = fraction * x
        fraction_integer = Math.floor(fraction);
        fstring += fraction_integer;
        fraction = fraction - fraction_integer;
    }
    return fractions.length > 1 ? String(Number(string)+Number(fstring)) : string;
}

console.log(convertNumberToString(100.123, 2))