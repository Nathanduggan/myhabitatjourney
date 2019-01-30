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
        $(this).css("background-color", "#07a2fe");
    },
    mouseleave: function() {
    $(this).css("background-color", "#07a2fe");
},
click: function() {
    $(this).css("background-color", "#07a2fe");
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
    
    $(document).ready(function(){
     $(".panel").click(function(){
    $("#panel").slideDown("slow");
  });
    });
    
      $(".panel2").click(function(){
    $("#panel2").slideDown("slow");
  });
  
     $(".panel3").click(function(){
    $("#panel3").slideDown("slow");
  });
  
     $(".panel4").click(function(){
    $("#panel4").slideDown("slow");
  });

   $(".panel5").click(function(){
    $("#panel5").slideDown("slow");
  });

   $(".panel6").click(function(){
    $("#panel6").slideDown("slow");
  });

   $(".panel7").click(function(){
    $("#panel7").slideDown("slow");
  });



