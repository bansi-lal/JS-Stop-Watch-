var base;
var playPause = 0;

function playfunc(){
    playPause = playPause + 1;
if(playPause === 1){
   play();
    document.getElementById("play").classList.add("pause");
    $("#animateCircle").addClass("addAnimation");
    $("#animateCircle.addanimation").css("animation-play-state","running");
  }else if(playPause ===2){
    document.getElementById("play").classList.remove("pause");
    $("#animateCircle").css("animation-play-state","running");
    playPause = 0;
    stop();
   }
}


function play(){
    base = setInterval(timer,10); //millisecond

}

function stop(){
    clearInterval(base);
}

// Default value

var millisecond = 0;
var second = 0;
var minute = 0;
var hour = 0;

//Return value

var millisecondVal = 0;
var secondVal = 0;
var minuteVal = 0;
var hourVal = 0;

function timer(){
var millisecondVal = updateTime(millisecond);
var secondVal = updateTime(second);
var minuteVal = updateTime(minute);
var hourVal = updateTime(hour);

millisecond = ++ millisecond;

if(millisecond ===1000){
    millisecond = 0;
    second = ++second;
}
  if(second ==60){
      minute = ++minute;
      second = 0;
  }
  if(minute == 60){
    minute = 0;
    hour = ++hour;
}

// also you can use javascriptbut i use jquery
$("#millisecond").text(millisecondVal);
$("#second").text(secondVal);
$("#minute").text(minuteVal);
$("#hour").text(hourVal);  
}
//update time every second millisecond
function updateTime(i){
    if(i < 10){
        i = "0" + i;
    }
    return i;
}

function resetfunc(){
    millisecond = 0;
    second = 0;
    minute = 0;
    hour = 0;

   $("#millisecond").text("00");
   $("#second").text("00");
   $("#minute").text("00");
   $("#hour").text("00");
}

function stopfunc(){
    clearInterval(base);
    resetfunc();

}
