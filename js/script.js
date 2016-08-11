$(document).ready(function() {
  $("#btn").click(function(event){
    event.preventDefault();
    var birdq = $("#word").val();
    var pasta = $("#spaghetti").val();
    var baby  = $("#babypunch").val();
    $("li").hide();
    if(birdq === "Yes") {
      $(".answer1Yes").show();
    }
    else  {
      $(".answer1No").show();
    }
    if(pasta === "Yes") {
      $(".answer2Yes").show();
    }
    else {
      $(".answer2No").show();
    }
    if(baby === "Yes") {
      $(".answer3Yes").show();
    }
    else if (baby === "No") {
      $(".answer3No").show();
    }
    else {
      $(".answer3Maybe").show();
    }
  });
});
