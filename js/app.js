'use strict';

var userName = prompt('What is your name?');
alert('Hello!' + userName + ' Welcome');
console.log('user Name is: ' + userName);

var score=0;

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



var attempts1 = 0;
var counter1 = 0;
while ( attempts1 < 6) {
    attempts1++;
    var age = prompt(' Guess My Age?');
    if (age == 23) {
        alert('You Are Right My age is 23!');
        counter1++;
        score++;
        break;
    }  else if  (age < 23) {
            alert('Too Low!');
            counter1++;
        }
        else if (age > 23) {
            alert('Too High!');
            counter1++;

        } 


    }
alert('My Age is: 23');



var color = ['black','blue','red','green'];
var userColor;
var attempts2=0;
var counter2;
while(attempts2<6) {
    userColor = prompt('Guess My Favourite Color!');
     userColor.toLocaleLowerCase;
    if (userColor == 'black' ||userColor == color[1]||userColor == color[2] || userColor == color[3]){

        alert('Your Guess Is Write!');
        counter2++;
        score++;
        console.log(counter2);
        break;
        
    }else{
        alert('Your Guess Is Wrong!');
        attempts2++;
        console.log(attempts2);
    }
}
alert('My Favourite Colors Are: '+ color);

alert('Your score is:'+score+' Out of 7');
console.log('User Score: '+ score);
    