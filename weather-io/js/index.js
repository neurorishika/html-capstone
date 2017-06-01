
var rand=0;
var lat=0.0,lon=0.0;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    lat=position.coords.latitude;
    lon=position.coords.longitude;
    console.log(lat+" "+lon)
  });
}

  var col=getRandom();
  setInterval(function () {
    $(".back").css('background-color',col);
    var back=isColorLight(col.substring(1))?"#1A1C1D":"#FFFBE9";
    $(".card").css('background-color',back);
    $(".card").css('color',col);
    $(".color").css('color',col);
    $(".city").css('color',col);
    $(".weather").css('color',col);
    $(".data").css('color',col);
    
  col=getRandom();
}, 10000);

// See: http://stackoverflow.com/a/1855903/186965

function isColorLight (hex) {
  var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
  // Counting the perceptive luminance
  // human eye favors green color... 
  var a = 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  console.log(a);
  return (a < 0.5);
}

$(".change").click(function(){
  /*
  $('.quote-title').addClass("animated fadeIn");
    var wait = window.setTimeout( function(){
        $('.quote-title').removeClass("fadeIn")},
        400); 
  $('.quote-content').addClass("animated fadeIn");
    var wait = window.setTimeout( function(){
        $('.quote-content').removeClass("fadeIn")},
        400); 
  */
  /*change color code
  var col=getRandom();
  setInterval(function () {
   $(".back").css({
     backgroundColor: col
   });
  col=getRandom();
}, 100);
  $(".back").css('background-color',col);
  $(".card").css('color',col);
  $(".color").css('color',col);
  color code end*/
  
  var weather="https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=a9bcf4f4899aaab6b7194e3f674f162b";
$.getJSON(weather,function(json){
  $(".city").html('');
  $(".city").html(json.name);
  $(".weather").html('');
  $(".weather").html(json.weather[0].description);
  $(".icon").attr('src','');
  $(".icon").attr('src','http://openweathermap.org/img/w/'+json.weather[0].icon+'.png');
  $(".data").html('');
  $(".data").html("<p style=\"font-size:15px\">Temperature: <b style=\"font-size:40px\">&nbsp;"+toCelsius(json.main.temp)+"°C&nbsp;</b><wbr> Humidity:<b style=\"font-size:40px\">&nbsp;"+json.main.humidity+"%</b><br>Wind Speed:<b style=\"font-size:40px\">&nbsp;"+json.wind.speed+"</b>&nbsp;km/hr&nbsp;<wbr><b style=\"font-size:30px\">&nbsp;"+degToCompass(json.wind.deg)+"</b></p>");
}); 
});

function degToCompass(num) {
    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["North", "NNE", "NE", "ENE", "East", "ESE", "SE", "SSE", "South", "SSW", "SW", "WSW", "West", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
}

function toCelsius(kel){
  return Math.floor((kel-273.15)*10)/10.0;
}
function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function getRandom(){
  return '#'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);
}