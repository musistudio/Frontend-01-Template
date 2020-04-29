function convertStringToNumber(string, x=10) {
    var chars = string.split('');
    var number = 0, i = 0, fraction = 1;
    while(i < chars.length && chars[i] != '.') {
        number = number * x;
        number += chars[i].codePointAt(0) - 48;
        i++;
    }
    if(chars[i] === '.')
        i++;
    while(i < chars.length) {
        fraction = fraction / x;
        number += (chars[i].codePointAt(0) - 48) * fraction;
        i++
    }
    return number;
}

console.log(convertStringToNumber('10.0001'))