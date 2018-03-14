//Listen for form submit
document.getElementById("myForm").addEventListener("submit", saveBookmark);

function saveBookmark(e){
var siteName=document.getElementById("siteName").value;
var siteUrl=document.getElementById("siteUrl").value;

if(!validateForm(siteName,siteUrl)){
	return false;
}

var bookmark = {
	name:siteName,
	url:siteUrl
}
//Local Storage Test
/*localStorage.setItem("test", "Hello World");
console.log(localStorage.getItem("test"));
localStorage.removeItem("test");*/
if(localStorage.getItem("bookmarks")===null){
	var bookmarks = [];
	bookmarks.push(bookmark);
	localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}
else{
	var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
	bookmarks.push(bookmark);
	localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}
document.getElementById("myForm").reset();


fetchBookmarks()

e.preventDefault();
}


function deleteBookmark(url){
var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

for(var i=0; i<bookmarks.length; i++){
	if(bookmarks[i].url == url){
		bookmarks.splice(i,1);
	}
}
localStorage.setItem("bookmarks", JSON.stringify(bookmarks));	
fetchBookmarks()
}


function fetchBookmarks(){
var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));	

var bookmarksResults = document.getElementById("bookmarksResults");

bookmarksResults.innerHTML = ""

for (var i = 0; i <bookmarks.length ; i++) {
var name = bookmarks[i].name;
var url = bookmarks[i].url;
bookmarksResults.innerHTML += '<div class="card"> <div class="card-body">'+
                                  '<h4 class="card-title">'+name+
                                  ' <a class="btn btn-default btn-primary" target="_blank" href="'+url+'">Visit</a> ' +
                                  ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                  '</h4>'+
                                  '</div> </div>';
}
}


function validateForm(){
	if(!siteName || !siteUrl){
	alert("Please fill in the form!");
	return false;
}


var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);

if(!siteUrl.match(regex)){
	alert("Please use a valid URL");
	return false;
}

return true;
}