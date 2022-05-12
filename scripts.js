/* hamburger */
function hamburger() {
    console.log("hamburger was clicked");
    var navSub = document.getElementById("nav-sub");
    navSub.classList.toggle("nav-active");
}

/* this is all a mess */
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


/* index page carousel */
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

/* hamburger menu functionality */
