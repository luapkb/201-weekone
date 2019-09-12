'use strict'

// var name = prompt('hello whats your name');
// alert('HELLO ' + name + ',' + ' thanks for playing!!')
// console.log('name promt' + name)


// var nameQ = prompt('do you know my name?')
// var answer = nameQ.toLowerCase()

// if (answer === 'yes' || answer === 'y') {
//     alert('did you know my name was Paul');
//     console.log('responce one' + answer)

// } else {
//     alert('you obviously dint type yes. thats ok, my name is Paul')
//     console.log('response one ' + answer)
// }

// var born = prompt('do you think Im a native washingtonion?')
// var answer = born.toLowerCase()
// if (answer === 'no' || answer === 'n') {
//     alert('thats right I was born in wyoming');
//     console.log('responce two' + answer)
// } else if (answer === 'yes' || answer === 'y') {
//     alert('not a chance buckaroo, Im from wyoming');
//     console.log('responce two' + answer)

// } else {
//     alert('it was a yes or no question, hot shot');
//     console.log('responce two' + answer)
// }

// var news = prompt('would you be suprised to learn ive been to space?')
// var answer = news.toLowerCase()
// if (answer === 'no' || answer === 'n') {
//     alert('well your pretty gulible then. ive never left the atmospheer');
//     console.log('respononce 3' + answer)
// } else if (answer === 'yes' || answer === 'y') {
//     alert('yeah, I haven\'t been to space. if soneone told you that they lied.')
//     console.log('respononce 3' + answer)
// } else {
//     alert('are you smart enough to answer yes or no questions?');
//     console.log('respononce 3' + answer)
// }

// var stupid = prompt('are you almost tierd of these questions?')
// var answer = stupid.toLowerCase()
// if (answer === 'yes' || answer === 'y') {
//     alert('I am getting tierd of typing them out');
//     console.log('responce 4' + answer);
// } else if (answer === 'no' || answer === 'n') {
//     alert('but ther are soooooo dumb');
//     console.log('responce 4' + answer);
// } else {
//     alert('im too simple to for anything other then a y/n answer');
//     console.log('responce 4' + answer);
// }

// var last = prompt('did you know the speed of sound is 1125 feet per second?');
// var answer = last.toLowerCase()
// if (answer == 'yes' || answer === 'y' || answer === 'sure') {
//     alert('I had to look that one up')
//     console.log('Response 5' + answer)
// } else if (answer === 'no' || answer === 'n' || answer === 'nope') {
//     alert('why would you')
//     console.log('responce 5' + answer)
// } else {
//     alert('that answer does not compute. extermanate...extermanate...extermanate........')
//     console.log('responce 5' + answer)
// }

// var counter = 0;
// var pick = parseInt(prompt('please pick a number between 1 and 20, you can have four guesses.  you must use a '));
// for (var i = 0; i < 3; i++) {
//     if (pick === 17) {
//         alert('that\'s it! You\'r GGGGRRRRRRAATE!!!!!')
//         console.log('pick ' + pick)
//         break;

//     } else if (pick < 17) {
//         pick = parseInt(prompt('that was\'nt the number i was thinking of, please try again that was too low.'))
//    console.log('pick ' + pick)
//        counter++
//     } else if (pick > 17) {
//         pick = parseInt(prompt('that was\'nt the number i was thinking of, please try again that was too high'))
//      console.log('pick ' + pick)
//         counter++
//     }
// }
// if (counter === 3) {
//     alert('the numer you shoul have tryed was 17')
// }

var counter = 0;
var myarray = [1, 3, 7];
var pick = parseInt(prompt('In this game you need to guess a number between 1 and 20 but there are a few right answers'))
for (var i = 0; i < myarray.length; i++) {
    console.log(pick === myarray[i])
    if (pick === myarray[i]) {
        console.log(myarray[i])
        alert('prime answer. the options were 1,3,7. ')
        console.log('Pick' + pick)
        break;
    } else if (pick !== myarray[i]) {
        pick = parseInt(prompt('well thats not one of the numbers i was thinking of. try again!'))
        console.log('Pick ' + pick)
        counter++
    }
}


if (counter === 5) {
    alert('the answers were 1,3,7')
}