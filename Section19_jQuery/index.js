$("h1").css("color","red");

console.log($("h1").css("color"));

$("h1").addClass("big-title fontset");

$("button").text("Don't Click Me");
$("h1").html('<em>Hello</em>');

// $("img").attr("src");
$("a").attr("href","https://www.bing.com");

$("button").click(function(){
    $("h1").css("color","purple");
})

$("input").keydown(function(event){
    console.log(event.key);
    $("h1").text(event.key);
})

$("h1").on("mouseover", function(){
    $("h1").css("color","purple");
})

$("h1").before("<button>New</button>");
$("h1").prepend("<button>First</button>");
// $("button").remove();

$("button").on("click", function(){
    // $("h1").fadeToggle();
    $("h1").slideUp().slideDown().animate({opacity:0.5});
})