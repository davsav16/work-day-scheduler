var timeBlock = document.querySelectorAll(".hour");

function currentDate() {
    document.querySelector("#currentDay").innerHTML = moment().format("dddd, MMMM Do YYYY"); }

currentDate();

var ppf= function () {
    var curTime = moment().format('H');

    // get all elements with class of text
    var timeElements = document.querySelectorAll(".textarea");

    for (var i = 0; i < timeElements.length; i++) {
        var elementID = timeElements[i].id;

        var maniID = document.getElementById(timeElements[i].id)

        $(timeElements[i].id).removeClass(".past .present .future");

        //apply new class is task is present/past/future
        if(elementID < curTime) {
            $(maniID).addClass("past");
            console.log("past");
        } else if (elementID > curTime) {
            $(maniID).addClass("future");
            console.log("future");
        } else {
            $(maniID).addClass("present");
            console.log("present");
        }
    };
};

ppf();



function persistInput() {
    var inputText = document.getElementById("09");
    //for( var i=0; i <)
    
    localStorage.setItem("text", inputText.value);

};

function pageLoad() {
 

};

pageLoad();




