//FOR LOOP
$(document).ready(function() {

  $("#blanks form").submit(function(event) {
    var blanks = ["person1", "person2", "adjective", "exclamation", "noun", "verb"];
    for (var index = 0; index < blanks.length; index += 1) {
      var userInput = $("input#" + blanks[index]).val();
      $("." + blanks[index]).text(userInput);
      $("#story").show();

      event.preventDefault();
    }

//FOR EACH LOOP
    // blanks.forEach(function(blank){
    //   var userInput = $("input#" + blank).val();
    //   $("." + blank).text(userInput);
    // });


//ORIGINAL
    // var person1Input = $("input#person1").val();
    // var person2Input = $("input#person2").val();
    // var adjectiveInput = $("input#adjective").val();
    // var exclamationInput = $("input#exclamation").val();
    // var nounInput = $("input#noun").val();
    // var verbInput = $("input#verb").val();
    //
    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".adjective").text(adjectiveInput);
    // $(".exclamation").text(exclamationInput);
    // $(".noun").text(nounInput);
    // $(".verb").text(verbInput);

    // $("#story").show();
    //
    // event.preventDefault();
  });
});
