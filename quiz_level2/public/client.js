$(function(){

  $.get( '/cities', appendToList); 

  function appendToList(cities) {
    var list = [];
    for(var i in cities){
      list.push($('<option>', { text: cities[i] }));
    }
    $('#cities-list').html(list);
  }
});
