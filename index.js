var sidebar=document.getElementById("sidebar")
var closex=document.getElementById("closex")
var menuicon=document.getElementById("menuicon")

menuicon.addEventListener("click",function(){
    sidebar.style.right=0
})

closex.addEventListener("click",function(){
    sidebar.style.right= "-50%"
})