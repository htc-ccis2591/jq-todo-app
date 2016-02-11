$(function() {
    
    //cache the ul that holds the list
    $list = $("ul");
    
    //fades bro
    //fades items in one at a time
    $("li").hide().each( function(i) {
        $(this).delay(450 * i).fadeIn(1600);
    });
    
    //update the item counter
    function updateItemCount() {
        var itemCount = $("li").length;
        $("#counter").text(itemCount);
    }
    
    //call the function defined above to update the initial item count
    updateItemCount();
    
    //add ability to add a new item to the list
    $("#newItemButton").show();
    $("#newItemForm").hide();
    
    $("#showForm").on("click", function() {
       $("#newItemButton").hide();
       $("#newItemForm").show();
    });
    
    //Build the new list item and add it when we click Add
    $("#add").on("click", function(e) {
        //prevent the form sumbit from refreshing the page
        e.preventDefault();
        
        //get the text for the item to add , then build/add new li
        var text = $("#itemDescription").val();
        var $newItem = $("<li>" + text + "</li>")
        $newItem.on("click", function() {
            //need to see first if it was already complete
            var $li = $(this);
            completeItem($li);
        });
        
        $list.append($newItem);
        $completeitems = $("li.complete"); //made it go above the greyed items
        $list.append($completeitems)
    
        
        
        
        $("#itemDescription").val("");
        
        //update the counter and reset the form display
        updateItemCount();
        $("#newItemForm").hide();
        $("#newItemButton").show();
    });
    
    //Add click handler so that we can grey out the list items
    $("li").on("click", function() {
        //need to see first if it was already complete
        var $li = $(this);
        completeItem($li);
    });
    
    //name our click handler function so we add it to new item
    function completeItem( $li ) {
        
        //need to see first if it was already complete
        //var $li = $(this);
        if ($li.hasClass("complete")) {
            $li.animate({
                opacity: 0.0,
                paddingLeft: "+= 180"
            }, 500, 'swing', function() {
                $li.remove();
                updateItemCount();
            });
        } else {
        $li.addClass("complete");
        $list.append($li).hide().fadeIn(300);
        }
        
    }
    
});










