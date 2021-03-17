'use strict'

let score = []

let Name = prompt('what is your name')

document.getElementById('welcome').innerHTML += '<h1>welcome '+ Name +' i am ahmad ammoura welcome to my quiz</h1>'

let Q1 = prompt('Am I 25 years old ?').toLocaleLowerCase()
if (Q1 === 'yes' || Q1 === 'y') {
    document.getElementById('answer1').innerHTML += `<h5 style="color: green;" >True</h5>`;
    alert('true');
    score.push(1)
} else {
    document.getElementById('answer1').innerHTML += `<h5 style="color: red;" >wrong</h5>`;
    alert('bad start')
}


let Q2 = prompt('graduated from Albalqaa University ?').toLocaleLowerCase()
if (Q2 === 'yes' || Q2 === 'y') {
    document.getElementById('answer2').innerHTML += `<h5 style="color: green;" >True</h5>`;
    alert('true');
    score.push(1)



} else {
    document.getElementById('answer2').innerHTML += `<h5 style="color: red;" >wrong</h5>`;
    alert('next time')
}

let Q3 = prompt('my fav football team real madried ?').toLocaleLowerCase()

if (Q3 === 'no' || Q3 === 'n') {
    document.getElementById('answer3').innerHTML += `<h5 style="color: green;" >True</h5>`;
    alert('ANYTHING');
    score.push(1)


} else {
    document.getElementById('answer3').innerHTML += `<h5 style="color: red;" >wrong</h5>`;
    alert('true')
}
let Q4 = prompt('watch basketball alot ?').toLocaleLowerCase()

if (Q4 === 'yes' || Q4 === 'y') {
    document.getElementById('answer4').innerHTML += `<h5 style="color: green;" >True</h5>`;
    alert('HAHAHA')
    score.push(1)

} else {
    document.getElementById('answer4').innerHTML += `<h5 style="color: red;" >wrong</h5>`
    alert('wrong')
}


let Q5 = prompt('i dont like watching movies?').toLocaleLowerCase()

if (Q5 === 'yes' || Q5 === 'y') {
    document.getElementById('answer5').innerHTML += `<h5 style="color: green;" >True</h5>`;
    alert('true')
    score.push(1)

} else {
    document.getElementById('answer5').innerHTML += `<h5 style="color: red;" >wrong</h5>`;
    alert('wrong')
}
let attempt = 4


for (let i = 5; i > 0; i--) {


    if (attempt == 0) {
        alert('the answer was 7')
        break;
    }

    let Q6 = prompt('what the number that i am thinking about between 0 to 10 you have ' + attempt + ' attempts')
    if (Q6 == 7) {
        alert('right answer');
        score.push(1)
        break;
    } else if (Q6 > 7) {
        alert('too high')
        attempt--
    } else if (Q6 < 7) {
        alert('too low')
        attempt--
    }

}




let  pleyers = ['messi' , 'neymar' , 'inesta', 'pedri'];

let gusses = 6
let correct = false

for(let i = 6 ; i >= 1 ; i-- ){

    let Q7 = prompt('who is my fav barcelona player '+ gusses +' left').toLocaleLowerCase()

    for(let j = 0 ; j < pleyers.length ; j++){

        if(Q7 == pleyers[j]){
            alert('thats right');
            correct = true;
            score.push(1)
            break ;
        }

    }

    if(correct){
        break;
    }

    gusses--;

    if(gusses==0){
        alert('poor you')
    }
}

let sum = 0
for(let i = 0 ; i < score.length ; i++){
    sum+=score[i]
}

alert('you got '+sum +'/7 Good job '+Name )