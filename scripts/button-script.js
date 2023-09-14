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

    const taskBtn = btns.item(16); 
    let n = 0;
    taskBtn .onclick = async function () {
      allBtnsToWhite();
      // document.querySelector(".sin").textContent ="";
      // document.querySelector(".cos").textContent ="";
      // document.querySelector(".sin").style.visibility = "hidden";
      // document.querySelector(".cos").style.visibility = "hidden";
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
        btn .onclick = async function () {
          if (btn.style.backgroundColor === "red") {
            btn.style.backgroundColor = "white";
            if (clickedDots.length === 1 && clickedDots[0]===i) {
                clickedDots.pop();
            } else {
              const index = clickedDots.valueOf(i);
            clickedDots.splice(index,1);
            }

          } else {
            btn.style.backgroundColor = "red";
            clickedDots.push(i);
          }   
          console.log(clickedDots);
      }
      }
      checkBtn = document.querySelector(".check");
      
      checkBtn.onclick = async function () {
        console.log("check", eq.dots,clickedDots);

          if (arraysEqual(eq.dots,clickedDots)) {
            document.querySelector(".progress").textContent =(++n) +" подряд!";
            document.querySelector(".progress").style.color = "green";
            clickedDots.forEach(x => btns.item(x).style.backgroundColor = "green");

            clickedDots.forEach(x => btns.item(x).style.backgroundColor = "white");
            clickedDots.pop();
            clickedDots.pop();
          } else {
            document.querySelector(".progress").textContent = "0 подряд!";
            document.querySelector(".progress").style.color = "red";
            clickedDots.forEach(x => btns.item(x).style.backgroundColor = "white");
            clickedDots.pop();
            clickedDots.pop();

            n = 0;
          }
      }
      const showBtn = btns.item(18);
      showBtn.onclick = function(){
        for (let i = 0; i < eq.dots.length; i++) {
          btns.item(eq.dots[i]).style.backgroundColor = "red";
        }
      }
    
  }

for (let i = 0; i < 16; i++) {
  
  const btn = btns.item(i);
  btn .onclick = async function () {
    allBtnsToWhite();
    document.querySelector(".sin").style.visibility = "visible";
      document.querySelector(".cos").style.visibility = "visible";
      document.querySelector(".randomEq").style.visibility = "hidden";
    const textSin = document.querySelector(".sin");
    textSin.textContent = "\\[\\sin x = "+sinJax[i];
    const textCos = document.querySelector(".cos");
    textCos.textContent = "\\[\\cos x = "+cosJax[i];
    await MathJax.typeset();
    btns.item(i).style.backgroundColor = "red";
      
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
