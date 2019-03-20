'use strict';

//const Vehicle = require('./vehicle-constructor.js');

class Vehicle {
  constructor(name, wheels){
    this.name = name;
    this.wheels = wheels;
  }
  drive(){
    return 'Moving Forward';
  }
  stop(){
    return 'Stopping';
  }

}

class Car extends Vehicle{
  constructor(wheels){
    super();
    this.wheels = 4;
  }
}

class Motorcycle extends Vehicle{
  wheelie(){
    return 'Wheee!';
  }
}

module.exports = Car;
module.exports = Motorcycle;
