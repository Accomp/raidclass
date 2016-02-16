//
// Component: Sidr
// --------------------------------------------------

function sidrMenu() {
  'use strict';
  var width = $(window).width();
  if (width < 768) {

    $('.c-sidr__toggle').sidr({
      side: 'right'
    });

  }
  else {

    $.sidr('close');

  }
}

// On Load
;(function($, window, document, undefined) {

  'use strict';
  sidrMenu();

})(jQuery, window, document);

// On Resize
$(window).resize(function() {

  'use strict';
  var delay = (function() {
    var timer = 0;
    return function(callback, ms) {

      clearTimeout (timer);
      timer = setTimeout(callback, ms);

    };

  })();

  delay(function() {
    sidrMenu();
  }, 500);

});

