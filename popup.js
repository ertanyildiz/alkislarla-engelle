$( document ).ready(function() {

  var collection = $(".videoContentLi");
  collection.each(function() {
  var item = $(this); 
  var engelli = $(this).find('.userName').text();
  console.log(engelli);
  chrome.storage.local.get( function(response) {
    for (key in response) {
      if (engelli === key) {
          $(item).remove();
      }
    }

});
    
});

});
