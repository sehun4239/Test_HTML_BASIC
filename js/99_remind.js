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
