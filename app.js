$(document).ready(function() {
  $("#subButton").click(function() {
    $(".gifList").empty();
    var query = $("#inputText").val();
    var before = "https://api.giphy.com/v1/gifs/search?api_key=kGuuTSUioSRP8OmGMJY6XMBslT0VuxHZ&q=";
    var after = "&limit=" + $("#inputNum").val(); + "&offset=0&rating=G&lang=en"
    var request = before + query + after;
    $.ajax(
      {
        method: "GET",
        url: request,
        success: function(result){
          for (i = 0; i < result.data.length; i++){
          $(".gifList").append("<img src=" + result.data[i].images.original.url + "></img>");
        }
    }});
  });
});
