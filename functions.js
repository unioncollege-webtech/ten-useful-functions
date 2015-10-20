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
  if(!step){
    step = 1;
  }
  //if(step >= 0)
  for(var i = start; i < end + 1; i = i + step){
    arr.push(i);
  }
  return arr;
}

console.log(range(1,10,1.1));
