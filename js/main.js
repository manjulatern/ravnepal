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

    $( ".show-review-message" ).on( "click", function() {
        $('.inline-message-review').toggleClass("is-visible");
    });

    //Toggle fullscreen
    $("#panel-fullscreen").click(function (e) {
        e.preventDefault();

        var $this = $(this);

        if ($this.children('i').hasClass('icon-resize'))
        {
            $this.children('i').removeClass('icon-resize');
            $this.children('i').addClass('icon-resize');
        }
        else if ($this.children('i').hasClass('icon-resize'))
        {
            $this.children('i').removeClass('icon-resize');
            $this.children('i').addClass('icon-resize');
        }
        $(this).closest('.chart-image').toggleClass('panel-fullscreen');
    });

} );