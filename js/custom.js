$(function() {
    $('.overlay')
        .hover(function(){
            var $thisParent = $(this).parent();
                $thisParent.find('figure').addClass('move');
                $thisParent.find('.link a').addClass('underline');
                $thisParent.find('img').addClass('darken');
            
        })
        .mouseout(function() {
            var $thisParent = $(this).parent();
                $thisParent.find('figure').removeClass('move');
                $thisParent.find('.link a').removeClass('underline');
                $thisParent.find('img').removeClass('darken');
        });

});