//Initialise board
var resolution = document.getElementById("blockResolution");
var target = document.querySelector(".sketchinput");
target.appendChild(generateInputBlocks(resolution.value));


let eraseMode = false;
var mode = document.getElementById("modeSwitch");
mode.onchange = updateDrawMode;


function updateDrawMode(){
    eraseMode = !eraseMode;
    console.log(`erasemode is ${eraseMode}`);
}


function updateColor(block){
    var style = getComputedStyle(block);
    var color = style.backgroundColor;
    const colorParts = color.match(/[\d.]+/g);
    
    // If alpha is not there, add it:
    if (colorParts.length === 3) {
        colorParts.push(0);
    }

    if(eraseMode){
        block.style.backgroundColor = `rgba(20, 20, 40, ${(parseFloat(colorParts[3])-0.1)})`;
    }else{
        if (colorParts[3]<0.9) {
            block.style.backgroundColor = `rgba(20, 20, 40, ${(parseFloat(colorParts[3])+0.1)})`;   
        }
    }

}


function generateInputBlocks(dimension) {
    
    let number = dimension*dimension;
    let boxSize = (600/dimension)-1; //reduce 1px to adjust for margin

    var fragment = document.createDocumentFragment();

    for(var i=0; i < number; i++){
        var newDiv = document.createElement('div');
        newDiv.id = 'r'+i;
        newDiv.className = 'block';
        newDiv.style = `width:${boxSize}px; height:${boxSize}px;`;
        newDiv.setAttribute('onmouseenter', 'updateColor(this)');
        newDiv.setAttribute('onclick', 'updateColor(this)');
                
        fragment.appendChild(newDiv);
    }
    

    return fragment;
}


var resolution = document.getElementById("blockResolution");
resolution.oninput = function(){
    var target = document.querySelector(".sketchinput");
    target.innerHTML="<div></div>";
    target.appendChild(generateInputBlocks(this.value));
    console.log(this.value)
}




//document.appendChild(target);

console.log("it worked")
