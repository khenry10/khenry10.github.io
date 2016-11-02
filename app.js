'use strict';

(function(){
  angular
  .module("app", [])
  .controller("indexController", indexController)

  function indexController(){
    var vm = this;
    vm.click = function(span){
      console.log(span)
      $('html, body').animate({
        scrollTop: $("."+span).offset().top
      }, 2000);
    }
  };

})();
