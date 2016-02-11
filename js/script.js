$(function () {

    // Cache the ul that holds the list items
    $list = $('ul');
    
    // Hide all items and fade them in one at a time
    $("li").hide().each(function (i) {
        $(this).delay(450 * i).fadeIn(1600);            
    }); 
    
    //Update the item counter
    function updateItemCount() {
        var itemCount = $("li").length;
        $("#counter").text(itemCount);
    }
    // Call the updateItemCount function
    updateItemCount();
    
    // Add ability to add a new item to the list
    $("#newItemButton").show();
    $("#newItemForm").hide();
    
    $("#showForm").on("click", function(){
        $("#newItemButton").hide();
        $("#newItemForm").show();
    });
    
      // Build the new list item and add it when we click Add
    $("#add").on("click", function(e){
        e.preventDefault();   
        var text = $("#itemDescription").val();
        var $newItem = $("<li>" + text + "</li>");
        $newItem.on("click", function() {
            var $li = $(this);
            completeItem($li);
        }); 
        
        $list.append($newItem);
        
        // BONUS
        $completedItems = $("li.complete");
        $list.append($completedItems);
        
        $("#itemDescription").val("");
        updateItemCount();
        $("#newItemForm").hide();
        $("#newItemButton").show();
    });

    // Add click handler to grey out the list items as they are done
    $("li").on("click", function(){
        var $li = $(this);
        completeItem($li);
    });
    
    // Name click handler function
    function completeItem($li) {
        if ($li.hasClass("complete")){
            $li.animate({
                opacity: 0.0,
                paddingLeft: "+= 180"
            }, 500, "swing", function() {
                $li.remove();
                updateItemCount();
            }); 
        } else {
            $li.addClass("complete"); 
            $list.append($li).hide().fadeIn(300);
        }  
    }
}); 
    
