const menuBtn=document.getElementById("menuBtn");
const sidebar=document.getElementById("sidebar");
const overlay=document.getElementById("overlay");

function openMenu(){
sidebar.classList.add("open");
overlay.classList.add("show");
}

function closeMenu(){
sidebar.classList.remove("open");
overlay.classList.remove("show");
}

menuBtn.onclick=()=>{

sidebar.classList.contains("open")
?closeMenu()
:openMenu();

};

overlay.onclick=closeMenu;

document.querySelectorAll("a").forEach(link=>{

if(link.href){

link.addEventListener("click",function(e){

if(link.target==="_blank") return;

e.preventDefault();

document.body.style.opacity="0";

setTimeout(()=>{

window.location=link.href;

},350);

});

}

});
