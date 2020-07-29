function call_ajax() {
    // 입력 텍스트 상자에서 키보드로 입력이 들어왔을 때 호출
    // 모든 키에 대해서 처리하는게 아니라 enter key(13번)일 경우에만 처리
    if(event.keyCode == 13) {
        // 만약 입력된 key가 enter key이면 이 부분을 수행하게 돼요 !
        // 서버쪽 프로그램을 호출해서 결과를 받아와요 !
        // jQuery를 이용해서 AJAX처리를 해 보아요 !!
        // ajax의 인자로 javascript 객체를 넣어줘요!
        // javascript 객체는 => { key : value, key : value, ....}
        // data : 서버프로그램에게 넘겨줄 데이터들...
        $.ajax({
            async : true,       //ajax 호출 방식을 동기로 할 것인지 비동기로 할 것인지 async는 비동기
            url : "http://192.168.0.200:8080/bookSearch/search",
            data : {
                keyword : $("input[type=text]").val()
            },
            type : "GET",
            timeout : 3000,
            dataType : "json",  // 결과 JSON을 JavaScript객체로 변환,
            success : function(result) {
                $("tbody").empty()                          // 검색할때마다 초기화 시켜줘야하므로 empty로 다 날림
            //      <tr>
                //     <td><img src=""></td>
                //     <td>제목</td>
                //     <td>저자</td>
                //     <td>가격</td>
                //     <td>버튼</td>
            //     </tr>
                // $.each(result,function(idx,item) {
                // 위에꺼 쓸꺼면 result[i] 대신 item을 넣어야함 ***
                // })
                for (i = 0 ; i < result.length; i++) {
                    var tr = $("<tr></tr>")         //새로운 태그 만드는 것
                    var imgTd = $("<td></td>")
                    var img = $("<img />").attr("src", result[i].img)    //<img src> img 태그 처럼 닫는 태그가 없으면 <xxx />
                    imgTd.append(img)                                    // 자식으로 붙이기
                    var titleTd = $("<td></td>").text(result[i].title)
                    var authorTd = $("<td></td>").text(result[i].author)
                    var priceTd = $("<td></td>").text(result[i].price)
                    var buttonTd = $("<td></td>")
                    var button = $("<input />").attr("type","button").attr("value","삭제")
                    button.on("click",function() {
                        //현재 클릭된 버튼에 대한 책 정보를 찾아서 화면에서 삭제
                        // this는 현재 이벤트가 발생된 객체를 지칭한다!!! (위의 경우는 <input>)
                        $(this).parent().parent().remove()
                    })
                    buttonTd.append(button)

                    tr.append(imgTd)
                    tr.append(titleTd)
                    tr.append(authorTd)
                    tr.append(priceTd)
                    tr.append(buttonTd)

                    $("tbody").append(tr)
                }
            },
            error : function(error) {
                alert("실패")
            }
        })
    }

}