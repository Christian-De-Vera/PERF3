
let car = { //Creating a car 
    type: "Sedan",
    model: "2024",
    color: "Black" // No reason I just like it being black
  };
  
  console.log(typeof car);  //to check the type of the object
  
  car.type = "Toyota";   // changes the type to Toyota
  console.log(car);

  car.wheels = 4; // creates a new property which is wheels
  console.log(car);
  