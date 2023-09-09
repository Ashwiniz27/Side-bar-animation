const menu =document.querySelector("#menu");
const background = document.querySelector("#background");
const sidebar=document.querySelector("#sidebar");
const closebtn=document.querySelector("#close");

closebtn.addEventListener("click",function(){
    background.style.transform=' translateX(0px) scale(1)';
    background.style.filter = 'blur(0px)';
    sidebar.style.left= '-10%';
    
    
})
menu.addEventListener("click",function(){
    background.style.transform=' translateX(200px) scale(0.6) rotateY(-8deg)' ;
    background.style.filter = 'blur(1px)';
    sidebar.style.left= '2%';
    
    
})