$(document).ready(function(){
 $("form#stressTest").submit(function(event){
   event.preventDefault();
  //  $(".badAanswers").show();

  // if (answers2 >= answers1) {
  //   $(".goodanswers").show();
  // }
  // else {
  //   $(".badanswers").show();
  // }


   $("input:checkbox[name=question1]:checked").each(function(){
     var answers1 = $(this).val();
     if (var index )
     $(".badAnswers").show();
   });
     //  $(".goodAanswers").show();
   $("input:checkbox[name=question2]:checked").each(function(){
     var answers2 = $(this).val();
    //  $(".goodAanswers").show();
   });
   $("form#stressTest").hide();




 });
});
