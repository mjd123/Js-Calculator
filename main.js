var button = document.querySelector("#buttons").children;
var fButton = document.querySelector("#fbuttons").children;
var screen = document.querySelector(".screen")

//button[2].style.color = 'red'
//fButton[2].style.color = 'blue'

//var for functions
var output;
var nb;
var sign;

var add = fButton[0];
var subtract = fButton[1];
var multipy = fButton[2];
var divide = fButton[3];
var equals = fButton[4];
var clear = document.getElementById('clear');
var a;

$(document).ready(function($) {

for (i = 0; i < button.length; i++){ // number clicks
	button[i].onclick= function (number){
	nb = this.value; 
	output = screen.innerHTML += nb; // stores numbers clicked

	}
}

for (i = 0; i < fButton.length; i++){
	fButton[i].onclick= function (number){ // signs clicks
	sign = this.value; // 


 if(screen.innerHTML === "") {
            
            screen.innerHTML = screen.innerHTML.concat("");
            
        }
        
        else if(output) {
        
            screen.innerHTML = output.concat(sign);
            
        }
	}
}

equals.onclick = function(result){ //equals func

if(screen.innerHTML === output) {
        screen.innerHTML = eval(output);
      }
        
      else {
        screen.innerHTML = "";
      }

}

clear.onclick = function(clear){
	screen.innerHTML = '';
}

button[10].onclick = function(decimal){

	if(screen.innerHTML === ''){
		output = screen.innerHTML = screen.innerHTML.concat("0.");
	}
	else if(screen.innerHTML === output){
		screen.innerHTML = screen.innerHTML.concat(".");
	}

}

});