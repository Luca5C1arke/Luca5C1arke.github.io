/* carousel functionality */
function buttonClick(buttonElement) {
    if (buttonElement.textContent == "PREV") {
        console.log("Pressed prev!");
        if ((document.getElementById("carousel-car-1").style.gridColumn) == "1 / auto") {
            // order is currently 1 2 3, make it 2 3 1
            document.getElementById("carousel-car-1").style.gridColumn = 5;
            document.getElementById("carousel-car-2").style.gridColumn = 1;
            document.getElementById("carousel-car-3").style.gridColumn = 3;
        } else if ((document.getElementById("carousel-car-1").style.gridColumn) == "3 / auto") {
            // order is currently 3 1 2, make it 1 2 3
            document.getElementById("carousel-car-1").style.gridColumn = 1;
            document.getElementById("carousel-car-2").style.gridColumn = 3;
            document.getElementById("carousel-car-3").style.gridColumn = 5;
        } else {
            // order is currently 2 3 1, make it 3 1 2
            document.getElementById("carousel-car-1").style.gridColumn = 3;
            document.getElementById("carousel-car-2").style.gridColumn = 5;
            document.getElementById("carousel-car-3").style.gridColumn = 1;
        }
    } else if (buttonElement.textContent == "NEXT") {
        console.log("Pressed next!");
        if ((document.getElementById("carousel-car-1").style.gridColumn) == "5 / auto") {
            // order is currently 2 3 1, make it 1 2 3
            document.getElementById("carousel-car-1").style.gridColumn = 1;
            document.getElementById("carousel-car-2").style.gridColumn = 3;
            document.getElementById("carousel-car-3").style.gridColumn = 5;
        } else if ((document.getElementById("carousel-car-1").style.gridColumn) == "3 / auto") {
            // order is currently 3 1 2, make it 2 3 1
            document.getElementById("carousel-car-1").style.gridColumn = 5;
            document.getElementById("carousel-car-2").style.gridColumn = 1;
            document.getElementById("carousel-car-3").style.gridColumn = 3;
        } else {
            // order is currently 1 2 3, make it 3 1 2
            document.getElementById("carousel-car-1").style.gridColumn = 3;
            document.getElementById("carousel-car-2").style.gridColumn = 5;
            document.getElementById("carousel-car-3").style.gridColumn = 1;
        }
    } else {
        alert("Hey you clicked "+buttonElement.textContent);
        console.log("Hey you clicked "+buttonElement.textContent);
    }
}

/*  hamburger menu animation */
/* credit to https://www.codewithrandom.com/2021/08/hamburger-menu-hamburger-menu-with.html#:~:text=%20How%20to%20Create%20Hamburger-menu%3A%20%201%201.Writing,.%204%203.%20Writing%20JS%20Code%3A%20More%20 */
/* const hamburger = document.querySelector(".hamburger");  
const navsub = document.querySelector(".nav-sub");
hamburger.addEventListener('click', () => {  
    console.log("button was pressed")
    hamburger.classList.toggle("change")  
    navsub.classList.toggle("nav-change")  
});  */