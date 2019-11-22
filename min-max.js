
function श्रेणी_संख्या(न्यूनतम, अधिकतम) {
    var परिणाम = Math.floor(Math.random() * (अधिकतम - न्यूनतम + 1)) + न्यूनतम;
    return परिणाम;
}

// Change these values to test your function
var अंतिम_परिणाम = श्रेणी_संख्या(5, 15);

var शीर्षक = document.getElementsByTagName('h1');

document.getElementById('प्रारंभ').onclick = function() {
  
  for(let शीर्ष of शीर्षक) {
    शीर्ष.innerHTML = श्रेणी_संख्या(5, 15);
  }
  
}

