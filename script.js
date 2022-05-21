var target = document.querySelector(".sketchinput");

function generateInputBlocks(dimension) {
    
    let number = dimension*dimension;
    let boxSize = (600/dimension)-1; //reduce 1px to adjust for margin

    var fragment = document.createDocumentFragment();

    for(var i=0; i < number; i++){
        var newDiv = document.createElement('div');
        newDiv.id = 'r'+i;
        newDiv.className = 'block';
        newDiv.style = `background-color:red; width:${boxSize}px; height:${boxSize}px;`;
        fragment.appendChild(newDiv);
    }
    

    return fragment;
}

target.appendChild(generateInputBlocks(6));






//document.appendChild(target);

console.log("it worked")
