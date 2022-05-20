
var target = document.querySelector(".sketchinput");

for(var i=0; i < 11; i++){
   var newDiv = document.createElement('div');
   newDiv.id = 'r'+i;
   newDiv.className = 'block';
   target.appendChild(newDiv);
}

//document.appendChild(target);

console.log("it worked")
