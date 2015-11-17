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
        
        function checkNav() {
            if ($(document).scrollTop() > 50) {
                $('#main-nav-sub').addClass('shrink');
              } else {
                $('#main-nav-sub').removeClass('shrink');
              }
        }
        canSeeNumbers(); 
        checkNav();
        

        $(window).bind("scroll", function(event) {
            checkNav();
            canSeeNumbers(); 
        });
        var percent_number_step = $.animateNumber.numberStepFactories.append(' %');
        function triggerNumbers() {
            $('#holidays').animateNumber(
               {
                number: 10
              },
                2000
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
            
            $('#value').animateNumber(
               {
                number: 97,
                numberStep: percent_number_step
              },
                2000
            ).delay(1000);
            $('#fulltime').animateNumber(
               {
                number: 92,
                numberStep: percent_number_step
              },
              2000
            ).delay(2000);
            $('#employed').animateNumber(
               {
                number: 40,
                numberStep: percent_number_step
              },
              2000
            ).delay(3000);
        }
        
});