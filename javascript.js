const div_container  = document.querySelector(".div_container");
for(let i = 0; i < 256; i++){
    const grid_square  = document.createElement("div");
    div_container.appendChild(grid_square);
}
