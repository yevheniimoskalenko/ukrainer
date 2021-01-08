$(function () {
  $("#bgndVideo").YTPlayer();
  setInterval(() => {
    $(".wrapper").height($(window).height());
  }, 0);

  $(".toggle").click(function () {
    $(".wrapper").toggleClass("wrapper-active");
    $(".side-nav").toggleClass("side-active");
    $(".toggle").toggleClass("active");
  });
});
