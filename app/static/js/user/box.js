/*global $, document */

(function(){
  'use strict';

  $(document).ready(function(){
    $('#add-boxes').click(addBoxes);
  });

  function addBoxes(){
    var num = $('#box-num').val() * 1,
        $box,
        i,
        val,
        cls;
    $('#boxes').empty();
    for(i = 0; i < num; i++){
      $box = $('<div>');
      val = (i % 2) ? i * i * i : i * i;
      cls = (i % 2) ? 'odd' : 'even';
      $box.text(val);
      $box.addClass(cls).addClass('box');
      $('#boxes').append($box);
    }
  }

})();
