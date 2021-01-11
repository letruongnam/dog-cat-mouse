var Dog = require('./Dog');
var Cat = require('./Cat');
var dog = new Dog('Tom');

var cat = new Cat();
//dog.SayHi();
dog.eat(cat);
console.log(dog);