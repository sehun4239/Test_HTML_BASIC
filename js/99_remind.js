function my_func() {
    var fruit = $("select > option:selected").text()
    var my_li = $("ul > li")
    my_li.each(function(idx, item) {
      if ($(item).text() == fruit) {
          $(item).css("color", "blue")
      }  else {
          $(item).css("color", "black")
      }
    })




}


$(documnet).ready(function() {
    $ ("ul > li").on("mouseover", function() {
        $(this).addClass("myStyle")
    })
    $ ("ul > li").on("mouseleave", function() {
        $(this).removeClass("myStyle")
    })
$("ul > li:last").css()

})
