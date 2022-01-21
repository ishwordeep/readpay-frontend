

  $(document).ready(function(){
    $(".billContent").click(function(){
      $(this).toggleClass("billContentWithBorder");
    });

    $(".billingChoice").click(function(){
        $(".billingChoice").removeClass("btn-primary");
      $(this).addClass("btn-primary");
    //   $(this).removeClass("btn-outline-dark");
    });
  });
 