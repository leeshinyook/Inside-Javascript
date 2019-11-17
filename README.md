# Jquery1.0

Jquery1.0 소스코드 분석 <br>
참조 : insideJavascript <br>
코드: [jQuery1.0][http://code.jquery.com/jquery-1.0.js]

# jQuery 기본구성

1. jQuery 함수 객체
2. jQuery.prototype 객체
3. jQuery 객체 인스턴스

## jQuery 함수 객체

jQuery() 함수의 가장 기본적인 역할 new 연산자로, jQuery 객체를 생성할 수 있다.<br>
이 객체는 프로토타입 체이닝으로, jQuery.prototype(prototype을 가진다) 객체에 포함된 <br>
프로토타입 메서드를 호출 할 수 있다.

##id 셀렉터

\$("#myDiv")는 jQuery("#myDiv")와 동일.
