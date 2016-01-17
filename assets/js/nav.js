(function() {

  //
  // Navigation controller
  //
  var Navigation = (function() {

    function up() {
      Velocity(document.body, 'scroll', { offset: '0px'});
    }

    function init() {
      // var backToTop = document.querySelector('#to-top');
      // backToTop.addEventListener('click', up);
    }

    return {
      init: init
    };

  })();

  Navigation.init();

})();
