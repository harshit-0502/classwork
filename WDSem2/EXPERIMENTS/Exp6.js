let fontSize = 18;
let isVisible = true;
document.getElementById("btnHeading").onclick = function () {
    let text = document.getElementById("inputText").value;
    document.getElementById("heading").innerText = text || "No Input Provided";
};
document.getElementById("btnBg").onclick = function () {
    let colors = ["lightblue", "lightgreen", "lightpink", "lightyellow"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
};
document.getElementById("btnFont").addEventListener("click", function () {
    fontSize += 2;
    document.getElementById("para").style.fontSize = fontSize + "px";
});
document.getElementById("btnToggle").onclick = function () {
    let para = document.getElementById("para");
    isVisible = !isVisible;
    para.style.display = isVisible ? "block" : "none";
};

document.getElementById("btnReset").onclick = function () {
    location.reload();
};

document.getElementById("inputText").onchange = function () {
    alert("Input changed to: " + this.value);
};

let heading = document.getElementById("heading");
heading.onmouseover = function () {
    this.style.color = "red";
};
heading.onmouseout = function () {
    this.style.color = "darkblue";
};