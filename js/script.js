$(function(){
    
    // cache the ul that holds the list
    $myList = $('ul');

    
    // fade in the list items
   $('li').hide().each(function(i){
       $(this).delay(450*i).fadeIn(1600);
   });
    
    
    //update the item counter
    function updateItemCount()
    {
        var itemCount = $('li').length;
        $('#counter').delay(1000).text(itemCount);
    }
    
    updateItemCount();
    
    
    // set new item form to initial hidden state
    $('#newItemButton').show();
    $('#newItemForm').hide();
    
    // show the entry form when new item button is clicked
    $('#showForm').on('click', function(){
        $('#newItemButton').hide();
        $('#newItemForm').show();
        
    });
    
    
    //add a new list item when we click add
    $('#add').on('click', function(e){
        // prevent refresh of page on button click
        e.preventDefault();
        
        var txt = $('#itemDescription').val();
        $myList.append("<li>" + txt + "</li");
        $('#itemDescription').val('');
        
        updateItemCount();
        
        $('#newItemButton').show();
        $('#newItemForm').hide();
    });
    
    // click handler to mark done items
    $('li').on('click', function(){
        
        var $myLi = $(this);
        // need to check if it is already complete
        if ($(this).hasClass('complete')){
            // delete its
            $myLi.animate({
                opacitiy: 0.0,
                paddingLeft: '+= 180',
            }, 500, 'swing', function() {
                $myLi.remove();
                updateItemCount();
            });
            
            
        }
        else {
            $(this).addClass('complete');
            $myList.append($myLi).hide().fadeIn(500);
        }
        
        //updateItemCount();
        
    });
});