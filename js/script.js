$(function(){
   
    //list  
    $list = $('ul');

    
    // hide all elements of the list and fade them in
   $('li').hide().each( function (i) {
       $(this).delay(250 * i).fadeIn(1000);
   }); 
    
    //update item counter
    function updateItemCounter(){
        var itemCount = $('li').length;
        $('#counter').text(itemCount);
    }
    updateItemCounter();

    // hide button and show button
    $("#newItemButton").show();
    $('#newItemForm').hide();

    $('#showForm').on('click', function () {
        $("#newItemButton").hide();
        $('#newItemForm').show();
    }) 
    
    // add new item
    $('#add').on('click',function(e){
       e.preventDefault();
       var text = $('#itemDescription').val();
       var $newItem = $("<li>" +text+ "</li>");
       $newItem.on('click', function (){
            var $li = $(this);
            completeItem($li);
       })
       $list.append($newItem);
       $('#itemDescription').val("");
       updateItemCounter();
        
       $("#newItemButton").show();
       $('#newItemForm').hide();
   })
    
    //remove items on click
    $('li').on('click',function(){
            var $li = $(this);
            completeItem($li);

    })
    
    function completeItem ( $li ) {
        //var $li = $(this);
        if($li.hasClass('complete')) {
            $li.animate({
                opacity: 0.0,
                paddingLeft: '+= 180'
            }, 500, 'swing', function() {
                $li.remove();
                updateItemCounter();
            });
        } else {
            $li.addClass('complete');
            $list.append($li).hide().fadeIn(200);
        }
    }
    
});