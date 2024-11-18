const div_container  = document.querySelector(".div_container");
for(let i = 0; i < 256; i++){
    const grid_square  = document.createElement("div");
    grid_square.classList.add("grid_square");
    div_container.appendChild(grid_square);
}
const squares = document.querySelectorAll(".grid_square");
squares.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.cssText = "background-color: blue";
    });
});
const reset_button = document.querySelector(".reset_button");
reset_button.addEventListener("click", () =>{
    squares.forEach((div) => {
        div.style.cssText = "background-color:";
    })
});
const resize_button = document.querySelector(".resize_button");
resize_button.addEventListener("click", () => {
    let size  = prompt("What size would you like the grid to be (size x size)? :");
    squares.forEach((div) => {
        div.remove();
    });
    /*
    for(let i = 0; i < (size * size); i++){
        const grid_square  = document.createElement("div");
        grid_square.classList.add("grid_square");
        div_container.appendChild(grid_square);
    }
        */
});
