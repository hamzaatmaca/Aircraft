var canvas = document.createElement('canvas');
canvas.style.backgroundImage="url('bg.jpg')";
canvas.style.owerflow = "hidden";
canvas.style.margin=0+"px";
canvas.style.padding=0+"px";
canvas.style.cursor="none";
document.body.appendChild(canvas)
canvas.width = 1093;
canvas.height = 500;
var ctx = canvas.getContext('2d');

ctx.scale(5,5);

//Aircraft//
let scr = 0;

class Mech{
	constructor(dx,dy){
		 this.robot = [
		 	[0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
		 	[0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
		 	[0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
		 	[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
		 	[0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
		 	[0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
		 	[1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1],
		 	[1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1],
		 	[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1],
		 	[1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1],
		 	[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1],
		 	[0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0],
		 	[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
		 	[0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
		 	[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
		 	[0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
		 	[0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
		 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		    
		];
		this.dx = dx;
		this.dy = dy;
	}
	 draw(robot){
			this.robot.forEach((row,y)=>{
				row.forEach((v,x)=>{
					if(v !== 0){
						ctx.fillStyle='yellow';
						ctx.fillRect(x+this.dx,y+this.dy,1,1);
					}
				});
			});
						
		}
}

var dx=canvas.width/10;
var dy=canvas.height/10;
var m1 = new Mech(dx,dy);


class Astroid{
	constructor(dsx,dsy,sp){
		this.stone=[
			[0,0,1,1,0,0,1,1],
			[0,1,1,1,1,1,1,0],
			[0,0,1,1,1,1,1,0],
			[0,0,0,1,1,1,1,1],
			[0,1,1,1,1,1,1,1],
			[0,1,1,1,1,0,0,0]
		];
		this.sp = sp;
		this.dsx = dsx;
		this.dsy = dsy;
	}

	draw(stone){
		this.stone.forEach((row,y)=>{
			row.forEach((col,x)=>{
				if(col !== 0){
					ctx.fillStyle='red';
					ctx.fillRect(x+this.dsx,y+this.dsy,1,1);
				}
			});
		});
	}
	move(){
		this.dsy += this.sp
	}
	remove(){
		if(this.dsy > 100){
			return true;
		}
		return false
	}
	
}

//Astroid
let dsx = Math.floor(Math.random() * 210);
let sp =99;
var stn = [];
stn.push(new Astroid(dsx,1,sp));
stn.push(new Astroid(dsx,1,sp));


//Keyboard Move//
document.addEventListener('keydown',(event)=>{
		ctx.clearRect(0,0,canvas.width,canvas.height)
		if(event.keyCode == 39){
			m1.dx+=8;
			if(m1.dx > 205){
				m1.dx = 205;
			}
			
		}
		else if(event.keyCode == 38){
			m1.dy-=8;
			if(m1.dy < 0){
				m1.dy = 1;
			}

		}
		else if(event.keyCode == 37){
			
			m1.dx-=8;
			if(m1.dx < 1){
				m1.dx = 1;
			}

		}
		else if(event.keyCode == 40){

			m1.dy+=8;
			if(m1.dy > 88){
				m1.dy = 88;
			}

		}
		else if(event.keyCode == 32){
			
		}		
			
});

//Aircraft Position//
document.addEventListener('mousemove',(e)=>{
	ctx.clearRect(0,0,canvas.width,canvas.height)
	m1.dx = (e.clientX / 5 )
	m1.dy = (e.clientY / 5)
})


class Fuze{
	constructor(x,y,h,w,c,ySpeed){

		this.x = x;
		this.y = y;
		this.h = h;
		this.w = w;
		this.c = c;
		this.ySpeed = ySpeed;
				
	}
	draw(){
		ctx.fillStyle=this.c;
		ctx.fillRect(this.x,this.y,this.w,this.h)
	}
	move(){
		this.y -=this.ySpeed;
	}
	remove(){
		if(this.y < 0){
			return true;
		}
		return false
	}
	
}

class Bomb{
	constructor(x,y,r,c,s){
		this.x=x;
		this.y=y;
		this.r=r;
		this.c=c;
		this.s=s;
	}
	draw(){
		
		ctx.beginPath();
		ctx.fillStyle=this.c;
		ctx.arc(this.x,this.y,this.r,0,Math.PI * 2);
		ctx.fill();
		ctx.closePath();
		
	}
	move(){
		this.y -=this.s;
	}
	remove(){
		if(this.y < 0){
			return true;
		}
		return false
	}
}

//Ammo//
var bullets=[];
var bullets2=[];
var bullets3=[];


//Rockets//
canvas.addEventListener('mousedown',(e)=>{
	bullets.push(new Fuze(m1.dx,m1.dy,15,.6,'lime',3));
	bullets2.push(new Fuze(m1.dx+25,m1.dy,15,.6,'lime',3))

});

//MiniGun//
document.addEventListener('keydown',(event) =>{
	if(event.keyCode == 32){
		bullets3.push(new Bomb(m1.dx+13,m1.dy,2.1,"orange",1.9));
	}
});


function Collision(){
	stn.forEach((tas,t) =>{
			bullets3.forEach((bullet3,b3) =>{
				if(((bullet3.y - tas.dsy) <= 3) && ((bullet3.x - tas.dsx <=8 ) && ( bullet3.x - tas.dsx >=-1))){
					stn.splice(t,1);
					bullets3.splice(b3,1);
					stn.push(new Astroid(Math.random() * 210,1,Math.random() * .6));
					scr++;
					
				}
					
				});

			bullets2.forEach((bullet2,b2) =>{
				if(((bullet2.y - tas.dsy) <= 3) && ((bullet2.x - tas.dsx <=8 ) && ( bullet2.x - tas.dsx >=-1))){
					stn.splice(t,1);
					bullets2.splice(b2,1);
					stn.push(new Astroid(Math.random() * 210,1,Math.random() * .6));
					scr++;
				}
					
				});

			bullets.forEach((bullet,b) =>{
				if(((bullet.y - tas.dsy) <= 3) && ((bullet.x - tas.dsx <=8 ) && ( bullet.x - tas.dsx >=-1))){
					stn.splice(t,1);
					bullets.splice(b,1);
					stn.push(new Astroid(Math.random() * 210,1,Math.random() * .6));
					scr++;
					
				}
					
				});

				if(tas.remove()){
					stn.splice(t,1);
					stn.push(new Astroid(Math.random()*210,1,Math.random() * .9));
					stn.push(new Astroid(Math.random()*210,1,Math.random() * .9));

				}

				tas.draw();
				tas.move();
			})

}

function FirstFire(){
	bullets.forEach((bullet,b) =>{
			if(bullet.remove()){
				bullets.splice(b,1);
			}
			bullet.draw();
			bullet.move();
		})
		bullets2.forEach((bullet2,b2) =>{
			if(bullet2.remove()){
				bullets2.splice(b2,1);
			}
			bullet2.draw();
			bullet2.move();
		})

		bullets3.forEach((bullet3,b3) =>{
			if(bullet3.remove()){
				bullets3.splice(b3,1)
			}
			bullet3.draw();
			bullet3.move();
		})
}
function text(){
	ctx.font = "bold 3px Arial";
	ctx.textAlign = 'center';
	ctx. textBaseline = 'middle';
	ctx.fillStyle = "aquamarine";
	ctx.fillText("SCORE : "+scr, 16, 15);
	ctx.fillText("Space : Rockets", 20, 22);
	ctx.fillText("LeftMouse : MiniGun", 24, 29);
}

function engine(){
		requestAnimationFrame(engine);
		ctx.clearRect(0,0,canvas.width,canvas.height)
		m1.draw();
		FirstFire();
		Collision();
		text();

		
}

engine();

setTimeout(()=>{
	alert('You Passed Chapter 1')
},20000)





