
//quote database
var quoteSource=[
		{
			quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
			name:"Francis of Assisi"
	    },
	    {
	    	quote:"Believe you can and you're halfway there.",
	    	name:"Theodore Roosevelt"
	    },
	    {
	    	quote:"It does not matter how slowly you go as long as you do not stop.",
	    	name:"Confucius"
	    },
	    {
	    	quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
	    	name:"Thomas A. Edison"
	    },
	    {
	    	quote:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
	    	name:"Confucius"
	    },
	    {
	    	quote:"Don't watch the clock; do what it does. Keep going.",
	    	name:"Sam Levenson"
	    },
	    {
	    	quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
	    	name:"Ayn Rand"
	    },
	    {
	    	quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
	    	name:"Ayn Rand"
	    },
	    {
	    	quote:"Expect problems and eat them for breakfast.",
	    	name:"Alfred A. Montapert"
	    },
	    {
	    	quote:"Start where you are. Use what you have. Do what you can.",
	    	name:"Arthur Ashe"
	    },
	    {
	    	quote:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
	    	name:"Samuel Beckett"
	    },
	    {
	    	quote:"Be yourself; everyone else is already taken.",
	    	name:"Oscar Wilde"
	    },
	    {
	    	quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
	    	name:"Albert Einstein"
	    },
	    {
	    	quote:"Always remember that you are absolutely unique. Just like everyone else.",
	    	name:"Margaret Mead"
	    },
	    {
	    	quote:"Do not take life too seriously. You will never get out of it alive.",
	    	name:"Elbert Hubbard"
	    },
	    {
	    	quote:"People who think they know everything are a great annoyance to those of us who do.",
	    	name:"Isaac Asimov"
	    },
	    {
	    	quote:"Procrastination is the art of keeping up with yesterday.",
	    	name:"Don Marquis"
	    },
	    {
	    	quote:"Get your facts first, then you can distort them as you please.",
	    	name:"Mark Twain"
	    },
	    {
	    	quote:"A day without sunshine is like, you know, night.",
	    	name:"Steve Martin"
	    },
	    {
	    	quote:"My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
	    	name:"Ellen DeGeneres"
	    },
	    {
	    	quote:"Don't sweat the petty things and don't pet the sweaty things.",
	    	name:"George Carlin"
	    },
	    {
	    	quote:"Always do whatever's next.",
	    	name:"George Carlin"
	    },
	    {
	    	quote:"Atheism is a non-prophet organization.",
	    	name:"George Carlin"
	    },
	    {
	    	quote:"Hapiness is not something ready made. It comes from your own actions.",
	    	name:"Dalai Lama"
	    }

	];

var rand=0;

$(".change").click(function(){
  $('.quote-title').addClass("animated fadeIn");
    var wait = window.setTimeout( function(){
        $('.quote-title').removeClass("fadeIn")},
        400); 
  $('.quote-content').addClass("animated fadeIn");
    var wait = window.setTimeout( function(){
        $('.quote-content').removeClass("fadeIn")},
        400); 
  
  /*change color code*/
  var col=getRandom();
  $(".back").css('background-color',col);
  $(".card").css('color',col);
  $(".color").css('color',col);
  /*color code end*/
  
  var length=quoteSource.length;
  rand=Math.floor(Math.random()*length);
  //console.log(rand);
  $(".quote-title").html('');        
  $(".quote-title").append('<p>'+quoteSource[rand].quote+'</p>');
  $(".quote-content").html('');        
  $(".quote-content").append('<p id="quoteGenius">'+'-'+quoteSource[rand].name+'</p>');
});

$(".tweet").click(function(){
  openInNewTab("https://twitter.com/home?status="+(quoteSource[rand].quote).replace('/ /g','%20')+"%20-%20"+(quoteSource[rand].name).replace('/ /g','%20')+"%20%23quotes");
});

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function getRandom(){
  return '#'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);
}