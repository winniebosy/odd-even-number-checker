

window.onload = function() { // this facilitates in loading this js file once the page loads

let input = document.querySelector('#oddeven',);//declares the variable input
input.addEventListener('input', function(e){ // creates an input event when a user enters a number
   let num =e.target.value; // declares variable for user input

    let btn = document.querySelector('#btn', 50000).addEventListener('click' , function(){ //creates an event to facilitate an action once a user clicks the check number button
     
        const output = e.target.value; //creates const output.
        
      //condition to check whether the number is even or not
        if ( num %2==0){
            document.getElementById("output").innerHTML = num + " " + "is even";

        }else{
            document.getElementById("output").innerHTML = num + " " + "is odd";//
            
        }
    
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