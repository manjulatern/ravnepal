$( function() {
    $('.ui.accordion')
        .accordion()
    ;

    $('.dropdown')
        .dropdown()
    ;

    $('.floating.dropdown.button')
        .dropdown({
            direction: 'auto'
        })
    ;

    $('.ui.checkbox')
        .checkbox()
    ;

    $('.ui.button')
        .popup({
            hoverable  : false,
            position   : 'bottom right',
            on    : 'click'
        })
    ;

    $( ".show-message" ).on( "click", function() {
        $(this).parents().next().toggleClass("is-visible");
    });
} );