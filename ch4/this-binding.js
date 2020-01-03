var myObject = {
  name: "foo",
  sayName: function() {
    console.log(this.name);
  }
};

var otherObject = {
  name: "bar"
};

otherObject.sayName = myObject.sayName;

myObject.sayName();
otherObject.sayName();

// 메서드 내부 코드에 사용된 this는, 해당 메서드를 호출한 객체로 바인딩된다.
