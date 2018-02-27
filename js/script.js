'use strict';
(function () {
  var form = document.querySelector('.form');
  var button = form.querySelector('.form__button-add');
  var text = form.querySelector('.form__input');
  var output = form.querySelector('.form__output');
  var speed = form.querySelector('.form__input-number');
  var checkbox = form.querySelector('.form__input-checkbox');

  button.addEventListener('click', function () {
    var textValue = text.value;
    var speedValue = speed.value;
    output.innerHTML = '<span>'+ textValue +'</span>';
    var span = output.querySelector('span');
    if (checkbox.checked) {
      span.style.animation = 'pass ' + speedValue + 's linear infinite';
    } else {
      span.style.animation = 'pass ' + speedValue + 's linear';
      }
    });
})();
