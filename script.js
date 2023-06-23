document.addEventListener('DOMContentLoaded', function() {
  var display = document.getElementById('display');
  var buttons = document.getElementsByClassName('buttons')[0];

  buttons.addEventListener('click', function(event) {
    if (event.target.matches('button')) {
      var button = event.target;
      var value = button.textContent;

      if (value === '=') {
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = 'Error';
        }
      } else if (value === 'C') {
        display.value = '';
      } else {
        display.value += value;
      }
    }
  });
});
