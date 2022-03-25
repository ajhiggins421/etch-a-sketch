const container = document.querySelector(".container");
const clearButton = document.querySelector(".clear");
const changeGridButton = document.querySelector(".changeGrid");

function makeGrid(size=16){
    counter = 0;
    for(let i = 0; i < size; i++){
        const div = document.createElement("div");
        div.classList = ".divs";
        container.appendChild(div)
        for(let j = 0; j < size; j++){
            const div2 = document.createElement("div");
            div2.classList = ".cubes";
            div2.id = `${counter}`;
            div.appendChild(div2);
            counter++; 
        }   
    }
}

makeGrid();

function changeGrid(){
    let size = parseInt(prompt("New grid size (1-100):"));
    if(size < 0 || size > 100){
        alert("Grid must be between 0 and 100");
        return;
    }
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    makeGrid(size);
    cubes = document.querySelectorAll("div");

    
}


let cubes = document.querySelectorAll("div");

function addColor(id){
    let element = document.getElementById(id);
    if(element == null) return;
    element.classList.add("selected");
}

function removeColor(){
    cubes.forEach(cube => cube.classList.remove("selected"));
}


cubes.forEach(cube => cube.addEventListener("mouseover", e => addColor(e.target.id)));

clearButton.addEventListener("click", removeColor);

changeGridButton.addEventListener("click", changeGrid);
clearButton.addEventListener("click", removeColor);
