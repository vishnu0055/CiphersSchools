window.onload = function () {
  
  var seconds = 00; 
  var mile = 00; 
  var appendMile = document.getElementById("Mile")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ;

  buttonStart.onclick = function() {
    
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  

  buttonReset.onclick = function() {
     clearInterval(Interval);
    mile = "00";
  	seconds = "00";
    appendMile.innerHTML = mile;
  	appendSeconds.innerHTML = seconds;
  }
  
   
  
  function startTimer () {
    mile++; 
    
    if(mile <= 9){
      appendMile.innerHTML = "0" + mile;
    }
    
    if (mile > 9){
      appendmile.innerHTML = mile;
      
    } 
    
    if (mile > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      mile = 0;
      appendmile.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
  }
  

}