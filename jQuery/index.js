//Selector
$("button");    //Chọn theo tag
$(".te");       //Chọn theo class
$("#header");   //Chọn theo ID
//Change style
$("#header").css("color", "red");
$("button").addClass("big-size colorful");
//Change text
$(".te").text("Eyyy");
$("a").html("<em>Search</em>");
//Change Attribute
$("a").attr("href", "https://facebook.com");
//Add Event Listener
$(document).keydown(function (event) {
    $("#header").text(event.key);
})
$("h1").on("mouseover", function () {
    $("#header").css("color", "blue");
})
//Adding & Removing Element
$("h1").before("<p>truoc</p>"); //đặt p trước h1            <p>truoc</p> |<h1 id="header">Hello</h1>
$("h1").after("<p>sau</p>");    //đặt p sau h1              <h1 id="header">Hello</h1> |<p>truoc</p>
$("h1").prepend("<p>dau</p>");  //đặt p nằm trong h1        <h1 id="header"> |<p>truoc</p> |Hello</h1>
$("h1").append("<p>cuoi</p>");  //đặt p nằm trong sau h1    <h1 id="header">Hello |<p>truoc</p> |</h1>
//Animation jQuery
$("button").on("click", function () {   //TH1: cơ bản
    $("h1").fadeToggle();
})

$("button").on("click", function () {   //TH2: có thể thêm nhiều animate cùng lúc theo thứ tự
    $("h1").slideUp().slideDown().animate({opacity:0.5});   // animate chỉ chứa các thuộc tính (attribute) có giá trị số (margin,padding,size,opacity,...)
})
