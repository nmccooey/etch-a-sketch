const rainbowColors = ["purple", "blue", "green", "yellow", "orange", "red"];
let colorChoice = "black";

// Creates a new grid with specified width.
function createNewGrid(gridWidth) {
    const gridContainer = document.querySelector(".grid-container");
    
    // Clear any children divs that are currently in the container.
    gridContainer.innerHTML = "";

    for(let i = 0; i < gridWidth; i++) {
        let cell = document.createElement('div');
        gridContainer.appendChild(cell);
        cell.className = "box";

        for(let j = 1; j < gridWidth; j++) {
            let cell = document.createElement('div');
            gridContainer.appendChild(cell);
            cell.className = "box";
        }
    }
    /*
    Determines pixel size of each div. Note formula: (500 / gridWidth - 2).
    */
    document.querySelectorAll('.box').forEach(boxItem => {
        boxItem.style.width = (500 / gridWidth - 2) + "px";
        boxItem.style.height = (500 / gridWidth - 2) + "px";
      });

      gridContainer.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;
      console.log(`repeat(${gridWidth} 1fr)`);

    // Div's background color will turn to color of choice on mouseover.
    document.querySelectorAll('.box').forEach(boxItem => {
        boxItem.addEventListener('mouseover', function() {
            if (colorChoice === "rainbow"){
                boxItem.style.backgroundColor = rainbowColors[getRandomInt(0, 5)];
            } else {
                boxItem.style.backgroundColor = colorChoice;
            }
    });
  });
}

// Geneterates a random number between min and max inclusive.
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initially sets up a grid of 16x16.
createNewGrid(16);

// User can create a new grid.
const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", function() {
    let width = window.prompt("Enter width of new grid (16 - 64):");

    if (width < 16 || width > 64) {
        do {
            width = window.prompt("Width must be between 16 and 64. Enter width of new grid:");
        } while (width < 16 || width > 64);
    }

    createNewGrid(width);
});

// User can change color to red.
const redButton = document.querySelector(".red-button");
redButton.addEventListener("click", function() {
    colorChoice = "red";
});

// User can change color to black.
const blackButton = document.querySelector(".black-button");
blackButton.addEventListener("click", function() {
    colorChoice = "black";
});

// User can change color to rainbow.
const rainbowButton = document.querySelector(".rainbow-button");
rainbowButton.addEventListener("click", function() {
    colorChoice = "rainbow";
});