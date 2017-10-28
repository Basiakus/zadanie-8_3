var zmienna = prompt("Grałeś kiedyś w Mario?");
alert(zmienna + " ?");


var zmienna2 = prompt("to tak, czy nie???");
console.log(zmienna2);
alert("skoro " + zmienna2 + " to " + zmienna2);
//próbowałem tutaj napisać jakąś funkcję, 
//która wykorzystywała by if, else np.

/*
function mario () { 
	var zmienna2;
	if(znienna2 == "tak") {
	alert("Jump!!!");
	} else {
	alert("...najlepiej na nintendo :D");
	}
} 
*/
alert('Spróbujmy napisać prosty "program", który obiczy pole trójkąta na podstawie Twoich danych. ZACZYNAMY!');

var triangleBasis = prompt('Wpisz wartość całkowitą długości jego podstawy w cm.');
console.log(triangleBasis);
var triangleHeight = prompt("Potrzebujemy jescze jego wysokość, również w cm.");
console.log(triangleHeight);
var triangleField = ((triangleBasis*triangleHeight)/2);
alert('Na podstawie Twoich danych pole trójkąta, którego podstawa wynosi: ' + triangleBasis + 'cm. ,oraz wysokość: ' + triangleHeight + 'cm. jest równe: ' + triangleField + "cm\u00B2.");
console.log('Pole trójkąta wynosi: ' + triangleField + ' cm \u00B2');