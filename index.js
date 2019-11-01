// imports rectangle module
var rect = require("./rectangle");

function solveRect(l,b){
     // illustrating main computation, which computes without delay
  console.log("solving for rectangle with l=" +l+ "and b="+b);
  // rect object handling closure property
  rect(l,b,(err,rectangle)=>{
      // error handling for callback object from imported module
      if(err){
          console.log("ERROR:",err.message);
      }else{
          // prints this result when the callback function does not issue an error
          console.log("The Area of the rectangle of the rectangle with l= "
           + l + "and b " +b+ "is" +rectangle.Area() );
         console.log("The perimeter of the rectangle with l= "
           + l + "and b " +b+ "is" +rectangle.perimeter() );
      }
  });
  // illustrating main computation, which computes without delay
   console.log("This statement is executed after the callback");
}

solveRect(2,5);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);
