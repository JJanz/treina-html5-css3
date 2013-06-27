var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

context.font = '38pt Arial';
context.fillStyle = 'cornflowerblue';
context.strokeStyle = 'blue';

context.fillText("Oi Canvas", canvas.width/2 - 150, canvas.height/2 + 15);

context.strokeText("Oi Canvas", canvas.width/2 - 150, canvas.height/2 + 15 );
