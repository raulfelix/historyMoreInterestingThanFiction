(function() {
  
  //
  // Navigation controller
  //
  var Navigation = (function() {
    
    var
      body,
      trigger,
      modalTrigger;
    
    
    function open() {
      body.classList.add('active');  
    }
    
    function close() {
      body.classList.remove('active'); 
    }
    
    function up() {
      Velocity(body, "scroll", { offset: "0px"});
    }
    
    function init() {
      body = document.querySelector('body');
      trigger = document.querySelector('#nav-open');
      modalTrigger = document.querySelector('#nav-close');
      
      var backToTop = document.querySelector('#to-top');
      
      // todo browser support
      trigger.addEventListener('click', open, false);
      modalTrigger.addEventListener('click', close, false);
      backToTop.addEventListener('click', up, false);
    }
    
    return {
      init: init
    };
    
  })();
  
  Navigation.init();
  
})();