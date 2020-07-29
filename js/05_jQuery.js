// jQuery CDN을 이용했기 때문에 jQuery code를 사용할 수 있어요 !!

// button을 클릭하면 아래의 함수가 호출돼요 !!
function my_func() {
    //0. jQuery를 공부할 때 가장 먼저 배워야 하는 중요한 것은 selector
    //1. 전체 선택자 (universal selector)
    //$("*").css("color","red")            // jQuery($)로 element 다 선택해서(*) css() 호출해
    //2. 태그 선택자(tag selector)
    //$("li").remove()
    //3. ID 선택자 (id selector)
    //$("#haha").text("제주")                       // 인자가 없으면 값을 알아오라는 의미
                                                 // 인자가 있으면 값을 변경하라는 의미
    //4. 클래스 선택자 (class selector)
    //$(".region").css("background-color","yellow")
    //5. 구조 선택자 (자식 선택자 후손 선택자)
    // $("ol > li").css("color","steelblue")       // > 자식 선택자
    // $("div li").css("color","pink")                 // ' ' 공백은 후손 선택자
    // 6. 구조 선택자 (형제 선택자)
    // $("#haha + li").remove()                        // haha id를 찾고 걔의 바로 다음 형제를 선택
    // $("#hong ~ li").remove()                        // id hong을 찾고 ~ 뒤에 나오는 모든 형제 선택
    // 7. 속성 선택자                                []가 속성을 의미한다
    // $("[id]").css("color", "yellow")
    // $("[id=haha]").css("color", "yellow")
    // 이 7가지를 조합하면 왠만한 element는 지정하는게 가능하다 !!! ***************
}