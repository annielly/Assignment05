/*eslint-env browser*/

//STEP 1
function callMessage() {
    "use strict";
    window.alert("I have been clicked.")
}

//STEP 2
window.document.getElementById("step2").onclick = callMessage;

//STEP 3
window.document.getElementById("step3").addEventListener("click", callMessage);

//STEP 4
step4.addEventListener("click", function () {
    window.alert("I have been clicked.");
});

//STEP 5
function head () {
    window.document.getElementById("step5").addEventListener("click", function () {
    "use strict";
    window.alert("I have been clicked");
    });
}
window.addEventListener("load", head);

//STEP 6
document.getElementById("redirect").addEventListener("click", function(e) {
    e.preventDefault();
    window.alert("I have clicked on the Google link, but all I get is this pop-up!");
});

//STEP 7
window.document.getElementById("step7").addEventListener("click", function(e) {
    window.document.getElementById("step7").disabled = true;
    var popup = window.document.getElementById("text").value;
    window.alert(popup);
})

//STEP 8
window.document.getElementById("step8").addEventListener("click", function () {
    newPage();
});
function newPage() {
  newWindow = window.open("newpage.html", "", "width=300, height=300");
    newWindow.addEventListener("load", function () {
        resizeWindow();
    })
}
function resizeWindow() {
    newWindow.resizeTo(500, 300);
}

//STEP 9
var startDisplay;
start.addEventListener("click", function() {
    startDisplay = setInterval(function(){ console.log("Learning Javascript is fun!"); }, 2000);
}, false);

stop.addEventListener("click", function() {
    clearInterval(startDisplay);
}, false);

//STEP 10
window.document.getElementById("step10").addEventListener("click", function () {
    "use strict";
    window.alert(document.getElementById("menu").value);
});