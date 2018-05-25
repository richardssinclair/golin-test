import 'bootstrap';
import './scss/app.scss';
import $ from 'jquery';

var formValid = {
  name: false
};

function checkValidation() {
  if (formValid.name) {
    $('#submit-btn').removeAttr('disabled');
  } else {
    $('#submit-btn').attr('disabled', true);
  }
}

function msg(body) {
  $('#name-error').text(body).show();
};

function hide() {
  $('#name-error').hide();
};

$('#nameInput').on('input', function(){
  var name = $(this).val();

  if (name.length < 1){
    msg('This field is required');
    formValid.name = false;
    checkValidation();
  } else {
    hide();
    formValid.name = true;
    checkValidation();
    if (name.length <3 || name.length > 20) {
      msg('must be between 3 and 20 charecters');
      formValid.name = false;
      checkValidation();
    } else {
      hide();
      formValid.name = true;
      checkValidation();
    }
  }
});

function update() {
  var amountNeeded = total - currentTotal;
  $("#amountLeft").text(amountNeeded);
  $("#days").text(daysLeft);
  $("#donors").text(donors);
  var percentage = currentTotal / total * 100;
  $('#progress').css("width", percentage + "%" );

}
var daysLeft = 3;

var total = 600;

var currentTotal = 433;

var donors = 42;

update();

$( "#form" ).submit(function( event ) {

  var amount = parseInt($('#amount').val());

  currentTotal = currentTotal + amount;

  donors = donors +1;

  update();

  if (currentTotal == 600){
    console.log("great you reached your goal");
  } else {
    console.log("you need more money");
  }

  event.preventDefault();
});
