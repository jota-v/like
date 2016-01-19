'use strict';

function meliLike() {
  var heart = '[data-js="btnLike"]';

  $(heart).on('click', function() {
    $(this).toggleClass('like--on');
  });
}

meliLike();
