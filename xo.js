var tabl = [[],[],[]];
for (let i = 0; i < 3; i++){
	for (let j = 0; j < 3; j++){
		tabl[i][j]="e";
	}
}

var abc = document.getElementById('playingField');
var rowCounterX = [];
var cellCounterX = [];
var rowCounterO = [];
var cellCounterO = [];
var rowCounter = [];
var cellCounter = [];
var diagDownCounterX;
var diagUpCounterX;
var diagDownCounterO;
var diagUpCounterO;
var diagDownCounter;
var diagUpCounter;
var win = false;
var lose = false;


function move(){
	let playersMove = document.querySelector('#player').value;
		let n = playersMove % 10 - 1; //console.log(n);
		let m = (playersMove - n - 1) / 10 - 1; //console.log(m);
		if(tabl[m][n]=="e"){
		tabl[m][n]="x";
		abc.rows[m].cells[n].style.backgroundColor = 'red';
		console.log("red");
		counterXO();
		console.log("coXO");
		answer();
		console.log("answ");
		setTimeout(counterXO(), 100000);
		console.log("coXO");
		winCheck();
		console.log("winCh");
		console.log(win);
		console.log(lose);
		if(win==true){
			alert("Вы выиграли!");
			//setTimeout(winColor(), 100000);
		}else if(lose==true){
			alert("Вы proиграли!");
			//document.write("Вы проиграли!");
			//setTimeout(winColor(), 100000);
		};
	}
}

function moveClick(el){
	let playersMove = el.id;
		let n = playersMove % 10; //console.log(n);
		let m = (playersMove - n) / 10; //console.log(m);
		if(tabl[m][n]=="e"){
		tabl[m][n]="x";
		abc.rows[m].cells[n].style.backgroundColor = 'red';
		console.log("red");
		counterXO();
		console.log("coXO");
		answer();
		console.log("answ");
		setTimeout(counterXO(), 100000);
		console.log("coXO");
		winCheck();
		console.log("winCh");
		console.log(win);
		console.log(lose);
		if(win==true){
			alert("Вы выиграли!");
			//setTimeout(winColor(), 100000);
		}else if(lose==true){
			//alert("Вы proиграли!");
			//document.write("Вы проиграли!");
			//setTimeout(winColor(), 100000);
			el.innerHTML = "Вы проиграли!";
		};
	}
}

/*var tablRowClick = function(el1){
	return el1.rowIndex;
}

function f(el) {
    //alert(el.rowIndex);
    alert(el.cellIndex);
    //alert(el.rowIndex);
}
*/




var counterXO = function(){
	rowCounterX = [0,0,0];
	cellCounterX = [0,0,0];
	rowCounterO = [0,0,0];
	cellCounterO = [0,0,0];
	rowCounter = [0,0,0];
	cellCounter = [0,0,0];
	diagDownCounterX = 0;
	diagUpCounterX = 0;
	diagDownCounterO = 0;
	diagUpCounterO = 0;
	diagDownCounter = 0;
	diagUpCounter = 0;
	for (let i = 0; i < 3; i++){
	for (let j = 0; j < 3; j++){
		if(tabl[i][j]=="x"){
		rowCounterX[i]++;
		cellCounterX[j]++;
		rowCounter[i]++;
		cellCounter[j]++;
		if(i==j){diagDownCounterX++; diagDownCounter++;};
		if(j==(2-i)){diagUpCounterX++;  diagUpCounter++;};	
		};
		if(tabl[i][j]=="0"){
		rowCounterO[i]++;
		cellCounterO[j]++;
		rowCounter[i]++;
		cellCounter[j]++;
		//console.log("counted 0 row " + i);
		if(i==j){diagDownCounterO++; diagDownCounter++;};
		if(j==(2-i)){diagUpCounterO++; diagUpCounter++;};		
		};
	}
}
//console.log(rowCounterX);
//console.log(cellCounterX);
//console.log(rowCounter);
//console.log(cellCounter);
//console.log(diagUpCounterX);
//console.log(diagDownCounterX);
//console.log(diagUpCounter);
//console.log(diagDownCounter);
}

var answer = function(){	
	let newMove = false;
if((diagDownCounterO==2)&&(diagDownCounter<3)){
					answerForTwo(0, 0, 1, 1);
					newMove = true;
						}else if((diagUpCounterO==2)&&(diagUpCounter<3)){
							answerForTwo(0, 2, 1, -1);
							newMove = true;
}else if((diagDownCounterX==2)&&(diagDownCounter<3)){
					answerForTwo(0, 0, 1, 1);
					newMove = true;
						}else if((diagUpCounterX==2)&&(diagUpCounter<3)){
							answerForTwo(0, 2, 1, -1);
							newMove = true;
}else if((rowCounterX.indexOf(2)>=0)||(cellCounterX.indexOf(2)>=0)||(rowCounterO.indexOf(2)>=0)){
	let i = 0;
	while((i < 3)&&(newMove==false)){
		if((rowCounterO[i]==2)&&(rowCounter[i]<3)){
									answerForTwo(0, i, 1, 0);
									newMove = true;
									//console.log("rowO"+i);
		}else if((cellCounterO[i]==2)&&(cellCounter[i]<3)){
									answerForTwo(i, 0, 0, 1);
									newMove = true;
									//console.log("cellO"+i);
								}else if((rowCounterX[i]==2)&&(rowCounter[i]<3)){
									answerForTwo(0, i, 1, 0);
									newMove = true;
									//console.log("row"+i);
								}else if((cellCounterX[i]==2)&&(cellCounter[i]<3)){
									answerForTwo(i, 0, 0, 1);
									newMove = true;
									//console.log("cell"+i);
								}
			i++;
			};
};
if(newMove==false){		
						if(tabl[1][1]=="e"){
									tabl[1][1] = "0";
									abc.rows[1].cells[1].style.backgroundColor = 'green'; //console.log("green" + i);
									newMove = true;
									console.log(tabl);
								}else if(tabl[0][0]=="e"){
									tabl[0][0] = "0";
									abc.rows[0].cells[0].style.backgroundColor = 'green'; //console.log("green" + i);
									newMove = true;
									console.log(tabl);
								}else if(tabl[0][2]=="e"){
									tabl[0][2] = "0";
									abc.rows[0].cells[2].style.backgroundColor = 'green'; //console.log("green" + i);
									newMove = true;
									console.log(tabl);
								}else if(tabl[2][0]=="e"){
									tabl[2][0] = "0";
									abc.rows[2].cells[0].style.backgroundColor = 'green'; //console.log("green" + i);
									newMove = true;
									console.log(tabl);
								}else if(tabl[2][2]=="e"){
									tabl[2][2] = "0";
									abc.rows[2].cells[2].style.backgroundColor = 'green'; //console.log("green22");
									newMove = true;
									console.log(tabl);
								}else if(tabl[0][1]=="e"){
									tabl[0][1] = "0";
									abc.rows[0].cells[1].style.backgroundColor = 'green'; //console.log("green12");
									newMove = true;
									//console.log(tabl);
								}else if(tabl[1][0]=="e"){
									tabl[1][0] = "0";
									abc.rows[1].cells[0].style.backgroundColor = 'green'; //console.log("green23");
									newMove = true;
									//console.log(tabl);
								}else if(tabl[2][1]=="e"){
									tabl[2][1] = "0";
									abc.rows[2].cells[1].style.backgroundColor = 'green'; //console.log("green32");
									newMove = true;
									//console.log(tabl);
								}else if(tabl[1][2]=="e"){
									tabl[1][2] = "0";
									abc.rows[1].cells[2].style.backgroundColor = 'green'; //console.log("green21");
									newMove = true;
									//console.log(tabl);
								};
}							
}

var answerForTwo = function(x1, y1, upX, upY){
	let k = 0;
	let x = x1;
	let y = y1;
	let newMoveTwo = false;
	while((k < 3)&&(newMoveTwo==false)){
		if (tabl[y][x]=="e"){
			tabl[y][x] = "0";
			abc.rows[y].cells[x].style.backgroundColor = 'green'; console.log("green" + x);
			newMoveTwo = true;
		} else{
			k++;
			x = x + upX; //console.log(x);
			y = y + upY; //console.log(y);
		}
	}	
//console.log("answerForTw");
}

var winCheck = function(){
let i = 0;
while((i < 3)&&(win==false)&&(lose==false)){
	if ((rowCounterX[i]==3)||(cellCounterX[i]==3)||(diagDownCounterX==3)||(diagUpCounterX==3)){
		win=true; i++;
	}else if((rowCounterO[i]==3)||(cellCounterO[i]==3)||(diagDownCounterO==3)||(diagUpCounterO==3)){
			lose=true; i++;
				}
i++;
//console.log("win cycle");
}	
}

/*var winColor = function(){
	if(win==true){
			for (let i = 0; i < 3; i++){
			for (let j = 0; j < 3; j++){
				abc.rows[i].cells[j].style.backgroundColor = 'red';
			}};
		}else if(lose==true){
			for (let i = 0; i < 3; i++){
			for (let j = 0; j < 3; j++){
				abc.rows[i].cells[j].style.backgroundColor = 'green';
			}};
		};
}*/