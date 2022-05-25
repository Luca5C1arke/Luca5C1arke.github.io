window.addEventListener("DOMContentLoaded", function() {
    var buttonsList = document.getElementsByClassName("button");
    for (const button of buttonsList) {
        button.addEventListener("click", function(event) {
            buttonClick(event.target);
        });
    }
});

window.addEventListener("DOMContentLoaded", function() {
    var accordionButtons = document.getElementsByClassName("accordion");
    for (const button of accordionButtons) {
        button.addEventListener("click", function(event) {
            accordionClick(event.target);
        });
    }
});

function accordionClick(buttonElement) {
    console.log(buttonElement);
    buttonElement.classList.toggle("accordion--active");
}


/* hamburger */
function hamburger() {
    console.log("hamburger was clicked");
    var navSub = document.getElementById("nav-sub");
    navSub.classList.toggle("nav-active");
}

/* inquiry form */
function inquiryForm() {
    var popup = document.getElementsByClassName("inquiry");
    popup[0].classList.toggle("inquiry--show");
    var body = document.getElementById("body__individual-car-page");
    body.classList.toggle("body--noscroll");
}

function inquirySuccess() {
    var newPopup = document.getElementsByClassName("success-popup");
    newPopup[0].classList.toggle("inquiry--show");
}

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
            document.getElementByClass("page-content").innerHTML = resolve;
        })
        .catch((reject) => {
            console.error(reject);
        });
}

function buttonClick(buttonElement) {
    /* index page carousel */
    if (buttonElement.id == "car-carousel__prev") {
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
    } else if (buttonElement.id == "car-carousel__next") {
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
    }
    /* add to cart function */
    else if (buttonElement.id == "button__add-car") {
        if (buttonElement.textContent == "+") {
            document.getElementById("button__add-car").classList.add("button--added");
            document.getElementById("button__add-car").textContent = "-";
        } else {
            document.getElementById("button__add-car").classList.remove("button--added");
            document.getElementById("button__add-car").textContent = "+";
        }
    }
    /* garage comparison function */
    else if (buttonElement.id == "button-garage") {
        buttonElement.classList.toggle("button--added");
        if (buttonElement.textContent == "+") { 
            buttonElement.textContent = "-";
        } else {
            buttonElement.textContent = "+";
        }

    } else {
        alert("Hey you clicked "+buttonElement.textContent);
        console.log("Hey you clicked "+buttonElement.textContent);
    }
}


/* hamburger menu functionality */
