/*global $, document */

(function(){
  'use strict';

  var a = 3,
      b = 2;

  $(document).ready(initialize);

  function initialize(){
    $('div').css('color', 'red');
    $('h2').css('font-size', '50px');
    $('h2').text('Matt');
    $('h2').fadeOut(2000);
    $('#a, #b, #c').addClass('happy');
    $('#c + ul > li').addClass('sad');
    console.log('the dom is now ready');

    $('#red').click(makeRed);
    $('#yellow').click(makeYellow);
    $('#color').click(makeColor);
    $('#fadeOut').click(fadeOut);
    $('#fadeIn').click(fadeIn);
  }
  function makeRed(){
    $('body').css('background-color', 'red');
  }

  function makeYellow(){
    $('body').css('background-color', 'yellow');
  }
  function makeColor(){
    var color = $('#color-value').val();
    $('body').css('background-color', color);
  }

  function fadeOut(){
    var num = $('#fade-number').val() * 1;
    $('#footer').fadeOut(num);
  }

  function fadeIn(){
    var num = $('#fade-number').val() * 1;
    $('#footer').fadeIn(num);
  }



  console.log('the dom is not ready');
  console.log(a, b);
})();

