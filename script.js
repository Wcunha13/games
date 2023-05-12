const sonic = document.querySelector(".sonic");
const robotinic = document.querySelector(".robotinic");
const cenario = document.querySelector(".cenario");

const jump = () => {
    sonic.classList.add("jump");
    sonic.src = "https://raw.githubusercontent.com/EmanuelNogueira/Sonic_game/main/Arquivos/Sonic-Jump.gif";

     setTimeout(() => {
        sonic.classList.remove("jump");
        sonic.src = "https://github.com/EmanuelNogueira/Sonic_game/blob/main/Arquivos/Sonic.gif?raw=true";
     },900);
};

const loop = setInterval(() => {
    const robotinicPostion = robotinic.offsetLeft;
    const sonicPosition = +window
       .getComputedStyle(sonic)
       .bottom.replace("px","");
    
  
    if (robotinicPostion < 110 && robotinicPostion > 0 &&  sonicPosition < 220) {
     robotinic.style.animation = "none";
     robotinic.style.left = `${robotinicPostion}px`; 

     sonic.style.animation = "none";
     sonic.src = "https://github.com/EmanuelNogueira/Sonic_game/blob/main/Arquivos/Sonic-Loss.gif?raw=true";
     sonic.style.width = "240px";
        
      cenario.src = "./GameoverSMB-1.png";
     }
    
}, 10);


document.addEventListener("click", jump);