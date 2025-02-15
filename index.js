
let num = false ; 
function darkmode(){
    const sun=  document.getElementById("sun");
    const moon= document.getElementById("moon");
    const a =document.getElementsByTagName("body") ; 
    const nav = document.getElementsByClassName("heading");
  
    
    const d  =document.getElementsByTagName("ul");
    
    if(num){
        num = false ; 
        sun.style="display:none";
    moon.style="display:content";
    document.body.style.backgroundColor = "white";
    nav.style.backgroundColor = "black";
     
    }
    else{
        num = true ; 
        sun.style="display:content";
    moon.style="display:none";
     document.body.style.backgroundColor = "black"; 
     nav.style.backgroundColor = "white";
     nav.style.color="black";
    
    }
}