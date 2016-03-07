(function() {

  var nav;
  
  //
  // Navigation controller
  //
  var Navigation = (function() {

    function up() {
      Velocity(document.body, 'scroll', { offset: '0px'});
    }
    
    function toggle() {
      nav.classList.toggle('active');
    }

    function init() {
      nav = document.getElementById('nav');
      var navButton = document.getElementById('nav-button');
      navButton.addEventListener('click', toggle, false);

      var backToTop = document.getElementById('back-up');
      if (backToTop) backToTop.addEventListener('click', up);
    }

    return {
      init: init
    };

  })();

  Navigation.init();

})();
