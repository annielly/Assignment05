/*eslint-env browser*/

/*eslint-env browser*/
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

window.addEventListener("load", function () {
    "use strict";
    init();
});

function init() {
    "use strict";
    document.getElementById("calculator").addEventListener("click",function(e) {
        if (e.target.id !== "calculator" && e.target.id !== "equal") {
//            console.log(e.target, e.target.id, e.target.innerHTML.trim());
            enter(e.target.value);
        } else if (e.target.id === "equal") {
//            console.log(e.target, e.target.id, e.target.innerHTML.trim());
            calculate();
        }
    });
}

function enter (val) {
    $("result").value += val;
}

function calculate () {
    $("result").value = eval($("result").value);
}