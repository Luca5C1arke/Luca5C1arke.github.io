/*  hamburger menu animation */
/* credit to https://www.codewithrandom.com/2021/08/hamburger-menu-hamburger-menu-with.html#:~:text=%20How%20to%20Create%20Hamburger-menu%3A%20%201%201.Writing,.%204%203.%20Writing%20JS%20Code%3A%20More%20 */
const hamburger = document.querySelector(".hamburger");  
const navsub = document.querySelector(".nav-sub");  
hamburger.addEventListener('click', () => {  
    console.log("button was pressed")
    hamburger.classList.toggle("change")  
    navsub.classList.toggle("nav-change")  
});  


const getData = (pageUrl) => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.onload = function(){
            if (this.readyState == 4 && this.status == 200) {
                resolve(this.responseText);
            } else {
                reject(this.responseText);
            }
        };
        request.open("get", pageUrl, true);
        request.send();
    })
}

function loadPage(PageUrl) {
    getData(pageUrl)
        .then((resolve) => {
            console.log(resolve);
            document.getElementById("page-content").innerHTML = resolve;
        })
        .catch((reject) => {
            console.error(reject);
        });
}

function buttonClick(buttonElement) {
    if (buttonElement.textContent == "PREV") {
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

window.addEventListener("DOMContentLoaded", function() {
    var buttonsList = document.getElementsByClassName("button");
    for (const button of buttonsList) {
        button.addEventListener("click", function(event) {
            buttonClick(event.target);
        });
    }
});


/* CAROUSEL FUNCTIONALITY */
// new idea, just swap image, h3, link and p around.
var carouselImages = document.querySelectorAll('.carousel__card > img');
const numOfImages = document.querySelectorAll(".carousel__card > img").length;
var carouselDescriptions = document.querySelectorAll('.carousel p');
let currMainImage = 2;

function shiftLeft() {
    console.log("Shifting left..");
    if (currMainImage == numOfImages) {
        currMainImage = 1; 
    } else {
        currMainImage ++;
    }
}

function shiftRight() {
    console.log("Shifting right...");
    if (currMainImage == 1) {
        currMainImage = 3; 
    } else {
        currMainImage --;
    }
}