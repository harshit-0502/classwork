let students = [];

function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let math = Number(document.getElementById("math").value);
    let science = Number(document.getElementById("science").value);
    let english = Number(document.getElementById("english").value);

    if(name === "" || roll === "") {
        document.getElementById("output").innerHTML = "Please fill all details!";
        return;
    }

    let student = { name, roll, math, science, english };
    students.push(student);

    document.getElementById("output").innerHTML = "Student Added!";
}

function displayStudents() {
    let text = "";

    for (let s of students) {
        text += `Name: ${s.name}<br>
                 Roll: ${s.roll}<br>
                 Marks: ${s.math}, ${s.science}, ${s.english}<br><hr>`;
    }

    document.getElementById("output").innerHTML = text;
}

function showTotal() {
    let text = "";

    for (let s of students) {
        let total = s.math + s.science + s.english;
        text += `${s.name} Total = ${total}<br>`;
    }

    document.getElementById("output").innerHTML = text;
}

function showAverage() {
    let text = "";

    for (let s of students) {
        let avg = (s.math + s.science + s.english) / 3;
        text += `${s.name} Average = ${avg.toFixed(2)}<br>`;
    }

    document.getElementById("output").innerHTML = text;
}

function above80() {
    let text = "";

    for (let s of students) {
        let avg = (s.math + s.science + s.english) / 3;

        if (avg > 80) {
            text += `${s.name} Average = ${avg.toFixed(2)}<br>`;
        }
    }

    document.getElementById("output").innerHTML = text || "No student above 80";
}

function failedStudents() {
    let text = "";

    for (let s of students) {
        let avg = (s.math + s.science + s.english) / 3;

        if (avg < 40) {
            text += `${s.name} Failed (Avg = ${avg.toFixed(2)})<br>`;
        }
    }

    document.getElementById("output").innerHTML = text || "No failed students";
}

function countStudents() {
    document.getElementById("output").innerHTML =
        "Total Students = " + students.length;
}