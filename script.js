var _a;
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeBackground() {
    var color1 = getRandomColor();
    var color2 = getRandomColor();
    var color3 = getRandomColor();
    document.body.style.background = "radial-gradient(circle, ".concat(color1, ", ").concat(color2, ", ").concat(color3, ")");
    document.getElementById("colorCode").textContent = `${color1}, ${color2}, ${color3}`;
}
(_a = document.getElementById("changeBackground")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", changeBackground);
