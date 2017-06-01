var html_all="";
var html_online="";
var html_offline="";
$.getJSON("https://gist.githubusercontent.com/QuincyLarson/2ff6892f948d0b7118a99264fd9c1ce8/raw/e9e12f154d71cf77fc32e94e990749a7383ca2d6/Twitch%2520sample%2520API%2520responses%2520in%2520array%2520form",function(json){
  for(var i in json){
    if(json[i].stream==null){
      html_all+='<a target="_blank" href="' + json[i]._links.channel.replace(/api./gi,'').replace(/kraken\/channels\//gi,'') + '" style="text-decoration:none;">' + '<div class="card"><h3>' + json[i].display_name + '</h3><br>' + '<p>' + 'Offline' + '</p>' + '</div></a>';
      
      html_offline+='<a target="_blank" href="' + json[i]._links.channel.replace(/api./gi,'').replace(/kraken\/channels\//gi,'') + '" style="text-decoration:none;">' + '<div class="card"><h3>' + json[i].display_name + '</h3><br>' + '<p>' + 'Offline' + '</p>' + '</div></a>';
    }
    else{
      html_all+='<a target="_blank" href="' + json[i].stream.url + '" style="text-decoration:none;">' + '<div class="card"><h3>' + json[i].stream.display_name + '</h3><br>' + '<p>' + json[i].stream.status + '</p>' + '</div></a>';
      html_online+='<a target="_blank" href="' + json[i].stream.url + '" style="text-decoration:none;">' + '<div class="card"><h3>' + json[i].stream.display_name + '</h3><br>' + '<p>' + json[i].stream.status + '</p>' + '</div></a>';
    }
  }
});

$(".btn1").click(function(){
  $(".box").html(html_all);
});

$(".btn2").click(function(){
  $(".box").html(html_online);
});

$(".btn3").click(function(){
  $(".box").html(html_offline);
});