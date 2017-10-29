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
alert('Do obliczenia kwadratu różnicy (a - b\)\u00B2 potrzebujemy zmiennej a i b.');

var numberA = prompt('Wpisz wartość liczby a');
var numberB = prompt('Wpisz wartość liczby b');

alert('wartość liczby a = ' + numberA + ', liczby b = ' + numberB);
var squareMinus = ((numberA * numberA) - (2 * numberA * numberB) + (numberB * numberB));
alert('Kwadrat róźnicy = ' + squareMinus);
console.log(squareMinus);
alert('instrukcja warunkowa "if - else if - else"');
if (squareMinus > 0) {
	alert('Wynik jest dodatni');
	console.log("wynik dodatni");
} else if (squareMinus < 0) {
	alert('Wynik jest ujemny');
	console.log('Wynik ujemny');
} else {
	alert('Wynik jest równy 0');
	console.log('Wynik równy 0');
}
alert("Próba z Switch'em");
switch (squareMinus) {
	case '0':
		alert("Switch mówi, że case jest = 0");
		console.log("Switch case '0':");
		break;
	default:
		alert("pozostał tylko default z info: 'Liczba różna od 0'");
		console.log('Default: != 0');

}
alert("Na koniec 'short if'");
(squareMinus > 0) ? alert("'short-if:true' Liczba jest dodatnia")

	:
	alert("'short-if:false' Liczba jest ujemna");
