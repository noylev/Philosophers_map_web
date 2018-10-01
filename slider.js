var sliderFrom = document.getElementById("fromYearRange");
var sliderTo = document.getElementById("toYearRange");
var outputFrom = document.getElementById("fromYear");
var outputTo = document.getElementById("toYear");
outputFrom.innerHTML = `${Math.abs(sliderFrom.value)} B.C`;
outputTo.innerHTML = sliderTo.value;

sliderFrom.oninput = function() {
  this.value < 0 ? outputFrom.innerHTML = `${Math.abs(this.value)} B.C` : outputFrom.innerHTML = this.value ;
  ;
}

sliderTo.oninput = function() {
  this.value < 0 ? outputTo.innerHTML = `${Math.abs(this.value)} B.C` : outputTo.innerHTML = this.value ;
}