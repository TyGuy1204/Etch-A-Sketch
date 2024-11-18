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
    div.addEventListener("mouseleave", () => {
        div.style.cssText = "background-color:";
    });
});