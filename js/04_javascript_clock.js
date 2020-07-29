function start_clock() {
    //alert("버튼이 클릭 되었구나")
    // 시계를 출력해야 해요
    // 현재 시간을 구해요     // 현재 날짜의 시분초를 구할 수 있어요
    // 이 시간을 HTML 특정 영역에 출력해요
    // 위의 작업을 1초마다 반복하면 돼요
    // JavaScript는 특정시간마다 특정함수를 반복해주는 함수를 제공
    setInterval(function() {
        var today = new Date()   // 날짜 객체 생성.
        console.log(today.toLocaleString())
        // HTML의 특정 위치를 지정하는 것이 필요
        var my_div = document.getElementById("myDiv")
        my_div.innerText = today.toLocaleString()
    },1000)  //mSec
}