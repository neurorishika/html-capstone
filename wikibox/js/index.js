$(".card").hide().delay(100);

new WOW().init();

var searchable = false;
var really = false;

//$('.card').addClass("wow fadeIn");
//var wait = window.setTimeout(function() {
  //  $('.quote-title').removeClass("fadeIn")
 // },
 // 400);

function searchToggle(obj, evt) {
  if (searchable) really = true;
  var container = $(obj).closest('.search-wrapper');
  if (!container.hasClass('active')) {
    container.addClass('active');
    evt.preventDefault();
    searchable = true;
  } else if (container.hasClass('active') && $(obj).closest('.input-holder').length == 0) {
    container.removeClass('active');
    // clear input
    container.find('.search-input').val('');
    $(".search-wrapper").css("top", "50%");
    $(".card").hide();
    searchable = false;
    really = false;
  }
}

$(".search-icon").click(function() {

  $(".search-wrapper").css("top", "20%");
  if (really && $(".search-input").val().length == 0) {
    openInNewTab("https://en.wikipedia.org/wiki/Special:Random");
  }
  if (really) {
    var html = "";
    var yourl = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exlimit=max&format=json&exsentences=1&exintro=&explaintext=&generator=search&gsrlimit=20&gsrsearch=" + $(".search-input").val();
    console.log(yourl);

    $.ajax({
      url: yourl,
      type: "get",
      dataType: "JSONP",
      success: function(data) {
        console.log(data.query.pages);
        var results = data.query.pages;
        var pgs = Object.keys(results);
        pgs.forEach(function(page) {
          var title = results[page].title;
          var text = results[page].extract;
          var pagelink = 'http://en.wikipedia.org/?curid=' + results[page].pageid;
          //console.log(title+text+pagelink);

          html += '<a target="_blank" href="' + pagelink + '" style="text-decoration:none;">' + '<div class="card"><h3>' + title + '</h3><br>' + '<p>' + text + '</p>' + '</div></a>  ';
          //console.log(html);
        });

        $('.back').html(html);
        $(".card").show();
        $('.card').addClass("wow fadeIn");
      }
    });

  }

});

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}