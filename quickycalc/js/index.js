var hist = "";
var histr = 0;
var current = "0";
var eval = "0";
var completed = false;
var op_active = false;
var op = "";

$('.history').html(hist);
$('.inputs').html(current);
$('.output').html(eval);

$('.clear-all').click(function() {
  hist = "";
  histr = 0;
  current = "0";
  eval = "0";
  op = "";
  completed = true;
  op_active = false;
  $('.history').html(hist);
  $('.inputs').html(current);
  $('.output').html(eval);
});

$('.clear').click(function() {
  current = "0";
  $('.inputs').html(current);
});

$('.divd').click(function() {
  if (completed) {
    hist = "";
    histr = 0;
    current = "0";
    eval = "0";
    op = "";
    completed = false;
    op_active = false;
    $('.history').html(hist);
    $('.inputs').html(current);
    $('.output').html(eval);
  }
  if (op_active) {
    console.log("active");
    switch (op) {
      case "d":
        histr = histr / parseFloat(current);
        break;
      case "x":
        histr = histr * parseFloat(current);
        break;
      case "p":
        histr = histr + parseFloat(current);
        break;
      case "m":
        histr = histr - parseFloat(current);
        break;
    }
    console.log("not here");
    hist = histr + "&divide;";
    current = "0";
    op_active = true;
    op = "d";
    $('.inputs').html(current);
    $('.history').html(hist);
  } else {
    hist += current + "&divide;";
    histr = parseFloat(current);
    op = "d";
    current = "0";
    op_active = true;
    $('.inputs').html(current);
    $('.history').html(hist);
  }
});
$('.mult').click(function() {
  if (completed) {
    hist = "";
    histr = 0;
    current = "0";
    eval = "0";
    op = "";
    completed = false;
    op_active = false;
    $('.history').html(hist);
    $('.inputs').html(current);
    $('.output').html(eval);
  }
  if (op_active) {
    //console.log("active");
    switch (op) {
      case "d":
        histr = histr / parseFloat(current);
        break;
      case "x":
        histr = histr * parseFloat(current);
        break;
      case "p":
        histr = histr + parseFloat(current);
        break;
      case "m":
        histr = histr - parseFloat(current);
        break;
    }
    //console.log("not here");
    hist = histr + "&times;";
    current = "0";
    op_active = true;
    op = "x";
    $('.inputs').html(current);
    $('.history').html(hist);
  } else {
    hist += current + "&times;";
    histr = parseFloat(current);
    op = "x";
    current = "0";
    op_active = true;
    $('.inputs').html(current);
    $('.history').html(hist);
  }
});
$('.plus').click(function() {
  if (completed) {
    hist = "";
    histr = 0;
    current = "0";
    eval = "0";
    op = "";
    completed = false;
    op_active = false;
    $('.history').html(hist);
    $('.inputs').html(current);
    $('.output').html(eval);
  }
  if (op_active) {
    //console.log("active");
    switch (op) {
      case "d":
        histr = histr / parseFloat(current);
        break;
      case "x":
        histr = histr * parseFloat(current);
        break;
      case "p":
        histr = histr + parseFloat(current);
        break;
      case "m":
        histr = histr - parseFloat(current);
        break;
    }
    //console.log("not here");
    hist = histr + "&plus;";
    current = "0";
    op = "p";
    op_active = true;
    $('.inputs').html(current);
    $('.history').html(hist);
  } else {
    hist += current + "&plus;";
    histr = parseFloat(current);
    op = "p";
    current = "0";
    op_active = true;
    $('.inputs').html(current);
    $('.history').html(hist);
  }
});
$('.minus').click(function() {
  if (completed) {
    hist = "";
    histr = 0;
    current = "0";
    eval = "0";
    op = "";
    completed = false;
    op_active = false;
    $('.history').html(hist);
    $('.inputs').html(current);
    $('.output').html(eval);
  }
  if (op_active) {
    //console.log("active");
    switch (op) {
      case "d":
        histr = histr / parseFloat(current);
        break;
      case "x":
        histr = histr * parseFloat(current);
        break;
      case "p":
        histr = histr + parseFloat(current);
        break;
      case "m":
        histr = histr - parseFloat(current);
        break;
    }
    //console.log("not here");
    hist = histr + "&minus;";
    current = "0";
    op = "m";
    op_active = true;
    $('.inputs').html(current);
    $('.history').html(hist);
  } else {
    hist += current + "&minus;";
    histr = parseFloat(current);
    op = "m";
    current = "0";
    op_active = true;
    $('.inputs').html(current);
    $('.history').html(hist);
  }
});

$('.one').click(function() {
  if (completed) {
    hist = "";
    histr = 0;
    current = "0";
    eval = "0";
    op = "";
    completed = false;
    op_active = false;
    $('.history').html(hist);
    $('.inputs').html(current);
    $('.output').html(eval);
  }
  if (op_active) {
    current = current == "0" ? "1" : current + "1";
    $('.inputs').html(current);
  } else {
    current = current == "0" ? "1" : current + "1";
    $('.inputs').html(current);
  }
});
$('.two').click(function() {
  if (completed) {
    hist = "";
    histr = 0;
    current = "0";
    eval = "0";
    op = "";
    completed = false;
    op_active = false;
    $('.history').html(hist);
    $('.inputs').html(current);
    $('.output').html(eval);
  } //console.log("1");
  if (op_active) {
    current = current == "0" ? "2" : current + "2";
    $('.inputs').html(current);
  } else {
    current = current == "0" ? "2" : current + "2";
    $('.inputs').html(current);
  }
});
$('.three').click(function() {
  if (completed) {
    hist = "";
    histr = 0;
    current = "0";
    eval = "0";
    op = "";
    completed = false;
    op_active = false;
    $('.history').html(hist);
    $('.inputs').html(current);
    $('.output').html(eval);
  } //console.log("1");
  if (op_active) {
    current = current == "0" ? "3" : current + "3";
    $('.inputs').html(current);
  } else {
    current = current == "0" ? "3" : current + "3";
    $('.inputs').html(current);
  }
});
$('.four').click(function() {
  if (completed) {
    hist = "";
    histr = 0;
    current = "0";
    eval = "0";
    op = "";
    completed = false;
    op_active = false;
    $('.history').html(hist);
    $('.inputs').html(current);
    $('.output').html(eval);
  } //console.log("1");
  if (op_active) {
    current = current == "0" ? "4" : current + "4";
    $('.inputs').html(current);
  } else {
    current = current == "0" ? "4" : current + "4";
    $('.inputs').html(current);
  }
});
$('.five').click(function() {
  if (completed) {
    hist = "";
    histr = 0;
    current = "0";
    eval = "0";
    op = "";
    completed = false;
    op_active = false;
    $('.history').html(hist);
    $('.inputs').html(current);
    $('.output').html(eval);
  } //console.log("1");
  if (op_active) {
    current = current == "0" ? "5" : current + "5";
    $('.inputs').html(current);
  } else {
    current = current == "0" ? "5" : current + "5";
    $('.inputs').html(current);
  }
});
$('.six').click(function() {
  if (completed) {
    hist = "";
    histr = 0;
    current = "0";
    eval = "0";
    op = "";
    completed = false;
    op_active = false;
    $('.history').html(hist);
    $('.inputs').html(current);
    $('.output').html(eval);
  } //console.log("1");
  if (op_active) {
    current = current == "0" ? "6" : current + "6";
    $('.inputs').html(current);
  } else {
    current = current == "0" ? "6" : current + "6";
    $('.inputs').html(current);
  }
});
$('.seven').click(function() {
  if (completed) {
    hist = "";
    histr = 0;
    current = "0";
    eval = "0";
    op = "";
    completed = false;
    op_active = false;
    $('.history').html(hist);
    $('.inputs').html(current);
    $('.output').html(eval);
  } //console.log("1");
  if (op_active) {
    current = current == "0" ? "7" : current + "7";
    $('.inputs').html(current);
  } else {
    current = current == "0" ? "7" : current + "7";
    $('.inputs').html(current);
  }
});
$('.eight').click(function() {
  if (completed) {
    hist = "";
    histr = 0;
    current = "0";
    eval = "0";
    op = "";
    completed = false;
    op_active = false;
    $('.history').html(hist);
    $('.inputs').html(current);
    $('.output').html(eval);
  } //console.log("1");
  if (op_active) {
    current = current == "0" ? "8" : current + "8";
    $('.inputs').html(current);
  } else {
    current = current == "0" ? "8" : current + "8";
    $('.inputs').html(current);
  }
});
$('.nine').click(function() {
  if (completed) {
    hist = "";
    histr = 0;
    current = "0";
    eval = "0";
    op = "";
    completed = false;
    op_active = false;
    $('.history').html(hist);
    $('.inputs').html(current);
    $('.output').html(eval);
  } //console.log("1");
  if (op_active) {
    current = current == "0" ? "9" : current + "9";
    $('.inputs').html(current);
  } else {
    current = current == "0" ? "9" : current + "9";
    $('.inputs').html(current);
  }
});
$('.zero').click(function() {
  if (completed) {
    hist = "";
    histr = 0;
    current = "0";
    eval = "0";
    op = "";
    completed = false;
    op_active = false;
    $('.history').html(hist);
    $('.inputs').html(current);
    $('.output').html(eval);
  } //console.log("1");
  if (op_active) {
    current = current == "0" ? "0" : current + "0";
    $('.inputs').html(current);
  } else {
    current = current == "0" ? "0" : current + "0";
    $('.inputs').html(current);
  }
});
$('.d-zero').click(function() {
  if (completed) {
    hist = "";
    histr = 0;
    current = "0";
    eval = "0";
    op = "";
    completed = false;
    op_active = false;
    $('.history').html(hist);
    $('.inputs').html(current);
    $('.output').html(eval);
  } //console.log("1");
  if (op_active) {
    current = current == "0" ? "0" : current + "00";
    $('.inputs').html(current);
  } else {
    current = current == "0" ? "0" : current + "00";
    $('.inputs').html(current);
  }
});
$('.dot').click(function() {
  if (completed) {
    hist = "";
    histr = 0;
    current = "0";
    eval = "0";
    op = "";
    completed = false;
    op_active = false;
    $('.history').html(hist);
    $('.inputs').html(current);
    $('.output').html(eval);
  } //console.log("1");
  if (op_active) {
    current = current == "0" ? "0." : current + ".";
    $('.inputs').html(current);
  } else {
    current = current == "0" ? "0." : current + ".";
    $('.inputs').html(current);
  }
});

$(".equals").click(function() {
  if (op_active) {
    switch (op) {
      case "d":
        histr = histr / parseFloat(current);
        break;
      case "x":
        histr = histr * parseFloat(current);
        break;
      case "p":
        histr = histr + parseFloat(current);
        break;
      case "m":
        histr = histr - parseFloat(current);
        break;
    }
    eval = "" + histr;
    console.log("equal");
    $('.output').html(eval);
    completed = true;
  } else {
    $('.output').html(current);
    completed = true;
  }
});