/*eslint-env browser*/

var btnDel = [], i;

for (i = 0; i < 5; i += 1) {
    btnDel[i] = "<button class='btnDel" + String(i) + "'>Delete</button>";
}

var employeeList = [];
employeeList[0] = ["Lady One", "Title One", 1234, btnDel[0]];
employeeList[1] = ["Guy Two", "Title Two", 5677, btnDel[1]];
employeeList[2] = ["Person Three", "Title Three", 8901, btnDel[2]];
employeeList[3] = ["Guy Four", "Title Four", 2345, btnDel[3]];
employeeList[4] = ["Guy Five", "Title Five", 6789, btnDel[4]];

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var showEmployees = function () {
    "use strict";
    var row, col, tableString = "";

    $("qtyEmployee").innerHTML = "Showing " + employeeList.length + " employees";

    for (row = 0; row < employeeList.length; row += 1) {
        tableString += "<tr>";
        for (col = 0; col < 4; col += 1) {
            tableString += "<td>" + employeeList[row][col] + "</td>";
        }
        tableString += "</tr>";
        console.log("tableString ="+tableString);
    }
    $("tblBody").innerHTML = tableString;
};

var addEmployee = function () {
    "use strict";
    var name, title, extension, employee = [];

    // GRAB VALUES OF TEXT BOXES
    name = $("name").value;
    title = $("title").value;
    extension = $("extension").value;

    // BASIC VALIDATION
    if (name === "") {
        $("Name").innerHTML = "This field is required!";
        return;
    } else {
        $("Name").innerHTML = "";
        employee.push(name);
    }

    if (title === "") {
        $("Title").innerHTML = "This field is required!";
        return;
    } else {
        $("Title").innerHTML = "";
        employee.push(title);
    }

    if (extension === "") {
        $("Extension").innerHTML = "This field is required!";
        return;
    } else if (isNaN(extension) || extension.length !== 4) {
        $("Extension").innerHTML = "Extension must be a 4-digit value!";
        return;
    } else {
        $("Extension").innerHTML = "";
        employee.push(extension);
        btnDel[employeeList.length] = "<button class='btnDel" + String(employeeList.length) + "'>Delete</button>";
        employee.push(btnDel[employeeList.length]);
    }

    if (employee.length > 0) {
        employeeList.push(employee);
    }
    showEmployees();

    $("regForm").reset();
};

var delEmployee = function (index) {
    "use strict";
    employeeList.splice(index, 1);
    window.console.log("Deleted " + index);
    showEmployees();
};

window.addEventListener("load", function () {
    "use strict";
    showEmployees();
    $("add").addEventListener("click", addEmployee);
    $("tblBody").addEventListener("click", function (e) {
        if (e.target.textContent.match(/Delete/)) {
            var i, index, tblBody, btnElements;

            tblBody = $("tblBody");
            btnElements = tblBody.getElementsByTagName("button");
            for (i = 0; i < btnElements.length; i += 1) {
                if (e.target.className === btnElements[i].className) {
                    index = i;
                }
            }
            delEmployee(index);
        }
    });
});