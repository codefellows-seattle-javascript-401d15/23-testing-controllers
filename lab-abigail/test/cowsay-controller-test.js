'use strict';

const angular = require('angular');
require('angular-mocks');
const cowsay = require('cowsay-browser');


describe('testing CowsayController', function() {
  beforeEach(() => {
    angular.mock.module('cowsayApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.cowsayCtrl = new $controller('CowsayController');
      this.cowsayCtrl.$onInit();
    });
  });

  afterEach(() => this.$rootScope.$apply());


  describe('check for default properties set by CowsayController', () => {
    it('title should be string', () => {
      expect(this.cowsayCtrl.title).toEqual(jasmine.any(String));
      expect(this.cowsayCtrl.title).toEqual('HAPPY COWDAY');
    });
    it('current should contain proper properties', () => {
      expect(this.cowsayCtrl.current).toEqual(jasmine.any(String));
      expect(this.cowsayCtrl.current).toEqual('beavis.zen');
    });
    it('history should should be an array', () => {
      expect(this.cowsayCtrl.history).toEqual(jasmine.any(Array));
    });
  });

  describe('check the methods of CowsayController', () => {
    it('update method functionality', () => {
      let update = this.cowsayCtrl.update('update test');
      expect(update).toContain('update test');
      expect(update).toEqual(jasmine.any(String));
    });
    it('speak method functionality', () => {
      this.cowsayCtrl.speak('speak test');
      expect(this.cowsayCtrl.spoken).toContain('speak test');
      expect(this.cowsayCtrl.spoken).toEqual(jasmine.any(String));
      expect(this.cowsayCtrl.history[0]).toContain('speak test');
      expect(this.cowsayCtrl.history[0]).toEqual(jasmine.any(String));
    });
    it('undo method functionality', () => {
      this.cowsayCtrl.undo();
      expect(this.cowsayCtrl.spoken).toEqual(jasmine.any(String));
      expect(this.cowsayCtrl.history[0]).not.toBeDefined();
    });
  });

});
