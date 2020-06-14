let colorChoice = "black";

// Creates a new grid with specified width.
function createNewGrid(gridWidth) {
    const gridContainer = document.querySelector(".grid-container");
    
    // Clear any children divs that are currently in the container.
    gridContainer.innerHTML = "";

    for(let i = 0; i < gridWidth; i++) {
        gridContainer.innerHTML += '<div class="box"></div>';

        for(let j = 1; j < gridWidth; j++) {
            gridContainer.innerHTML += '<div class="box"></div>';
        }
    }
    /*
    Determines pixel size of each div. Note formula: (500 / gridWidth - 2).
    Note that -2 is to account for the margins on each div. If the margins in
    styles.css changes, the formula must be changed.
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
        boxItem.style.backgroundColor = colorChoice;
    });
  });
}

// Initially sets up a grid of 16x16.
createNewGrid(16);

// User can create a new grid.
const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", function() {
    let width = window.prompt("Enter width of new grid: ");
    createNewGrid(width);
});

// User can change color to red.
const redButton = document.querySelector(".red-button");
redButton.addEventListener("click", function(){
    colorChoice = "red";
})

// User can change color to black.
const blackButton = document.querySelector(".black-button");
blackButton.addEventListener("click", function(){
    colorChoice = "black";
})