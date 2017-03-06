$( document ).ready(function() {


for (var i = 0; i < localStorage.length; i++){
    $('#liste').append("<li class='list-group-item list-group-item-danger' style='width: 420px;''>"+localStorage.getItem(localStorage.key(i))+" <span class='badge'><a id="+localStorage.key(i)+" class='silBtn'>Sil X</a></span></li>"); 
}

$('#h1Liste').append(" ("+ localStorage.length +")");
	
 $( "#eklebtn" ).click(function() {
		var engelli = $("#engelli").val();
 		if (localStorage.getItem(engelli) != null) {
 			alert("Eklenmiş!");
 			location.reload();
 			return;
}


localStorage.setItem(engelli, engelli);
chrome.storage.local.set({[engelli]:[engelli]});
location.reload();
});

$(".silBtn").click(function() {
	var item = this.id;
  	localStorage.removeItem(item);
  	chrome.storage.local.remove(item, function() {});
  	location.reload();
});

$("#silHepsiBtn").click(function() {
  	if (confirm('Hepsini sil?')) {
 	    localStorage.clear();
 	    chrome.storage.local.clear();
 	    location.reload();
} 

});

});


 
