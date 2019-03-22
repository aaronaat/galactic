import $ from 'jquery';

import './style.css';
import Age from './galactic';


$(document).ready(function() {
  $('#galactic').submit(function(event) {
    event.preventDefault();

    let age = new Age($('#age').val(), $('#die').val());

    $('#result').append(`<li>Age on Mercury: ${age.me}... ${age.meDie} years left!</li>
          <li>Age on Venus: ${age.ve}... ${age.veDie} years left!</li>
          <li>Age on Mars: ${age.ma}... ${age.maDie} years left!</li>
          <li>Age on Jupiter: ${age.ju}... ${age.juDie} years left!</li>`);

  });
});
