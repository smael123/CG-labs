//Nicko Rosal
//Ismael Almaguer
function main() {  
  //1. Retrieve <canvas> element
  var canvas = document.getElementById('example');  
  if (!canvas) { 
    console.log('Failed to retrieve the <canvas> element');
    return false; 
  } 

  //2. Get the rendering context for 2DCG
  var ctx = canvas.getContext('2d');

  //3. Draw a blue rectangle (body)
	ctx.fillStyle = ('#ffd01a'); // Set color to blue
	ctx.fillRect(150,200, 100, 100);        // Fill a rectangle with the color
  
  //hat
	ctx.fillStyle = ('#994c00#');
	ctx.beginPath();
	ctx.moveTo(200, 50);
	ctx.lineTo(125, 112.5);
	ctx.lineTo(275, 112.5);
	ctx.fill();
	
   // neck
	ctx.fillStyle = ('#ff8c1a');
	ctx.fillRect(187.5,175, 25, 25);
  
   //head
	ctx.fillStyle = ('#990000');
	ctx.fillRect(162.5, 112.5,75,75);
	
	//mouth
	ctx.fillStyle = ('#e6e6e6');
	ctx.fillRect(175, 155, 50, 30);
	
	//tooth0
	ctx.fillStyle = ('#e6b700');
	ctx.fillRect(185, 155, 10, 10);
	
	//tooth1
	ctx.fillStyle = ('#e6b700');
	ctx.fillRect(205, 155, 10, 10);
	
	//nose
	ctx.fillStyle = ('#3900e6');
	ctx.beginPath();
	ctx.moveTo(180, 150);
	ctx.lineTo(220, 150);
	ctx.lineTo(200, 130);
	ctx.fill();
	
	//eye0 thank you:http://www.w3schools.com/tags/canvas_arc.asp
	ctx.fillStyle = ('#ffffff');
	ctx.beginPath();
	ctx.arc(180,130,7,0,2*Math.PI);
	ctx.stroke();
	ctx.fill();
	
	//eye1
	//should be 17.5 px away from the y
	ctx.fillStyle = ('#ffffff');
	ctx.beginPath();
	ctx.arc(220,130,7,0,2*Math.PI);
	ctx.stroke();
	ctx.fill();

   //left arm 
	ctx.fillStyle = ('#ff3300');
	ctx.fillRect(75,200,75,25);
	
   //right arm
	ctx.fillStyle = ('#ff3300');
	ctx.fillRect(250,200,75,25);
	
   //left hand
	ctx.fillStyle = ('#ff3300');
	ctx.fillRect(50,187.5,25,50);

	
   //right hand
	ctx.fillStyle = ('#ff3300');
	ctx.fillRect(325,187.5,25,50);
	
   //left leg
	ctx.fillStyle = ('#ff3300');
	ctx.fillRect(150,300, 25,175);
  
  
   //right leg
	ctx.fillStyle = ('#ff3300');
	ctx.fillRect(225,300, 25,175);
  
   //shoes
	ctx.fillStyle = ('#ff3300');
	ctx.fillRect(125,375, 50,25);
  
	ctx.fillStyle = ('#ff3300');
	ctx.fillRect(225,375,50,25);
  
   //pole
	//ctx.fillStyle = 'rgba(255, 0 , 255, 1.0)';
	//ctx.fillRect(175,350,50,15 );
  
   //extension of pole
	//ctx.fillStyle = 'rgba(255, 0, 255, 1.0)';
	//ctx.fillRect(192.5,365.5, 15,50);

}