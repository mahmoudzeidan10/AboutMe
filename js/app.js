'use strict';

var userName = prompt('What is your name?');
alert('Hello!' + userName + ' Welcome');
console.log('user Name is: ' + userName);

var score=0;

//Q1
function eatMansaf(){
var mansaf = prompt('Do I like Mansaf ?, PLZ answer with yes or no');
switch (mansaf.toLocaleLowerCase()) {
    case 'yes':
    case 'y':
        alert('You Are Right!');
        console.log('the user answer is right');
        score++;
        break;
    case 'no':
    case 'n':
        alert('Sorry, You Are Wrong!');
        console.log('the user answer is wrong')
        break;
}
}
eatMansaf();

//Q2

function football(){
var footballTeam = prompt('Is my favourite football team Barcelona?, PLZ answer with yes or no');
switch (footballTeam.toLocaleLowerCase()) {
    case 'yes':
    case 'y':
        alert('You Are Right!');
        console.log('the user answer is right');
        score++;
        break;
    case 'no':
    case 'n':
        alert('Sorry, You Are Wrong!');
        console.log('the user answer is wrong')
        break;
}
}
football();

// //Q3

function chess(){
var playChess = prompt('Do I Play Chess?, PLZ answer with yes or no');
switch (playChess.toLocaleLowerCase()) {
    case 'yes':
    case 'y':
        alert('Sorry, You Are Wrong! I know the rules of it only');
        console.log('the user answer is wrong')
        break;
    case 'no':
    case 'n':
        alert('You Are Right!');
        console.log('the user answer is right');
        score++;
        break;
}
}
chess();

// //Q4

function games(){
var videoGames = prompt('Do I like Playing Video Games ?, PLZ answer with yes or no');
switch (videoGames.toLocaleLowerCase()) {
    case 'yes':
    case 'y':
        alert('You Are Right!');
        console.log('the user answer is right');
        score++;
        break;
    case 'no':
    case 'n':
        alert('Sorry, You Are Wrong!');
        console.log('the user answer is wrong')
        break;
}
}
games();

// Q5

function liveP(){
var livePlace = prompt('Do i live in Irbid?, PLZ answer with yes or no');
switch (livePlace.toLocaleLowerCase()) {
    case 'yes':
    case 'y':
        alert('You Are Right!');
        console.log('the user answer is right');
        score++;
        break;
    case 'no':
    case 'n':
        alert('Sorry, You Are Wrong!');
        console.log('the user answer is wrong')
        break;
}
}
liveP();

//Q6
function guessAge(){
    var correct = false;

for(var i=0; i<4 ; i++) {
    var age = prompt('Guess My Age?');
    if (age == 23) {
        alert('You Are Right My age is 23!');
        correct=true;
        score++;
        break;
    }  else if  (age < 23) {
            alert('Too Low!');
        
        }
        else if (age > 23) {
            alert('Too High!');
            

        } 


    }
    if(correct == false){
        alert('You Lost your 4 Trials!');
    }

}

guessAge();

// Q7

function mycolor(){

    var color = ['black','blue','red','green'];
    var correct = false;
    var userColor;
    var i=0;
    // var counter2;
    while(i<6) {
        userColor = prompt('Guess My Favourite Color!');
         userColor.toLocaleLowerCase;
        for(var j=0 ;j<color.length ; j++){
    
        if (userColor == color[j]){
            alert('Your Guess Is Write!');
            // counter2++;
            score++;
            correct = true;
            // console.log(counter2);
            break;
            }
        } 
        if (correct ==true){
            break;
        }
        i++ ;
} 
    
    alert('My Favourite Colors Are: '+ color);
    
    alert('Your score is:'+score+' Out of 7');
    console.log('User Score: '+ score);
    }
    mycolor();