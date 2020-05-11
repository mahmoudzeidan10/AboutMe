'use strict';

var userName = prompt('What is your name?');
alert('Hello!'+userName+' Welcome');
console.log('user Name is: '+userName);

var age = prompt('Is my age 23 ?, PLZ answer with yes or no');
switch(age.toLocaleLowerCase()){
    case 'yes':
    case 'y':
        alert('You Are Right!');
        console.log('the user answer is right');
        break;
    case 'no':
    case 'n' :
        alert('Sorry, You Are Wrong!');
        console.log('the user answer is wrong')
        break;
}



var footballTeam = prompt('Is my favourite football team Barcelona?, PLZ answer with yes or no');
switch(footballTeam.toLocaleLowerCase()){
    case 'yes':
    case 'y':
        alert('You Are Right!');
        console.log('the user answer is right');
        break;
    case 'no':
    case 'n' :
        alert('Sorry, You Are Wrong!');
        console.log('the user answer is wrong')
        break;
}

var playChess = prompt('Do I Play CHess?, PLZ answer with yes or no');
switch(playChess.toLocaleLowerCase()){
    case 'yes':
    case 'y':
        alert('Sorry, You Are Wrong! I know the rules of it only');
        console.log('the user answer is wrong')
        break;
    case 'no':
    case 'n' :
        alert('You Are Right!');
        console.log('the user answer is right');
        break;
}

var videoGames = prompt('Do I like Playing Video Games ?, PLZ answer with yes or no');
switch(age.toLocaleLowerCase()){
    case 'yes':
    case 'y':
        alert('You Are Right!');
        console.log('the user answer is right');
        break;
    case 'no':
    case 'n' :
        alert('Sorry, You Are Wrong!');
        console.log('the user answer is wrong')
        break;
}

var livePlace = prompt('Do i live in Irbid?, PLZ answer with yes or no');
switch(age.toLocaleLowerCase()){
    case 'yes':
    case 'y':
        alert('You Are Right!');
        console.log('the user answer is right');
        break;
    case 'no':
    case 'n' :
        alert('Sorry, You Are Wrong!');
        console.log('the user answer is wrong')
        break;
}


