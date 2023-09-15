const btns = document.querySelectorAll("button");
document.querySelector(".show").disabled = true;
      document.querySelector(".check").disabled = true;

for (let i = 0; i < 16;i++) {
var styles = {    
    "position" : "absolute",
    "bottom": (47+43.75*sins[i]) + "%",
    "left" : (46.5+43.75*coss[i]) + "%",
    "background-color": "white",
    "padding": "3% 3%",
    "border":"black",
    "border-style": "solid",
    "border-width": "2px",
    
    "cursor": "pointer",
    "border-radius": "100%",
    "transition": "background-color 0.9s"
}
Object.assign(btns.item(i).style,styles); 
}

var input = document.getElementById('toggleswitch');

    input.addEventListener('change',function(){
        if(this.checked) {
          document.querySelectorAll("img").item(1).style.visibility = "visible";
          document.querySelector(".ineq").style.visibility = "visible";
        } else {
          document.querySelectorAll("img").item(1).style.visibility = "hidden";
          document.querySelector(".ineq").style.visibility = "hidden";
        }
    })

    const taskEqBtn = document.querySelector("#taskEq");; 
    let n = 0;
    taskEqBtn .onclick = async function () {
      allBtnsToWhite();
      document.querySelector(".randomEq").style.visibility = "visible";
      document.querySelector(".show").disabled = false;
      document.querySelector(".check").disabled = false;
      const textSin = document.querySelector(".randomEq");
      let eq = randEq();
      
      textSin.textContent = eq.text;
      await MathJax.typeset();
      let clickedDots = [];
      for (let i = 0; i < 16; i++) {
  
        const btn = btns.item(i);
        btn .onclick = function () {
          if (btn.style.backgroundColor === "rgb(120, 138, 240)") {
            btn.style.backgroundColor = "white";
            clickedDots = clickedDots.filter((n)=> {return n!=i});
          } else {
            btn.style.backgroundColor = "rgb(120, 138, 240)";
            clickedDots.push(i);
          }   
          console.log(clickedDots);
      }
      }
      checkBtn = document.querySelector(".check");
      
      checkBtn.onclick = async function () {
        console.log("check", eq.dots,clickedDots);
          const progressEq = document.querySelector("#progressEq")
          if (arraysEqual(eq.dots,clickedDots)) {
            progressEq.textContent =(++n) +" подряд!";
            progressEq.style.color = "green";
            clickedDots.forEach(x => btns.item(x).style.backgroundColor = "green");
            checkBtn.disabled = true;
            document.querySelector(".show").disabled = true;

            
            clickedDots.pop();
            clickedDots.pop();
          } else {
            progressEq.textContent = "0 подряд!";
            progressEq.style.color = "red";
            clickedDots.forEach(x => btns.item(x).style.backgroundColor = "white");
            clickedDots.pop();
            clickedDots.pop();

            n = 0;
          }
      }
      const showBtn = document.querySelector("#showEq");
      showBtn.onclick = function(){
        for (let i = 0; i < eq.dots.length; i++) {
          btns.item(eq.dots[i]).style.backgroundColor = "green";
        }
      }
    
  }

// for (let i = 0; i < 16; i++) {
  
//   const btn = btns.item(i);
//   btn .onclick = async function () {
//     allBtnsToWhite();
//     document.querySelector(".sin").style.visibility = "visible";
//       document.querySelector(".cos").style.visibility = "visible";
//       document.querySelector(".randomEq").style.visibility = "hidden";
//     const textSin = document.querySelector(".sin");
//     textSin.textContent = "\\[\\sin x = "+sinJax[i];
//     const textCos = document.querySelector(".cos");
//     textCos.textContent = "\\[\\cos x = "+cosJax[i];
//     await MathJax.typeset();
//     btns.item(i).style.backgroundColor = "red";
      
// }
// }


const taskDotBtn = document.querySelector("#taskDot");
    let k = 0;
    taskDotBtn .onclick = async function () {
      allBtnsToWhite();
      document.querySelector(".randomDot").style.visibility = "visible";
      document.querySelector(".show").disabled = false;
      document.querySelector(".check").disabled = false;
      const text = document.querySelector(".randomDot");
      let dot = randDot();
      
      text.textContent = dot.value;
      await MathJax.typeset();
      const progressDot = document.querySelector("#progressDot")
      
      for (let i = 0; i < 16; i++) {
  
        const btn = btns.item(i);
        btn .onclick = async function () {
          allBtnsToWhite();
          console.log(jaxDots[i],dot.simplifiedValue);
          if (jaxDots[i] === dot.simplifiedValue) {
            btn.style.backgroundColor = "green";
            progressDot.textContent =(++k) +" подряд!";
            progressDot.style.color = "green";
            document.querySelector(".show").disabled = "true";

          } else {
            btn.style.backgroundColor = "red";
            progressDot.textContent ="0 подряд!";
            progressDot.style.color = "red";
            k=0;
          }
          
      }
      }
      
      const showBtn = document.querySelector("#showDot");
      showBtn.onclick = function(){
        allBtnsToWhite();
        btns.item(jaxDots.indexOf(dot.simplifiedValue)).style.backgroundColor = "#788af0";
      }
    
  }


function allBtnsToWhite() {
  for (let i = 0; i < 16; i++) {
      btns.item(i).style.backgroundColor = "white";
  }
}
function arraysEqual(a1,a2) {
  a1.sort();
  a2.sort();
  return JSON.stringify(a1)==JSON.stringify(a2);
}
