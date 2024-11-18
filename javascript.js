const STARTING_SIZE = 16;
const gap_size = 1;
const div_container  = document.querySelector(".div_container");
const reset_button = document.querySelector(".reset_button");
const resize_button = document.querySelector(".resize_button");
let squares;

function draw_grid(grid_size){
    for(let i = 0; i < (grid_size * grid_size); i++){
        const grid_square  = document.createElement("div");
        grid_square.classList.add("grid_square");
        grid_square.style.flex = `0 0 calc((100% - ${(grid_size - 1) * gap_size}px) / ${grid_size})`;
        grid_square.style.aspectRatio = '1';
        div_container.appendChild(grid_square);
    }
    squares = document.querySelectorAll(".grid_square");
}
function color_grid(){
    squares.forEach((grid_square) => {
        grid_square.addEventListener("mouseover", () => {
            grid_square.style.backgroundColor = "blue";
        });
    });
}
function reset_grid(){
    squares.forEach((grid_square) => {
        grid_square.style.backgroundColor = "";
    })
}
function clearGrid(){
    squares.forEach((grid_square) => {
        grid_square.remove();
    });
}

draw_grid(STARTING_SIZE);
color_grid();

reset_button.addEventListener("click", () =>{
    reset_grid();
});



resize_button.addEventListener("click", () => {
    let size  = parseInt(prompt("What size would you like the grid to be (size x size)? :"));
    clearGrid();
    draw_grid(size);
    color_grid();

});
