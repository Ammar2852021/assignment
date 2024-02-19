var input = document.getElementById('text');
var span = document.getElementById('span');

input.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    var inputValue = parseFloat(input.value);
    
    if (isNaN(inputValue)) {
      span.textContent = ""; 
    } else {
      var result = inputValue * 60 * 60;
      span.textContent = result;
    }
  }
});