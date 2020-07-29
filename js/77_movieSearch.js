function call_ajax() {
    if (event.keyCode == 13) {
        $.ajax({
            async : true,       //ajax 호출 방식을 동기로 할 것인지 비동기로 할 것인지 async는 비동기
            url : "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
            data : {
                key : "ea553ad823b28ca691993201adebed1e",
                targetDt : $("input[type=date]").val().split("-").join("")
            },
            type : "GET",
            timeout : 3000,
            dataType : "json",
            success : function(result) {
                $("tbody").empty()

                $.each(result.boxOfficeResult.dailyBoxOfficeList,function(idx,item) {
                    var tr = $("<tr></tr>")
                    var rankTd = $("<td></td>").text(item.rank)
                    var imgTd = $("<td></td>")
                    var movie = item.movieNm

                    $.ajax({
                        async: true,
                        url: "https://dapi.kakao.com/v2/search/image",
                        data: {
                            query: "영화 " + movie + " 포스터"
                        },
                        beforeSend: function (xhr) {
                            xhr.setRequestHeader("Authorization", "KakaoAK 211ebd038ecdb19865f10c50b888df13")
                        },
                        type: "GET",
                        timeout: 3000,
                        dataType: "json",

                        success: function (result) {
                            var img_list = result.documents
                            var img = $("<img />").attr("src", img_list[0].thumbnail_url).addClass("myImage")
                            imgTd.append(img)
                        },
                        error: function (error) {
                            alert("이미지 실패")
                        }
                    })

                    var nameTd = $("<td></td>").text(item.movieNm)
                    var priceTd = $("<td></td>").text(item.salesAcc)
                    var peopleTd = $("<td></td>").text(item.audiAcc)
                    var buttonTd = $("<td></td>")
                    var button = $("<input />").attr("type","button").attr("value","상세정보")
                    button.on("click",function() {
                        var code = item.movieCd
                        call_bjax(code)
                    })
                    buttonTd.append(button)

                    tr.append(rankTd)
                    tr.append(imgTd)
                    tr.append(nameTd)
                    tr.append(priceTd)
                    tr.append(peopleTd)
                    tr.append(buttonTd)


                    $("tbody").append(tr)
                })
            },
            error : function(error) {
                alert("실패")
            }
        })
}}

function call_bjax(code) {
    $.ajax({
        async : true,
        url : "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json",
        data : {
            key : "ea553ad823b28ca691993201adebed1e",
            movieCd : code
        },
        type : "GET",
        timeout : 3000,
        dataType : "json",
        success : function(result) {
            var name = result['movieInfoResult']['movieInfo']['movieNm']
            var year = result['movieInfoResult']['movieInfo']['prdtYear']
            var genre_list = result.movieInfoResult.movieInfo.genres
            var director_list = result.movieInfoResult.movieInfo.directors
            var actor_list = result.movieInfoResult.movieInfo.actors
            var genre = []
            var director = []
            var actor = []

            $.each(genre_list, function(index, item) {
                genre.push(item.genreNm)
            })
            $.each(director_list, function(index,item) {
                director.push(item.peopleNm)
            })
            $.each(actor_list, function(index,item) {
                actor.push(item.peopleNm)
            })

            alert("영화제목: " + name + "\n" + "제작연도: " + year + "\n" + "장르: " + genre + "\n" + "감독: " + director + "\n" + "배우: " + actor + "\n")
        },
        error : function(error) {
            alert("실패")
        }
})

}
