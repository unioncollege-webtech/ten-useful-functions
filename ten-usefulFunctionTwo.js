// Ten Useful Functions

// function 2
var sumArray = function()
{
  function add(a,b)
  {
  return a + b ;
  }

  return function(sumArray) 
  {
      return sumArray.reduce(add);
    
  };
} ();

