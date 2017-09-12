// quiz level 4
$(function(){
console.log("2.found client.js");

  $.get( '/cities', appendToList); 

    function appendToList(cities) {
        var list = [];
        var content, city;
        for (var i in cities) {
            city = cities[i];
            // link to eac block's description
            content = '<a href="/cities/' + city + '">' + city + '</a>';
            console.log("15. content == " + content);
            // list.push($('<li>', { html: content }));
            list.push($('<li>' + content + '</li>'));
        }
        $('#city-list').html(list);
    };
    
  $('form').on('submit', function(event){
    event.preventDefault();
    var form = $(this);
    // transforms the form tada to URL-encoded notation
    var cityData = form.serialize();
    console.log("26. cityData == " + cityData);
    
    $.ajax({
      type: 'POST', url: '/cities',  data: cityData
    }).done(function(cityName){
      console.log("31. cityName == " + cityName);
      console.log("32. cityData == " + cityData);
      appendToList([cityName]);
      appendToList([cityData]);
      // clean up form text input fields
      form.trigger('reset');
    });
  });
});  
