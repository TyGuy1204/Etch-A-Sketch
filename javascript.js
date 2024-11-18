const STARTING_SIZE = 16;
const div_container  = document.querySelector(".div_container");
const reset_button = document.querySelector(".reset_button");
const resize_button = document.querySelector(".resize_button");
let squares;

function draw_grid(grid_size){
    for(let i = 0; i < (grid_size * grid_size); i++){
        const grid_square  = document.createElement("div");
        grid_square.classList.add("grid_square");
        div_container.appendChild(grid_square);
    }
    squares = document.querySelectorAll(".grid_square");
}
function color_grid(){
    squares.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.cssText = "background-color: blue";
        });
    });
}
function reset_grid(){
    squares.forEach((div) => {
        div.style.cssText = "background-color:";
    })
}
function clearGrid(){
    squares.forEach((div) => {
        div.remove();
    });
}

draw_grid(STARTING_SIZE);
color_grid();

reset_button.addEventListener("click", () =>{
    reset_grid();
});



resize_button.addEventListener("click", () => {
    let size  = prompt("What size would you like the grid to be (size x size)? :");
    clearGrid();
    draw_grid(size);
    color_grid();

});
