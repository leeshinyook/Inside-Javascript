// 프로토타입을 이용한 상속.
// 3줄에 모든게 녹아들어가있음.
// 인자로 들어온 객체를 부모로 하는 자식 객체를 생성하여 반환한다.

function create_object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
