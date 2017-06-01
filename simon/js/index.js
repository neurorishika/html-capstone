$(".win").hide();

class Sound {
  
  constructor(context) {
    this.context = context;
  }
  
  setup() {
    this.oscillator = this.context.createOscillator();
    this.gainNode = this.context.createGain();

    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);
    this.oscillator.type = 'sine';
  }

  play(value) {
    this.setup();

    this.oscillator.frequency.value = value;
    this.gainNode.gain.setValueAtTime(0, this.context.currentTime);
    this.gainNode.gain.linearRampToValueAtTime(1, this.context.currentTime + 0.01);
            
    this.oscillator.start(this.context.currentTime);
    this.stop(this.context.currentTime);
  }
  
  stop() {
    this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 1);
    this.oscillator.stop(this.context.currentTime + 1);
  }
 
}

let context = new (window.AudioContext || window.webkitAudioContext)();

function playSound(note) {
  let sound = new Sound(context);
  let value = note;
  sound.play(value);
  sound.stop();
}
var arr=["R","G","B","Y"];

var active=false;
var started=false;
var turn=false;
var count=0;
var strict=false;
var rhythm="";
var urthm="";
var computer=true;

function run(){
      if(count==20){
        started=false;
        turn=false;
        count=0;
        rhythm="";
        urthm="";
        $(".win").show();
        run();
        
      }else{
      count++;
      $(".block").text(count>9?count:'0'+count);
      rhythm+=arr[Math.floor(Math.random()*4)];
      cplay();
      setTimeout(function(){turn=true;},1000*count);
      }
}

function check(){
  $(".win").hide();
  $(".block").text(count>9?count:'0'+count);
  console.log("CHECK:URTHM is "+urthm.valueOf()+" RHYTHM is "+rhythm.valueOf()+" checks "+(urthm.valueOf()==rhythm.valueOf()));
  if(urthm.valueOf()==rhythm.valueOf()){
    urthm="";
    run();
  }
  for(var i=0;i<urthm.length;i++){
    if(urthm[i]!=rhythm[i]){
      if(strict){
        $(".block").text("!!");
        setTimeout(function(){
        $(".block").text("!!");
        }, 5);
        setTimeout(function(){
        $(".block").text(count>9?count:'0'+count);
        }, 1000);
        started=false;
        turn=true;
        count=0;
        rhythm="";
        urthm="";
        run();
      }
      else{
        $(".block").text("!!");
        setTimeout(function(){
        $(".block").text(count>9?count:'0'+count);
        }, 2000);
        urthm="";
        cplay();
      }
    }
  }
  
}

function cplay(){
  computer=true;
  var i=0;
    var a=setInterval(function(){
      if(rhythm[i]=='R'){$(".q1").click();}
    else if(rhythm[i]=='G'){$(".q2").click();}
    else if(rhythm[i]=='B'){$(".q3").click();}
    else if(rhythm[i]=='Y'){$(".q4").click();}
    if(i<rhythm.length){
      i++;
    }
    else{
      i=0;
      clearInterval(a);
      computer=false;
      turn=true;
    }
    },800);
    
    //delay(1000);
  
  
}


$(".checkbox").change(function() {
    if(this.checked) {
        active=true;
      $(".block").text('--');
    }
  else{
    location.reload(true);
  }
});

$(".start").click(function(){
  if(active && count==0){
    started=true;
    run();
  }
});

$(".strict").click(function(){
  if(active){
    strict=!strict;
    if(strict){
      $(this).css('background-color','yellow');
    }
    else{
      $(this).css('background-color','#E2E200');
    }
  }
  
});


$(".q1").click(function(){
  if(active){
  playSound(263);
  $(".q1").css('background-color','red');
  setTimeout(function(){
  $(".q1").css("background", "#A30000");
}, 100);  

    if(turn){
      urthm+="R";
      console.log(urthm);
      check();
      turn=false;
      if(!computer)turn=true;
    }
  }
});

$(".q2").click(function(){
  if(active){
  playSound(329);
  $(".q2").css('background-color','#11E202');
  setTimeout(function(){
  $(".q2").css("background", "green");
}, 100);
        console.log("TURN "+ turn);
    if(turn){
      urthm+="G";
      console.log(urthm);
      check();
      turn=false;
      if(!computer)turn=true;
    }
  }
});

$(".q4").click(function(){
  if(active){
  playSound(392);
  $(".q4").css('background-color','yellow');
  setTimeout(function(){
  $(".q4").css("background", "#E2E200");
}, 100);
        console.log("TURN "+ turn);
    if(turn){
      urthm+="Y";
      console.log(urthm);
      check();
      turn=false;
      if(!computer)turn=true;
    }
  }
});

$(".q3").click(function(){
  if(active){
  playSound(523);
  $(".q3").css('background-color','blue');
  setTimeout(function(){
  $(".q3").css("background", "#002CDD");
}, 100);
        console.log("TURN "+ turn);
    if(turn){
      urthm+="B";
      console.log(urthm);
      check();
      turn=false;
      if(!computer)turn=true;
    }
  }
});