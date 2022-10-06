$('form').on('submit', function(evt){
    evt.preventDefault();
    $('tbody').append($('<tr>').append(
        $('<td>').text($('#movie-title').val()), 
        $('<td>').text($('#rating').val()), 
        $('<button>').text('Remove Review')
        ))
    });

$('table').on('click', 'button', function(){
    $(this).parent().remove()
})