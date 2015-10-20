function upperCase(string){
  return string.toUpperCase();
}

function lowerCase(string){
  return string.toLowerCase();
}

function capitalize(string, all){
  if (all){
    return string.split(' ').map(function(a){
      return capitalize(a, false);
    }).join(' ');
  } else {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

function sentenceCase(string){
  return capitalize(string.toLowerCase(), false);
}

function camelCase(string){
  var temp = capitalize(string.toLowerCase(), true).replace(/\W/g, '');
  return temp.charAt(0).toLowerCase() + temp.slice(1);
}

function leet(string){
  // Commented out most characters because it gets too undreadable with them all.
  var charReplacements = {
    'A': '4',
    'B': '8',
//    'C': '<',
//    'D': '|)',
    'E': '3',
//    'F': '|=',
    'G': '6',
//    'H': '|-|',
    'I': '1',
//    'J': '_|',
//    'K': '|<',
//    'L': '|_',
//    'M': '|\\/|',
//    'N': '|\\|',
    'O': '0',
//    'P': '|o',
//    'Q': 'O_',
//    'R': '|2',
    'S': '5',
    'T': '7',
//    'U': '|_|',
//    'V': '\\/',
//    'X': '%',
//    'Y': '`/',
    'Z': '2'
  }
  for (char in charReplacements){
    string =  string.toUpperCase().replace(new RegExp(char, 'g'), charReplacements[char]);
  }
  return string.toLowerCase();
}

function range(start, end, step){
  var arr = [];
  if(!step){ // Also works for step == 0
    step = 1;
  }
  step = Math.trunc(step);
  if(start < end){
    for(var i = start; i < end; i = i + step){
      arr.push(i);
    }
  } else {
    if(step < 0){
      for(var i = start; i > end; i = i + step){
        arr.push(i);
      }
    }
  }
  return arr;
}

function largest(a, b){
  return (a > b) ? a : b;
}

function smallest(a, b){
  return (a < b) ? a : b;
}

function isAnswer(attempt){
  if (attempt == 42){
    return true;
  } else {
    return false;
  }
}

var hitchhikers = ['Ford Prefect', 'Zaphod Beeblebrox', 'Oolon Colluphid', 'Arthur Dent', 'Trisha McMillan', 'Marvin'];
var numbers = range(0,50,14);
var strings = ['Leetzorz', 'This is a cool test sentence that is longer than it needs to be.', "Don't Panic", 'Peter Piper picked a peck of pickled peppers.'];

console.log(largest(1,2) + " is bigger than " + smallest(1,2) + ".");

if(numbers.map(isAnswer)){
  console.log(leet("42 is the answer to life, the universe, and everything."));
}

console.log(hitchhikers.map(camelCase));
console.log(hitchhikers.map(sentenceCase));

console.log(strings.map(leet))
