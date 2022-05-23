//Initialise board
var resolution = document.getElementById("blockResolution");
var mode = document.getElementById("modeSwitch");

    var target = document.querySelector(".sketchinput");
    target.innerHTML="<div></div>";
    target.appendChild(generateInputBlocks(resolution.value));
    console.log(resolution.value);

    //var inputBlock = document.querySelectorAll(".block");
    //inputBlock.forEach(addEventListeners);

    function addEventListeners(block){
        block.addEventListener('click', updateColor);
        //block.addEventListener('mouseenter', updateColor);
    }

    function updateColor(block){
        console.log('clicked');
        //console.log(e.target.style.backgroundColor);
        var style = getComputedStyle(block);
        var color = style.backgroundColor;
        const colorParts = color.match(/[\d.]+/g);
    
        // If alpha is not there, add it:
        if (colorParts.length === 3) {
            colorParts.push(1);
        }

        console.log("transperancy = " + colorParts[3]);
        //block.style.setProperty("backgroundColor", `rgba(20, 20, 40, ${(colorParts[3]+0.1)})`);
        block.style.backgroundColor = `rgba(20, 20, 40, ${(parseFloat(colorParts[3])+0.1)})`;
        console.log("currentColor = " + color);
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
        newDiv.addEventListener('click', function onClick(event){
           // console.log(event.target.style.backgroundColor);
        });
        
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
