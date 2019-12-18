"use strict";
//task-5


class Car {

  static getSpecs(car) {
    return console.log(car._maxSpeed, car._speed, car._isOn, car._distance, car._price)
  }

  constructor({
    speed = 0,
    price,
    maxSpeed,
    isOn = false,
    distance = 0,
  }) {
    this._speed = speed;
    this._price = price;
    this._maxSpeed = maxSpeed;
    this._isOn = isOn;
    this._distance = distance

  }

  get price() {
    return this._price;
  }

  set price(cost) {
    return this._price = cost;
  }

  turnOn() {
    this._isOn = true;
  }


  turnOff() {
    this._isOn = false;
    this._speed = 0;
  }


  accelerate(value) {
    if (this._speed < this._maxSpeed) {
      this._speed += value;
    }
  }


  decelerate(value) {
    if (this._speed > 0) {
      this._speed -= value;
    }
  }


  drive(hours) {
    if (this._isOn = true) {
      this._distance += this._speed * hours;
    }

  }
}

const mustang = new Car({
  maxSpeed: 200,
  price: 2000
});
console.log(mustang)

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);


Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000