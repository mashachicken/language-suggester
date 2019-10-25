$(document).ready(function(){
  $("#language").submit(function(event){
    var firstInput = parseInt($("input:radio[name=usability]:checked").val());
    var secondInput = parseInt($("input:radio[name=skills]:checked").val());
    var thirdInput = parseInt($("input:radio[name=characteristics]:checked").val());
    console.log(firstInput);
    event.preventDefault();
  })
})
