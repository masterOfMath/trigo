let map = new Map();
for (let i = 0; i < 12; i++) {
    map.set(i,i + "*pi/6");
}

let angles = [0,30,45,60,90,120,135,150,180,210,225,240,270,300,315,330];
let globalDots =[[0,1],[1,6],[1,4],[1,3],[1,2],[2,3],[3,4],[5,6],[1,1],[7,6],[5,4],[4,3],[3,2],[5,3],[7,4],[11,6]];
let jaxDots = [];
for (let i = 0; i < angles.length; i++) {
    jaxDots.push(simplify(globalDots[i][0],globalDots[i][1]));
}


for (let i = 0; i < angles.length; i++) {
    angles[i] = angles[i] * (Math.PI / 180);
}
let sins = [];
for (let i = 0; i < angles.length; i++) {
    sins[i] = Math.sin(angles[i]);
}
let coss = [];
for (let i = 0; i < angles.length; i++) {
    coss[i] = Math.cos(angles[i]);
}
console.log(coss);


console.log(map);

let sinMap = new Map();




function m(s){
    return "-"+s;
}
const sqrt32 = "\\frac{\\sqrt{3}}{2}\\]";
const sqrt22 = "\\frac{\\sqrt{2}}{2}\\]";
const half = "\\frac{1}{2}\\]";
let sinJax = ["0\\]",half,sqrt22,sqrt32,"1\\]",sqrt32,sqrt22,half,"0\\]",
m(half),m(sqrt22),m(sqrt32),"-1\\]",m(sqrt32),m(sqrt22),m(half)];
let cosJax = ["1\\]",sqrt32,sqrt22,half,"0\\]",
m(half),m(sqrt22),m(sqrt32),"-1\\]",m(sqrt32),m(sqrt22),m(half),"0\\]",half,sqrt22,sqrt32];

let eqs = new Array(32).fill("");
for (let i = 0; i < 16; i++) {
    eqs[i] = "\\[\\sin x =" + sinJax[i];
    }
for (let i = 16; i < 32; i++) {
    eqs[i] = "\\[\\cos x =" + cosJax[i-16];
}


let eqsList = Array(0);

eqsList.push(new Equation(eqs[0],[0,8]));
eqsList.push(new Equation(eqs[1],[1,7]));
eqsList.push(new Equation(eqs[2],[2,6]));
eqsList.push(new Equation(eqs[3],[3,5]));
eqsList.push(new Equation(eqs[4],[4]));
eqsList.push(new Equation(eqs[9],[9,15]));
eqsList.push(new Equation(eqs[10],[10,14]));
eqsList.push(new Equation(eqs[11],[11,13]));
eqsList.push(new Equation(eqs[12],[12]));
eqsList.push(new Equation(eqs[16],[0]));
eqsList.push(new Equation(eqs[17],[1,15]));
eqsList.push(new Equation(eqs[18],[2,14]));
eqsList.push(new Equation(eqs[19],[3,13]));
eqsList.push(new Equation(eqs[20],[4,12]));
eqsList.push(new Equation(eqs[21],[5,11]));
eqsList.push(new Equation(eqs[22],[6,10]));
eqsList.push(new Equation(eqs[23],[7,9]));
eqsList.push(new Equation(eqs[24],[8]));


function randEq() {
    index = Math.floor(Math.random() * (eqsList.length-1));
    return eqsList[index];
    }
function randDot() {
    let denoms = [1,2,3,4,6];
    let denom = denoms[Math.floor(Math.random() * 5)];
    let nom = Math.floor(Math.random() * 30);
    let dot = new angle(nom,denom);
    return dot;
}

