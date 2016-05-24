$(document).ready(function() {
    
    $('.icona-menu').click(function(){
        $('.header-testata .menu').toggle( 400, function() {
        });
        $('.icona-menu svg').find('g#chiuso').toggle( "fast", function() {
        });
        $('.icona-menu svg').find('g#aperto').toggle( "fast", function() {
        });
    });
    
    $('.aprimenumobile').click(function(){
        $(".corpo-subhome .due-col-left").addClass('hidesick');
        $(".corpo-subhome .due-col-right").addClass('opacita');
    });
    
    if ($(window).width() < 680) {
        $(".corpo-subhome .due-col-left").addClass('menumobile');
    }
   

   $('.imganimata').each(function(){
        ScrollaGiu($(this));  
    });
    
        
         
});




//ANIMAZIONE SCREENSHOT


function ScrollaGiu($elemento) {
        var divHeight = $elemento.parent().height();
        var footerOffsetTop = $elemento.height();
        var topToBottom =  divHeight - footerOffsetTop;
        
        $elemento.css({top:'auto',bottom:topToBottom});
        $elemento.delay(1500).animate({
            bottom: '0',
        }, 1300, function() {
            ScrollaSu($elemento);
        });   
}


function ScrollaSu($elemento) {
        var divHeight = $elemento.parent().height();
        var footerOffsetTop = $elemento.height();
        var topToBottom =  divHeight - footerOffsetTop;
    
        $elemento.css({bottom:'auto',top:topToBottom});
        $elemento.delay(1500).animate({
            top: '0',
        }, 1300, function() {
        ScrollaGiu($elemento);
        }); 
}


//MENU FIXED
$(document).scroll(function() {
$('.corpo-subhome').toggleClass('fix-menu', $(document).scrollTop() >= 200);
    $('.corpo-subhome').toggleClass('fix-menu', $(document).scrollTop() >= 200);
});

//CHIUDI MENU AL CLICK FUORI
$(document).mouseup(function (e)
{
    var container = $(".menumobile");

    if (!container.is(e.target) 
        && container.has(e.target).length === 0)
    {
        $(".corpo-subhome .due-col-left").removeClass('hidesick');
        $(".corpo-subhome .due-col-right").removeClass('opacita');
    }
});

//TABELLE RESPONSIVE
$(document).ready(function(){var switched=false;var updateTables=function(){if(($(window).width()<1000)&&!switched){switched=true;$("table.responsive").each(function(i,element){splitTable($(element));});return true;}
else if(switched&&($(window).width()>1000)){switched=false;$("table.responsive").each(function(i,element){unsplitTable($(element));});}};$(window).load(updateTables);$(window).bind("resize",updateTables);function splitTable(original)
{original.wrap("<div class='table-wrapper' />");var copy=original.clone();copy.find("td:not(:first-child), th:not(:first-child)").css("display","none");copy.removeClass("responsive");original.closest(".table-wrapper").append(copy);copy.wrap("<div class='pinned' />");original.wrap("<div class='scrollable' />");}
function unsplitTable(original){original.closest(".table-wrapper").find(".pinned").remove();original.unwrap();original.unwrap();}});