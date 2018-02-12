$(document).ready(function() {
  $("#subButton").click(function() {
    var query = $("#inputText").val();
    var before = "https://api.giphy.com/v1/gifs/search?api_key=kGuuTSUioSRP8OmGMJY6XMBslT0VuxHZ&q=";
    var after = "&limit=25&offset=0&rating=G&lang=en"
    var request = before + query + after;
    $.ajax(
      {
        url: request,
        success: function(result)
      {
      console.log(result.data[1].images.downsized_medium.url);
    }});
  });
});




//   $.ajax({method: "GET", url: "https://api.giphy.com/v1/gifs/search?api_key=kGuuTSUioSRP8OmGMJY6XMBslT0VuxHZ&q=&limit=25&offset=0&rating=G&lang=en"}.done(response))
// });
