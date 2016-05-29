'use strict';

describe('ngApp.view1 module', function() {

  beforeEach(module('ngApp.view1'));

  describe('HomeController controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('HomeCtrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});