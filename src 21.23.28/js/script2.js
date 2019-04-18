var casrange = document.getElementById('casrange');
var tabrange = document.getElementById('tabrange');
var charange = document.getElementById('charange');
var etarange = document.getElementById('etarange');
var class2 = document.getElementById('class2');
var class3 = document.getElementById('class3');
var class4 = document.getElementById('class4');
var class5 = document.getElementById('class5');
var class6 = document.getElementById('class6');
var pvalue = document.getElementById('pvalue');
var cmemo = 0;

charange.oninput = function() {
  if (cmemo === 0) {
    console.log('clicked');
    class2.classList.remove('cake');
    pvalue.innerHTML = '18 €';
    cmemo++;
  }
  else if (cmemo === 1) {
    class4.classList.remove('cake');
    pvalue.innerHTML = '66 €';
    cmemo++;
  }
};

tabrange.oninput = function() {
class3.classList.remove('cake');
pvalue.innerHTML = '48 €';
};

casrange.oninput = function() {
  class5.classList.remove('cake');
  pvalue.innerHTML = '159 €';
};

etarange.oninput = function() {
  class6.classList.remove('cake');
  pvalue.innerHTML = '195 €';
};

