var play=[[0,0,0],[0,0,0],[0,0,0]];
var computer=false;
var oh=false;
var p1turn=true;
populate();
$(".number").hide();
$(".p2").hide();
$(".p3").hide();
function populate(){
  $(".oo").html(play[0][0]==0?' ':play[0][0]==1?'X':'O');
  $(".oi").html(play[0][1]==0?' ':play[0][1]==1?'X':'O');
  $(".ot").html(play[0][2]==0?' ':play[0][2]==1?'X':'O');
  $(".io").html(play[1][0]==0?' ':play[1][0]==1?'X':'O');
  $(".ii").html(play[1][1]==0?' ':play[1][1]==1?'X':'O');
  $(".it").html(play[1][2]==0?' ':play[1][2]==1?'X':'O');
  $(".to").html(play[2][0]==0?' ':play[2][0]==1?'X':'O');
  $(".ti").html(play[2][1]==0?' ':play[2][1]==1?'X':'O');
  $(".tt").html(play[2][2]==0?' ':play[2][2]==1?'X':'O');
}

$(".choose-one").click(function(){
  computer=true;
  $(".p1").hide();
  $(".p2").show();
});
$(".choose-two").click(function(){
  computer=false;
  $(".p1").hide();
  $(".p2").show();
});
$(".choose-o").click(function(){
  oh=true;
  $(".p2").hide();
  $(".number").show();
  $(".turn1").css('top','70px');
});
$(".choose-x").click(function(){
  oh=false;
  $(".p2").hide();
  $(".number").show();
  $(".turn1").css('top','70px');
});

$(".oo").click(function(){
  if(play[0][0]==0){
  if(p1turn){
    play[0][0]=oh?2:1;
    $(".turn1").css('top','100px');
    $(".turn2").css('top','70px');
    p1turn=!p1turn;
    if(computer){
      compute();
      $(".turn2").css('top','100px');
    $(".turn1").css('top','70px');
    p1turn=!p1turn;
    }
  }
  else{
      play[0][0]=oh?1:2;
      $(".turn2").css('top','100px');
      $(".turn1").css('top','70px');
      p1turn=!p1turn;
  }
  }
  populate();
  check();
});
$(".oi").click(function(){
  if(play[0][1]==0){
  if(p1turn){
    play[0][1]=oh?2:1;
    $(".turn1").css('top','100px');
    $(".turn2").css('top','70px');
    p1turn=!p1turn;
    if(computer){
      compute();
      $(".turn2").css('top','100px');
    $(".turn1").css('top','70px');
    p1turn=!p1turn;
    }
  }
  else{
      play[0][1]=oh?1:2;
      $(".turn2").css('top','100px');
      $(".turn1").css('top','70px');
      p1turn=!p1turn;
  }
  }
  populate();
  check();
});
$(".ot").click(function(){
  if(play[0][2]==0){
  if(p1turn){
    play[0][2]=oh?2:1;
    $(".turn1").css('top','100px');
    $(".turn2").css('top','70px');
    p1turn=!p1turn;
    if(computer){
      compute();
      $(".turn2").css('top','100px');
      $(".turn1").css('top','70px');
      p1turn=!p1turn;
    }
  }
  else{
      play[0][2]=oh?1:2;
      $(".turn2").css('top','100px');
      $(".turn1").css('top','70px');
      p1turn=!p1turn;
  }
  }
  populate();
  check();
});


$(".io").click(function(){
  if(play[1][0]==0){
  if(p1turn){
    play[1][0]=oh?2:1;
    $(".turn1").css('top','100px');
    $(".turn2").css('top','70px');
    p1turn=!p1turn;
    if(computer){
      compute();
      $(".turn2").css('top','100px');
    $(".turn1").css('top','70px');
    p1turn=!p1turn;
    }
  }
  else{
    play[1][0]=oh?1:2;
      $(".turn2").css('top','100px');
      $(".turn1").css('top','70px');
      p1turn=!p1turn;
    
  }
  }
  populate();
  check();
});

$(".ii").click(function(){
  if(play[1][1]==0){
  if(p1turn){
    play[1][1]=oh?2:1;
    $(".turn1").css('top','100px');
    $(".turn2").css('top','70px');
    p1turn=!p1turn;
    if(computer){
      compute();
      $(".turn2").css('top','100px');
    $(".turn1").css('top','70px');
    p1turn=!p1turn;
    }
  }
  else{
      play[1][1]=oh?1:2;
      $(".turn2").css('top','100px');
      $(".turn1").css('top','70px');
      p1turn=!p1turn;
    
  }
  }
  populate();
  check();
});
$(".it").click(function(){
  if(play[1][2]==0){
  if(p1turn){
    play[1][2]=oh?2:1;
    $(".turn1").css('top','100px');
    $(".turn2").css('top','70px');
    p1turn=!p1turn;
    if(computer){
      compute();
      $(".turn2").css('top','100px');
    $(".turn1").css('top','70px');
    p1turn=!p1turn;
    }
  }
  else{
      play[1][2]=oh?1:2;
      $(".turn2").css('top','100px');
      $(".turn1").css('top','70px');
      p1turn=!p1turn;
   
  }
  }
  populate();
  check();
});

$(".to").click(function(){
  if(play[2][0]==0){
  if(p1turn){
    play[2][0]=oh?2:1;
    $(".turn1").css('top','100px');
    $(".turn2").css('top','70px');
    p1turn=!p1turn;
    if(computer){
      compute();
      $(".turn2").css('top','100px');
    $(".turn1").css('top','70px');
    p1turn=!p1turn;
    }
  }
  else{
      play[2][0]=oh?1:2;
      $(".turn2").css('top','100px');
      $(".turn1").css('top','70px');
      p1turn=!p1turn;
    
  }
  }
  populate();
  check();
});

$(".ti").click(function(){
  if(play[2][1]==0){
  if(p1turn){
    play[2][1]=oh?2:1;
    $(".turn1").css('top','100px');
    $(".turn2").css('top','70px');
    p1turn=!p1turn;
    if(computer){
      compute();
      $(".turn2").css('top','100px');
    $(".turn1").css('top','70px');
    p1turn=!p1turn;
    }
  }
  else{
      play[2][1]=oh?1:2;
      $(".turn2").css('top','100px');
      $(".turn1").css('top','70px');
      p1turn=!p1turn;
    
  }
  }
  populate();
  check();
});

$(".tt").click(function(){
  if(play[2][2]==0){
  if(p1turn){
    play[2][2]=oh?2:1;
    $(".turn1").css('top','100px');
    $(".turn2").css('top','70px');
    p1turn=!p1turn;
    if(computer){
      compute();
      $(".turn2").css('top','100px');
    $(".turn1").css('top','70px');
    p1turn=!p1turn;
    }
  }
  else{
      play[2][2]=oh?1:2;
      $(".turn2").css('top','100px');
      $(".turn1").css('top','70px');
      p1turn=!p1turn;
    
  }
  }
  populate();
  check();
});

function check(){
  if((play[0][0]==play[0][1] && play[0][1]==play[0][2] && play[0][0]!==0) || 
     (play[1][0]==play[1][1] && play[1][1]==play[1][2] && play[1][0]!==0) || 
     (play[2][0]==play[2][1] && play[2][1]==play[2][2] && play[2][0]!==0) ||
    (play[0][0]==play[1][0] && play[1][0]==play[2][0] && play[0][0]!==0) ||
    (play[0][1]==play[1][1] && play[1][1]==play[2][1] && play[0][1]!==0) ||
    (play[0][2]==play[1][2] && play[1][2]==play[2][2] && play[0][2]!==0) ||
    (play[0][0]==play[1][1] && play[1][1]==play[2][2] && play[0][0]!==0) ||
    (play[0][2]==play[1][1] && play[1][1]==play[2][0] && play[0][2]!==0)) {
    $(".turn2").css('top','100px');
    $(".turn1").css('top','100px');
    if(p1turn){
      if(computer){
        $(".number").hide();
        $(".cw").show();
        $(".butt").show();
        
      }
      else{
        $(".number").hide();
        $(".p2w").show();
        $(".butt").show();
      }
    }
    else{
        $(".number").hide();
        $(".p1w").show();
        $(".butt").show();
    }
  }
  else if(play[0].indexOf(0)==-1 && play[1].indexOf(0)==-1 && play[2].indexOf(0)==-1){
    $(".number").hide();
        $(".dr").show();
        $(".butt").show();
  }
}

jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

function compute(){
  //using stujo/tictactoe-api https://github.com/stujo/tictactoe-api
  var url="https://tttapi.herokuapp.com/api/v1/";
  for(var i=0;i<3;i++){
    for(var j=0;j<3;j++){
      url+=play[i][j]==0?'-':play[i][j]==1?'X':'O';
    }
  }
  url+="/"+(oh?"X":"O");
  console.log(url);
  $.getJSON(url,function(json){
    var out=json.recommendation;
    console.log(out);
    if(out==0){play[0][0]=(oh?1:2);}
    else if(out==1){play[0][1]=(oh?1:2);}
    else if(out==2){play[0][2]=(oh?1:2);}
    else if(out==3){play[1][0]=(oh?1:2);}
    else if(out==4){play[1][1]=(oh?1:2);}
    else if(out==5){play[1][2]=(oh?1:2);}
    else if(out==6){play[2][0]=(oh?1:2);}
    else if(out==7){play[2][1]=(oh?1:2);}
    else if(out==8){play[2][2]=(oh?1:2);}
    populate();
    //p1turn=!p1turn;
    check();
  });

}

$(".butt").click(function(){
  play=[[0,0,0],[0,0,0],[0,0,0]];
  populate();
  $(".butt").hide();
  $(".p3").hide();
  $(".p1").show();
  computer=false;
  oh=false;
  p1turn=true;
});