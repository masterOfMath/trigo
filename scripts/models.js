class angle {
    value;
    simplifiedValue;

    constructor(m,n) {
        this.value = jaxValue(m,n);
        this.simplifiedValue = simplify(m,n);
    }
}

function simplify (m,n) {
    var M = m, N= n;
    for (var i = 2; i <= m; i++) {
		if (m % i === 0 &&  n % i === 0)
			M = m / i, N = n / i;
	}
    while (M/N < -1) {
        M += 2 * N;
    }
    while(M/N > 1) {
        M -= 2 * N;
    }
    if (M === 0) return "0";
    if (M === 1 && N === 1) return "\\(\\pi\\)";
    if (N === 1) return "\\(" + M + "\\pi\\)";
    if (M === 1) return "\\(\\frac{\\pi}{" + N + "}\\)";
    if (M === -1) return "\\(-\\frac{\\pi}{" + N + "}\\)";
    if (M<0) return "\\(-\\frac{" + (-M) + "\\pi}{" + N + "}\\)";
    return "\\(\\frac{" + M + "\\pi}{" + N + "}\\)";
}

class Equation {
    text;
    dots;
    constructor(text,dots){
        this.text = text;
        this.dots = dots;
    }
}

function jaxValue(M,N) {
    if (M === 0) return "0";
    if (M === 1 && N === 1) return "\\(\\pi\\)";
    if (N === 1) return "\\(" + M + "\\pi\\)";
    if (M === 1) return "\\(\\frac{\\pi}{" + N + "}\\)";
    if (M === -1) return "\\(-\\frac{\\pi}{" + N + "}\\)";
    if (M<0) return "\\(-\\frac{" + (-M) + "\\pi}{" + N + "}\\)";
    return "\\(\\frac{" + M + "\\pi}{" + N + "}\\)";
}