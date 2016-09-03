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
} );