// quiz level 4
$(function() {
    console.log("2.found client.js");

    $.get('/cities', appendToList);

    function appendToList(cities) {
        var list = [];
        var content, city;
        for (var i in cities) {
            city = cities[i];
            // link to eac block's description
            content = '<a href="/cities/' + city + '">' + city + '</a>';
            // list.push($('<li>', { html: content }));
            list.push($('<li>' + content + '</li>'));
        }
        $('#city-list').html(list);
    };

    $('form').on('submit', function(event) {
        event.preventDefault();
        console.log("22. inside .on");
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
            // appendToList([cityData]);
            // clean up form text input fields
            form.trigger('reset');
        });
        console.log("39. add city " + cityData);
        $.get('/cities', appendToList);
    });
});