// quiz level 4
$(function() {
    console.log("2.found client.js");

    $.get('/cities', appendToList);

    function appendToList(cities) {
        var list = [];
        var content, city;
        for (var i in cities) {
            city = cities[i];
            
            // link to each block's description
            content = '<a href="#" data-block="' + city + '"><i class="fa fa-times-circle-o" aria-hidden="true"></i></a>' +
                '&nbsp; <a href="/cities/' + city + '">' + city + '</a>';
          
            list.push($('<li>', { html: content }));
            // list.push($('<li>' + content + '</li>'));
        }
        // $('.city-list').html(list);
        $('.city-list').append(list);
    }

    $('form').on('submit', function(event) {
        event.preventDefault();
        console.log("22. inside .on(submit)");
        var form = $(this);
        
        // transforms the form tada to URL-encoded notation
        var cityData = form.serialize();
        console.log("26. cityData == " + cityData);

        $.ajax({
            type: 'POST',
            url: '/cities',
            data: cityData
        }).done(function(cityName) {
            console.log("33. cityName == " + cityName);
            console.log("34. cityData == " + cityData);
            appendToList([cityName]);
            
            // clean up form text input fields
            form.trigger('reset');
        });
    });
    
  $('.city-list').on('click','a[data-block]', function(event){
    event.preventDefault();
    var target = $(event.currentTarget);
    
    console.log("43. inside .on(click) " + target.data('block'));
    if (!confirm('Are you sure you want to remove ' + target.data('block') + '?')){
      console.log("54. inside !confirm()");
      return false;
    } 
    
    $.ajax({
      type: 'DELETE', url: '/cities/' + target.data('block')
    }).done(function(){
      console.log("52. inside .done()");
      target.parents('li').remove();
    });
  });
});