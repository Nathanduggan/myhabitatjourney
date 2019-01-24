$(".button1").click(function() {
        $(".test1").fadeToggle('slow');
        
   });
      
    $(".button2").click(function() {
        $(".test2").slideToggle('1000');
        
       
    }); 
    
   
 $(".btn-primary").click(function(){
  alert("Webpage under maintenance.");
});

$(".button1").on({
    mouseenter: function() {
        $(this).css("background-color", "lightgrey");
    },
    mouseleave: function() {
    $(this).css("background-color", "lightblue");
},
click: function() {
    $(this).css("background-color", "yellow");
    }
    });
    
    $(".button2").on({
    mouseenter: function() {
        $(this).css("background-color", "lightgrey");
    },
    mouseleave: function() {
    $(this).css("background-color", "lightblue");
},
click: function() {
    $(this).css("background-color", "yellow");
    }
    });

