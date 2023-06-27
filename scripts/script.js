let tab1 = document.getElementById("table1");
let tab2 = document.getElementById("table2");
let mtn1 = document.getElementById("mtn1");
let mtn2 = document.getElementById("mtn2");
let image = document.getElementById("bg1");

function changeSchedule1(){
    tab1.style.visibility = "hidden";
    tab2.style.visibility = "visible";
    mtn1.style.backgroundColor = "#65656500";
    mtn2.style.backgroundColor = "#686868";
    image.src = "./images/i13.jpg"
}

mtn2.addEventListener("click", changeSchedule1);

function changeSchedule2(){
    tab2.style.visibility = "hidden";
    tab1.style.visibility = "visible";
    mtn2.style.backgroundColor = "#65656500";
    mtn1.style.backgroundColor = "#686868";
    image.src = "./images/i14.jpg"
}



mtn1.addEventListener("click", changeSchedule2);