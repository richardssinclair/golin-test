import 'bootstrap';
import './scss/app.scss';
import $ from 'jquery';
// console.log("here")
$('#text').on('input', function(){
  name = $(this).val();

  if (name.length < 1){
    alert("field is required")
  } else {

  }
});
