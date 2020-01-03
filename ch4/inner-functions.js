function parent() {
  var a = 100;
  var b = 200;

  // 내부함수
  function child() {
    var b = 300;

    console.log(a); // 100
    console.log(b); // 300
  }
  child();
}
parent();
child();

// 내부함수는 자신을 둘러싼 외부함수의 변수에 접근 가능하다.
// 이를, 스코프 체이닝.
