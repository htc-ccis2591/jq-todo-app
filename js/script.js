$(function(){
	
		//Cache the ul that holds the list
		$list = $("ul");
  
  		// This is just to make it look cool
		// Hide all the items and fade them in one at a time
  		$("li").hide().each(function(i) {
			$(this).delay(450 * i).fadeIn(1600);
		});
 		
		//Update the item counter
		function updateItemCount(){
			var itemCount = $("li").length;
			$("#counter").text(itemCount);
		}
	
  		// call the function defined above to update the initial item count
		updateItemCount();
	
		//Add the ability to add a new item to the list
		$("#newItemButton").show();
		$("#newItemForm").hide();
	
		$("#showForm").on("click",function() {
			$("#newItemButton").hide();
			$("#newItemForm").show();
		});
	
	
		// Build the new list item and add it when we click Add
		$("#add").on("click", function(e) {
			//prevent the form submit from refreshing the page
			e.preventDefault();
			//get the text for the item to add, then build/add new li
			var text = $("#itemDescription").val();
			var $newItem = $("<li>" + text + "</li>");
			$newItem.on("click", function(){
				var $li = $(this);
				completeItem($li);
			});
			$list.append($newItem);			
			$("#itemDescription").val("");
			
			//update the counter and reset the form display
			updateItemCount();
			$("#newItemForm").hide();
			$("#newItemButton").show();
		});
	
	
		// Add click handler so that we can grey out the list items as they are done
		$("li").on("click", function(){
			var $li = $(this);
			completeItem($li);
			});
	
		//Name our click handler function so we can add it to new items
		function completeItem($li){
			//Need to see first if it was already complete
			
			if($li.hasClass("complete")){
			   $li.animate({
				   opacity: 0.0,
				   paddingLeft: '+= 180',
			   },500, 'swing', function() {
				   $li.remove();
				   updateItemCount();
			   });
				
			} else {
				$li.addClass("complete");
				$list.append($li).hide().fadeIn(300);
			   }
		}
  });