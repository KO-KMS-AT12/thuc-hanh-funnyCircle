let Circle = function (x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
};

function getRandomHex() {
    return Math.floor(Math.random() * 255);
}

function getRandomColor() {
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green + ")";
}

function canvasCircle() {
    let context = document.getElementById("circle").getContext("2d");
    let color = getRandomColor();
    let x = Math.random() * window.innerWidth + 5;
    let y = Math.random() * window.innerHeight + 5;
    let r = Math.floor(Math.random() * 80) + 5;

    let circle = new Circle(x, y, r);

    context.beginPath();
    context.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);

    var grd = context.createRadialGradient(circle.x, circle.y, circle.r, circle.x - 5, circle.y - 5, circle.r - 5);
    grd.addColorStop(0, color);
    grd.addColorStop(0.5, color);
    grd.addColorStop(1, "white");

    context.strokeStyle = grd;
    context.fillStyle = grd;
    context.fill();
    context.stroke();


}

function multiCanvasCircle() {
    for (let i = 0; i < 100; i++) {
        canvasCircle();
    }
}

// function animation() {
//     var tanggiam = 1;
//     var pos = 0;
//     var box = document.getElementById("circle");
//     var t = setInterval(move, 5);
//
//     function move() {
//         if ((pos > 1000) || (pos < 0)) {
//             tanggiam = (-tanggiam);
//         }
//
//         pos += tanggiam;
//         box.style.left = pos + "px";
//     }
// }


multiCanvasCircle();

// animation();


