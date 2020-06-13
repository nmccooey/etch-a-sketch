const gridContainer = document.querySelector(".grid-container");

for(let i = 0; i < 16; i++) {
    gridContainer.innerHTML += '<div class="box"></div>';

    for(let j = 0; j < 16; j++) {
        gridContainer.innerHTML += '<div class="box"></div>';
    }
}