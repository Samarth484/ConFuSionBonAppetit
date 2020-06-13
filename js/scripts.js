$(document).ready(function() {
  $("#mycarousel").carousel({
    interval: 1500
  });
  $("#carouselButton").click(function(){
             if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                 $("#mycarousel").carousel('pause');
                 $("#carouselButton").children("span").removeClass('fa-pause');
                 $("#carouselButton").children("span").addClass('fa-play');
             }
             else if ($("#carouselButton").children("span").hasClass('fa-play')){
                 $("#mycarousel").carousel('cycle');
                 $("#carouselButton").children("span").removeClass('fa-play');
                 $("#carouselButton").children("span").addClass('fa-pause');
             }
         });
  $("#login").attr("data-toggle","modal");
  $("#login").attr("data-target","#loginModal");
  $("#ReserveTabelButton").attr("data-toggle","modal");
  $("#ReserveTabelButton").attr("data-target","#reserveTableModal");

});
