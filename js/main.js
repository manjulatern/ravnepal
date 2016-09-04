$( function() {
    $('.ui.accordion')
        .accordion()
    ;

    $('.dropdown')
        .dropdown()
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
        console.log('Hey');
        $( ".inline-message" ).toggleClass("is-visible");
    });
} );