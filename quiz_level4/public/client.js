// quiz level 4
$(function(){
console.log("2.found client.js");

  $.get( '/cities', appendToList); 
  console.log("5.found get()/cities");
  
  function appendToList(cities) {
    var list = [];
    for(var i in cities){
      console.log("9. " + cities[i]);
      list.push($('<option value="' +  cities[i] + '">' + cities[i] + '</option>'));
    }
    $('#cities-list').html(list);
  }
// });

// $(function(){
    // $("#cities-list").change(function(event){
    //     event.preventDefault();
    //     var city = $('#cities-list').val();
    //     console.log('21.dropval == ' + city);

    //     $('#state').html(city);

    //     console.log(Object.keys(city));
    // });    
});