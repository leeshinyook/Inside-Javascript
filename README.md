# 인사이드 자바스크립트
![8968480656_1](https://user-images.githubusercontent.com/55838461/71680761-46a5b800-2dce-11ea-9fc5-f7a4f8b8419e.jpg)

저자: 송형주, 고현준

위 책을 읽고, 스스로 정리한 내용을 위한 저장소입니다.

# 구성
    ch1~3은 연산자와 데이터타입에 관한 내용임으로 생략한다
    이 책의 메인은 4장에서 부터 시작한다.
    ch4 : 함수와 프로토타입 체이닝
    ch5 : 실행 컨텍스트와 클로저
    ch6 : 객체지향 프로그래밍
    ch7 : 함수형 프로그래밍

책을 읽고,
------
2020년 1월, 이 책을 2번째 읽는 중이다. 작년 이 책을 처음 읽었을 때,
클로저, 프로토타입 등 이해하기 어려운 부분이 많았다. 그래서, 올해 다시 책을 읽어가면서 정리하고 있는데 정말 깊이있는 책인 것 같다.
ES6, ES7보다도 자바스크립트가 어떻게 동작하는지에 대한 원리와 핵심개념을 잡아주는 책이다.

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

## Id 셀렉터

\$("#myDiv")는 jQuery("#myDiv")와 동일.
