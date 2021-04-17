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
    var inputText = document.querySelectorAll(".textarea");
    var inputTextArr = Array.from(inputText);
    console.log(inputTextArr);
    inputTextArr.forEach(element => {
        console.log(element.value)
        localStorage.setItem(`text${element.attributes[1].value}`, JSON.stringify(element.value));
    })

};

function pageLoad() {
    var returnedItems = [];
    for (var i = 9; i < 21; i++) {
        if (i === 9) {
            returnedItems.push(window.localStorage.getItem(`text0${i}`))
        } else {
            returnedItems.push(window.localStorage.getItem(`text${i}`));
        }
    }
        document.getElementById("09").innerHTML += JSON.parse(localStorage.getItem("text09"));
        document.getElementById("10").innerHTML += JSON.parse(localStorage.getItem("text10"));
        document.getElementById("11").innerHTML += JSON.parse(localStorage.getItem("text11"));
        document.getElementById("12").innerHTML += JSON.parse(localStorage.getItem("text12"));
        document.getElementById("13").innerHTML += JSON.parse(localStorage.getItem("text13"));
        document.getElementById("14").innerHTML += JSON.parse(localStorage.getItem("text14"));
        document.getElementById("15").innerHTML += JSON.parse(localStorage.getItem("text15"));
        document.getElementById("16").innerHTML += JSON.parse(localStorage.getItem("text16"));
        document.getElementById("17").innerHTML += JSON.parse(localStorage.getItem("text17"));
        document.getElementById("18").innerHTML += JSON.parse(localStorage.getItem("text18"));
        document.getElementById("19").innerHTML += JSON.parse(localStorage.getItem("text19"));
        document.getElementById("20").innerHTML += JSON.parse(localStorage.getItem("text20"));
    // })
};

pageLoad();




