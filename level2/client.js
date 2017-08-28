// 2.5 Script Tags 250 pts

// Now we can add some client-side JavaScript by including the jquery.js and client.js files.
// Task 1/3 Within index.html, include jquery.js using a <script> tag.
// Task 2/3 Within index.html, include client.js using a <script> tag.
// Task 3/3 Now in the client.js file, complete the code for the $.get function so that it calls the /cities URL path, and then runs the appendToList function.

$(function(){

  $.get( '/cities', appendToList); 

  function appendToList(cities) {
    var list = [];
    for(var i in cities){
      list.push($('<li>', { text: cities[i] }));
    }
    $('.city-list').append(list);
  }
});
