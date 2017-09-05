// blocks level 4
// https://workspace-code42.c9users.io/
// https://workspace-code42.c9users.io/blocks

$(function(){
  
  // $.get( '/blocks', appendToList); 

  // function appendToList(blocks) {
  //   var list = [];
  //   for(var i in blocks){
  //     list.push($('<li>', { text: blocks[i] }));
  //   }
  //   $('.block-list').append(list);
  // }


// backup level 3
  // $.get( '/blocks', appendToList); 

  // function appendToList(blocks) {
  //   var list = [];
  //   for(var i in blocks){
  //     list.push($('<li>', { text: blocks[i] }));
  //   }
  //   $('.block-list').append(list);
  // }
  
  // $.get( '/description', appendToList); 
  
  // function appendToList(blocks) {
  //   var list = [];
  //   for(var i in blocks){
  //     list.push($('<li>', { text: blocks[i] }));
  //   }
  //   $('.block-list').append(list);
  // }
  

  
  $.get( '/blocks', appendToList); 

  function appendToList(blocks) {
    var list = [];
    var content, block;
    for(var i in blocks){
      block = blocks[i];
      // link to eac block's description
      content = '<a href="/blocks/'+block+'">'+block+'</a>';
      list.push($('<li>', { html: content }));
    }
    
    $('.block-list').append(list);
  }
  
  
  $('form').on('submit', function(event){
    event.preventDefault();
    var form = $(this);
    // transforms the form tada to URL-encoded notation
    console.log("61. form == " + form);
    var blockData = form.serialize();
    console.log("63. form == " + form);
    
    $.ajax({
      type: 'POST', url: '/blocks',  data: blockData
    }).done(function(blockName){
      // array with the new block as its single argument
      appendToList([blockName]);
      // clean up form text input fields
      form.trigger('reset');
    });
  });
});
