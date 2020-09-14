"use strict";

var form = document.getElementById('form');

var validateEmail = function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  var smallWarning = document.getElementById('small-warning');

  if (!validateEmail(e.target.email.value)) {
    smallWarning.classList.add('form__warning--show');
    e.target.email.classList.add('form__input--warning');
  } else {
    smallWarning.classList.remove('form__warning--show');
    e.target.email.classList.remove('form__input--warning');
  }
});