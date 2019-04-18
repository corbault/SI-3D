var casrange = document.getElementById('casrange');
var armrange = document.getElementById('armrange');
var tabrange = document.getElementById('tabrange');
var tacrange = document.getElementById('tacrange');
var charange = document.getElementById('charange');
var burrange = document.getElementById('burrange');
var banrange = document.getElementById('banrange');
var etarange = document.getElementById('etarange');
var classroom = document.getElementById('classroom');

var cvalue = crange.value;
btvalue = trange.value;
bavalue = arange.value;
bevalue = erange.value;

crange.oninput = function() {
  cvalue.innerHTML = this.value + " sur 14 Chaises";
  pvalue.innerHTML = (crange.value * 20 - bcvalue * 20) + (trange.value * 48 - btvalue * 48) + (erange.value * 62 - bevalue * 62) + (arange.value * 73 - bavalue * 73);
  if (pvalue.innerHTML < 0) {
    pvalue.innerHTML = 0
  };
};

slide.oninput = function() {
  efvalue.innerHTML = this.value + " € sur 1273€ récoltés";
  if (slide.value > 25 && slide.value < 50) {
    classroom.classList.remove('red');
    classroom.classList.remove('green')
    classroom.classList.add('blue');
  }
  if (slide.value > 50 && slide.value < 75) {
    classroom.classList.remove('blue');
    classroom.classList.remove('purple');
    classroom.classList.add('green');
  }
  if (slide.value > 75) {
    classroom.classList.remove('green');
    classroom.classList.add('purple')
  }
  if (slide.value < 25) {
    classroom.classList.remove('blue');
    classroom.classList.add('red');
  }
};