$(function(){

  $.get( '/blocks', appendToList); 

  function appendToList(blocks) {
    var list = [];
    var content, block;
    for(var i in blocks){
      block = blocks[i];
      // link to each block's description
      content = '<a href="/blocks/" data-block="' + block + '"><i class="fa fa-times-circle-o" aria-hidden="true"></i></a>' +
        '&nbsp; <a href="/blocks/' + block + '">' + block + '</a>';

      list.push($('<li>', { html: content }))
      // list.push($('<li>' + content + '</li>'));
    }
    
    $('.block-list').append(list);
  }
  
  $('form').on('submit', function(event){
    event.preventDefault();
    var form = $(this);
<<<<<<< HEAD
    // serialize() transforms the form tada to URL-encoded notation
    var blockData = form.serialize();
=======
    // transforms the form tada to URL-encoded notation
    console.log("34. form == " + form);
    var blockData = form.serialize();
    console.log("36. form == " + blockData);
>>>>>>> level4
    
    $.ajax({
      type: 'POST', url: '/blocks',  data: blockData
    }).done(function(blockname){
      // array with the new block as its single argument
      appendToList([blockName]);
      // clear form text input fields
      form.trigger('reset');
    });
  });
  
  $('.block-list').on('click','a[data-block]', function(event){
    event.preventDefault();
    var target = $(event.currentTarget);
    
    console.log("43. inside .on(click) " + target.data('block'));
    if (!confirm('Are you sure you want to remove ' + target.data('block') + '?')){
      console.log("54. inside !confirm()");
      return false;
    } 
    
    $.ajax({
      type: 'DELETE', url: '/blocks/' + target.data('block')
    }).done(function(){
      console.log("52. inside .done()");
      target.parents('li').remove();
    });
    
  });
});
<<<<<<< HEAD
=======

>>>>>>> level4
