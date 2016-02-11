$(function() {
    
    $ul = $('ul');
    
    $('li').hide().each(function(i){
        $(this).delay(450 * i).fadeIn(1600);
    });
    
    function updateItemCount() {
        var itemCount = $('li').length;
        $('#counter').text(itemCount);
    };
    updateItemCount();
    
    $('#newItemButton').show();
    $('#newItemForm').hide();
    
    $('#showForm').on('click', function() {
        $('#newItemButton').hide();
        $('#newItemForm').show();
    });
    
    $('#add').on('click', function(e){
        e.preventDefault();
        var text = $('#itemDescription').val();
        $ul.append('<li>' + text + '</li>');
        $('#itemDescription').val('');
        updateItemCount();
        $('#newItemButton').show();
        $('#newItemForm').hide();
    });
    
    $('li').on('click', function() {
        var $li = $(this);
        if ($li.hasClass('complete')) {
            $li.animate({
                opacity: 0.0,
                paddingLeft: '+= 180'
            }, 500, 'swing', function() {
                $li.remove();
                updateItemCount()
            });
        } else {
            $li.addClass('complete');
            $ul.append($li);
        }
    });
    
});