const canvas = document.querySelector("#canvas");

const dif = canvas.getBoundingClientRect(); // <= Esto nos permite conocer la posicion de X y Y

const ctx = canvas.getContext("2d");

let pintar, cor, linea, difX, difY;


canvas.addEventListener("mousedown", (e)=>{
    difX = e.clientX - dif.x;
    difY = e.clientY - dif.y;
    pintar = true;
    cor = document.getElementById("cor").value;
    linea = document.getElementById("lw").value;
});

canvas.addEventListener("mousemove", (e)=>{
    if(pintar){
        dibujando(difX,difY,e.clientX - dif.x, e.clientY - dif.y);
        difX = e.clientX - dif.x;
        difY = e.clientY - dif.y;
        ctx.beginPath();
    }
});

canvas.addEventListener("mouseup", ()=>{
    ctx.closePath();
    pintar = false;
})

const dibujando = (x1,y1,x2,y2) =>{
    ctx.strokeStyle = cor;
    ctx.lineWidth = linea;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    

}