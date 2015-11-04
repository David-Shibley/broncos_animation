var divsOnDivsOnDivsYo = [];

var repeater = function(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
    divsOnDivsOnDivsYo[i] = document.createElement('div');
    divsOnDivsOnDivsYo[i].style.padding = (1/n);
    if (i== n-1) {
      document.body.appendChild(divsOnDivsOnDivsYo[i]);
      divsOnDivsOnDivsYo[i].appendChild(divsOnDivsOnDivsYo[i-1])
    } else if (i == 0) {

    } else {
      divsOnDivsOnDivsYo[i].appendChild(divsOnDivsOnDivsYo[i-1]);
    }
    if (i % 2 == 0) {
      divsOnDivsOnDivsYo[i].className = "blue";
    } else {
      divsOnDivsOnDivsYo[i].className = "orange";
    }
  };
};

repeater(100);


var divs = document.getElementsByTagName('div');

// function borderChange(){
//   for (var i = 0; i < divs.length; i++) {
//     divs[i].style.borderRadius = change ? '50%' : '0%';
//   }
//   change = !change;
// }
//
// setInterval(borderChange, 500);


function setSetTimeout(i) {
  setTimeout(function(){
    divs[i].style.borderRadius = divs[i].style.borderRadius == '0%' ? '50%' : '0%';
    if(i == 99){
      loopThroughDivs();
    }
  }, 50 * i);
}

function loopThroughDivs() {
  for (var i = 0; i < divs.length; i++) {
    setSetTimeout(i);
  }
}

loopThroughDivs();
