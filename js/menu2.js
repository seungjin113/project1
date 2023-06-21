$(function(){

    
    
    // 상품 슬라이드
     //next 0-1-2-3 ...
     function productnext(){
         $('.product>div>ul').animate({left:'-320px'},800,function(){
             $('.product>div>ul>li:first').appendTo('.product>div>ul');
             $('.product>div>ul').css('left','0px');
         });
     }
     var clear1=setInterval(productnext,3000);
     
 
   





})

