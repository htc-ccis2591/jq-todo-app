$(function(){
  //list cache
    $list = $('ul');
  
  //just to make it look neat. 
  $('li').hide().each(function (i){
        $(this).delay(450 * i).fadeIn(1600);
  });
    
function updateItemCount(){
    var ItemCount = $("li").length;
    $("#counter").text(ItemCount);
}
                      
                      

updateItemCount();




$('#newItemButton').show();
$('newItemForm').hide();

$('showForm').on("click", function(){
    $("newItemButton").hide();
    $("newItemForm").show();
});
  
    //New List Item and addit when we click the add button. 
    $("#add").on("click", function(e){
        e.preventDefault();
        var text = $('#itemDescription').val();
        $list.append("<li>"+ text + "</li>");
        $("itemDescription").val("");
        updateItemCount();
        $("newItemForm").hide();
        $("newItemButton").show();
        
    });
    
    // CLick Handler so thaqt we can grey out list items as they are done
    $('li').on("click", function() {
               
               var $li = $(this);
    if ($li.hasClass("complete")){
        $li.animate({
        opacity:0.0,
        paddingLeft: '+=180'
            
        }, 500, 'swing', function(){
            $li.remove();
        updateItemCount();
        });
    
        
    }   
        else{
            $li.addClass("complete");
            $list.append($li).hide().fadeIn(300);
        }
        
  });
});




