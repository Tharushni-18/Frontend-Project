const colors = ["darkblue", "lightgreen", "lightpink", "lightyellow", "lavender", "peachpuff"];
document.getElementById("colorBtn").addEventListener("click", function () {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
