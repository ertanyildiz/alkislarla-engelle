$( document ).ready(function() {

  var collection = $(".videoContentLi");
  collection.each(function() {
  
  var engelli = $(this).find('.userName').text();
  console.log(engelli);
  chrome.storage.sync.get(engelli, function(response) {
    console.log(response.key); // 'qwe'
});
  for (var i = 0; i < localStorage.length; i++){
    console.log(localStorage.key(i));
   if (engelli == localStorage.key(i)) {
     $(this).remove();
  }
}
  
    
});

});