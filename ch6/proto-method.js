// 더글라스 크락포드가 제시한 방법
// 함수를 제시하면서 메서드를 정의하는 방법.
Function.prototype.method = function(name, func) {
  this.prototype[name] = func;
};

function Person(arg) {
  this.name = arg;
}

Person.method("getName", function() {
  return this.name;
});
Person.method("setName", function(value) {
  this.name = value;
});
