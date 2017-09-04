$(function(){
console.log("2.found client.js");

  $.get( '/cities', appendToList); 
  console.log("5.found get()/cities");
  
  function appendToList(cities) {
    var list = [];
    for(var i in cities){
      console.log("9. " + cities[i]);
      list.push($('<li>', { text: cities[i] }));
    }
    $('#cities-list').html(list);
  }
});
