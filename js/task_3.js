"use strict";


//Task-3


class Storage {
  constructor([...items]) {
    this.items = items;
}

getItems() {
  return this.items;
}
addItem(item) {
  this.items.push(item)
}

removeItem(item){
   if (this.items.includes(item)){
     let itemOf = this.items.indexOf(item);
     this.items.splice(itemOf,1)
   
  }

 
  
}
};


const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]