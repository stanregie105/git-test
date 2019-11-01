// closure propery makes the parameters available in setTimeout callback function
module.exports = (x,y,callback) => {
    if(x<=0 || y<=0){
        // sets the delay for 2 secs, and issues callback with first parameter
        //an error object, second parameter is set to null a it's ignored
        setTimeout(()=>
        callback(new Error("Rectangle dimensions should be greater than zero:l= "+x+"and b= "+y),null),
        2000);
    
  }else{
      // sets the delay for 2 secs and prints the result for the rectangle callback
      //object(perimeter,Area) that returned
      setTimeout(()=>callback(null,
      { perimeter :  ()=>(2*(x+y)),
        Area : ()=>(x*y)}),
   2000);
  }
}



