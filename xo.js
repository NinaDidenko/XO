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
var diagDownCounterX;
var diagUpCounterX;
var diagDownCounterO;
var diagUpCounterO;
var win = false;
var lose = false;


function move(){
	let playersMove = document.querySelector('#player').value;
		let n = playersMove % 10 - 1; console.log(n);
		let m = (playersMove - n - 1) / 10 - 1; console.log(m);
		tabl[m][n]="x";
		abc.rows[m].cells[n].style.backgroundColor = 'red';
		counterXO();
		answer();
}

var counterXO = function(){
	rowCounterX = [0,0,0];
	cellCounterX = [0,0,0];
	rowCounterO = [0,0,0];
	cellCounterO = [0,0,0];
	diagDownCounterX = 0;
	diagUpCounterX = 0;
	diagDownCounterO = 0;
	diagUpCounterO = 0;
	for (let i = 0; i < 3; i++){
	for (let j = 0; j < 3; j++){
		if(tabl[i][j]=="x"){
		rowCounterX[i]++;
		cellCounterX[j]++;
		if(i==j){diagDownCounterX++;}else if(j==(2-i)){diagUpCounterX++};	
		};
		if(tabl[i][j]=="0"){
		rowCounterO[i]++;
		cellCounterO[j]++;
		if(i==j){diagDownCounterO++;}else if(j==(2-i)){diagUpCounterO++};		
		};
	}
}
}

var answer = function(){
for (let i = 0; i < 3; i++){
	if ((rowCounterX[i]==3)||(cellCounterX[i]==3)||(diagDownCounterX==3)||(diagUpCounterX==3)){
		win=true;
	}else if((rowCounterO[i]==3)||(cellCounterO[i]==3)||(diagDownCounterO==3)||(diagUpCounterO==3)){
			lose=true;
				}else if(diagDownCounterX==2){
					if(tabl[1][1]=="e"){
						tabl[1][1]="0";
						abc.rows[1].cells[1].style.backgroundColor = 'green';
						};
					}
	
/*console.log(rowCounterX[i]);
console.log(rowCounterO[i]);
console.log(cellCounterX[i]);
console.log(cellCounterO[i]);*/
console.log(diagDownCounterX);
}
console.log(diagDownCounterX);
console.log(win);
console.log	(lose);
}

/*var answer = function(){

}*/



/*function tableOut(){
for (let i = 0; i < 3; i++){
	for (let j = 0; j < 3; j++){
		document.write(table[i][j]);
	}
	document.write("<br />");
}
}*/

/*function tableOut(){
for (let i = 0; i < 3; i++){
	for (let j = 0; j < 3; j++){	
	//let field = document.querySelector('.playingField');
	let newLine = document.createElement('p');
	newLine.innerHTML = table[i][j];
	document.body.appendChild(newLine);
	console.log(table[i][j]);
}
}*/
