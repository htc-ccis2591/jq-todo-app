$(function()
{
    // Cash the ul that holds the li
    var $list = $('ul');
    
    // Display all items
    $('li').hide().each(function(i)
    {
        $(this).delay(270 * i).fadeIn(1000);
    });
    
    // Insert value into counter span
    function updateItemCount() 
    {
        var itemCount = $('li').length;
        $('#counter').text(itemCount);
    }
    //Call update function to populate the #counter span
    updateItemCount();
    
    // Add the ability to insert items into the list
    $('#newItemForm').hide();
    $('#newItemButton').show();
    
    $('#showForm').on('click', function()
    {
        $('#newItemButton').hide();
        $('#newItemForm').show();
    });
    
    // Make the new list item and add it when "Add" is clicked
    $('#add').on('click', function(e)
    {
        var text = $('#itemDescription').val();
        var $newItem = $("<li>" + text + "</li>");
        $newItem.on('click', function()
        {
            var $li = $(this);
            CompleteItem($li);
        });
        
        $list.append($newItem);
        $("#itemDescription").val("");
        
        updateItemCount();
        $('#newItemForm').hide();
        $('#newItemButton').show();
        e.preventDefault();
    });
    
    // add click handler to the li so they can be removed
    $('li').on('click', function()
    {
        var $li = $(this);
        CompleteItem($li);
    });
    //click handler so we can add it to new items
    function CompleteItem($li)
    {
        if($li.hasClass('complete'))
        {
            $li.animate(
            { 
                opacity: 0.0,
                paddingLeft: '+= 180'
            }, 
                500, 'swing', function() 
                {
                    $li.remove();
                    updateItemCount();
                });
            
        }
        else
        {
            $li.addClass('complete');
            $list.append($li);
        }
    };
});

