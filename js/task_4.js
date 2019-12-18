"use strict";

//Task-4
class StringBuilder  {
constructor (value) {
    this._value = value;
}

get value() {
    return this._value
}

append(str){ 
`${this._value} ${str}`;

}
prepend(str){}
pad(str){}
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'
