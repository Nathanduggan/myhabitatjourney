$(".button1").click(function() {
        $(".test1").slideToggle('slow');
        
   });
      
    $(".button2").click(function() {
        $(".test2").slideToggle('1000');
        
       
    }); 
    
   
 $(".btn-primary").click(function(){
  alert("Webpage under maintenance.");
});

$(".button1").on({
    mouseenter: function() {
        $(this).css("background-color", "#");
    },
    mouseleave: function() {
    $(this).css("background-color", "#");
},
click: function() {
    $(this).css("background-color", "#");
    }
    });
    
    $(".button2").on({
    mouseenter: function() {
        $(this).css("background-color", "#");
    },
    mouseleave: function() {
    $(this).css("background-color", "#");
},
click: function() {
    $(this).css("background-color", "#");
    }
    });
    
    $(document).ready(function(){
     $(".panel").click(function(){
    $("#panel").slideToggle("slow");
  });
    });
    
      $(".panel2").click(function(){
    $("#panel2").slideToggle("slow");
  });
  
     $(".panel3").click(function(){
    $("#panel3").slideToggle("slow");
  });
  
     $(".panel4").click(function(){
    $("#panel4").slideToggle("slow");
  });

   $(".panel5").click(function(){
    $("#panel5").slideToggle("slow");
  });

   $(".panel6").click(function(){
    $("#panel6").slideToggle("slow");
  });

   $(".panel7").click(function(){
    $("#panel7").slideToggle("slow");
  });



