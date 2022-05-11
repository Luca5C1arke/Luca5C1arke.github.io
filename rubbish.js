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