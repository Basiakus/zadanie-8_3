alert('Spróbujmy napisać prosty "program", który obiczy pole trójkąta na podstawie Twoich danych. ZACZYNAMY!');

var triangleBasis = prompt('Wpisz wartość całkowitą długości jego podstawy w cm.');
console.log(triangleBasis);
var triangleHeight = prompt("Potrzebujemy jescze jego wysokość, również w cm.");
console.log(triangleHeight);
var triangleField = (triangleBasis * triangleHeight) / 2;
alert('Na podstawie Twoich danych pole trójkąta, którego podstawa wynosi: ' + triangleBasis + 'cm. ,oraz wysokość: ' + triangleHeight + 'cm. jest równe: ' + triangleField + "cm\u00B2.");
console.log('Pole trójkąta wynosi: ' + triangleField + ' cm \u00B2');


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
        alert("Switch mówi, że case jest = squareMinus");
        console.log("case = squareMinus");
        break;
    default:
        alert("pozostał tylko default z info: 'Liczba różna od 0'");
        console.log('Default: != 0');

}
alert("Na koniec 'short if'");
(squareMinus > 0) ? alert("'short-if:true' Liczba jest dodatnia")

    :
    alert("'short-if:false' Liczba jest ujemna");

alert("Wróćmy jeszcze do Pana Mario i spróbujmy z switch'em");

var zmienna = prompt("Grałeś kiedyś w Mario?");

console.log(zmienna);

switch (zmienna) {
    case 'tak':
        alert('No to JUMP !!!');
        break;
    case 'nie':
        alert('Najlepiej na Nintendo');
        break;
    default:
        alert("Wpisz 'tak' / 'nie'");
}