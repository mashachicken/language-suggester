$(document).ready(function(){
  $("#language").submit(function(event){
    event.preventDefault();
    var firstInput = parseInt($("input:radio[name=usability]:checked").val());
    var secondInput = parseInt($("input:radio[name=skills]:checked").val());
    var thirdInput = parseInt($("input:radio[name=characteristics]:checked").val());
    var fourthInput = parseInt($("input:radio[name=name]:checked").val());
    var total = (firstInput + secondInput + thirdInput + fourthInput);
     console.log(total);
     if (total <= 5){
       $("#cresult").toggle();
     } else if (total > 5 && total <= 9){
       $("#javascresult").toggle()
     } else if (total >= 12 ) {
       $("#pythonresult").toggle()
     }else {
       alert("what have you done")
     }
  });
});
