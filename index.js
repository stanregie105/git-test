var rect = {
  perimeter: (x,y)=>(2*(x+y)),
  Area: (x,y)=>(x*y)
};

function solveRect(l,b){
  console.log("solving for rectangle with l=" +l+ "and b="+b);

  if(l<=0 || b<=0){
      console.log("Rectangle dimensions should be greater than zero:l= "+l+"and b= "+b);
  }else{
      console.log("Area of rectangle is "+rect.Area(l,b));
      console.log("Perimeter of rectangle is "+ rect.perimeter(l,b));
  }
}

solveRect(2,5);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);