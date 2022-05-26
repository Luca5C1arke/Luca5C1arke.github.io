window.addEventListener("DOMContentLoaded", function() {
    var buttonsList = document.getElementsByClassName("button");
    for (const button of buttonsList) {
        button.addEventListener("click", function(event) {
            buttonClick(event.target);
        });
    }
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
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    var popup = document.getElementsByClassName("inquiry");
    popup[0].classList.toggle("inquiry--show");
    var body = document.getElementById("body__individual-car-page");
    body.classList.toggle("body--noscroll");
}

function inquirySuccess() {
    var newPopup = document.getElementsByClassName("success-popup");
    newPopup[0].classList.toggle("inquiry--show");
}

function inquirySuccessFinance() {
    var newPopup = document.getElementsByClassName("success-popup");
    newPopup[0].style.visibility = "visible";
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
    var descriptions = document.getElementsByClassName("carousel__card__description");
    if (buttonElement.id == "car-carousel__prev") {
        if (((document.getElementById("carousel-car-1").style.gridColumn) == "1") || ((document.getElementById("carousel-car-1").style.gridColumn) == "1 / auto")) {
            // order is currently 1 2 3, make it 2 3 1
            descriptions[1].classList.remove("carousel__card--shown");
            descriptions[2].classList.add("carousel__card--shown");
            document.getElementById("carousel-car-1").style.gridColumn = 5;
            document.getElementById("carousel-car-2").style.gridColumn = 1;
            document.getElementById("carousel-car-3").style.gridColumn = 3;
        } else if (((document.getElementById("carousel-car-1").style.gridColumn) == "3") || ((document.getElementById("carousel-car-1").style.gridColumn) == "3 / auto")) {
            // order is currently 3 1 2, make it 1 2 3
            descriptions[0].classList.remove("carousel__card--shown");
            descriptions[1].classList.add("carousel__card--shown");
            document.getElementById("carousel-car-1").style.gridColumn = 1;
            document.getElementById("carousel-car-2").style.gridColumn = 3;
            document.getElementById("carousel-car-3").style.gridColumn = 5;
        } else {
            // order is currently 2 3 1, make it 3 1 2
            descriptions[2].classList.remove("carousel__card--shown");
            descriptions[0].classList.add("carousel__card--shown");
            document.getElementById("carousel-car-1").style.gridColumn = 3;
            document.getElementById("carousel-car-2").style.gridColumn = 5;
            document.getElementById("carousel-car-3").style.gridColumn = 1;
        }
    } else if (buttonElement.id == "car-carousel__next") {
        if (((document.getElementById("carousel-car-1").style.gridColumn) == "5") || ((document.getElementById("carousel-car-1").style.gridColumn) == "5 / auto")) {
            // order is currently 2 3 1, make it 1 2 3
            descriptions[2].classList.remove("carousel__card--shown");
            descriptions[1].classList.add("carousel__card--shown");
            document.getElementById("carousel-car-1").style.gridColumn = 1;
            document.getElementById("carousel-car-2").style.gridColumn = 3;
            document.getElementById("carousel-car-3").style.gridColumn = 5;
        } else if (((document.getElementById("carousel-car-1").style.gridColumn) == "3") || ((document.getElementById("carousel-car-1").style.gridColumn) == "3 / auto")) {
            // order is currently 3 1 2, make it 2 3 1
            descriptions[0].classList.remove("carousel__card--shown");
            descriptions[2].classList.add("carousel__card--shown");
            document.getElementById("carousel-car-1").style.gridColumn = 5;
            document.getElementById("carousel-car-2").style.gridColumn = 1;
            document.getElementById("carousel-car-3").style.gridColumn = 3;
        } else {
            // order is currently 1 2 3, make it 3 1 2
            descriptions[1].classList.remove("carousel__card--shown");
            descriptions[0].classList.add("carousel__card--shown");
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
        if (buttonElement.classList.contains("garage-car-1")) {
            alert("car one was added");
        }
        if (buttonElement.classList.contains("garage-car-2")) {
            alert("car two was added");
        }
        if (buttonElement.classList.contains("garage-car-3")) {
            alert("car three was added");
        }
        if (buttonElement.classList.contains("garage-car-4")) {
            alert("car four was added");
        }
        if (buttonElement.classList.contains("garage-car-5")) {
            alert("car five was added");
        }

    }    /* remove from garage button */
    else if (buttonElement.textContent == "remove from garage") {
        var cars = document.getElementsByClassName("car-box");
        if (buttonElement.id == "remove-car-1") {
            cars[0].style.display = "none";
        }
        if (buttonElement.id == "remove-car-2") {
            cars[1].style.display = "none";
        }
        if (buttonElement.id == "remove-car-3") {
            cars[2].style.display = "none";
        }
        if (buttonElement.id == "remove-car-4") {
            cars[3].style.display = "none";
        }
        if (buttonElement.id == "remove-car-5") {
            cars[4].style.display = "none";
        }
    }
    else {
        console.log("Hey you clicked "+buttonElement.textContent);
    }
}

/* loads in description if mobile on startup */
window.addEventListener('load', function () {
    var x = window.matchMedia("(max-width: 767.98px)");
    if (x.matches) { // If media query matches
        var descriptions = document.querySelectorAll(".carousel__card__description");
        console.log(descriptions.length);
        descriptions[1].classList.add("carousel__card--shown");
    }
    // otherwise is desktop, no worries.
  })