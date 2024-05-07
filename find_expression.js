
function findExpression(total) {
    const stack = [{ num: 8, expr: '9' }];

    while (stack.length > 0) {
        const { num, expr } = stack.pop();
        if (num === -1) {
            if (eval(expr) === total) {
                console.log(expr + '=' + total);
            }
        } else {
            stack.push({ num: num - 1, expr: expr + "+" + String(num) });
            stack.push({ num: num - 1, expr: expr + "-" + String(num) });
            stack.push({ num: num - 1, expr: expr + String(num)});
        }
    }
}

const total = 200;
findExpression(total);