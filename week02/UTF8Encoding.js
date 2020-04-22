function encodeUTF8(str) {
    let code = parseInt(str.codePointAt().toString(16), 16);
    let bCodes = str.codePointAt().toString(2).split('');
    let byte, template, result = '', temp;
    if(code<parseInt('007F', 16)) {
        template = '0xxxxxxx';
        byte = 1;
    }else if(code<parseInt('07FF', 16)) {
        template = '110xxxxx10xxxxxx'
        byte = 2;
    }else if(code<parseInt('FFFF', 16)) {
        template = '1110xxxx10xxxxxx10xxxxxx'
        byte = 3;
    }else if(code<parseInt('1FFFFF', 16)) {
        template = '1110xxxx10xxxxxx10xxxxxx'
        byte = 4;
    }else if(code<parseInt('1FFFFF', 16)) {
        template = '11110xxx10xxxxxx10xxxxxx10xxxxxx'
        byte = 5;
    }else if(code<parseInt('3FFFFFF', 16)) {
        template = '111110xx10xxxxxx10xxxxxx10xxxxxx10xxxxxx'
        byte = 6;
    }else if(code<parseInt('7FFFFFFF', 16)) {
        template = '1111110x10xxxxxx10xxxxxx10xxxxxx10xxxxxx10xxxxxx'
        byte = 7;
    }
    template = template.split('').reverse().map(t => {
        if(t == 'x') {
            if(bCodes.length > 0) {
                return bCodes.pop();
            }else{
                return 0;
            }
        }else{
            return t;
        }
    })
    temp = parseInt(template.reverse().join(''), 2).toString(16)
    let len = temp.length / byte
    for(let i=1;i<=byte;i++) {
        result += '\\x' + temp.slice((i-1)*len, i*len)
    }
    return result
}

let encoding = str => str.split('').map(s => encodeUTF8(s)).join('')

console.log(encoding('严厉'))