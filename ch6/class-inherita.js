function Person(arg) {
  this.name = arg;
}
Person.prototype.setName = function(value) {
  this.name = value;
};
Person.prototype.getName = function() {
  return this.name;
};
function Student(arg) {}

var you = new Person("Leeshinyook");
Student.prototype = you;

var me = new Student("Zzoon");
me.setName("Zzon");
console.log(me.getName());
