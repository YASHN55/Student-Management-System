function addStudent() {

    let name = document.getElementById("studentName").value;
    let course = document.getElementById("studentCourse").value;

    if (name === "" || course === "") {
        alert("Please enter all details!");
        return;
    }

    let studentList = document.getElementById("studentList");

    let li = document.createElement("li");

    li.textContent = name + " - " + course;

    // Create Delete Button
    let deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.style.marginLeft = "15px";

    // Delete student when button is clicked
    deleteButton.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteButton);

    studentList.appendChild(li);

    document.getElementById("studentName").value = "";
    document.getElementById("studentCourse").value = "";
}