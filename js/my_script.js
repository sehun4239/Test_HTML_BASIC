// Java Script 코드를 작성해서 링크 가능
// JavaScript에 대해서 알아보자 - python과 비교해서 알아볼 것 이다.

// JavaScript : web client 에서 실행되는 언어 - 요즘에는 서버용 개발언어로 사용되기도 한다. (Node.js)

// 변수를 만들어 보자
// python은 그냥 변수를 선언 - my_var = 100
var my_var = 100 //  JavaScript
var tmp = 3.14 // number
var tmp1 = "Hello" // string (python과 동일)
var tmp2 = true   // boolean (python은 True)
var tmp3 = [1,2,3,4.555] // array (python - list)

// 객체를 어떻게 표현하나요??
var tmp4 = { name : "홍길동", age : 25}
console.log(tmp4.name)

// 함수에 대해서 알아보아요 !!
// 함수는 2가지가 존재해요!
// 1. 선언적 함수 ( python의 일반적인 함수 정의하는 방법)
// 선언적 함수는 함수 이름이 존재해요 !!
function my_add(x,y) {
    return x + y
}
// def my_add(x,y):
//    return x + y

// 2. 익명함수 ( 함수의 이름이 없어요 = python에서의 first class) = > 람다함수 (파이썬에서의 람다랑은 다름 !)
//    변수에 저장해서 사용. 일급함수의 특징을 가지게 된다.
//    함수를 다른 함수의 인자로, 함수의 리턴값으로 함수를 이용.
var my_add = function (x,y) {
    return x + y
}


































