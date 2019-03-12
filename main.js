

window.onload = function(){
let input = document.querySelector('#oddeven');
input.addEventListener('input', function(e){
   let num =e.target.value;
   
    let btn = document.querySelector('#btn').addEventListener('click' ,function(){
    console.log(e);
    console.log("heyyyyy");
});
 
});

 
}






















/*

let num = e.target.value;
let templatee = `is even`;
let templateo = `is odd`;
    if (num %2==0){
        document.getElementById("output").innerHTML = num  +  templatee ;

    }
    else{
        document.getElementById("output").innerHTML = num  +  templateo ;
    }
document.getElementById("button").addEventListener("click", function(e){ 
      
});




*/ 