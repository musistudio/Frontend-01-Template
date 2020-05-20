// 使用状态机匹配字符串中的 "abababx"

function match(string) {
    let state = start;
    for(let s of string) {
        state = state(s);
    }
    return state === end;
}

function start(s) {
    if(s === 'a') {
        return foundA;
    }else{
        return start;
    }
}

function end(s) {
    return end;
}

function foundA(s) {
    console.log('foundA:', s);
    if(s === 'b') {
        return foundB;
    }else{
        return start;
    }
}

function foundB(s) {
    console.log('foundB:', s);
    if(s === 'a') {
        return foundA2;
    }else{
        return start;
    }
}

function foundA2(s) {
    console.log('foundA2:', s);
    if(s === 'b') {
        return foundB2;
    }else{
        return start;
    }
}

function foundB2(s) {
    console.log('foundB2:', s);
    if(s === 'a') {
        return foundA3;
    }else{
        return start;
    }
}

function foundA3(s) {
    console.log('foundA3:', s);
    if(s === 'b') {
        return foundB3;
    }else{
        return start;
    }
}

function foundB3(s) {
    console.log('foundB3:', s);
    if(s === 'x') {
        return end;
    }else if(s === 'a'){
        return foundA3;
    }else{
        return start;
    }
}


console.log(match('abababx'));