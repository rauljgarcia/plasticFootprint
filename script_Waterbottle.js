function promptMe(){

var pbottlesWeek = prompt('Enter the number of plastic water bottles you use in an average 7-day week');

var pbottlesSize = prompt('What is the typical-sized water bottle you use, in ounces? (i.e. 12, 16, 20, 24, 33 (1 liter)');

pbottlesYear = pbottlesWeek * 52;

var weight12 = (.26 * .0625) * pbottlesYear;
var weight16 = (.35 * .0625) * pbottlesYear;
var weight20 = (.41 * .0625) * pbottlesYear;
var weight24 = (.5 * .0625) * pbottlesYear;
var weight33 = (.7 * .0625) * pbottlesYear;

var worldPeople = 7442000000

var worldPeopleweight12 = Math.round(worldPeople * weight12) / 2000
var worldPeopleweight16 = Math.round(worldPeople * weight16) / 2000
var worldPeopleweight20 = Math.round(worldPeople * weight20) / 2000
var worldPeopleweight24 = Math.round(worldPeople * weight24) / 2000
var worldPeopleweight33 = Math.round(worldPeople * weight33) / 2000

var now = 2018;
var decompYear = now + 450;
var context1 = ' pounds of plastic per year, in water bottles.\n\nFor context, if everyone used this amount, approximately '
var context2 =  ' tons of plastic would be used yearly, in water bottles.'
var decomp = '\n\nIf thrown away, it will be decomposed in the year ' + decompYear +'.'

if (pbottlesSize == 12) {
    alert('You use ' + weight12.toFixed(2) + context1 + worldPeopleweight12 + context2 + decomp);
} else if (pbottlesSize == 16) {
    alert('You use ' + weight16.toFixed(2) + context1 + worldPeopleweight16 + context2 + decomp);
} else if (pbottlesSize == 20) {
    alert('You use ' + weight20.toFixed(2) + context1 + worldPeopleweight20 + context2 + decomp);
} else if (pbottlesSize == 24) {
    alert('You use ' + weight24.toFixed(2) + context1 + worldPeopleweight24 + context2 + decomp);
} else if (pbottlesSize == 33) {
    alert('You use ' + weight33.toFixed(2) + context1 + worldPeopleweight33 + context2 + decomp);
} else {
    alert('Invalid Input')
}

}