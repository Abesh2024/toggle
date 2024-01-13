let button = document.getElementById("btn");
let image = document.getElementById("img");
let text = document.querySelector("#para");



image.addEventListener("click", ()=>{
    // image.style.transform = "transition(0.2s)";
    if(image.style.transform === "translateX(-60px)"){
        image.style.transform = "translateX(20px)"
    } else {
        image.style.transform = "translateX(-60px)"
    }
})
let flag=true;

button.addEventListener("click", ()=>{
    document.body.classList.toggle("bg-color");
    if(flag){
    text.setAttribute("class","para1");
flag=false;}
else{
text.setAttribute("class","para");
flag=true  
console.log(text);
}})


