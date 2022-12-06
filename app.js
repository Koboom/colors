const colors=["green","blue","darkgreen","yellow"];

const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click",function() {
    const randomColor=getColor();

    document.body.style.backgroundColor=colors[randomColor];
    color.textContent=colors[randomColor];
});
function getColor() {
    return Math.floor(Math.random()*colors.length);
}