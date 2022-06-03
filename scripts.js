/* adding event listeners */
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

/* load page functions */
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

/* accordion */
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

/* loads in description if mobile on startup */
window.addEventListener('load', function () {
    var x = window.matchMedia("(max-width: 767.98px)");
    if (x.matches) { // If media query matches
        var descriptions = document.querySelectorAll(".carousel__card__description");
        console.log(descriptions.length);
        descriptions[1].classList.add("carousel__card--shown");
    }
    // otherwise is desktop, no worries.
});

/* cars add to garage button toggle */
function garageToggle(buttonElement) {
    if (buttonElement.innerHTML == "Remove from Garage") {
        buttonElement.innerHTML = "Add To Garage";
    } else {
        buttonElement.innerHTML = "Remove from Garage";
    }
    buttonElement.classList.toggle("button--light");
    buttonElement.classList.toggle("button--white");
}

/* compare cars feature */
let boxOneFull = false;
let boxTwoFull = false;

function compareCar(buttonElement) {
    // check whether to add or remove car
    var addingCar = true;
    var boxToInsert = -1;
    var CarID = "compare-car";
    if (buttonElement.textContent == "+") { 
        buttonElement.textContent = "-";
    } else {
        buttonElement.textContent = "+";
        addingCar = false;
    }
    // now either add or remove the car depending on the +/-
    if (addingCar == false) {
        // then are removing the car
        var CarID = "compare-car";
        // find out what car it is
        if (buttonElement.classList.contains("garage-car-1")) {
            // then adding car 1
            CarID = CarID+"-1";
        } else if (buttonElement.classList.contains("garage-car-2")) {
            // then adding car 2
            CarID = CarID+"-2";
        } else if (buttonElement.classList.contains("garage-car-3")) {
            // then adding car 3
            CarID = CarID+"-3";
        } else if (buttonElement.classList.contains("garage-car-4")) {
            // then adding car 4
            CarID = CarID+"-4";
        } else {
            // else must be car 5
            CarID = CarID+"-5";
        }
        // find out what column it's in
        if ((document.querySelectorAll("#compare-car .car--insert").length) == 2) {
            boxOneFull = false;
            boxTwoFull = false;
            console.log("Here");
            compareCarRemove("#compare-car-2");
        } else {
            boxOneFull = false;
            boxTwoFull = false;
            compareCarRemove("#compare-car");
            compareCarRemove("#compare-car-2");
        }
    } else {
        // check for box collisions
        if (boxOneFull==true && boxTwoFull==true) {
            // then first need to remove a car
            console.log("Error, both boxes already full");
            // so remove the car, set boxOneFull to false, and change the buttonElements text content (the one being removed)
            boxOneFull = false;
            compareCarRemove("#compare-car");
            // and insert it into box one
        }
        // now determine which box is free
        if (boxOneFull == false) {
            // insert it into box 1
            boxToInsert = 1;
        } else if (boxTwoFull == false) {
            // insert it into box 2
            boxToInsert = 2;
        } else {
            console.log("Error, should not have made it here, program must have flaw.");
        }
        // determine which car it is
        if (buttonElement.classList.contains("garage-car-1")) {
            // then adding car 1
            CarID = CarID+"-1";
        } else if (buttonElement.classList.contains("garage-car-2")) {
            // then adding car 2
            CarID = CarID+"-2";
        } else if (buttonElement.classList.contains("garage-car-3")) {
            // then adding car 3
            CarID = CarID+"-3";
        } else if (buttonElement.classList.contains("garage-car-4")) {
            // then adding car 4
            CarID = CarID+"-4";
        } else {
            // else must be car 5
            CarID = CarID+"-5";
        }
        // and insert it
        if (boxToInsert == 1) {
            boxOneFull = true;
            var CarToEdit = document.querySelector("#compare-car #"+CarID);
            console.log("Box One now full");

        } else if (boxToInsert == 2) {
            boxTwoFull = true;
            var CarToEdit = document.querySelector("#compare-car-2 #"+CarID);
            console.log("Box Two now full");
        } else {
            console.log("Error 2, should not have made it here, program must have flaw.");
        }
        console.log(CarToEdit);
        CarToEdit.classList.toggle("car--insert");
    }
}

/* removes the car situated in the particular given box */
function compareCarRemove(boxName) {
    var carToRemove = document.querySelector(boxName+" .car--insert");
    carToRemove.classList.remove("car--insert");
    // and also change the - back here.
}

/* FORMS */
/* validates relevant sections of the forms on a page */
function validation() {
    var validated = 0;
    console.log("Start, validated="+validated);
    var formInputs = document.querySelectorAll(".form__input > input:not(.not-required):not(.contact-us-form-input)");
    validated += validateElement(formInputs,/\b/,"Error, please fill in these details.");
    console.log("After blanks, validated="+validated);
    var postcodes = document.querySelectorAll("#postcode");
    var states = document.querySelectorAll("#state");
    var phones = document.querySelectorAll("#phone");
    var emails = document.querySelectorAll("#email");
    var words = document.querySelectorAll("#word");
    var nums = document.querySelectorAll("#num");
    var abns = document.querySelectorAll("#abn");
    validated += validateElement(postcodes, /^\d{4}$/, "Please enter a 4-digit postcode.");
    console.log("After postcode, validated="+validated);
    var phoneRe = /^\(?(?:\+?61|0)(?:(?:2\)?[ -]?(?:3[ -]?[38]|[46-9][ -]?[0-9]|5[ -]?[0-35-9])|3\)?(?:4[ -]?[0-57-9]|[57-9][ -]?[0-9]|6[ -]?[1-67])|7\)?[ -]?(?:[2-4][ -]?[0-9]|5[ -]?[2-7]|7[ -]?6)|8\)?[ -]?(?:5[ -]?[1-4]|6[ -]?[0-8]|[7-9][ -]?[0-9]))(?:[ -]?[0-9]){6}|4\)?[ -]?(?:(?:[01][ -]?[0-9]|2[ -]?[0-57-9]|3[ -]?[1-9]|4[ -]?[7-9]|5[ -]?[018])[ -]?[0-9]|3[ -]?0[ -]?[0-5])(?:[ -]?[0-9]){5})$/;
    validated += validateElement(phones, phoneRe, "Please enter a standard Australian phone number in any standard format");
    console.log("After phonr, validated="+validated);
    validated += validateElement(emails, /^.+?@.+?\..+$/ ,"Please enter a valid email address");
    console.log("After email, validated="+validated);
    validated += validateElement(nums, /^[0-9]+$/, "Please enter a valid number (no symbols)");
    console.log("After nums, validated="+validated);
    validated += validateElement(abns, /^(\d *?){11}$/, "Error, please enter a standard ABN (11 digits long)");
    // then return if the input is valid or not
    console.log("At end, validated="+validated);
    if (validated > 0) {
        return false;
    } else {
        return true;
    }
}


/* handles when there is more than one form on the individual car page */
function validationDualForm() {
    var validated = 0;
    var formInputs = document.querySelectorAll(".message-form .form__input > input:not(.not-required)");
    validated += validateElement(formInputs,/\b/,"Error, please fill in these details.");
    var phones = document.querySelectorAll(".message-form #contact-phone");
    var emails = document.querySelectorAll(".message-form #contact-email");
    var words = document.querySelectorAll(".message-form #contact-word");
    var nums = document.querySelectorAll(".message-form #contact-num");
    var phoneRe = /^\(?(?:\+?61|0)(?:(?:2\)?[ -]?(?:3[ -]?[38]|[46-9][ -]?[0-9]|5[ -]?[0-35-9])|3\)?(?:4[ -]?[0-57-9]|[57-9][ -]?[0-9]|6[ -]?[1-67])|7\)?[ -]?(?:[2-4][ -]?[0-9]|5[ -]?[2-7]|7[ -]?6)|8\)?[ -]?(?:5[ -]?[1-4]|6[ -]?[0-8]|[7-9][ -]?[0-9]))(?:[ -]?[0-9]){6}|4\)?[ -]?(?:(?:[01][ -]?[0-9]|2[ -]?[0-57-9]|3[ -]?[1-9]|4[ -]?[7-9]|5[ -]?[018])[ -]?[0-9]|3[ -]?0[ -]?[0-5])(?:[ -]?[0-9]){5})$/;
    validated += validateElement(phones, phoneRe, "Please enter a standard Australian phone number in any standard format");
    validated += validateElement(emails, /^.+?@.+?\..+$/ ,"Please enter a valid email address");
    validated += validateElement(nums, /^[0-9]+$/, "Please enter a valid number (no symbols)");
    // then return if the input is valid or not
    console.log("At end, validated="+validated);
    if (validated > 0) {
        return false;
    } else {
        return true;
    }
}

/* validates a given type of element in a form against a pattern to match */
function validateElement(element, pattern, errorMessage) {
    var valid = 0;
    const re = pattern;
    for (var i=0; i<element.length; i++) {
        const ok = re.exec(element[i].value);
        if (!ok) {
            element[i].classList.add("form--invalid");
            if (element[i].classList.contains("form--success")) {
                element[i].classList.remove("form--success");
            }
            valid = 1;
            var smallErrorMessage = element[i].nextElementSibling;
            smallErrorMessage.innerHTML = "<br>"+errorMessage;
        } else {
            element[i].classList.add("form--success");
            if (element[i].classList.contains("form--invalid")) {
                element[i].classList.remove("form--invalid");
            }
            var smallTest = element[i].nextElementSibling;
            smallTest.textContent = "";
        }
    }
    return valid;
}

/* inquiry form popup itself */
function inquiryForm() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    var popup = document.getElementsByClassName("inquiry");
    popup[0].classList.toggle("inquiry--show");
    var body = document.getElementById("body__individual-car-page");
    body.classList.toggle("body--noscroll");
}

/* inquiry form with slight variation */
function inquirySuccessFinance(formID) {
    var validated = false;
    // run validation
    if (formID==1) {
        validated = validationDualForm();
    } else {
        validated = validation();
    }
    if (validated == true) {
        var newPopup = document.getElementsByClassName("success-popup");
        newPopup[0].style.visibility = "visible";
    } else {
        console.log("Failed form validation on submit");
        document.body.scrollTop = document.documentElement.scrollTop = 20;
    }
}

/* the success popup */
function inquirySuccess() {
    var validated = false;
    // run validation
    validated = validation();
    if (validated == true) {
        var newPopup = document.getElementsByClassName("success-popup");
        newPopup[0].classList.toggle("inquiry--show");
    } else {
        document.body.scrollTop = document.documentElement.scrollTop = 100;
    }
}

/* the create an account success popup */
function accountSuccess() {
    var newPopup = document.getElementsByClassName("success-popup");
    newPopup[1].classList.toggle("inquiry--show");
}


/* (main)/major button function */
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
        compareCar(buttonElement);
    /* remove from garage button */
    } else if (buttonElement.textContent == "remove from garage") {
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
    /* toggle garage on cars page button */
    else if (buttonElement.id == "button__garage-toggle") {
        garageToggle(buttonElement);
    }
    else {
        console.log("Hey you clicked "+buttonElement.textContent);
    }
}