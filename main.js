// portugal
const canvasPT = document.getElementById("canvasPortugal");
const ctxPT = canvasPT.getContext("2d");

ctxPT.fillStyle = "green";
ctxPT.fillRect(0, 0, 70, 150);
ctxPT.fillStyle = "red";
ctxPT.fillRect(70, 0, 200, 150);

ctxPT.beginPath();
ctxPT.arc(70, 75, 40, 0, 2 * Math.PI);
ctxPT.lineWidth = 6;
ctxPT.strokeStyle = "yellow";
ctxPT.stroke();

ctxPT.beginPath();
ctxPT.moveTo(70, 35);
ctxPT.lineTo(70, 115);
ctxPT.stroke();

ctxPT.beginPath();
ctxPT.moveTo(35, 55);
ctxPT.lineTo(100, 100);
ctxPT.stroke();

ctxPT.lineWidth = 4;

ctxPT.beginPath();
ctxPT.moveTo(100, 100);
ctxPT.lineTo(40, 100);
ctxPT.stroke();

ctxPT.beginPath();
ctxPT.moveTo(40, 100);
ctxPT.lineTo(110, 75);
ctxPT.stroke();

ctxPT.beginPath();
ctxPT.moveTo(110, 75);
ctxPT.lineTo(30, 75);
ctxPT.stroke();

ctxPT.beginPath();
ctxPT.moveTo(35, 55);
ctxPT.lineTo(105, 55);
ctxPT.stroke();

ctxPT.beginPath();
ctxPT.moveTo(35, 75);
ctxPT.lineTo(105, 55);
ctxPT.stroke();

ctxPT.lineWidth = 2;

let brasao = new Path2D();
brasao.moveTo(45, 50);
brasao.lineTo(95, 50);
brasao.lineTo(95, 60);
brasao.arc(70, 80, 25, 2 * Math.PI, Math.PI);
brasao.lineTo(45, 55);
ctxPT.strokeStyle = "white";
ctxPT.stroke(brasao);
ctxPT.fillStyle = "red";
ctxPT.fill(brasao);

let brasaoA = new Path2D();
brasaoA.moveTo(55, 60);
brasaoA.lineTo(85, 60);
brasaoA.lineTo(85, 60);
brasaoA.arc(70, 80, 15, 2 * Math.PI, Math.PI);
brasaoA.lineTo(55, 60);
ctxPT.strokeStyle = "white";
ctxPT.stroke(brasaoA);
ctxPT.fillStyle = "white";
ctxPT.fill(brasaoA);

ctxPT.fillStyle = "darkblue";
ctxPT.beginPath();
ctxPT.rect(65, 65, 8, 10);
ctxPT.fill();

// outros retangulos

// X
const canvasSecondX = document.getElementById("second-X");
const ctxSecondX = canvasSecondX.getContext("2d");

ctxSecondX.fillStyle = "white";
ctxSecondX.fillRect(0, 0, 70, 70);
    
ctxSecondX.lineWidth = 6;
ctxSecondX.strokeStyle = "grey";
    
ctxSecondX.beginPath();
ctxSecondX.moveTo(5, 5);
ctxSecondX.lineTo(65, 65);
ctxSecondX.stroke();
    
ctxSecondX.beginPath();
ctxSecondX.moveTo(5, 65);
ctxSecondX.lineTo(65, 5);
ctxSecondX.stroke();

// Coreia
const canvasCS = document.getElementById("canvasCoreia");
const ctxCS = canvasCS.getContext("2d");

ctxCS.rect(0, 0, 200, 150);
ctxCS.stroke();