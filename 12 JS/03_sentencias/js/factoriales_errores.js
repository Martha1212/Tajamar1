function calcularFactorial(n) {
    if (typeof n === `undefinid`) { throw 0 }
    else if (isNaN(n / 2)) { throw 1 }
    else if (parseInt(n) !== parseFloat(n)) { throw 2 }
    else if (n <= 0) { throw 3 }
    else if (n > 170) { throw 4 }
    else {
        let r = 1
        for (let i = n; i >= 1; i--) {
            r *= i;
        }
        // TODO Comprobar rendimiento

        if (r === Infinity) { throw 4 }
        else { return r }
    }

}
