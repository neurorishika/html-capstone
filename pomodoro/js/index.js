var session=parseInt($(".p-time").html());
var br=parseInt($(".b-time").html());
var active=false;
var time=parseInt($(".p-time").html())*60;
var brk=false;

$(".l-br").click(function(){
  if(br>0)
    br--;
  $(".b-time").html(br);
});

$(".a-br").click(function(){
  br++;
  $(".b-time").html(br);
});

$(".l-ses").click(function(){
  if(session>0)
    session--;
  $(".p-time").html(session);
  time=parseInt($(".p-time").html())*60;
});

$(".a-ses").click(function(){
  session++;
  $(".p-time").html(session);
  time=parseInt($(".p-time").html())*60;
});

window.setInterval(function(){
  console.log("sess:"+session+"br:"+br);
  if(active){
    if(brk){
      time--;
      console.log(time);
      $(".prog").html((parseInt(time/60)<10?"0"+parseInt(time/60):parseInt(time/60))+":"+(parseInt(time%60)<10?"0"+parseInt(time%60):parseInt(time%60)));
      $(".card2").css('clip-path','inset('+parseInt(((time/(br*60)))*510)+'px 0px 0px 0px)');
      console.log("clipped");
      if(time==0)
      {
          time=session*60;
          brk=false;
          
      }
    }
    else{
      console.log(time);
      time--;
      $(".prog").html((parseInt(time/60)<10?"0"+parseInt(time/60):parseInt(time/60))+":"+(parseInt(time%60)<10?"0"+parseInt(time%60):parseInt(time%60)));
      $(".card2").css('clip-path','inset('+parseInt((1-(time/(session*60)))*510)+'px 0px 0px 0px)');
      console.log("clipped");
      if(time==0)
      {
          time=br*60;
          brk=true;
      }
    }
  }
},1000);

$(".start").click(function(){
  active=!active;
  var time=session*60;
  $(".prog").html((parseInt(time/60)<10?"0"+parseInt(time/60):parseInt(time/60))+":"+(parseInt(time%60)<10?"0"+parseInt(time%60):parseInt(time%60)));  
  
  
});