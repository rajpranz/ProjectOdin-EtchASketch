var target = document.querySelector(".sketchinput");

function generateInputBlocks(dimension) {
    let number = dimension*2;

    for(var i=0; i < number; i++){
        var newDiv = document.createElement('div');
        newDiv.id = 'r'+i;
        newDiv.className = 'block';
        target.appendChild(newDiv);
     }
    
}

generateInputBlocks(36);






//document.appendChild(target);

console.log("it worked")
