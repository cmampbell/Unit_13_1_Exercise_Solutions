//1
$(document).ready(() => console.log("Let’s get ready to party with jQuery!"));

//2
$('article img').addClass('image-center');

//3
$('article p').last().remove();

//4
$('#title').css('font-size', (Math.random() * 100));

//5
$('ol').append('<li>Gravy is good on potatos</li>');

//6
$('aside').empty().append('<p>Sorry, this aside was silly. We removed it. </p>');

//7
$("input").on("change", () => { //when an input changes
    $('body').css('background-color', () => //we change body background-color
        `rgb(${$('input').val()},
        ${$('input').eq(1).val()},
        ${$('input').last().val()})`
    )
})

//8
$('img').on("click", function () { $(this).remove() });