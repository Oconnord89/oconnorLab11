$(document).ready(function(){

$.get('https://www.reddit.com/r/aww.json').done(function(responseBody) {
var x = responseBody.data.children;

console.log(x)


$('body').append("<div class='contain'></div>");



x.forEach(function(i){
  $('.contain').append('<p>' + i.data.title + '</p>' + '<img src=' + i.data.thumbnail +'>' + '<h6 class="author">' + i.data.author +'<h6></div>');





});
})


});
