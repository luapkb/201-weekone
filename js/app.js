'use strict' 

var name = prompt('hello whats your name');
alert('HELLO ' + name + ',' + ' thanks for playing!!')
console.log('name promt' + name)


var nameQ = prompt('do you know my name?')
var answer = nameQ.toLowerCase()

if (answer ==='yes' || answer === 'y'){
    alert('did you know my name was Paul');
    console.log('responce one' + answer)

  }  else {
      alert ('you obviously dint type yes. thats ok, my name is Paul')
      console.log ('response one ' + answer )
}


 

var born = prompt ('do you think Im a native washingtonion?')
var answer = born.toLowerCase()
if (answer === 'no' || answer === 'n'){
    alert ('thats right I was born in wyoming');
    console.log('responce two' + answer)
} else if (answer === 'yes' || answer ==='y'){
    alert ('not a chance buckaroo, Im from wyoming');
    console.log('responce two' + answer)

} else {
    alert ('it was a yes or no question, hot shot');
    console.log('responce two' + answer)
}


var news = prompt('would you be suprised to learn ive been to space?')
var answer = news.toLowerCase()
if (answer === 'no' || answer === 'n'){
    alert ('well your pretty gulible then. ive never left the atmospheer');
    console.log('respononce 3' + answer)
} else if (answer === 'yes' || answer === 'y'){
    alert ('yeah, I haven\'t been to space. if soneone told you that they lied.')
    console.log('respononce 3' + answer)
} else {
       alert( 'are you smart enough to answer yes or no questions?');
       console.log('respononce 3' + answer)
   }

var stupid = prompt('are you almost tierd of these questions?')
var answer = stupid.toLowerCase()
if (answer === 'yes' || answer === 'y'){
   alert( 'I am getting tierd of typing them out');
   console.log('responce 4' +  answer);
} else if ( answer === 'no' || answer === 'n'){
    alert('but ther are soooooo dumb');
    console.log('responce 4' +  answer);
} else {
    alert ('im too simple to for anything other then a y/n answer');
    console.log('responce 4' +  answer);
}

var last = prompt('did you know the speed of sound is 1125 feet per second?');
var answer = last.toLowerCase()
if (answer == 'yes' || answer === 'y' || answer === 'sure'){
    alert('I had to look that one up')
    console.log('Response 5' + answer)
} 
else if (answer === 'no'|| answer ==='n' || answer === 'nope') {
    alert('why would you')
    console.log('responce 5' + answer)
}
else {
    alert('that answer does not compute. extermanate...extermanate...extermanate........')
    console.log('responce 5' + answer)
}

///
// var name = prompt("do you use Mac or Windows?");
// var answer;


// if (name !== 'Mac' && name !== 'Windows') {
//     answer = 'Oh, you use that OS. Well, we can continue anyway.';
// }

// return answer







// var yes = true
// var no = false

// var 
// if answer 

// var color = prompt('what is your color');

// switch(color.toLowerCase()){
//     case 'red':
//         console.log ('you picked red');
//     case 'blue':
//         console.log ('you like blue');
//     default: console.log('you picked diffent');

// }

// )
// var answer = confirm('are you ready?');

// var guess = prompt ('type something')

// if (typeof(answer) === "boolean")
// {
//         console.log ('you are a number');
// }else if ()
// }