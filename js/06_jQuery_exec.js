function print_text() {
    //버튼을 눌렀을 때 실행될 코드를 기술한다.
    //alert로 확인해보기
    console.log($("#apple").text())
    console.log($("#pineapple").text())
    // console.log($("ul > li.myList").text())  이렇게 해도 되고 아래처럼해도 되고
    console.log($("ul > li[class]").text())
    
    console.log($("input[type=text]").val())        //text box에 친 값을 땡겨올 떄는 val() 사용

    console.log($("ol > li.myList:nth-child(1)").text())

    console.log($("ol > li.myList:first").text())
    console.log($("ol > li.myList:first + li").text())
    console.log($("ol > li.myList:last").text())

    $("input[type=text]").attr("size",10)

}

function my_func() {
    // select box에서 과일이 바뀌면 실행돼요 !
    // 1. 선택한 과일이 어떤 과일인지 알아내야 한다.
    var fruit = $("select > option:selected").text()

    var my_list = $("ul > li")
    my_list.each(function(idx, item) {
        // console.log($(item).text)
        if($(item).text() == fruit)  {
            $(item).css("color", "red")
        } else {
            $(item).css("color", "black")
        }
    })
}