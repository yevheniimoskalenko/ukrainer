$(function () {
  $("#bgndVideo").YTPlayer();
  $(".toggle").on("click", function () {
    $(".toggle").toggleClass("active");
    $(".menu").toggleClass("side");
    $(".showcase").toggleClass("active");
  });
});
