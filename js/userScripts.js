jQuery(document).ready(function() {
  
  
  //function for quicklinks dropdown menu
  
  var quickLinks = jQuery('#navigation');
  var header = jQuery('nav h5');
  
  quickLinks.css({'top': '-260px'});
  
  quickLinks.hover(function(){
    header.css({'color':'#28b8c1', 'background-position':'102px -68px'});
    jQuery(this).stop().animate({ 'top' :'+=5px'}, 100, function(){
      jQuery(this).delay(150).animate({'top':'-30px'}, 250);
    });
  },
  function(){
    header.css({'color':'#4F5050', 'background-position':'102px 8px'});
    jQuery(this).stop().animate({'top':'-260px'}, 200); 
  });
  
  //function for sliding
  
  var home = parseInt(jQuery('#questions').position().top);

  jQuery('nav li a, #questions li a').click(function(event){
    event.preventDefault();
    var target = parseInt(jQuery('article.'+jQuery(this).attr('class')).position().top);
    console.log(jQuery('article.'+jQuery(this).attr('class')).position().top);
    scrollInit(target-30);
  });
  
  jQuery('.homeButton').click(function(event){
    event.preventDefault();
    scrollInit(home);
  });
  
  function scrollInit(target) {
    jQuery('html, body').animate({scrollTop: target + "px"}, 300);
  }
  
  //hover function for images
  
  var image = jQuery('article.answer-5 img, a.imgOverlay');
  var overlay = jQuery('a.imgOverlay');
  
  image.hover(function(){
    overlay.css('display', 'block');
  },
    function(){
      overlay.css('display', 'none');
  });
  
  
  
  
});