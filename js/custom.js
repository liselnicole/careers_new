$(function() {
    $('.overlay')
        .hover(function(){
            console.log('hover');
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
        
        var numbersDone = false; 
        function canSeeNumbers() {
            //console.log('canseenumbers called')
            var numCheck = $(".numbers:in-viewport").length; 
            
            if((numCheck !== 0) && (numbersDone == false)) {
                console.log('cansee');
                triggerNumbers();
                numbersDone = true;
            }
        } 
        canSeeNumbers(); 

        $(window).bind("scroll", function(event) {
            //console.log('scroll');
            canSeeNumbers(); 
        });

        function triggerNumbers() {
            $('#holidays').animateNumber(
               {
                number: 10
              },
                2000,
              function() {
                  console.log('done');
              }
            ).delay(1000);
            $('#years').animateNumber(
               {
                number: 14
              },
              2000
            ).delay(2000);
            $('#weeks').animateNumber(
               {
                number: 4
              },
              2000
            ).delay(3000);
        }
        
});